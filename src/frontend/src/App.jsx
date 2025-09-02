

import { Link } from 'react-router-dom';

function App() {
	return (
		<div style={{ maxWidth: 480, margin: '4rem auto', textAlign: 'center' }}>
			<h1 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: '#646cff' }}>Nadscab AI Avatar Project</h1>
			<p style={{ fontSize: '1.1rem', color: '#888', marginBottom: '2.5rem' }}>
				Doel: Realtime AI-avatars die direct reageren op vragen met spraak en gezichtsanimatie.
			</p>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center' }}>
				<Link to='/sadtalker' style={demoBtnStyle}>SadTalker Demo</Link>
				<Link to='/wav2lip' style={demoBtnStyle}>Wav2Lip Demo</Link>
				<Link to='/avatarify' style={demoBtnStyle}>Avatarify Demo</Link>
				<Link to='/animatediff' style={demoBtnStyle}>AnimateDiff Demo</Link>
			</div>
		</div>
	);
}

const demoBtnStyle = {
	display: 'block',
	padding: '1rem 2rem',
	fontSize: '1.1rem',
	borderRadius: '10px',
	background: '#646cff',
	color: '#fff',
	textDecoration: 'none',
	boxShadow: '0 2px 8px #646cff33',
	border: 'none',
	transition: 'background 0.2s',
	textAlign: 'center',
	width: '100%',
	maxWidth: '260px',
};

export default App;
