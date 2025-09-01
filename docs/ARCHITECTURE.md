# Architecture Overview: AI Avatar Webapp

## Goal
Create a web application where users can train an avatar (face and voice) and interact with it in real time. The avatar should move (idle animation) and speak with a cloned voice.

## Components

### 1. Frontend (Web)
- **React**: UI framework
- **Three.js**: 3D avatar rendering and animation (idle, speaking)
- **TensorFlow.js**: (optional) for real-time facial expression mapping
- **Upload forms**: for photos and audio

### 2. Backend (API)
- **FastAPI**: Python backend for handling uploads, training, and serving results
- **Tortoise TTS**: Voice cloning from user audio samples
- **Blender**: 3D avatar creation and animation (external, not automated)
- **DeepFaceLab/DeepFaceLive**: (optional) for advanced facial animation

### 3. External Software (outside project folder)
- **Blender**: Used for creating and animating avatars, export as glTF/GLB
- **Tortoise TTS**: Used for training and generating voice
- **Ready Player Me**: Online avatar generator (optional)

## Workflow
1. **User uploads photos and audio** via web interface.
2. **Backend processes uploads**:
    - Photos: Used to create/train avatar in Blender (manual step)
    - Audio: Used to train voice model with Tortoise TTS
3. **Trained assets stored externally** (../avatars, ../voices)
4. **Frontend loads avatar (glTF/GLB) and voice** for real-time interaction.
5. **Idle animation** runs in Three.js until user interacts.
6. **User asks question**: avatar animates and responds with cloned voice.

## Notes
- All external software/tools must be free and open-source.
- External assets/models are stored outside the main project folder.
- The webapp is modular and can be expanded with more AI features.

---
This architecture ensures a free, modular, and realistic avatar experience in the browser.
