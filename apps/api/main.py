from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import blogs, tools, stocks

app = FastAPI(title="KordexLabs API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://*.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(blogs.router, prefix="/api")
app.include_router(tools.router, prefix="/api")
app.include_router(stocks.router, prefix="/api")


@app.get("/")
def root():
    return {"message": "KordexLabs API is running", "version": "1.0.0"}
