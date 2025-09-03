import React, { useState } from 'react';

export default function SadTalkerDemo() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    const imageFile = e.target.image.files[0];
    const audioFile = e.target.audio.files[0];
    formData.append('image', imageFile);
    formData.append('audio', audioFile);
    try {
      const response = await fetch('/api/sadtalker', {
        method: 'POST',
        body: formData
      });
      if (!response.ok) throw new Error('Backend error');
      const blob = await response.blob();
      setVideoUrl(URL.createObjectURL(blob));
    } catch (err) {
      alert('Er ging iets mis met SadTalker: ' + err.message);
      setVideoUrl(null);
    }
    setLoading(false);
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
