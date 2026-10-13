# FastAPI routing example — separate router module
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/api/users", tags=["users"])

class UserCreate(BaseModel):
    email: str
    name: str

@router.get("/")
async def list_users():
    return [{"id": 1, "email": "demo@example.com"}]

@router.post("/")
async def create_user(user: UserCreate):
    return {"id": 2, **user.dict()}

# In main.py: app.include_router(router)
