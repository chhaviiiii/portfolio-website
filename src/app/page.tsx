"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import StackSection from "@/components/StackSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import CDPlayer from "@/components/CDPlayer";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const HERO_BG_OVERLAP_PX = 1;

function HeroCopy({ layer }: { layer: "base" | "accent" }) {
  const onAccent = layer === "accent";

  return (
    <>
      <p
        className={`text-xs font-medium uppercase tracking-[0.28em] sm:text-sm ${
          onAccent
            ? "text-[color:var(--hero-fg-on-accent)]/75"
            : "text-[color:var(--hero-fg-muted)]"
        }`}
      >
        Fullstack Developer · UX Designer · ML Engineer
      </p>
      <h1
        id={!onAccent ? "hero-heading" : undefined}
        className={`mt-6 font-serif text-5xl font-normal leading-[1.05] tracking-tight sm:mt-8 sm:text-6xl md:text-7xl ${
          onAccent
            ? "text-[color:var(--hero-fg-on-accent)]"
            : "text-[color:var(--hero-fg)]"
        }`}
      >
        Hi, I&apos;m Chhavi{" "}
        <span aria-hidden>🌙</span>
      </h1>
      <p
        className={`mx-auto mt-6 max-w-lg text-base leading-relaxed sm:mt-8 sm:text-lg ${
          onAccent
            ? "text-[color:var(--hero-fg-on-accent)]/80"
            : "text-[color:var(--hero-fg-muted)]"
        }`}
      >
        I work across design, engineering, and machine learning to build
        accessible interfaces and research tooling. Fourth-year at UBC in
        Computer Science, Biology, and Cognitive Systems, currently interning at
        Mastercard.
      </p>
      <a
        href="https://www.linkedin.com/in/cnayyar/"
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={onAccent ? -1 : undefined}
        className={`mt-10 inline-flex items-center gap-2 border px-5 py-2.5 text-sm font-medium transition-colors sm:mt-12 ${
          onAccent
            ? "border-[color:var(--hero-fg-on-accent)] text-[color:var(--hero-fg-on-accent)] hover:opacity-80"
            : "border-[color:var(--hero-fg)] text-[color:var(--hero-fg)] hover:border-accent hover:text-accent"
        }`}
      >
        <svg
          aria-hidden
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        LinkedIn
      </a>
    </>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let rect = hero.getBoundingClientRect();
    const measure = () => {
      rect = hero.getBoundingClientRect();
    };

    let raf = 0;
    let inside = false;
    let pendingClientX: number | null = null;
    let pendingClientY: number | null = null;

    const clamp = (v: number, min: number, max: number) =>
      Math.max(min, Math.min(max, v));

    const readSplitColors = () => {
      const styles = getComputedStyle(hero);
      return {
        accent: styles.getPropertyValue("--hero-split-accent").trim(),
        base: styles.getPropertyValue("--hero-split-base").trim(),
      };
    };

    const hideAccentSplit = () => {
      hero.style.setProperty("--hero-split-x-px", "0px");
      hero.style.setProperty("--hero-split-bg-x-px", "0px");
      hero.style.setProperty("--hero-split-cursor-x", "0");
      hero.setAttribute("data-split-active", "false");
    };

    const applySplit = (clientX: number, clientY: number) => {
      const xPx = clamp(clientX - rect.left, 0, rect.width);
      const yPx = clamp(clientY - rect.top, 0, rect.height);
      const xPct = rect.width > 0 ? (xPx / rect.width) * 100 : 0;
      const bgPx = Math.min(xPx + HERO_BG_OVERLAP_PX, rect.width);
      const { accent, base } = readSplitColors();

      hero.style.setProperty("--hero-split-cursor-x", String(xPct));
      hero.style.setProperty("--hero-split-x-px", `${xPx}px`);
      hero.style.setProperty("--hero-split-bg-x-px", `${bgPx}px`);
      hero.style.setProperty("--hero-split-cursor-x-px", `${xPx}px`);
      hero.style.setProperty("--hero-split-cursor-y-px", `${yPx}px`);
      hero.setAttribute("data-split-active", xPx > 0 ? "true" : "false");
      hero.style.setProperty(
        "--hero-split-dot-color",
        xPct <= 50 ? accent : base
      );
    };

    const updateVars = () => {
      raf = 0;
      if (!inside || pendingClientX == null || pendingClientY == null) return;
      applySplit(pendingClientX, pendingClientY);
    };

    const schedule = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(updateVars);
    };

    const refreshSplit = () => {
      measure();
      if (!inside || pendingClientX == null) {
        hideAccentSplit();
        return;
      }
      const y = pendingClientY ?? rect.top + rect.height / 2;
      applySplit(pendingClientX, y);
    };

    measure();
    hideAccentSplit();
    hero.style.setProperty("--hero-split-dot-opacity", "0");

    const onEnter = (e: MouseEvent) => {
      inside = true;
      measure();
      hero.style.setProperty("--hero-split-dot-opacity", "1");
      pendingClientX = e.clientX;
      pendingClientY = e.clientY;
      schedule();
    };

    const onMove = (e: MouseEvent) => {
      if (!inside) return;
      pendingClientX = e.clientX;
      pendingClientY = e.clientY;
      schedule();
    };

    const onLeave = () => {
      inside = false;
      pendingClientX = null;
      pendingClientY = null;
      hideAccentSplit();
      hero.style.setProperty("--hero-split-dot-opacity", "0");
    };

    hero.addEventListener("mouseenter", onEnter);
    hero.addEventListener("mousemove", onMove, { passive: true });
    hero.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", refreshSplit, { passive: true });

    const themeObserver = new MutationObserver(refreshSplit);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      hero.removeEventListener("mouseenter", onEnter);
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", refreshSplit);
      themeObserver.disconnect();
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main id="main">
        <section
          id="hero"
          aria-labelledby="hero-heading"
          ref={heroRef}
          className="relative flex min-h-[100dvh] cursor-none flex-col overflow-hidden"
          data-split-active="false"
        >
          <div
            aria-hidden
            className="heroSplitBackground pointer-events-none absolute inset-0"
          />

          <div aria-hidden className="heroSplitDot" />

          <motion.div
            {...fadeUp}
            className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-28 text-center sm:px-8 sm:py-32"
          >
            <div className="relative w-full max-w-xl">
              <div className="relative z-0 heroSplitBaseClip">
                <HeroCopy layer="base" />
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10 heroSplitAccentClip"
              >
                <HeroCopy layer="accent" />
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-28 border-b border-rule bg-paper py-24 sm:py-32 lg:scroll-mt-32"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16 lg:gap-24 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                id="about-heading"
                className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl"
              >
                About
              </h2>
              <div className="mt-8 space-y-6 text-base leading-[1.75] text-ink-muted sm:text-lg">
                <p>
                  I work across the stack and the design process: from IA and
                  prototypes in Figma to production TypeScript, Node services, and
                  data-heavy Python tooling. I care about WCAG-minded defaults,
                  readable code, and systems that still make sense six months later.
                </p>
                <p>
                  Recently that has meant course-automation platforms, open-source
                  concept-mapping software for health research, client sites in
                  Next.js and Framer, and ML engineering around qualitative and
                  eye-tracking datasets, including BC Cancer and UBC CS collaborations.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full max-w-md justify-self-center border border-rule bg-card md:max-w-none md:justify-self-end"
            >
              <Image
                src="/about.png"
                alt="Portrait of Chhavi Nayyar smiling in a car"
                fill
                className="object-cover object-center"
                sizes="(max-width:768px) 100vw, 40vw"
              />
            </motion.div>
          </div>
        </section>

        <StackSection />
        <ProjectsSection />
        <PublicationsSection />
        <ExperienceSection />
      </main>
      <Footer />
      <CDPlayer />
    </>
  );
}
