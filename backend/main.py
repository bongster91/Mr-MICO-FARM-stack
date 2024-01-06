from typing import Union
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
# from queries.users import fetch_all_users
from controllers.users import router as users_router

origins = ['https://localhost:3000']

app = FastAPI()

# from database import (
#     fetch_one_bank_account
# )

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users_router, prefix=users)

@app.get("/")
def home():
    return {"message": "Mr. MICO Backend"}


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