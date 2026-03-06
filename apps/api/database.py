import os
import re
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base

# Fallback to SQLite for local development 
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///./kordexlabs.db")

# Support PostgreSQL (Neon / Supabase / etc.)
is_postgres = False
if DATABASE_URL.startswith(("postgresql://", "postgres://")):
    is_postgres = True
    # Ensure asyncpg driver
    DATABASE_URL = re.sub(r'^postgres(ql)?://', 'postgresql+asyncpg://', DATABASE_URL)
    # Strip sslmode from URL (asyncpg uses connect_args instead)
    DATABASE_URL = re.sub(r'[?&]sslmode=[^&]*', '', DATABASE_URL)

connect_args = {}
if is_postgres:
    # Neon requires SSL; "require" tells asyncpg to use SSL without cert verification
    connect_args["ssl"] = "require"
else:
    connect_args["check_same_thread"] = False

engine = create_async_engine(DATABASE_URL, connect_args=connect_args)
SessionLocal = sessionmaker(
    autocommit=False, autoflush=False, bind=engine, class_=AsyncSession
)

Base = declarative_base()

async def get_db():
    async with SessionLocal() as session:
        yield session

