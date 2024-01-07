from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session
from typing import List, Annotated
from queries.usersQueries import fetch_all_users, fetch_one_user
from models import User
from database import get_db

users_router = APIRouter()
db_dependency = Annotated[Session, Depends(get_db)]

@users_router.get('/', response_model=List[dict], status_code=status.HTTP_200_OK)
async def get_all_users():
    try:
        all_users = await fetch_all_users(db_dependency)
        
        if all_users:
            return {"Success": True, "all_users": all_users}
        else:
            raise HTTPException(status_code=400, detail=f'Failed to get all users')
        
    except Exception as e:
        raise HTTPException(status_code=400, detail=f'Resources not found: {str(e)}')


@users_router.get('/{user_id}', response_model=List[dict], status_code=status.HTTP_200_OK)
async def get_one_user(user_id, db: db_dependency):
    try:
        user = db.query(User).filter(User.user_id == user_id).first()
        if user is None:
            raise HTTPException(status_code=404, detail=f'User not found with id: {user_id}')
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"Failed to get user: {str(e)}")