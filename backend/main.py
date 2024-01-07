from typing import Union
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
# from queries.users import fetch_all_users
from controllers.usersController import users_router as users_router
from database import get_db, engine, SessionLocal
from sqlalchemy.orm import Session
from typing import Annotated
import models

origins = ['https://localhost:3000']

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db_dependency = Annotated[Session, Depends(get_db)]
models.Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {"message": "Mr. MICO Backend"}

app.include_router(users_router, prefix='/users')

# @app.get('/api/bank_accounts', response_model=Bank_Accounts)
# async def get_bank_accounts():
#     response = await fetch_one_bank_account()
#     if response:
#         return response
#     raise HTTPException(404, f'There is no bank account')

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host='localhost',
        reload=True,
        port=8000,
    )