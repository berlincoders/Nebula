// nebula.js

// Wait for the DOM to be ready before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Create a scene
  const scene = new THREE.Scene();

  // Create a camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Create a WebGLRenderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Append the renderer to the DOM
  document.body.appendChild(renderer.domElement);

  // Create a sphere geometry
  const geometry = new THREE.SphereGeometry(5, 32, 32);

  // Create a basic material with color
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  // Create a mesh by combining the geometry and material
  const sphere = new THREE.Mesh(geometry, material);

  // Add the sphere to the scene
  scene.add(sphere);

  // Position the camera
  camera.position.z = 15;

  // Create an animation loop
  const animate = function () {
    requestAnimationFrame(animate);

    // Rotate the sphere
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    // Render the scene with the camera
    renderer.render(scene, camera);
  };

  // Start the animation loop
  animate();
});

// Note: This example uses the THREE.js library. Make sure to include it in your HTML file.
