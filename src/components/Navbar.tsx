"use client";

import React, { useEffect, useState, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";

const SECTION_IDS = [
  "hero",
  "about",
  "stack",
  "projects",
  "publications",
  "experience",
] as const;

const navLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "/chhavinayyar_resume.pdf", external: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];
    if (nodes.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] }
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  const isActive = useCallback(
    (href: string) => {
      if (href.startsWith("#")) return active === href.slice(1);
      return false;
    },
    [active]
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-[padding,background-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-rule bg-paper/85 py-3 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-paper/70 py-5 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <a
          href="#hero"
          className="font-serif text-lg tracking-tight text-ink transition-colors hover:text-accent sm:text-xl"
        >
          Chhavi Nayyar
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-8">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`text-sm font-medium tracking-wide transition-colors ${
                      !item.external && isActive(item.href)
                        ? "text-accent"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded border border-rule px-3 py-2 text-sm font-medium text-ink"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            Menu
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-rule bg-paper px-5 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 text-base font-medium text-ink hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
