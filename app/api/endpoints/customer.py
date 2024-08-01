from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.database import Customer
from app.database import Session
from app.schemas import UserCreate
router = APIRouter()

def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()

@router.post("/customers/{customer_id}")
def read_customer(customer_id: int, db: Session = Depends(get_db)):
    customer = db.query(Customer).filter(Customer.id == customer_id).first()
    if customer is None:
        raise HTTPException(status_code=404, detail="Customer not found")
    return customer