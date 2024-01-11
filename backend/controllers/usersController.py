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
    first_name: str
    last_name: str
    # date_of_birth: str
    # address: str
    # phone_number: str
    # email: str
    # password: str
    # admin: bool
    assets_id: int
    debts_id: int
   
   
@users_router.get('/', response_model=List[UserBase], status_code=status.HTTP_200_OK, tags=['users'])
async def get_all_users(db: db_dependency):
    users = db.query(models.User).all()
    if users is None:
        raise HTTPException(status_code=404, detail='There are no users')
    return users   
    
    
@users_router.get('/{user_id}', status_code=status.HTTP_200_OK, tags=['users'])
async def read_user(user_id: int, db: db_dependency):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if user is None:
        raise Exception
    return user


@users_router.post('/', status_code=status.HTTP_201_CREATED, tags=['users'])
async def create_user(user: UserBase, db: db_dependency):
    db_user = models.User(**user.model_dump())
    db.add(db_user)
    db.commit()
    return f'Created user: {db_user}'


@users_router.put('/{user_id}', status_code=status.HTTP_200_OK, tags=['users'])
async def update_user(user_id: int, updated_user: UserBase, db: db_dependency):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail='User was not found')
    
    for field, value in updated_user.dict().items():
        setattr(db_user, field, value)
        
    db.commit()
    db.refresh(db_user)
    
    return db_user
    
    
@users_router.delete('/{user_id}', status_code=status.HTTP_200_OK, tags=['users'])
async def delete_user(user_id: int, db: db_dependency):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail='User was not found')
    db.delete(db_user)
    db.commit()
    return f'Deleted user with id: {user_id}'
    
    