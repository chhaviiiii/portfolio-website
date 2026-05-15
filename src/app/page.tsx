"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import StackSection from "@/components/StackSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import CDPlayer from "@/components/CDPlayer";

const heroEnter = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-bg"
        >
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-28 text-center sm:px-8 sm:py-32">
            <div className="w-full max-w-xl">
              <motion.p
                {...heroEnter}
                transition={{ ...heroEnter.transition, delay: 0 }}
                className="text-xs font-medium uppercase tracking-[0.28em] text-text-muted sm:text-sm"
              >
                Fullstack Developer · UX Designer · ML Engineer
              </motion.p>
              <motion.h1
                id="hero-heading"
                {...heroEnter}
                transition={{ ...heroEnter.transition, delay: 0.1 }}
                className="mt-6 font-serif text-5xl font-normal leading-[1.05] tracking-tight text-text sm:mt-8 sm:text-6xl md:text-7xl"
              >
                Hi, I&apos;m{" "}
                <span className="whitespace-nowrap">
                  Chhavi <span aria-hidden>🌙</span>
                </span>
              </motion.h1>
              <motion.p
                {...heroEnter}
                transition={{ ...heroEnter.transition, delay: 0.25 }}
                className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-text-muted sm:mt-8 sm:text-lg"
              >
                I work across design, engineering, and machine learning to build
                accessible interfaces and research tooling. Fourth-year at UBC in
                Computer Science, Biology, and Cognitive Systems, currently
                interning at Mastercard.
              </motion.p>
              <motion.a
                href="https://www.linkedin.com/in/cnayyar/"
                target="_blank"
                rel="noopener noreferrer"
                {...heroEnter}
                transition={{ ...heroEnter.transition, delay: 0.4 }}
                className="mt-10 inline-flex items-center gap-2 border border-text px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent sm:mt-12"
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
              </motion.a>
            </div>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-28 border-b border-rule bg-bg py-24 sm:py-32 lg:scroll-mt-32"
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
                className="font-serif text-4xl font-medium tracking-tight text-text sm:text-5xl"
              >
                About
              </h2>
              <div className="mt-8 space-y-6 text-base leading-[1.75] text-text-muted sm:text-lg">
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
