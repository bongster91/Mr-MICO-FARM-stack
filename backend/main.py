from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import models
from database import engine, SessionLocal
from typing import Annotated
from sqlalchemy.orm import Session

from controllers.usersController import users_router
from controllers.assetsController import assets_router
from controllers.bankAccountsController import bank_accounts_router
from controllers.investmentsController import investments_router
from controllers.propertiesController import properties_router
from controllers.debtsController import debts_router
from controllers.billsController import bills_router
from controllers.loansController import loans_router
from controllers.creditsController import credits_router
from controllers.expensesController import expenses_router

origins = ['http://localhost:3000']

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

@app.get("/")
def home():
    return {"message": "Mr. MICO Backend"}


app.include_router(users_router, prefix='/users')
app.include_router(assets_router, prefix='/assets')
app.include_router(bank_accounts_router, prefix='/bank_accounts')
app.include_router(investments_router, prefix='/investments')
app.include_router(properties_router, prefix='/properties')
app.include_router(debts_router, prefix='/debts')
app.include_router(bills_router, prefix='/bills')
app.include_router(loans_router, prefix='/loans')
app.include_router(credits_router, prefix='/credits')
app.include_router(expenses_router, prefix='/expenses')


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host='localhost',
        reload=True,
        port=8000,
    )