from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Annotated
import models
from database import get_db

credits_router = APIRouter()
db_dependency = Annotated[Session, Depends(get_db)]

class CreditBase(BaseModel):
    name: str
    type: str
    amount: float
    debts_id: int
    
@credits_router.get('/', status_code=status.HTTP_200_OK, tags=['credits'])
async def get_all_credits(db: db_dependency):
    credits = db.query(models.Credit).all()
    if credits is None:
        raise HTTPException(status_code=404, detail='There are no credits')
    return credits   
    
    
@credits_router.get('/{credit_id}', status_code=status.HTTP_200_OK, tags=['credits'])
async def get_one_credit(credit_id: int, db: db_dependency):
    credit = db.query(models.Credit).filter(models.Credit.id == credit_id).first()
    if credit is None:
        raise HTTPException(status_code=404, detail='credit was not found')
    return credit


@credits_router.post('/', status_code=status.HTTP_201_CREATED, tags=['credits'])
async def create_credit(credit: CreditBase, db: db_dependency):
    db_credit = models.Credit(**credit.model_dump())
    db.add(db_credit)
    db.commit()
    return f'Created credit: {db_credit}'
    

@credits_router.put('/{credit_id}', status_code=status.HTTP_200_OK, tags=['credits'])
async def update_credit(credit_id: int, updated_credit: CreditBase, db: db_dependency):
    db_credit = db.query(models.Credit).filter(models.Credit.id == credit_id).first()
    if db_credit is None:
        raise HTTPException(status_code=404, detail='credit was not found')
    
    for field, value in updated_credit.dict().items():
        setattr(db_credit, field, value)
        
    db.commit()
    db.refresh(db_credit)
    
    return db_credit
    
    
@credits_router.delete('/{credit_id}', status_code=status.HTTP_200_OK, tags=['credits'])
async def delete_credit(credit_id: int, db: db_dependency):
    db_credit = db.query(models.Credit).filter(models.Credit.id == credit_id).first()
    if db_credit is None:
        raise HTTPException(status_code=404, detail='credit was not found')
    db.delete(db_credit)
    db.commit()
    return f'Deleted credit with id: {credit_id}'
    
    