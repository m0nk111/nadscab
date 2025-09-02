import pytest
from fastapi.testclient import TestClient
from src.backend.app import app

client = TestClient(app)

def test_status():
    response = client.get("/api/status")
    assert response.status_code == 200
    assert "status" in response.json()

def test_personas():
    response = client.get("/api/personas")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_voice_clone():
    response = client.post("/api/voice-clone", json={"audio_filename": "test.wav"})
    assert response.status_code == 200
    assert response.json()["status"] == "pending"

def test_face_animate():
    response = client.post("/api/face-animate", json={"image_filename": "test.png"})
    assert response.status_code == 200
    assert response.json()["status"] == "pending"
