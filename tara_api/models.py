from sqlalchemy import Column,Integer,String,Date,Time,Float,Boolean
from tara_db.database import Base

class Vehicle(Base):
    __tablename__ = 'vehicle'

    id = Column(String,primary_key=True,index=True)
    vehicle_no = Column(String)
    date = Column(Date)
    from_time = Column(Time)
    to_time = Column(Time)
    start_time = Column(Time)
    end_time = Column(Time)
    currency_symbol = Column(String)
    price = Column(Float)
    discount = Column(Float)
    flag1 = Column(Boolean)
    flag2 = Column(Boolean)
    flag3 = Column(Boolean)
    stopages = Column(Integer)
    share = Column(Integer)
    likes = Column(Integer)
    mode = Column(String)