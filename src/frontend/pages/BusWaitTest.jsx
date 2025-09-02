import React from 'react';
import '../src/App.css';

export default function BusWaitTest() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>Bus Wait Animation Test</h1>
      <p>Hier zie je de animatie zoals gebruikt voor Trump:</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg"
        alt="Trump"
        className="avatar-img waiting-trump"
        style={{
          width: '120px',
          borderRadius: '50%',
          background: '#222',
          boxShadow: '0 0 12px #646cff',
          margin: '2rem auto',
          display: 'block',
        }}
      />
      <p>Als je deze avatar heen en weer ziet bewegen, werkt de animatie correct.</p>
    </div>
  );
}
