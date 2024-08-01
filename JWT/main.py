from fastapi import FastAPI, HTTPException, Depends,Form
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext
import jwt
from datetime import datetime, timedelta
from models import User
import pymodel
import database

DATABASE_URL = "postgresql://user_sql:in_NrbGAGjimvfT-06SH@193.37.71.117/agony"
SessionLocal = database.get_session(DATABASE_URL)

SECRET_KEY = "SLNJIKDASUODSAIUDHNSAUGBD09213712y793812hwjklSDJKASGDY()*#E@!UIOHbjksabduhksagvbdsakgdba"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
REFRESH_TOKEN_EXPIRE_DAYS = 7

app = FastAPI()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token2")

@app.post("/register")
def register_user(username: str, password: str):
    existing_user = get_user(username)
    if existing_user:
        raise HTTPException(status_code=400, detail="User with this username already exists")
    hashed_password = pwd_context.hash(password)
    user_data = {"username": username, "hashed_password": hashed_password}
    user = User(**user_data)
    with SessionLocal() as db:
        db.add(user)
        db.commit()
    return {"Success"}

@app.post("/token")
def authenticate_user(token_request: pymodel.TokenRequest):
    username = token_request.username
    password = token_request.password
    user = get_user(username)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    is_password_correct = pwd_context.verify(password, user.hashed_password)

    if not is_password_correct:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    refresh_token = create_refresh_token({"sub": user.username})
    return pymodel.Token(access_token=access_token, refresh_token=refresh_token, token_type="bearer")


@app.post("/token2")
def login_for_access_token(username: str = Form(...), password: str = Form(...)):
    user = get_user(username)
    if not user or not pwd_context.verify(password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    refresh_token = create_refresh_token({"sub": user.username})
    return pymodel.Token(access_token=access_token, refresh_token=refresh_token, token_type="bearer")

@app.post("/refresh-token")
def refresh_token(refresh_token: str = Form(...)):
    decoded_token = verify_jwt_token(refresh_token)
    if not decoded_token:
        raise HTTPException(status_code=400, detail="Invalid refresh token")
    
    username = decoded_token["sub"]
    user = get_user(username)
    if not user:
        raise HTTPException(status_code=400, detail="User not found")
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    refresh_token = create_refresh_token({"sub": user.username})
    return pymodel.Token(access_token=access_token, refresh_token=refresh_token, token_type="bearer")

def create_access_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def create_refresh_token(data: dict):
    return create_access_token(data, timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS))

def verify_jwt_token(token: str):
    try:
        decoded_data = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return decoded_data
    except jwt.PyJWTError:
        return None
    
def get_current_user(token: str = Depends(oauth2_scheme)):  # Исправлено
    print(token)
    decoded_data = verify_jwt_token(token)
    print(decoded_data)
    if not decoded_data:
        raise HTTPException(status_code=400, detail="Invalid token")
    user = get_user(decoded_data["sub"])
    if not user:
        raise HTTPException(status_code=400, detail="User not found")
    return user

@app.get("/users/me")
def get_user_me(current_user: User = Depends(get_current_user)):
    return current_user

@app.get("/users/me2")
def get_user_me(token: str):
    User = get_current_user(token)
    return User

def get_user(username: str):
    with SessionLocal() as db:
        return db.query(User).filter(User.username == username).first()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)