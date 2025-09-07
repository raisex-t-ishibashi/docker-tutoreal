# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# フロントエンドのオリジンを指定
origins = [
    "http://frontend:13000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,   # 指定したオリジンのみ許可
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/hello")
def hello():
    print("process GET /hello")
    return {"message": "helloworld"}
