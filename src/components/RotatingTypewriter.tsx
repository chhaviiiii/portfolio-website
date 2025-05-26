"use client";
import React, { useEffect, useState } from "react";

interface RotatingTypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
}

const RotatingTypewriter: React.FC<RotatingTypewriterProps> = ({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1200,
  className = "",
}) => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = phrases[currentPhrase];

    if (!isDeleting && display.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplay(fullText.slice(0, display.length + 1));
      }, typingSpeed);
    } else if (isDeleting && display.length > 0) {
      timeout = setTimeout(() => {
        setDisplay(fullText.slice(0, display.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && display.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && display.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [display, isDeleting, currentPhrase, phrases, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className}>
      {display}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default RotatingTypewriter; 