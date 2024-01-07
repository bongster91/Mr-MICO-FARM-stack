from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Annotated
# from queries.usersQueries import fetch_all_users, fetch_one_user
import models
from database import get_db

users_router = APIRouter()
db_dependency = Annotated[Session, Depends(get_db)]

class UserBase(BaseModel):
    username: str
   
   
@users_router.post('/', status_code=status.HTTP_201_CREATED, tags=['users'])
async def create_user(user: UserBase, db: db_dependency):
    db_user = models.User(**user.model_dump())
    db.add(db_user)
    db.commit()
    
@users_router.get('/{user_id}', status_code=status.HTTP_200_OK, tags=['users'])
async def read_user(user_id: int, db: db_dependency):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if user is None:
        raise Exception
    return user

# @users_router.get('/', response_model=List[dict], status_code=status.HTTP_200_OK)
# async def get_all_users():
#     try:
#         all_users = await fetch_all_users(db_dependency)
        
#         if all_users:
#             return {"Success": True, "all_users": all_users}
#         else:
#             raise HTTPException(status_code=400, detail=f'Failed to get all users')
        
#     except Exception as e:
#         raise HTTPException(status_code=400, detail=f'Resources not found: {str(e)}')


# @users_router.get('/{user_id}', response_model=List[dict], status_code=status.HTTP_200_OK)
# async def get_one_user(user_id, db: db_dependency):
#     try:
#         user = db.query(User).filter(User.user_id == user_id).first()
#         if user is None:
#             raise HTTPException(status_code=404, detail=f'User not found with id: {user_id}')
#     except Exception as e:
#         raise HTTPException(status_code=404, detail=f"Failed to get user: {str(e)}")
    

# @users_router.post('/', response_model=List[dict] , status_code=status.HTTP_201_CREATED)
# async def create_user(user, db: db_dependency):
#     try:
#         db_user = User(**user.dict())
#         db.add(db_user)
#         db.commit()
#     except Exception as e:
#         raise HTTPException(status_code=404, detail=f"Failed to create user: {str(e)}")