from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Annotated
import models
from database import get_db

investments_router = APIRouter()
db_dependency = Annotated[Session, Depends(get_db)]

class InvestmentBase(BaseModel):
    name: str
    type: str
    amount: float
    
@investments_router.get('/', status_code=status.HTTP_200_OK, tags=['investments'])
async def get_all_investments(db: db_dependency):
    investments = db.query(models.Investment).all()
    if investments is None:
        raise HTTPException(status_code=404, detail='There are no investments')
    return investments   
    
    
@investments_router.get('/{investment_id}', status_code=status.HTTP_200_OK, tags=['investments'])
async def get_one_investment(investment_id: int, db: db_dependency):
    investment = db.query(models.Investment).filter(models.Investment.id == investment_id).first()
    if investment is None:
        raise HTTPException(status_code=404, detail='Investment was not found')
    return investment


@investments_router.post('/', status_code=status.HTTP_201_CREATED, tags=['investments'])
async def create_investment(investment: InvestmentBase, db: db_dependency):
    db_investment = models.Investment(**investment.model_dump())
    db.add(db_investment)
    db.commit()
    return f'Created investment: {db_investment}'
    

@investments_router.put('/{investment_id}', status_code=status.HTTP_200_OK, tags=['investments'])
async def update_investment(invesetment_id: int, updated_investment: InvestmentBase, db: db_dependency):
    db_investment = db.query(models.BankAccount).filter(models.BankAccount.id == invesetment_id).first()
    if db_investment is None:
        raise HTTPException(status_code=404, detail='Investment was not found')
    
    for field, value in updated_investment.dict().items():
        setattr(db_investment, field, value)
        
    db.commit()
    db.refresh(db_investment)
    
    return db_investment
    
    
@investments_router.delete('/{investment_id}', status_code=status.HTTP_200_OK, tags=['investments'])
async def delete_investment(investment_id: int, db: db_dependency):
    db_investment = db.query(models.Investment).filter(models.Investment.id == investment_id).first()
    if db_investment is None:
        raise HTTPException(status_code=404, detail='Investment was not found')
    db.delete(db_investment)
    db.commit()
    return f'Deleted investment with id: {investment_id}'
    
    