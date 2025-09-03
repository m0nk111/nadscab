import React, { useState } from "react";

export default function AvatarSpeakDemo() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setVideoUrl("");
    const formData = new FormData();
    formData.append("text", text);
    formData.append("image", image);
    try {
      const response = await fetch("/api/avatar_speak", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Server error");
      const blob = await response.blob();
      setVideoUrl(URL.createObjectURL(blob));
    } catch (err) {
      setError("Fout bij genereren video: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", padding: "2rem", border: "1px solid #eee", borderRadius: 8 }}>
      <h2>Avatar Speak Demo</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Tekst voor avatar:</label><br />
          <textarea value={text} onChange={e => setText(e.target.value)} rows={3} style={{ width: "100%" }} required />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Avatar afbeelding:</label><br />
          <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} required />
        </div>
        <button type="submit" disabled={loading}>Genereer sprekende avatar</button>
      </form>
      {loading && <p>Video wordt gegenereerd...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {videoUrl && (
        <div style={{ marginTop: "2rem" }}>
          <video src={videoUrl} controls width={400} />
        </div>
      )}
    </div>
  );
}
