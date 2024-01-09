from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Annotated
import models
from database import get_db

bills_router = APIRouter()
db_dependency = Annotated[Session, Depends(get_db)]

class BillBase(BaseModel):
    name: str
    type: str
    amount: float
    debt_id: int
    
@bills_router.get('/', status_code=status.HTTP_200_OK, tags=['bills'])
async def get_all_bills(db: db_dependency):
    bills = db.query(models.Bill).all()
    if bills is None:
        raise HTTPException(status_code=404, detail='There are no bills')
    return bills   
    
    
@bills_router.get('/{bill_id}', status_code=status.HTTP_200_OK, tags=['bills'])
async def get_one_bill(bill_id: int, db: db_dependency):
    bill = db.query(models.Bill).filter(models.Bill.id == bill_id).first()
    if bill is None:
        raise HTTPException(status_code=404, detail='bill was not found')
    return bill


@bills_router.post('/', status_code=status.HTTP_201_CREATED, tags=['bills'])
async def create_bill(bill: BillBase, db: db_dependency):
    db_bill = models.Bill(**bill.model_dump())
    db.add(db_bill)
    db.commit()
    return f'Created bill: {db_bill}'
    

@bills_router.put('/{bill_id}', status_code=status.HTTP_200_OK, tags=['bills'])
async def update_bill(bill_id: int, updated_bill: BillBase, db: db_dependency):
    db_bill = db.query(models.Bill).filter(models.Bill.id == bill_id).first()
    if db_bill is None:
        raise HTTPException(status_code=404, detail='bill was not found')
    
    for field, value in updated_bill.dict().items():
        setattr(db_bill, field, value)
        
    db.commit()
    db.refresh(db_bill)
    
    return db_bill
    
    
@bills_router.delete('/{bill_id}', status_code=status.HTTP_200_OK, tags=['bills'])
async def delete_bill(bill_id: int, db: db_dependency):
    db_bill = db.query(models.Bill).filter(models.Bill.id == bill_id).first()
    if db_bill is None:
        raise HTTPException(status_code=404, detail='bill was not found')
    db.delete(db_bill)
    db.commit()
    return f'Deleted bill with id: {bill_id}'
    
    