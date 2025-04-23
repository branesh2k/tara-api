from pydantic import BaseModel
from typing import Optional
from datetime import date as dt_date,time

class VehicleBase(BaseModel):
    vehicle_no : str
    date: dt_date
    from_time: time
    to_time: time
    start_time: time
    end_time: time
    currency_symbol: str
    price: float
    discount: float
    flag1: Optional[bool]
    flag2: Optional[bool]
    flag3: Optional[bool]
    stopages: int
    share: int
    likes: int
    mode: str

class VehicleCreate(VehicleBase):
    id: str

class VehicleUpdate(BaseModel):
    vehicle_no: Optional[str] = None
    date: Optional[dt_date] = None
    from_time: Optional[time] = None
    to_time: Optional[time] = None
    start_time: Optional[time] = None
    end_time: Optional[time] = None
    currency_symbol: Optional[str] = None
    price: Optional[float] = None
    discount: Optional[float] = None
    flag1: Optional[bool] = None
    flag2: Optional[bool] = None
    flag3: Optional[bool] = None
    stopages: Optional[int] = None
    share: Optional[int] = None
    likes: Optional[int] = None
    mode: Optional[str] = None

    class Config:
        from_attributes = True

class Vehicle(VehicleBase):
    id: str

    class Config:
        from_attributes = True