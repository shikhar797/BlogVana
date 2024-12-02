"use client";
import { useRef, useEffect } from 'react';
import NET from 'vanta/dist/vanta.net.min'; // Vanta's NET background
import * as THREE from 'three'; // Vanta requires THREE.js

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (vantaRef.current) {
      // Initialize Vanta background effect for NET
      const vantaEffect = NET({
        el: vantaRef.current, // Attach the effect to the element
        THREE,
        color: 0x1e90ff, // Set color of the effect (blue)
        backgroundColor: 0x000000, // Set background color (black)
        showDots: true, // Enable dots in the background
        showLines: true, // Enable lines in the background
        maxDistance: 5, // Set the max distance for the lines
        spacing: 15, // Set spacing between lines and dots
        mouseControls: true, // Enable mouse controls for interaction
        touchControls: true, // Enable touch controls for mobile interaction
        zoom: 1, // Set zoom level for the background effect
      });

      // Clean up the effect when the component unmounts
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed top-0 left-0 w-full h-[200%] z-[-10]" // Set width to full, height to double for scrolling effect
      style={{
        backgroundPosition: 'center', // Keep the background centered
        backgroundSize: '100% 200%', // Stretch the background vertically for infinite effect
      }}
    />
  );
};

export default VantaBackground;
