import React, { useEffect, useState } from "react";

const STAR_COUNT = 100;
const STAR_MIN_SIZE = 1;
const STAR_MAX_SIZE = 3;
const STAR_MIN_OPACITY = 0.1;
const STAR_MAX_OPACITY = 0.8;
const STAR_MIN_DURATION = 4;
const STAR_MAX_DURATION = 6;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const StarsBackground: React.FC = () => {
  const [stars, setStars] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: STAR_COUNT }).map((_, i) => {
      const size = randomBetween(STAR_MIN_SIZE, STAR_MAX_SIZE);
      const top = randomBetween(0, 100);
      const left = randomBetween(0, 100);
      const opacity = randomBetween(STAR_MIN_OPACITY, STAR_MAX_OPACITY);
      const duration = randomBetween(STAR_MIN_DURATION, STAR_MAX_DURATION);
      const delay = randomBetween(0, 2);
      return (
        <div
          key={i}
          className="star"
          style={{
            width: size,
            height: size,
            top: `${top}%`,
            left: `${left}%`,
            opacity,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    });
    setStars(generatedStars);
  }, []);

  return (
    <div className="stars-bg">
      {stars}
      <style>{`
        .stars-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: star-blink linear infinite;
          box-shadow: 0 0 0.2px 0.5px white;
        }
        @keyframes star-blink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default StarsBackground;
