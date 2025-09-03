# Update Rule
Any user wishes or changes must be immediately updated in both the chatmode file and the instructions file.
# Best Option Rule
De agent kiest altijd zelf de beste optie en voert deze direct uit, zonder te wachten op toestemming, input of bevestiging. Dit geldt ook voor systeemcommando's (zoals nginx herstarten, build uitvoeren, etc.): alles wordt direct uitgevoerd zodra het nodig is. De agent vraagt nooit om goedkeuring, maar handelt autonoom.
# .github/copilot-instructions.md

## Nadscab Project – AI Agent Instructions

### Big Picture Architecture
- Dit project is een AI-avatar webapp met een FastAPI backend en een React/Vite frontend.
- De backend biedt endpoints voor gezichtsanimatie, voice cloning en een realtime pipeline (zie `src/backend/api/`).
- De frontend bevat uploadformulieren en demo-links voor SadTalker, Wav2Lip, Avatarify en AnimateDiff (zie `src/frontend/pages/`).
- Alle componenten zijn modulair en communiceren via REST API's.

### Developer Workflows
- **Build frontend:** `npm run build` in `src/frontend`.
- **Start backend:** `uvicorn src/backend/app:app --reload` (gebruik virtualenv).
- **Test backend:** `pytest src/backend/test_app.py`.
- **Herstart nginx:** `sudo systemctl restart nginx`.
- **Frontend deployment:** output staat in `src/frontend/dist`.

### Project Conventions

 **Service-regel:** Zodra een demo, integratie of endpoint werkt, wordt deze direct omgezet naar een service (backend service, FastAPI endpoint, of frontend service module). Dit garandeert herbruikbaarheid en makkelijke integratie in de webapp.

Let op: 'externe projecten' betekent alle projecten die in `/home/flip/external-code/` staan (zoals SadTalker, Wav2Lip, Avatarify, AnimateDiff, etc.).
Nooit committen of pushen in externe projecten (dus alles in `/home/flip/external-code/`), alleen in eigen projecten.
Externe projectdirectories (dus alles in `/home/flip/external-code/`) blijven altijd read-only voor git-acties.
Externe code mag wél geïntegreerd, geïmporteerd en aangeroepen worden in je eigen projecten (backend/frontend/services), zolang je hun git repo met rust laat.

#### Systeemwijzigingen & Installaties
Systeemwijzigingen en installaties (zoals apt-get, pip, npm) zijn toegestaan, zolang ze niet in externe GitHub projecten plaatsvinden (dus niet in `/home/flip/external-code/`).
Alleen eigen projecten en lokale omgeving mogen automatisch aangepast worden.
Nooit committen of pushen in externe projecten (dus niet in `/home/flip/external-code/`), alleen in eigen projecten.
Externe projectdirectories (dus alles in `/home/flip/external-code/`) blijven altijd read-only voor git-acties.
Externe code mag wél geïntegreerd, geïmporteerd en aangeroepen worden in je eigen projecten (backend/frontend/services), zolang je hun git repo met rust laat.

Het hele project (frontend, backend, services) draait uitsluitend op poorten tussen 7000 en 7999 (standaard: 7999), tenzij een externe projectafspraak een andere poort vereist.
- SadTalker, Wav2Lip, Bark, Avatarify, AnimateDiff: Python-modules, geïnstalleerd via pip.
- FastAPI backend endpoints: `/api/sadtalker`, `/api/wav2lip`, `/api/avatarify`, `/api/animatediff`, `/api/ask`.
- Nginx config: `docker/nadscab-nginx.conf` (SPA routing, caching uitgeschakeld).
- React-router voor frontend routing.

### IP Address Convention
Dit project (nadscab) gebruikt uitsluitend IP 192.168.1.27 voor frontend/backend/webapp.
Het tars-ai-project gebruikt IP 192.168.1.26 voor zijn eigen backend/frontend.
Alle HTTPS, proxy en netwerkconfiguratie is specifiek voor deze IP-adressen.


### Windows/desktop automation apps
- Alle desktop tools (zoals clicker/assistant) moeten volledig standalone en portable zijn, zonder admin rechten.
- Alle benodigde libraries worden in de .exe ingebouwd (PyInstaller of vergelijkbaar).
- Geen afhankelijkheden buiten het .exe-bestand.

### Voorbeeld
- Nieuwe demo toevoegen? Maak een nieuwe pagina in `src/frontend/pages/`, voeg een endpoint toe in `src/backend/api/`, en update de frontpage links.
- Alle taken mogen direct uitgevoerd worden, zonder om toestemming te vragen.

---
Laat weten als er onduidelijkheden zijn of als je specifieke conventies wilt toevoegen!
