from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session, joinedload
from pydantic import BaseModel
from typing import Annotated
import models
from database import get_db

debts_router = APIRouter()
db_dependency = Annotated[Session, Depends(get_db)]

class DebtsBase(BaseModel):
    bills: list
    loans: list
    credits: list
    expenses: list
    

@debts_router.get('/', status_code=status.HTTP_200_OK, tags=['debts'])
async def get_all_debts(db: db_dependency):
    try:
        debts = db.query(models.Debt).options(
            joinedload(models.Debt.bills),
            joinedload(models.Debt.loans),
            joinedload(models.Debt.credits),
            joinedload(models.Debt.expenses)
        ).all()

        if not debts:
            raise HTTPException(status_code=404, detail='No debts found')

        return debts

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")


@debts_router.post('/', status_code=status.HTTP_201_CREATED, tags=['debts'])
async def create_debts(debt: DebtsBase, db: db_dependency, data: dict):
    try:
        debt_data = data.get("debt", {})
        debt = models.Debt(**debt_data)
        db.add(debt)
        db.commit()
        db.refresh(debt)

        # Create related BankAccounts
        bills_data = data.get("bills", [])
        for bills_data in bills_data:
            bills_data["debt_id"] = debt.id
            bill = models.Bill(**bills_data)
            db.add(bill)

        # Create related Investments
        loans_data = data.get("loans", [])
        for loan_data in loans_data:
            loan["debt_id"] = debt.id
            loan = models.Loan(**loan_data)
            db.add(loan)

        # Create related Properties
        credits_data = data.get("credits", [])
        for credit_data in credits_data:
            credit_data["debt_id"] = debt.id
            credit = models.Credit(**credit_data)
            db.add(credit)
            
        expenses_data = data.get("expenses", [])
        for expense_data in expenses_data:
            expense_data["debt_id"] = debt.id
            expense = models.Expense(**expense_data)
            db.add(expense)

        db.commit()
        db.refresh(debt)

        return debt

    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")