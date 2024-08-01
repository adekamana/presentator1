from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import User, Base
def get_session(db_url: str):
    engine = create_engine(db_url)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    Base.metadata.create_all(bind=engine)
    return SessionLocal()
