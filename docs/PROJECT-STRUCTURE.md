# Projectstructuur AI Avatar Webapp

## Top-level
- README.md
- PLAN.md
- TECH-ADVIES.md
- PROJECT-STRUCTURE.md
- demo/

## demo/
- index.html (UI demo)
- assets/ (images, audio, video, avatars)
- js/ (frontend scripts)
- css/ (styles)

## src/
- backend/
  - app.py (FastAPI of Node.js backend)
  - api/ (API endpoints)
  - models/ (AI modellen, persona configs)
- frontend/
  - components/ (React/Vue componenten)
  - pages/ (UI pagina's)
  - services/ (API calls, mic/webcam integratie)
  - styles/ (CSS/SCSS)

## integration/
- tars-connector/ (API client voor tars-ai-project)

## tests/
- Unit en integratietests

## docker/
- Dockerfile
- docker-compose.yml

---
Deze structuur ondersteunt standalone werking en makkelijke integratie met tars-ai-project. Uit te breiden voor echte AI modules en deployment.
