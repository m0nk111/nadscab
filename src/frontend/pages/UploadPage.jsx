import React, { useState } from 'react';

export default function UploadPage() {
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [previewAudio, setPreviewAudio] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImg(URL.createObjectURL(file));
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    setAudio(file);
    setPreviewAudio(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('audio', audio);
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Upload failed');
      alert('Files uploaded!');
    } catch (err) {
      alert('Error uploading files: ' + err.message);
    }
  };

  return (
    <div>
      <h2>Upload Avatar Photo & Voice</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="avatar-image">Avatar Image:</label>
        <input id="avatar-image" type="file" accept="image/*" onChange={handleImageChange} />
        {previewImg && <img src={previewImg} alt="Preview" width={120} />}
        <br />
        <label htmlFor="avatar-audio">Avatar Voice:</label>
        <input id="avatar-audio" type="file" accept="audio/*" onChange={handleAudioChange} />
        {previewAudio && <audio src={previewAudio} controls />}
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
