"use client";
import React, { useEffect, useState } from "react";
import TypeWriter from "./TypeWriter";
import Image from "next/image";

interface SplashScreenProps {
  onFinish: () => void;
}

const SPLASH_TEXT = "CHHAVI NAYYAR";
const TYPING_SPEED = 120; // ms per character
const FADE_OUT_DURATION = 700; // ms

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [done, setDone] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (done) {
      setFade(true);
      const timeout = setTimeout(() => {
        onFinish();
      }, FADE_OUT_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [done, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${fade ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="relative flex items-center justify-center w-full">
        <h1
          style={{ fontFamily: 'Inter', fontSize: 96 }}
          className="font-bold text-white text-[48px] sm:text-[72px] md:text-[96px] relative"
        >
         
          <TypeWriter
            text={SPLASH_TEXT}
            speed={TYPING_SPEED}
            className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent"
            onDone={() => setDone(true)}
          />
        </h1>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        @keyframes appear-disappear {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 1; }
        }
        .animate-appear-disappear {
          animation: appear-disappear 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen; 