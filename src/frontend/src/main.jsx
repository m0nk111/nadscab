

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';


import HomePage from '../pages/HomePage.jsx';
import SadTalkerDemo from '../pages/SadTalkerDemo.jsx';
import Wav2LipDemo from '../pages/Wav2LipDemo.jsx';
import AvatarifyDemo from '../pages/AvatarifyDemo.jsx';
import AnimateDiffDemo from '../pages/AnimateDiffDemo.jsx';
import AvatarSpeakDemo from '../pages/AvatarSpeakDemo.jsx';
import TestPage from '../pages/TestPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sadtalker" element={<SadTalkerDemo />} />
        <Route path="/wav2lip" element={<Wav2LipDemo />} />
        <Route path="/avatarify" element={<AvatarifyDemo />} />
        <Route path="/animatediff" element={<AnimateDiffDemo />} />
        <Route path="/avatar_speak" element={<AvatarSpeakDemo />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
