
from fastapi import APIRouter, UploadFile, File
from fastapi.responses import FileResponse
import os

router = APIRouter()

@router.post("/api/sadtalker")
def sadtalker_demo(image: UploadFile = File(...), audio: UploadFile = File(...)):
    # SadTalker integratie: sla files op en roep SadTalker aan via subprocess
    image_path = f"/tmp/{image.filename}"
    audio_path = f"/tmp/{audio.filename}"
    with open(image_path, "wb") as f:
        f.write(image.file.read())
    with open(audio_path, "wb") as f:
        f.write(audio.file.read())
    # Pad naar SadTalker repo en output
    sadtalker_repo = "/home/flip/external-code/SadTalker"
    result_dir = "/tmp"
    video_path = f"{result_dir}/sadtalker_result.mp4"
    # SadTalker CLI-call
    sad_talker_cmd = f"python3 {sadtalker_repo}/inference.py --driven_audio {audio_path} --source_image {image_path} --result_dir {result_dir} --still --preprocess full --enhancer gfpgan"
    os.system(sad_talker_cmd)
    # Geef het gegenereerde video terug
    return FileResponse(video_path)

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
