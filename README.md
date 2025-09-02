# Quickstart

Clone the repository and install dependencies:

```bash
git clone https://github.com/m0nk111/nadscab.git
cd nadscab
```


Frontend (React/Vite):
```bash
cd src/frontend
npm install
npm run build   # Build for production
```

Backend (FastAPI, poort 7000):
```bash
cd src/backend
pip install -r requirements.txt
uvicorn app:app --reload --port 7000
```

Nginx (zie docker/nadscab-nginx.conf) serveert de frontend via HTTPS op IP 192.168.1.27 en proxy't API-verkeer naar backend op poort 7000.
Alle demo-links zijn zichtbaar op de frontpage. Automatisering en projectregels zijn vastgelegd in .github/copilot-instructions.md.


## Frontend Testing
To run frontend tests (React components):

```bash
cd src/frontend
npm install
npm test
```




# AI Avatar Webapp

This web application displays a lifelike avatar (e.g. Donald Trump, Megan Fox) for live conversation via voice and facial animation. It includes open mic and webcam integration. The app is standalone but can connect to the tars-ai-project.


## Features
- Select a persona/avatar
- Live conversation via voice (voice cloning)
- Facial animation/avatar (AI driven)
- Open mic (speech recognition)
- Webcam integration
- API integration with tars-ai-project (optional)


## Demo
- Web-based, modern UI
- Basic avatar and speech demo


## Documentation
See the `docs/` folder for technical and functional documentation.


## Plan of Approach
See `docs/PLAN.md` for the step-by-step plan.



## Backend Testing
To run backend tests:

```bash
pip install pytest
pytest src/backend/test_app.py
```
