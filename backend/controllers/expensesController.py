from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Annotated
import models
from database import get_db

expenses_router = APIRouter()
db_dependency = Annotated[Session, Depends(get_db)]

class ExpnseBase(BaseModel):
    name: str
    type: str
    amount: float
    debt_id: int
    
@expenses_router.get('/', status_code=status.HTTP_200_OK, tags=['expenses'])
async def get_all_expenses(db: db_dependency):
    expenses = db.query(models.Expense).all()
    if expenses is None:
        raise HTTPException(status_code=404, detail='There are no expenses')
    return expenses   
    
    
@expenses_router.get('/{expense_id}', status_code=status.HTTP_200_OK, tags=['expenses'])
async def get_one_expense(expense_id: int, db: db_dependency):
    expense = db.query(models.Expense).filter(models.Expense.id == expense_id).first()
    if expense is None:
        raise HTTPException(status_code=404, detail='expense was not found')
    return expense


@expenses_router.post('/', status_code=status.HTTP_201_CREATED, tags=['expenses'])
async def create_expense(expense: ExpnseBase, db: db_dependency):
    db_expense = models.Expense(**expense.model_dump())
    db.add(db_expense)
    db.commit()
    return f'Created expense: {db_expense}'
    

@expenses_router.put('/{expense_id}', status_code=status.HTTP_200_OK, tags=['expenses'])
async def update_expense(expense_id: int, updated_expense: ExpnseBase, db: db_dependency):
    db_expense = db.query(models.Expense).filter(models.Expense.id == expense_id).first()
    if db_expense is None:
        raise HTTPException(status_code=404, detail='expense was not found')
    
    for field, value in updated_expense.dict().items():
        setattr(db_expense, field, value)
        
    db.commit()
    db.refresh(db_expense)
    
    return db_expense
    
    
@expenses_router.delete('/{expense_id}', status_code=status.HTTP_200_OK, tags=['expenses'])
async def delete_expense(expense_id: int, db: db_dependency):
    db_expense = db.query(models.Expense).filter(models.Expense.id == expense_id).first()
    if db_expense is None:
        raise HTTPException(status_code=404, detail='expense was not found')
    db.delete(db_expense)
    db.commit()
    return f'Deleted expense with id: {expense_id}'
    
    