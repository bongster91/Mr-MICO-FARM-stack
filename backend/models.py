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

class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True)
    
    
# class Asset(Base):
#     __tablename__ = 'assets'
    
#     id = Column(Integer, primary_key=True, index=True)
#     bank_accounts = relationship('BankAccount', back_populates='asset')
#     investments = relationship('Investment', back_populates='asset')
#     properties = relationship('Property', back_populates='asset')
    
    
class BankAccount(Base):
    __tablename__ = 'bank_accounts'
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    type = Column(String(50))
    amount = Column(Float)
    # asset_id = Column(Integer, ForeignKey('assets.id'))
    # asset = relationship('Asset', back_populates='bank_accounts')
    

class Investment(Base):
    __tablename__ = 'investments'
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    type = Column(String(50))
    amount = Column(Float)
    # asset_id = Column(Integer, ForeignKey('assets.id'))
    # asset = relationship('Asset', back_populates='investments')
    

class Property(Base):
    __tablename__ = 'properties'
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    type = Column(String(50))
    amount = Column(Float)
    # asset_id = Column(Integer, ForeignKey('assets.id'))
    # asset = relationship('Asset', back_populates='properties')
    
