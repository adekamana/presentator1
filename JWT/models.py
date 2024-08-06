from typing import Any

from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

# Определяем базовый класс для объявления моделей таблиц
Base = declarative_base()


# Описание модели таблицы пользователей
class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(100), unique=True, index=True)
    hashed_password = Column(String(100))
    disabled = Column(Boolean, default=False)


class Customer(Base):
    __tablename__ = 'customers'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    count_presentation = Column(Integer, default=0)
    is_blocked = Column(Boolean, default=False)
