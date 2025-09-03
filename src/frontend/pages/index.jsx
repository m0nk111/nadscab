import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SadTalkerDemo from "./SadTalkerDemo";
import Wav2LipDemo from "./Wav2LipDemo";
import AvatarifyDemo from "./AvatarifyDemo";
import AnimateDiffDemo from "./AnimateDiffDemo";
import AvatarSpeakDemo from "./AvatarSpeakDemo";
import TestPage from "./TestPage";

export default function AppPages() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/sadtalker" element={<SadTalkerDemo />} />
				<Route path="/wav2lip" element={<Wav2LipDemo />} />
				<Route path="/avatarify" element={<AvatarifyDemo />} />
				<Route path="/animatediff" element={<AnimateDiffDemo />} />
				<Route path="/avatar_speak" element={<AvatarSpeakDemo />} />
			<Route path="/test" element={<TestPage />} />
			</Routes>
		</Router>
	);
}
