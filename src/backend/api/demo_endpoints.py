from fastapi import APIRouter, UploadFile, File, Form
from fastapi.responses import FileResponse
import os
import subprocess

router = APIRouter()

@router.post("/api/sadtalker")
async def sadtalker_demo(image: UploadFile = File(...), audio: UploadFile = File(...)):
    # SadTalker integratie: sla files op en roep SadTalker aan via subprocess
    image_path = f"uploads/{image.filename}"
    audio_path = f"uploads/{audio.filename}"
    with open(image_path, "wb") as f:
        f.write(await image.read())
    with open(audio_path, "wb") as f:
        f.write(await audio.read())
    # Pad naar SadTalker repo en output
    sadtalker_repo = "/home/flip/external-code/SadTalker"
    result_dir = "uploads"
    video_path = f"{result_dir}/sadtalker_result.mp4"
    sad_talker_cmd = [
        "python3", f"{sadtalker_repo}/inference.py",
        "--driven_audio", audio_path,
        "--source_image", image_path,
        "--result_dir", result_dir,
        "--output_name", "sadtalker_result.mp4",
        "--still", "--preprocess", "full", "--enhancer", "gfpgan"
    ]
    subprocess.run(sad_talker_cmd, check=True)
    # Geef het gegenereerde video terug
    return FileResponse(video_path, media_type="video/mp4")

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

# Nieuw endpoint: tekst -> audio -> avatar-video
@router.post("/api/avatar_speak")
async def avatar_speak(
    text: str = Form(...),
    image: UploadFile = File(...)
):
    """
    Ontvangt tekst en afbeelding, genereert audio via Bark TTS,
    gebruikt SadTalker om een sprekende avatar-video te maken.
    Geeft het videobestand terug.
    """
    # 1. Sla afbeelding op
    image_path = f"uploads/{image.filename}"
    with open(image_path, "wb") as f:
        f.write(await image.read())

    # 2. Genereer audio met Bark TTS (voorbeeld, aanpasbaar)
    audio_path = f"uploads/avatar_tts.wav"
    bark_cmd = [
        "python", "/home/flip/external-code/Bark/bark_tts.py", # pas aan naar juiste script
        "--text", text,
        "--output", audio_path
    ]
    subprocess.run(bark_cmd, check=True)

    # 3. Genereer video met SadTalker
    output_path = f"uploads/avatar_speak.mp4"
    sadtalker_cmd = [
        "python", "/home/flip/external-code/SadTalker/inference.py",
        "--driven_audio", audio_path,
        "--source_image", image_path,
        "--result_dir", "uploads/",
        "--output_name", "avatar_speak.mp4"
    ]
    subprocess.run(sadtalker_cmd, check=True)

    # 4. Geef video terug
    return FileResponse(output_path, media_type="video/mp4")

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
