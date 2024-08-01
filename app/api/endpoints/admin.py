from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.database import Customer
from app.database import Session
from app.schemas import UserBanned, UserSetPresentation

router = APIRouter()

def get_db() -> Session:
    db = Session()
    try:
        yield db
    finally:
        db.close()

@router.post("/block_user/", response_model=UserBanned)
def create_user(user_data: UserBanned, db: Session = Depends(get_db)):
    customer = db.query(Customer).filter(Customer.user_id == user_data.id).first()

    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    customer.is_blocked = True
    db.commit()
    return customer

@router.post("/unblock_user/", response_model=UserBanned)
def create_user(user_data: UserBanned, db: Session = Depends(get_db)):
    customer = db.query(Customer).filter(Customer.user_id == user_data.id).first()

    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    customer.is_blocked = False
    db.commit()
    return customer

@router.post("/set_presentation_user/", response_model=UserSetPresentation)
def create_user(user_data: UserSetPresentation, db: Session = Depends(get_db)):
    customer = db.query(Customer).filter(Customer.user_id == user_data.id).first()
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    customer.count_presentation = user_data.count
    db.commit()
    return UserSetPresentation(id=user_data.id, count=user_data.count, message="Presentation count set successfully")
