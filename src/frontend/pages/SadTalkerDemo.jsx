import React, { useState } from 'react';

export default function SadTalkerDemo() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Dummy fetch
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4');
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', textAlign: 'center' }}>
      <h2>SadTalker Demo</h2>
      <form onSubmit={handleSubmit}>
        <input type='file' name='image' accept='image/*' required />
        <br /><br />
        <input type='file' name='audio' accept='audio/*' required />
        <br /><br />
        <button type='submit' disabled={loading}>Genereer Video</button>
      </form>
      {loading && <p>Video wordt gegenereerd...</p>}
      {videoUrl && (
        <video src={videoUrl} controls style={{ marginTop: '2rem', width: '100%' }} />
      )}
    </div>
  );
}
