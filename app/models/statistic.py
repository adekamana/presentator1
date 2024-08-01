# models/statistic.py

from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Statistic(Base):
    __tablename__ = 'statistic'

    id = Column(Integer,primary_key=True)
    count_users = Column(Integer)
    count_generation_today = Column(Integer) 
    count_buyer_today = Column(Integer)

