# Python FastAPI example
# Modular: models, routes, dependencies

from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from typing import Optional

app = FastAPI(title="Auth API Example")

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class User(BaseModel):
    email: EmailStr
    name: Optional[str] = None

# Fake DB
users_db = {"demo@example.com": {"password": "secret", "name": "Demo"}}

@app.post("/api/auth/login")
async def login(data: LoginRequest):
    user = users_db.get(data.email)
    if not user or user["password"] != data.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"success": True, "user": {"email": data.email}}

@app.get("/api/health")
async def health():
    return {"status": "ok"}

# Dependency example for protected routes
async def get_current_user(token: Optional[str] = None):
    if not token:
        raise HTTPException(status_code=401, detail="Not authenticated")
    return {"email": "demo@example.com"}

@app.get("/api/profile")
async def profile(user = Depends(get_current_user)):
    return user
