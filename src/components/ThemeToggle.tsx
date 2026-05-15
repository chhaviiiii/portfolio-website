"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

/** Shared with mobile Menu so control sizes stay aligned. */
export const headerControlButtonClass =
  "inline-flex h-9 items-center justify-center rounded border border-rule px-3 text-xs font-semibold leading-none tracking-wide text-text transition-colors hover:border-accent hover:text-accent";

type ThemeToggleProps = {
  /** Extra classes (e.g. min-width for the mobile header pair). */
  className?: string;
};

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const isDark = saved === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const applyTheme = useCallback((nextDark: boolean) => {
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem(STORAGE_KEY, nextDark ? "dark" : "light");
    setDark(nextDark);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const nextDark = !dark;

      const rect = e.currentTarget.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--click-x",
        `${rect.left + rect.width / 2}px`
      );
      document.documentElement.style.setProperty(
        "--click-y",
        `${rect.top + rect.height / 2}px`
      );

      if (!document.startViewTransition) {
        applyTheme(nextDark);
        return;
      }

      document.startViewTransition(() => {
        applyTheme(nextDark);
      });
    },
    [dark, applyTheme]
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
      className={`${headerControlButtonClass} ${className}`.trim()}
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
