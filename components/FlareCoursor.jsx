"use client";

import React, { useState, useEffect } from "react";

function CursorInsideCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      const target = e.target;
      setPosition({ x: e.clientX, y: e.clientY });
      setIsPointer(target.tagName === "A" || target.getAttribute("data-hover") === "true");
    };

    // Smooth trailing effect for the outer cursor using requestAnimationFrame
    const updateTrailPosition = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.05, // Smaller factor for smoother movement
        y: prev.y + (position.y - prev.y) * 0.05, // Even smoother lag
      }));
      
      animationFrameId = requestAnimationFrame(updateTrailPosition); // Request next frame
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Start the smooth trailing movement
    updateTrailPosition();

    return () => {
      cancelAnimationFrame(animationFrameId); // Clean up the animation frame when the component unmounts
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position]);

  const innerCursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: isPointer ? "scale(0.8)" : "scale(1)",
    backgroundColor: isPointer ? "rgba(240, 240, 240, 0.9)" : "rgba(200, 200, 200, 0.8)",
  };

  const outerCursorStyle = {
    left: `${trailPosition.x}px`,
    top: `${trailPosition.y}px`,
    transform: isPointer ? "scale(1.2)" : "scale(1)",
    borderColor: isPointer ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.4)",
  };

  return (
    <>
      <div className="inner-cursor" style={innerCursorStyle}></div>
      <div className="outer-cursor" style={outerCursorStyle}></div>
    </>
  );
}

export default CursorInsideCursor;
