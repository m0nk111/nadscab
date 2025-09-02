from fastapi import APIRouter, UploadFile, File, HTTPException
import shutil
import os

router = APIRouter()

UPLOAD_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../uploads"))
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/api/upload")
async def upload_files(image: UploadFile = File(...), audio: UploadFile = File(...)):
    # Validatie bestandstype
    allowed_image_types = ["image/jpeg", "image/png", "image/gif"]
    allowed_audio_types = ["audio/mpeg", "audio/wav", "audio/x-wav", "audio/mp3"]
    max_size = 10 * 1024 * 1024  # 10MB

    if image.content_type not in allowed_image_types:
        raise HTTPException(status_code=400, detail="Invalid image type.")
    if audio.content_type not in allowed_audio_types:
        raise HTTPException(status_code=400, detail="Invalid audio type.")

    image_bytes = await image.read()
    audio_bytes = await audio.read()
    if len(image_bytes) > max_size:
        raise HTTPException(status_code=400, detail="Image file too large.")
    if len(audio_bytes) > max_size:
        raise HTTPException(status_code=400, detail="Audio file too large.")

    if not image.filename:
        raise HTTPException(status_code=400, detail="Image filename missing.")
    if not audio.filename:
        raise HTTPException(status_code=400, detail="Audio filename missing.")
    image_path = os.path.join(UPLOAD_DIR, str(image.filename))
    audio_path = os.path.join(UPLOAD_DIR, str(audio.filename))
    with open(image_path, "wb") as img_f:
        img_f.write(image_bytes)
    with open(audio_path, "wb") as aud_f:
        aud_f.write(audio_bytes)
    return {"status": "success", "image": image.filename, "audio": audio.filename}
