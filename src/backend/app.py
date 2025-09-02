
from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from api.upload import router as upload_router
from api.demo_endpoints import router as demo_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload_router)
app.include_router(demo_router)

# Placeholder endpoint voor voice cloning
@app.post("/api/voice-clone")
def voice_clone(audio_filename: str):
    # Hier zou de integratie met Tortoise TTS of andere voice cloning komen
    # Voor nu alleen een dummy response
    return {"status": "pending", "message": f"Voice cloning for {audio_filename} not yet implemented."}

# Placeholder endpoint voor gezichtsanimatie
@app.post("/api/face-animate")
def face_animate(image_filename: str):
    # Hier zou de integratie met DeepFaceLive, Avatarify, etc. komen
    # Voor nu alleen een dummy response
    return {"status": "pending", "message": f"Face animation for {image_filename} not yet implemented."}


app.include_router(upload_router)

# Simple status endpoint for avatar
from fastapi.responses import JSONResponse
avatar_status = {"status": "Idle"}

@app.get("/api/status")
def get_status():
    return JSONResponse(content=avatar_status)

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
