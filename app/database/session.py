from . import Session
from ...JWT.models import User



def create_user(username):
    """Создание нового пользователя в базе данных."""
    new_user = User(username=username)
    session = Session()
    session.add(new_user)
    session.commit()
    session.close()

    return new_user


def get_user_by_id(user_id):
    """Получение пользователя по его идентификатору."""
    session = Session()
    user = session.query(User).filter(User.id == user_id).first()
    session.close()
    return user


def create_customer(user_id, count_presentation=0, is_blocked=False):
    """Создание нового клиента в базе данных."""
    new_customer = Customer(user_id=user_id, count_presentation=count_presentation, is_blocked=is_blocked)
    session = Session()
    session.add(new_customer)
    session.commit()
    session.close()
    return new_customer


def get_customer_by_user_id(user_id):
    """Получение клиента по идентификатору пользователя."""
    session = Session()
    customer = session.query(Customer).filter(Customer.user_id == user_id).first()
    session.close()
    return customer
