from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from pptx import Presentation 
from pptx.util import Inches, Pt 
from pptx.enum.shapes import MSO_SHAPE
from pptx.dml.color import RGBColor
from aiogram import Bot, Dispatcher, types
import os
import asyncio
from pathlib import Path
import requests
import json
from PIL import Image as PIL_Image
from io import BytesIO
import string
import random
from pydantic import BaseModel
import aiohttp

class PromtGeneration(BaseModel):
    phone_number: str
    promt: str
    count_list: int


API_TOKEN = '6709974068:AAE6U_0lxjHglhrNCNUFfdwjLSOBpFNDtjE'
API_TOKEN_2 = "7086351279:AAGkmhIIr-EmejdsPeZoeedS4XapHOZNSt4"
bot2 = Bot(token=API_TOKEN_2)
dp2 = Dispatcher(bot2)
router = APIRouter()

dialog_history = {}
@router.post("/generate/")
async def create_user(user_data: PromtGeneration):
    import json

    async with aiohttp.ClientSession() as session:
        async with session.get(f"http://31.172.70.246:8001/get_generates/?phone_number={user_data.phone_number}") as response:
            if response.status == 200:
                data = await response.json()
                if data['free_generate'] <= 0:
                    return 'Не достаточно генераций'

   
    prs_filename = generate_random_filename()
    source_path = "/root/app/" + prs_filename
    server_path = "/var/www/html/downloads/" + prs_filename
    os.rename(source_path, server_path)
    download_link = f"https://презентатор.рф/downloads/" + prs_filename
    await bot2.send_message("-1002007471187", f"Пользователь <code>{user_data.phone_number}</code> сгенерировал презентацию!\nНазвание презентации: <code>{user_data.promt}</code>\nСсылка на скачивание: {download_link}", parse_mode="HTML")
    print(download_link)
    async with aiohttp.ClientSession() as session:
        async with session.post(f"http://31.172.70.246:8001/update_generates/?phone_number={user_data.phone_number}") as response:
            if response.status == 200:
                print(f'Успешно сняли с пользователя: {user_data.phone_number} 1 генерацию')
    async with aiohttp.ClientSession() as session:
        async with session.post(f"http://31.172.70.246:8001/save_presentation/?phone_number={user_data.phone_number}&name={user_data.promt}&url={download_link}") as response:
            if response.status == 200:
                print(f'Успешно сохранили презентацию в бд, пользователя: {user_data.phone_number}')
            else:
                print(response.status)
    async with aiohttp.ClientSession() as session:
        async with session.post(f"http://31.172.70.246:8001/update_count_all_generations/") as response:
            if response.status == 200:
                print(f'Успешно Добавили +1 в кол-во генераций')
            else:
                print(response.status)
    return download_link

def generate_random_filename(length=12):
    letters = string.ascii_lowercase
    random_filename = ''.join(random.choice(letters) for _ in range(length))
    return random_filename +"_Презентатор_" + ".pptx"

