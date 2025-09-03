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

## Netwerk & Security
- Het hele project (frontend, backend, services) draait uitsluitend op poorten tussen 7000 en 7999 (standaard: 7999) op IP 192.168.1.27
- Nginx proxy't API-verkeer en WebSocket naar backend
- Demo-links altijd zichtbaar op de frontpage
- Automatisering en projectregels in .github/copilot-instructions.md
- IP-conventie: nadscab gebruikt 192.168.1.27, tars-ai-project gebruikt 192.168.1.26

## Top-level
- README.md
- PLAN.md
- TECH-ADVICE.md
- PROJECT-STRUCTURE.md
- docker/nadscab-nginx.conf (nginx config)
- src/frontend/dist/ (Vite build: productie frontend)

## app/
- (legacy, niet meer gebruikt voor frontend)

## src/
- backend/
  - app.py (FastAPI backend)
  - api/ (API endpoints)
  - models/ (AI models, persona configs)
- frontend/
  - components/ (React components)
  - pages/ (UI pages)
  - services/ (API calls, mic/webcam integration)
  - styles/ (CSS/SCSS)
  - dist/ (Vite build output, wordt door nginx geserveerd)

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

## Service-regel
Zodra een demo, integratie of endpoint werkt, wordt deze direct omgezet naar een service (backend service, FastAPI endpoint, of frontend service module). Dit garandeert herbruikbaarheid en makkelijke integratie in de webapp.
