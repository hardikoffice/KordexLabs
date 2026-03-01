import asyncio
import json
import random
from datetime import datetime, timezone
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from pydantic import BaseModel
from typing import List

router = APIRouter()


class StockOut(BaseModel):
    ticker: str
    company_name: str
    exchange: str
    asset_type: str
    price: float
    change: float
    change_percent: float


STOCKS = [
    StockOut(ticker="NVDA", company_name="NVIDIA Corporation", exchange="NASDAQ", asset_type="Stock", price=875.30, change=12.45, change_percent=1.44),
    StockOut(ticker="MSFT", company_name="Microsoft Corporation", exchange="NASDAQ", asset_type="Stock", price=452.18, change=-3.22, change_percent=-0.71),
    StockOut(ticker="GOOGL", company_name="Alphabet Inc.", exchange="NASDAQ", asset_type="Stock", price=178.92, change=2.15, change_percent=1.22),
    StockOut(ticker="META", company_name="Meta Platforms Inc.", exchange="NASDAQ", asset_type="Stock", price=612.47, change=8.33, change_percent=1.38),
    StockOut(ticker="AMD", company_name="Advanced Micro Devices", exchange="NASDAQ", asset_type="Stock", price=178.50, change=5.20, change_percent=3.0),
]


@router.get("/stocks", response_model=List[StockOut])
def get_stocks():
    return STOCKS


@router.websocket("/ws/market-data/{ticker}")
async def websocket_market_data(websocket: WebSocket, ticker: str):
    await websocket.accept()
    stock = next((s for s in STOCKS if s.ticker.upper() == ticker.upper()), None)
    base_price = stock.price if stock else 100.0

    try:
        while True:
            change = round((random.random() - 0.48) * 2, 2)
            base_price = round(max(1, base_price + change), 2)
            payload = {
                "ticker": ticker.upper(),
                "price": base_price,
                "timestamp": datetime.now(timezone.utc).isoformat(),
                "change_direction": "up" if change >= 0 else "down",
            }
            await websocket.send_text(json.dumps(payload))
            await asyncio.sleep(2)
    except WebSocketDisconnect:
        pass
