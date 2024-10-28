/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Basic scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e1622);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles without color
    const particleCount = 1000;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = [];
    const particleSizes = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions.push((Math.random() - 0.5) * 200); // x
      particlePositions.push((Math.random() - 0.5) * 200); // y
      particlePositions.push((Math.random() - 0.5) * 200); // z

      particleSizes.push(Math.random() * 0.5 + 0.1); // Random sizes for particles
    }

    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('size', new THREE.Float32BufferAttribute(particleSizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff, // Set all particles to white
      size: 0.3,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Mouse interaction effect
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0005;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0005;

      particles.rotation.x += (mouseY - particles.rotation.x) * 0.1;
      particles.rotation.y += (mouseX - particles.rotation.y) * 0.1;
    });

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', width: '100%', height: '100%' }} />;
};

export default ParticleBackground;
