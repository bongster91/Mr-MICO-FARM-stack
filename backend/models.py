from sqlalchemy import Column, Integer, Float, String, Date, Text, Boolean, ForeignKey
from database import Base
from sqlalchemy.orm import relationship
# from sqlalchemy.ext.declarative import declarative_base

# Base = declarative_base()

# class User(Base):
#     __tablename__ = "users"

#     user_id = Column(Integer, primary_key=True, autoincrement=True, index=True)
#     first_name = Column(String(50), nullable=False)
#     last_name = Column(String(50), nullable=False)
#     date_of_birth = Column(Date, nullable=False)
#     address = Column(Text)
#     phone_number = Column(String(20))
#     email = Column(String(50), unique=True)
#     password = Column(String(50))
#     portfolio_id = Column(Integer, ForeignKey("portfolios.portfolio_id", ondelete="CASCADE"))
#     admin = Column(Boolean, default=False)

#     # Establish a relationship with the Portfolio model
#     portfolio = relationship("Portfolio", back_populates="users")


# class Bank_Account(Base):
#     __tablename__ = 'bank_accounts'
    
#     bank_account_id = Column(Integer, primary_key=True, autoincrement=True, index=True)
#     name = Column(String(50), nullable=False)
#     type = Column(String(50), nullable=False)
#     amount = Column(Float, nullable=False)
#     assets_id = Column(Integer, ForeignKey('assets.assets_id'))
#     assets = relationship('Assets')

# from sqlalchemy import Boolean, Column, Integer, String
# from database import Base

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True)
    

class Post(Base):
    __tablename__ = 'posts'
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(50))
    content = Column(String(100))
    user_id = Column(Integer)
    
class BankAccount(Base):
    __tablename__ = 'bank_accounts'
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    type = Column(String(50))
    amount = Column(Float)