"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

/** Shared with mobile Menu so control sizes stay aligned. */
export const headerControlButtonClass =
  "inline-flex h-9 items-center justify-center rounded border border-rule px-3 text-xs font-semibold leading-none tracking-wide text-ink transition-colors hover:border-accent hover:text-accent";

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

  const toggle = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      return next;
    });
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
      className={`${headerControlButtonClass} ${className}`.trim()}
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
