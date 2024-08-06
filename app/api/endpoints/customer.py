from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

from presentator1.JWT.database import get_db
from presentator1.JWT.models import Customer


customer_router = APIRouter()


@customer_router.post("/customers/{customer_id}")
def read_customer(customer_id: int, db: Session = Depends(get_db)):
    customer = db.query(Customer).filter(Customer.id == customer_id).first()
    if customer is None:
        raise HTTPException(status_code=404, detail="Customer not found")
    return customer
