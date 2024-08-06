from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

from presentator1.JWT.database import get_db
from presentator1.JWT.models import User, Customer
from presentator1.app.schemas import UserCreate, UserConfirm, UserData

user_router = APIRouter()


@user_router.post("/create_user/")
def create_user(user_data: UserCreate, db: Session = Depends(get_db)):
    new_user = User(**user_data.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return "True"


@user_router.post("/confirm_user/")
def confirm_user(user_data: UserConfirm, db: Session = Depends(get_db)):
    new_customer = Customer(**user_data.dict())
    db.add(new_customer)
    db.commit()
    db.refresh(new_customer)
    return "True"


@user_router.post("/get_data_user/")
def get_data_user(user_data: UserData, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == user_data.username).first()
    if user is None:
        raise HTTPException(status_code=404, detail="Customer not found")
    customer = db.query(Customer).filter(Customer.id == user.id).first()
    return customer
