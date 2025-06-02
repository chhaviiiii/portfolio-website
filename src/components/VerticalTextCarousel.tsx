"use client";
import React, { useEffect, useState } from "react";

interface VerticalTextCarouselProps {
  phrases: string[];
  duration?: number; // ms to show each phrase
  className?: string;
  style?: React.CSSProperties;
}

const VerticalTextCarousel: React.FC<VerticalTextCarouselProps> = ({
  phrases,
  duration = 2000,
  className = "",
  style = {},
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1)) ;
    }, duration);
    return () => clearTimeout(timeout);
  }, [index, duration]);

  return (
    <div
      className={`relative overflow-hidden h-auto min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center justify-center w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center ${className}`}
      style={{ perspective: 600, ...style }}
    >
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.7s cubic-bezier(0.77,0,0.175,1)",
          transform: `rotateX(-${index * 90}deg)`,
        }}
      >
        {phrases.map((phrase, i) => (
          <div
            key={i}
            className="absolute w-full h-auto min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center justify-center top-0 font-bold text-2xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-center py-0"
            style={{
              transform: `rotateX(${i * 90}deg) translateZ(40px)`,
              lineHeight: "120%",
              letterSpacing: 0,
              backfaceVisibility: "hidden",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            {phrase}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTextCarousel; 