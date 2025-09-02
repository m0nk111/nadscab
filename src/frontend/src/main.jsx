

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';


import App from './App.jsx';
import SadTalkerDemo from '../pages/SadTalkerDemo.jsx';
import Wav2LipDemo from '../pages/Wav2LipDemo.jsx';
import AvatarifyDemo from '../pages/AvatarifyDemo.jsx';
import AnimateDiffDemo from '../pages/AnimateDiffDemo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sadtalker" element={<SadTalkerDemo />} />
        <Route path="/wav2lip" element={<Wav2LipDemo />} />
        <Route path="/avatarify" element={<AvatarifyDemo />} />
        <Route path="/animatediff" element={<AnimateDiffDemo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
