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
      className={`relative overflow-hidden h-[120px] flex items-center justify-start w-full ${className} text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl text-left`}
      style={{ perspective: 600, ...style }}
    >
      <div
        className="w-full h-full flex items-center justify-start"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.7s cubic-bezier(0.77,0,0.175,1)",
          transform: `rotateX(-${index * 90}deg)`,
        }}
      >
        {phrases.map((phrase, i) => (
          <div
            key={i}
            className="absolute w-full h-[120px] flex items-center sm:justify-center md:justify-start md:left-6 top-0 font-bold text-base sm:text-5xl md:text-3xl lg:text-5xl xl:text-6xl text-lef py-0"
            style={{
              transform: `rotateX(${i * 90}deg) translateZ(40px)`,
              lineHeight: "100%",
              letterSpacing: 0,
              backfaceVisibility: "hidden",
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