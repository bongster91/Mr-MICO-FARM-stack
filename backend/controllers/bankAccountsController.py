from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Annotated
import models
from database import get_db

bank_accounts_router = APIRouter()
db_dependency = Annotated[Session, Depends(get_db)]

class BankAccountBase(BaseModel):
    name: str
    type: str
    amount: float
    assets_id: int
    
@bank_accounts_router.get('/', status_code=status.HTTP_200_OK, tags=['bank_accounts'])
async def get_all_bank_accounts(db: db_dependency):
    bank_accounts = db.query(models.BankAccount).all()
    if bank_accounts is None:
        raise HTTPException(status_code=404, detail='There are no bank accounts')
    return bank_accounts   
    
    
@bank_accounts_router.get('/{bank_account_id}', status_code=status.HTTP_200_OK, tags=['bank_accounts'])
async def get_one_bank_account(bank_account_id: int, db: db_dependency):
    bank_account = db.query(models.BankAccount).filter(models.BankAccount.bank_accounts_id == bank_account_id).first()
    if bank_account is None:
        raise HTTPException(status_code=404, detail='Bank Account was not found')
    return bank_account


@bank_accounts_router.post('/', status_code=status.HTTP_200_OK, tags=['bank_accounts'])
async def create_bank_account(bank_account: BankAccountBase, db: db_dependency):
    db_bank_account = models.BankAccount(**bank_account.model_dump())
    db.add(db_bank_account)
    db.commit()
    return f'Created bank account: {db_bank_account}'
    

@bank_accounts_router.put('/{bank_account_id}', status_code=status.HTTP_200_OK, tags=['bank_accounts'])
async def update_bank_account(bank_account_id: int, updated_bank_account: BankAccountBase, db: db_dependency):
    db_bank_account = db.query(models.BankAccount).filter(models.BankAccount.bank_accounts_id == bank_account_id).first()
    if db_bank_account is None:
        raise HTTPException(status_code=404, detail='Bank Account was not found')
    
    for field, value in updated_bank_account.dict().items():
        setattr(db_bank_account, field, value)
        
    db.commit()
    db.refresh(db_bank_account)
    
    return db_bank_account
    
    
@bank_accounts_router.delete('/{bank_account_id}', status_code=status.HTTP_200_OK, tags=['bank_accounts'])
async def delete_bank_account(bank_account_id: int, db: db_dependency):
    db_bank_account = db.query(models.BankAccount).filter(models.BankAccount.bank_accounts_id == bank_account_id).first()
    if db_bank_account is None:
        raise HTTPException(status_code=404, detail='Bank Account was not found')
    db.delete(db_bank_account)
    db.commit()
    return f'Deleted bank account with id: {bank_account_id}'
    
    