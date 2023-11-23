// nebula.js

import * as THREE from './three.module.js';

document.addEventListener('DOMContentLoaded', () => {
  // Set up the scene
  const scene = new THREE.Scene();

  // Set up the camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Set up the renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create an irregular sphere
  const geometry = new THREE.BufferGeometry(); // Use BufferGeometry
  const vertices = [];
  const radius = 2;
  const detail = 128;

  for (let i = 0; i <= detail; i++) {
    const phi = (i / detail) * Math.PI;
    for (let j = 0; j <= detail; j++) {
      const theta = (j / detail) * Math.PI * 2;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      vertices.push(x + (Math.random() - 0.5) * 2, y + (Math.random() - 0.5) * 2, z + (Math.random() - 0.5) * 2);
    }
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Add an animation loop
  const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the sphere randomly
    sphere.rotation.x += 0.005 * (Math.random() - 0.5);
    sphere.rotation.y += 0.005 * (Math.random() - 0.5);

    // Render the scene
    renderer.render(scene, camera);
  };

  // Start the animation loop
  animate();
});
