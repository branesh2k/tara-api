import stat
from fastapi import Depends, FastAPI, HTTPException,status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import tara_api.models as models,tara_api.schemas as schemas
from tara_db.database import engine,SessionLocal
from typing import List

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,   
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db= SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post('/vehicle',status_code=status.HTTP_201_CREATED)
def create_vehicle(vehicle:schemas.VehicleCreate,db: Session = Depends(get_db)):
    db_vehicle = models.Vehicle(**vehicle.model_dump())
    db.add(db_vehicle)
    db.commit()
    db.refresh(db_vehicle)
    return db_vehicle

@app.get('/vehicles',response_model= List[schemas.Vehicle],status_code=status.HTTP_200_OK)
def get_all_vehicles(db: Session = Depends(get_db)):
    all_vehicles = db.query(models.Vehicle).all()
    return all_vehicles

@app.get('/vehicle/{vehicle_id}', response_model=schemas.Vehicle, status_code=status.HTTP_200_OK)
def get_vehicle(vehicle_id: str, db: Session=Depends(get_db)):
    vehicle = db.query(models.Vehicle).get(vehicle_id)

    if not vehicle:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"vehicle with id = {vehicle_id} NOT found")
    return vehicle

@app.put('/vehicle/{vehicle_id}' ,response_model=schemas.Vehicle, status_code=status.HTTP_202_ACCEPTED)
def update_vehicle(vehicle_id: str,vehicle_input: schemas.VehicleUpdate,db: Session=Depends(get_db)):
    vehicle = db.query(models.Vehicle).get(vehicle_id)
    if not vehicle:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"vehicle with id = {vehicle_id} NOT found" )
    
    for key,value in vehicle_input.model_dump(exclude_unset=True).items():
        setattr(vehicle,key,value)
    db.commit()
    db.refresh(vehicle)
    return vehicle

@app.delete('/vehicle/{vehicle_id}', status_code=status.HTTP_202_ACCEPTED)
def delete_vehicle(vehicle_id: str,db: Session=Depends(get_db)):
    vehicle = db.query(models.Vehicle).get(vehicle_id)
    if not vehicle:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"vehicle with id = {vehicle_id} NOT found" )
    
    db.delete(vehicle)
    db.commit()
    return {"detail":f"vehicle with id = {vehicle_id} Deleted"}