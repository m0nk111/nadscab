# Workflow Example: AI Avatar Webapp

## Step-by-step Example

1. **User uploads photos and audio**
   - Web interface (React) provides forms for image and audio upload.

2. **Backend receives uploads**
   - FastAPI saves files and triggers training scripts.

3. **Avatar training (external)**
   - Blender is used (outside project) to create a 3D avatar from photos.
   - Export avatar as glTF/GLB and store in ../avatars

4. **Voice training (external)**
   - Tortoise TTS (outside project) trains a voice model from audio samples.
   - Export voice model/audio to ../voices

5. **Frontend loads trained assets**
   - Three.js loads the avatar model and plays idle animation.
   - When user interacts, avatar animates and speaks with cloned voice.

6. **Idle animation**
   - Avatar performs looped idle animation until a question is asked.

## Notes
- All training and heavy processing happens outside the main project folder.
- Only the results (avatar model, voice audio) are loaded into the webapp.
- The workflow is modular and can be expanded with more AI features.

---
This example shows how users can train and interact with a custom avatar in a free, modular webapp.
