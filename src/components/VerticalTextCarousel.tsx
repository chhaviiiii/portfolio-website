"use client";
import React, { useEffect, useRef, useState } from "react";

interface VerticalTextCarouselProps {
  phrases: string[];
  duration?: number; // ms to show each phrase
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_DURATION = 2000; // ms

const VerticalTextCarousel: React.FC<VerticalTextCarouselProps> = ({
  phrases,
  duration = 1000,
  className = "",
  style = {},
}) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, ANIMATION_DURATION);
    }, duration);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, duration, phrases.length]);

  return (
    <div className="relative h-[1.1em] overflow-hidden" style={style}>
      <div
        className={`will-change-transform transition-transform duration-[${ANIMATION_DURATION}ms] ease-in-out`}
        style={{
          transform: isAnimating ? "translateY(0%)" : "translateY(-150%)",
        }}
      >
        <div className={`w-full ${className}`}>
          {phrases[index]}
        </div>
        <div className={`w-full ${className}`}>
          {phrases[(index + 1) % phrases.length]}
        </div>
      </div>
    </div>
  );
};

export default VerticalTextCarousel; 