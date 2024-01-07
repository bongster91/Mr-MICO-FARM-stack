# from typing import Union
# from fastapi import FastAPI, HTTPException, Depends
# from fastapi.middleware.cors import CORSMiddleware
# # from queries.users import fetch_all_users
from controllers.usersController import users_router
from controllers.bankAccountsController import bank_accounts_router
# from database import get_db, engine, Session
# from sqlalchemy.orm import Session
# from typing import Annotated
# import models
# from models import Bank_Account


# # async def fetch_one_user(user_id: int, db: db_dependency):
# #     try:
# #         user = db.query(User).filter(User.user_id == user_id).first()
# #         if user is None:
# #             raise HTTPException(status_code=404, detail=f'User not found with id: {user_id}')
# #     except Exception as e:
# #         raise HTTPException(status_code=404, detail=f"Failed to get user: {str(e)}")
# async def fetch_one_bank_account(bank_account_id: int, db: db_dependency):
#     try:
#         print(db.query(Bank_Account))
#         account = db.query(Bank_Account).filter(Bank_Account.bank_account_id == bank_account_id).one()
#         return account
#     except Exception as e:
#         raise HTTPException(status_code=404, detail=f"Failed to get account: {str(e)}")

# @app.get('/api/bank_accounts/{bank_account_id}')
# async def get_bank_accounts(bank_account_id):
#     response = await fetch_one_bank_account(bank_account_id, db_dependency)
#     if response:
#         return response
#     raise HTTPException(404, f'There is no bank account')



import os
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import models
from database import engine, SessionLocal
from typing import Annotated
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session, Query
from sqlalchemy.ext.declarative import declarative_base

# def get_db():
#     db = Session()
#     try:
#         yield db
#     finally:
#         db.close()
        

origins = ['https://localhost:3000']

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# db_dependency = Annotated[Session, Depends(get_db)]

class PostBase(BaseModel):
    title: str
    content: str
    user_id: int
    
class UserBase(BaseModel):
    username: str
    

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

@app.get("/")
def home():
    return {"message": "Mr. MICO Backend"}

app.include_router(users_router, prefix='/users')
app.include_router(bank_accounts_router, prefix='/bank_accounts')
# @app.post('/users/', status_code=status.HTTP_201_CREATED)
# async def create_user(user: UserBase, db: db_dependency):
#     db_user = models.User(**user.model_dump())
#     db.add(db_user)
#     db.commit()
    
# @app.get('/users/{user_id}', status_code=status.HTTP_200_OK)
# async def read_user(user_id: int, db: db_dependency):
#     user = db.query(models.User).filter(models.User.id == user_id).first()
#     if user is None:
#         raise Exception
#     return user

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host='localhost',
        reload=True,
        port=8000,
    )