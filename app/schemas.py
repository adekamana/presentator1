from pydantic import BaseModel

class PromtGeneration(BaseModel):
    promt: str
    count_list: int

class UserCreate(BaseModel):
    username: str
    password: str

class UserConfirm(BaseModel):
    username: str
    code: int

class UserData(BaseModel):
    username: str

class UserBanned(BaseModel):
    id: int

class UserSetPresentation(BaseModel):
    id:   int
    count: int

#alembic
#migration => alembic
#отделить модели от DTO
