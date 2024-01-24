from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session, joinedload
from pydantic import BaseModel
from typing import Annotated
import models
from database import get_db

assets_router = APIRouter()
db_dependency = Annotated[Session, Depends(get_db)]

class AssetBase(BaseModel):
    bank_accounts: list
    investments: list
    properties: list
    

@assets_router.get('/', status_code=status.HTTP_200_OK, tags=['assets'])
async def get_all_assets(db: db_dependency):
    try:
        assets = db.query(models.Asset).options(
            joinedload(models.Asset.bank_accounts),
            joinedload(models.Asset.investments),
            joinedload(models.Asset.properties)
        ).all()

        if not assets:
            raise HTTPException(status_code=404, detail='No assets found')

        return assets

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")


@assets_router.get('/{assets_id}', status_code=status.HTTP_200_OK, tags=['assets'])
async def get_one_bank_account(assets_id: int, db: db_dependency):
    asset = db.query(models.Asset).options(
            joinedload(models.Asset.bank_accounts),
            joinedload(models.Asset.investments),
            joinedload(models.Asset.properties)
        ).get(assets_id)
    if asset is None:
        raise HTTPException(status_code=404, detail='Assets was not found')
    return asset


@assets_router.post('/', status_code=status.HTTP_200_OK, tags=['assets'])
async def create_assets(asset: AssetBase, db: db_dependency, data: dict):
    try:
        asset_data = data.get("asset", {})
        asset = models.Asset(**asset_data)
        db.add(asset)
        db.commit()
        db.refresh(asset)

        # Create related BankAccounts
        bank_accounts_data = data.get("bank_accounts", [])
        for bank_account_data in bank_accounts_data:
            bank_account_data["assets_id"] = asset.id
            bank_account = models.BankAccount(**bank_account_data)
            db.add(bank_account)

        # Create related Investments
        investments_data = data.get("investments", [])
        for investment_data in investments_data:
            investment_data["assets_id"] = asset.id
            investment = models.Investment(**investment_data)
            db.add(investment)

        # Create related Properties
        properties_data = data.get("properties", [])
        for property_data in properties_data:
            property_data["assets_id"] = asset.id
            asset_property = models.Property(**property_data)
            db.add(asset_property)

        db.commit()
        db.refresh(asset)

        return asset

    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")