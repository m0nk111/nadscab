from fastapi import APIRouter, UploadFile, File
import shutil
import os

router = APIRouter()

UPLOAD_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../uploads"))
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/api/upload")
async def upload_files(image: UploadFile = File(...), audio: UploadFile = File(...)):
    image_path = os.path.join(UPLOAD_DIR, image.filename)
    audio_path = os.path.join(UPLOAD_DIR, audio.filename)
    with open(image_path, "wb") as img_f:
        shutil.copyfileobj(image.file, img_f)
    with open(audio_path, "wb") as aud_f:
        shutil.copyfileobj(audio.file, aud_f)
    return {"status": "success", "image": image.filename, "audio": audio.filename}
