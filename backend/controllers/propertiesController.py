from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Annotated
import models
from database import get_db

properties_router = APIRouter()
db_dependency = Annotated[Session, Depends(get_db)]

class PropertyBase(BaseModel):
    name: str
    type: str
    amount: float
    assets_id: int
    
@properties_router.get('/', status_code=status.HTTP_200_OK, tags=['properties'])
async def get_all_properties(db: db_dependency):
    properties = db.query(models.Property).all()
    if properties is None:
        raise HTTPException(status_code=404, detail='There are no properties')
    return properties   
    
    
@properties_router.get('/{property_id}', status_code=status.HTTP_200_OK, tags=['properties'])
async def get_one_property(property_id: int, db: db_dependency):
    property = db.query(models.Property).filter(models.Property.id == property_id).first()
    if property is None:
        raise HTTPException(status_code=404, detail='Property was not found')
    return property


@properties_router.post('/', status_code=status.HTTP_201_CREATED, tags=['properties'])
async def create_property(property: PropertyBase, db: db_dependency):
    db_property = models.Property(**property.model_dump())
    db.add(db_property)
    db.commit()
    return f'Created property: {db_property}'
    

@properties_router.put('/{property_id}', status_code=status.HTTP_200_OK, tags=['properties'])
async def update_property(property_id: int, updated_property: PropertyBase, db: db_dependency):
    db_property = db.query(models.Property).filter(models.Property.id == property_id).first()
    if db_property is None:
        raise HTTPException(status_code=404, detail='Property was not found')
    
    for field, value in updated_property.dict().items():
        setattr(db_property, field, value)
        
    db.commit()
    db.refresh(db_property)
    
    return db_property
    
    
@properties_router.delete('/{property_id}', status_code=status.HTTP_200_OK, tags=['properties'])
async def delete_property(property_id: int, db: db_dependency):
    db_property = db.query(models.Property).filter(models.Property.id == property_id).first()
    if db_property is None:
        raise HTTPException(status_code=404, detail='Property was not found')
    db.delete(db_property)
    db.commit()
    return f'Deleted property with id: {property_id}'
    
    