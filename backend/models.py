from sqlalchemy import Column, Integer, Float, String, Date, Text, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    date_of_birth = Column(Date, nullable=False)
    address = Column(Text)
    phone_number = Column(String(20))
    email = Column(String(50), unique=True)
    password = Column(String(50))
    # portfolio_id = Column(Integer, ForeignKey("portfolios.portfolio_id", ondelete="CASCADE"))
    admin = Column(Boolean, default=False)

    # Establish a relationship with the Portfolio model
    # portfolio = relationship("Portfolio", back_populates="users")


# class Bank_Account(Base):
#     __tablename__ == 'bank_accounts'
    
#     name = Column(String(50), nullable=False)
#     type = Column(String(50), nullable=False)
#     amount = Column(Float, nullable=False)
#     assets_id = Column(Integer, ForeignKey('assets.assets_id'))
#     assets = relationship('Assets')