from fastapi import APIRouter, Depends, HTTPException
from typing import Annotated
from mysql.connector import MySQLConnection
from sqlalchemy.orm import Session
from database import get_db  # Assuming you have a function to get MySQL connection
from models import User  # Replace with your actual User model

users_router = APIRouter()
db_dependency = Annotated[Session, Depends(get_db)]

@users_router.get('/')
async def fetch_all_users( db: db_dependency):
   
        try:
            all_users = db.query(User)
            # db.commit()
            return all_users

        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Failed to get all users: {str(e)}")

        # finally:
        #     cursor.close()

@users_router.get('/{user_id}')
async def fetch_one_user(user_id: int, db: db_dependency):
    try:
        user = db.query(User).filter(User.user_id == user_id).first()
        if user is None:
            raise HTTPException(status_code=404, detail=f'User not found with id: {user_id}')
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"Failed to get user: {str(e)}")