# Architecture Diagram: AI Avatar Webapp

Below is a textual diagram of the main components and workflow:

```
+-------------------+        +-------------------+        +-------------------+
|   Web Frontend    | <----> |     Backend API   | <----> |  External Tools   |
|  (React, Three.js)|        |    (FastAPI)      |        | (Blender, TTS)    |
+-------------------+        +-------------------+        +-------------------+
        |                          |                          |
        | 1. Upload photos/audio   |                          |
        +------------------------->|                          |
        |                          | 2. Process uploads       |
        |                          +------------------------->|
        |                          |                          | 3. Train avatar/voice
        |                          |                          |
        | 4. Get trained assets    |<------------------------+
        +<------------------------+|
        | 5. Display avatar, play  |
        |    voice, idle animation |
        +------------------------->|
```

- All external tools (Blender, Tortoise TTS, etc.) are outside the project folder.
- Frontend interacts with backend via REST/WebSocket.
- Backend manages training, storage, and serving of assets.

---
For a graphical diagram, use tools like draw.io or Excalidraw to visualize the above structure.
