from sqlalchemy import Column, Integer, Float, String, Date, Text, Boolean, ForeignKey
from database import Base
from sqlalchemy.orm import relationship
# from sqlalchemy.ext.declarative import declarative_base

# Base = declarative_base()

# class User(Base):
#     __tablename__ = "users"

    # user_id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    # first_name = Column(String(50), nullable=False)
    # last_name = Column(String(50), nullable=False)
    # date_of_birth = Column(Date, nullable=False)
    # address = Column(Text)
    # phone_number = Column(String(20))
    # email = Column(String(50), unique=True)
    # password = Column(String(50))
    # portfolio_id = Column(Integer, ForeignKey("portfolios.portfolio_id", ondelete="CASCADE"))
    # admin = Column(Boolean, default=False)

    # # Establish a relationship with the Portfolio model
    # portfolio = relationship("Portfolio", back_populates="users")

class User(Base):
    __tablename__ = 'users'
    
    user_id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    # date_of_birth = Column(Date, nullable=False)
    # address = Column(Text)
    # phone_number = Column(String(20))
    # email = Column(String(50), unique=True)
    # password = Column(String(50))
    # admin = Column(Boolean, default=False)
    # portfolio_id = Column(Integer, ForeignKey("portfolios.portfolio_id", ondelete="CASCADE"))
    # assets_id = Column(Integer, ForeignKey('assets.assets_id', ondelete="CASCADE"))
    # assets = relationship("Asset", back_populates="users")
    # debts_id = Column(Integer, ForeignKey('debts.debts_id', ondelete="CASCADE"))
    # debts = relationship("Debt", back_populates="users")
    

class Asset(Base):
    __tablename__ = 'assets'
    
    assets_id = Column(Integer, primary_key=True, index=True)
    bank_accounts = relationship('BankAccount', back_populates='assets')
    investments = relationship('Investment', back_populates='assets')
    properties = relationship('Property', back_populates='assets')
    
    
class BankAccount(Base):
    __tablename__ = 'bank_accounts'
    
    bank_accounts_id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    type = Column(String(50))
    amount = Column(Float)
    assets_id = Column(Integer, ForeignKey('assets.assets_id'))
    assets = relationship('Asset', back_populates='bank_accounts')
    

class Investment(Base):
    __tablename__ = 'investments'
    
    investments_id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    type = Column(String(50))
    amount = Column(Float)
    assets_id = Column(Integer, ForeignKey('assets.assets_id'))
    assets = relationship('Asset', back_populates='investments')
    

class Property(Base):
    __tablename__ = 'properties'
    
    properties_id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    type = Column(String(50))
    amount = Column(Float)
    assets_id = Column(Integer, ForeignKey('assets.assets_id'))
    assets = relationship('Asset', back_populates='properties')
    

class Debt(Base):
    __tablename__ = 'debts'
    
    debts_id = Column(Integer, primary_key=True, index=True)
    bills = relationship('Bill', back_populates='debts')
    loans = relationship('Loan', back_populates='debts')
    credits = relationship('Credit', back_populates='debts')
    expenses = relationship('Expense', back_populates='debts')
    

class Bill(Base):
    __tablename__ = 'bills'
    
    bills_id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    type = Column(String(50))
    amount = Column(Float)
    debts_id = Column(Integer, ForeignKey('debts.debts_id'))
    debts = relationship('Debt', back_populates='bills')
 
class Loan(Base):
    __tablename__ = 'loans'
    
    loans_id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    type = Column(String(50))
    amount = Column(Float)
    debts_id = Column(Integer, ForeignKey('debts.debts_id'))
    debts = relationship('Debt', back_populates='loans')
 
class Credit(Base):
    __tablename__ = 'credits'
    
    credits_id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    type = Column(String(50))
    amount = Column(Float)
    debts_id = Column(Integer, ForeignKey('debts.debts_id'))
    debts = relationship('Debt', back_populates='credits')
 
class Expense(Base):
    __tablename__ = 'expenses'
    
    expenses_id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    type = Column(String(50))
    amount = Column(Float)
    debts_id = Column(Integer, ForeignKey('debts.debts_id'))
    debts = relationship('Debt', back_populates='expenses')
 