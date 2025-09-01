from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from src.backend.api.upload import router as upload_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload_router)

@app.get("/api/personas")
def get_personas():
    return [
        {"id": "trump", "name": "Donald Trump"},
        {"id": "megan", "name": "Megan Fox"},
        {"id": "custom", "name": "Custom"}
    ]

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Avatar says: {data}")
