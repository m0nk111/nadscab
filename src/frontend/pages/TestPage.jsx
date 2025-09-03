import React from "react";

export default function TestPage() {
  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "2rem", border: "1px solid #eee", borderRadius: 8 }}>
      <h2>Testpagina</h2>
      <p>Hier kun je frontend en backend tests uitvoeren, debuggen en resultaten bekijken.</p>
      <ul>
        <li>Unit tests</li>
        <li>Integratie tests</li>
        <li>Live API checks</li>
        <li>Frontend rendering checks</li>
      </ul>
      <p>Breid deze pagina uit met testcomponenten of testresultaten naar wens.</p>
    </div>
  );
}
