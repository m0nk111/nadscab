
from fastapi import APIRouter, UploadFile, File
from fastapi.responses import FileResponse
import os

router = APIRouter()

@router.post("/api/sadtalker")
def sadtalker_demo(image: UploadFile = File(...), audio: UploadFile = File(...)):
    # Hier zou je SadTalker aanroepen
    # Demo: sla files op en retourneer een dummy video
    image_path = f"/tmp/{image.filename}"
    audio_path = f"/tmp/{audio.filename}"
    with open(image_path, "wb") as f:
        f.write(image.file.read())
    with open(audio_path, "wb") as f:
        f.write(audio.file.read())
    # TODO: SadTalker integratie
    demo_video = "demo_sadtalker.mp4"
    return FileResponse(demo_video)

@router.post("/api/wav2lip")
def wav2lip_demo(image: UploadFile = File(...), audio: UploadFile = File(...)):
    # Hier zou je Wav2Lip aanroepen
    image_path = f"/tmp/{image.filename}"
    audio_path = f"/tmp/{audio.filename}"
    with open(image_path, "wb") as f:
        f.write(image.file.read())
    with open(audio_path, "wb") as f:
        f.write(audio.file.read())
    # TODO: Wav2Lip integratie
    demo_video = "demo_wav2lip.mp4"
    return FileResponse(demo_video)

@router.post("/api/avatarify")
def avatarify_demo(image: UploadFile = File(...)):
    # Avatarify werkt met webcam, hier alleen placeholder
    image_path = f"/tmp/{image.filename}"
    with open(image_path, "wb") as f:
        f.write(image.file.read())
    demo_video = "demo_avatarify.mp4"
    return FileResponse(demo_video)

@router.post("/api/animatediff")
def animatediff_demo(image: UploadFile = File(...)):
    # AnimateDiff demo
    image_path = f"/tmp/{image.filename}"
    with open(image_path, "wb") as f:
        f.write(image.file.read())
    demo_video = "demo_animatediff.mp4"
    return FileResponse(demo_video)
