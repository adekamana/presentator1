from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, ForeignKey, Boolean , String
from sqlalchemy.orm import relationship


Base = declarative_base()

# Параметры подключения к базе данных
db_params = {
    'host': '87.251.87.11',
    'database': 'dev',
    'user': 'user_sql',
    'password': '4GtPfmsg008iwLstWh',

}

# db_url = f"postgresql+psycopg2://{db_params['user']}:{db_params['password']}@{db_params['host']}/{db_params['database']}"
# engine = create_engine(db_url)
# print("create")
# Session = sessionmaker(bind=engine)

# class Admin(Base):
#     __tablename__ = 'admins'

#     id = Column(Integer, primary_key=True)
#     username = Column(String(255), nullable=False)
#     password = Column(String(255), nullable=False)

# class Customer(Base):
#     __tablename__ = 'customers'

#     id = Column(Integer, primary_key=True)
#     user_id = Column(Integer, ForeignKey('users.id'))
#     count_presentation = Column(Integer, default=0)
#     is_blocked = Column(Boolean, default=False)

# class Statistic(Base):
#     __tablename__ = 'statistic'

#     id = Column(Integer,primary_key=True)
#     count_users = Column(Integer)
#     count_generation_today = Column(Integer) 
#     count_buyer_today = Column(Integer)

# class User(Base):
#     __tablename__ = 'users'

#     id = Column(Integer, primary_key=True)
#     username = Column(String(255), nullable=False)
#     password = Column(String)

# Base.metadata.create_all(bind=engine)