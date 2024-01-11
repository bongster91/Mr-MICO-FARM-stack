from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Annotated
import models
from database import get_db

loans_router = APIRouter()
db_dependency = Annotated[Session, Depends(get_db)]

class LoanBase(BaseModel):
    name: str
    type: str
    amount: float
    debts_id: int
    
@loans_router.get('/', status_code=status.HTTP_200_OK, tags=['loans'])
async def get_all_loans(db: db_dependency):
    loans = db.query(models.Loan).all()
    if loans is None:
        raise HTTPException(status_code=404, detail='There are no loans')
    return loans   
    
    
@loans_router.get('/{loan_id}', status_code=status.HTTP_200_OK, tags=['loans'])
async def get_one_loan(loan_id: int, db: db_dependency):
    loan = db.query(models.Loan).filter(models.Loan.id == loan_id).first()
    if loan is None:
        raise HTTPException(status_code=404, detail='loan was not found')
    return loan


@loans_router.post('/', status_code=status.HTTP_201_CREATED, tags=['loans'])
async def create_loan(loan: LoanBase, db: db_dependency):
    db_loan = models.Loan(**loan.model_dump())
    db.add(db_loan)
    db.commit()
    return f'Created loan: {db_loan}'
    

@loans_router.put('/{loan_id}', status_code=status.HTTP_200_OK, tags=['loans'])
async def update_loan(loan_id: int, updated_loan: LoanBase, db: db_dependency):
    db_loan = db.query(models.Loan).filter(models.Loan.id == loan_id).first()
    if db_loan is None:
        raise HTTPException(status_code=404, detail='loan was not found')
    
    for field, value in updated_loan.dict().items():
        setattr(db_loan, field, value)
        
    db.commit()
    db.refresh(db_loan)
    
    return db_loan
    
    
@loans_router.delete('/{loan_id}', status_code=status.HTTP_200_OK, tags=['loans'])
async def delete_loan(loan_id: int, db: db_dependency):
    db_loan = db.query(models.Loan).filter(models.Loan.id == loan_id).first()
    if db_loan is None:
        raise HTTPException(status_code=404, detail='loan was not found')
    db.delete(db_loan)
    db.commit()
    return f'Deleted loan with id: {loan_id}'
    
    