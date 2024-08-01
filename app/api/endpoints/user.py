from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.database import User, Customer
from app.database import Session
from app.schemas import UserCreate , UserConfirm , UserData

router = APIRouter()

def get_db() -> Session:
    db = Session()
    try:
        yield db
    finally:
        db.close()

@router.post("/create_user/")
def create_user(user_data: UserCreate, db: Session = Depends(get_db)):
    new_user = User(**user_data.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return "True"

@router.post("/confirm_user/")
def create_user(user_data: UserConfirm, db: Session = Depends(get_db)):
    new_customer = Customer(user_data)
    db.add(new_customer)
    db.commit()
    db.refresh(new_customer)
    return "True"

@router.post("/get_data_user/")
def create_user(user_data: UserData, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == user_data.username).first()
    if user is None:
        raise HTTPException(status_code=404, detail="Customer not found")
    customer = db.query(Customer).filter(Customer.id == user.id).first()
    return customer
