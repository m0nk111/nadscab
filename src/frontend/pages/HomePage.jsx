import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function HomePage() {
  const mountRef = useRef(null);
  const [status, setStatus] = useState('Idle');
  const [backendStatus, setBackendStatus] = useState('Idle');
  const wsRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(400, 400);
    mountRef.current.appendChild(renderer.domElement);

    // Simple avatar: sphere as head
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xf5c16c });
    const head = new THREE.Mesh(geometry, material);
    scene.add(head);

    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.35, 0.3, 0.9);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.35, 0.3, 0.9);
    scene.add(leftEye);
    scene.add(rightEye);

    // Light
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 2, 5);
    scene.add(light);

    // Idle animation met subtiele hoofdbeweging, knipperen en status
    let frame = 0;
    let blinkTimer = 0;
    function animate() {
      frame += 0.03;
      head.rotation.y = Math.sin(frame) * 0.1;
      head.position.y = Math.sin(frame * 0.5) * 0.05;
      // Simuleer knipperen
      blinkTimer += 0.03;
      if (Math.sin(blinkTimer * 2) > 0.95) {
        leftEye.scale.y = rightEye.scale.y = 0.3;
        setStatus('Blinking');
      } else {
        leftEye.scale.y = rightEye.scale.y = 0.9 + 0.1 * Math.abs(Math.sin(frame * 2));
        setStatus('Idle');
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // WebSocket verbinding voor live status updates
    wsRef.current = new WebSocket('ws://localhost:8000/ws');
    wsRef.current.onmessage = (event) => {
      setBackendStatus(event.data);
    };

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      if (wsRef.current) wsRef.current.close();
    };
  }, []);

  return (
    <div>
      <h1>AI Avatar Webapp</h1>
      <div ref={mountRef} />
      <p>Status (frontend animatie): <strong>{status}</strong></p>
      <p>Status (backend): <strong>{backendStatus}</strong></p>
      <p>The avatar is waiting for your question...</p>
    </div>
  );
}
