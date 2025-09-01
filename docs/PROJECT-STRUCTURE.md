## Third-Party Software Deployment
All third-party software, libraries, and tools that are not developed by us must be installed and deployed outside the main project directory. Only custom code and assets should reside within the project folder. This ensures clear separation and easier maintenance.
## External File Naming Convention
All files, models, or assets stored outside the project directory but used for this project must have filenames starting with the repository name (e.g., `nadscab_avatar.glb`, `nadscab_voice.wav`). This ensures clarity and prevents conflicts with other projects.

### Example
- Avatar model: `../nadscab_avatar.glb`
- Voice audio: `../nadscab_voice.wav`
- Trained model: `../nadscab_face_model.pkl`
## External Software Usage
All third-party or external software, libraries, or models used from other projects must be stored outside this project directory (e.g., in `../`). Only project-specific code and assets should reside within the main project folder.
## Avatar Idle Animation
Avatars (e.g. Trump) should have an idle status: when no question is asked, the avatar performs a continuous looped animation (e.g. blinking, head movement, subtle facial expressions). This is implemented using a 3D model with idle animation clips (created in Blender or similar), and played in the frontend (Three.js) until user interaction occurs.
# Project Structure: AI Avatar Webapp

## Top-level
- README.md
- PLAN.md
- TECH-ADVICE.md
- PROJECT-STRUCTURE.md
- app/

## app/
- index.html (main UI)
- assets/ (images, audio, video, avatars)
- js/ (frontend scripts)
- css/ (styles)

## src/
- backend/
  - app.py (FastAPI backend)
  - api/ (API endpoints)
  - models/ (AI models, persona configs)
- frontend/
  - components/ (React/Vue components)
  - pages/ (UI pages)
  - services/ (API calls, mic/webcam integration)
  - styles/ (CSS/SCSS)

## integration/
- tars-connector/ (API client for tars-ai-project)

## tests/
- Unit and integration tests

## docker/
- Dockerfile
- docker-compose.yml

---
This structure supports standalone operation and easy integration with tars-ai-project. Expand as needed for real AI modules and deployment.

## Licensing and Cost Requirement
All code, dependencies, and services used in this project must be free and open-source. No paid or proprietary technologies are allowed; the project must remain free to use and distribute.
