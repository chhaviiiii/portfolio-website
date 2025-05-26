"use client";
import React from "react";

interface ThemeToggleProps {
  onClick: () => void;
  isLight: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onClick, isLight }) => (
  <button
    onClick={onClick}
    aria-label="Toggle theme"
    style={{
      width: 42,
      height: 42,
      flexShrink: 0,
      aspectRatio: "1/1",
      borderRadius: 200,
      background: `url(/sun.png) lightgray 50% / cover no-repeat`,
      border: "none",
      cursor: "pointer",
      boxShadow: isLight ? "0 0 0 2px #2222" : "0 0 0 2px #fff2",
      transition: "box-shadow 0.2s"
    }}
    className="fixed top-6 right-6 z-50"
  />
);

export default ThemeToggle; 