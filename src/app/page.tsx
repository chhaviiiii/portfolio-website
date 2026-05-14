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

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="flex min-h-[100dvh] flex-col border-b border-rule pt-24 sm:pt-28"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
            <motion.div {...fadeUp}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-ink-muted">
                Fullstack Developer · UX Designer · ML Engineer
              </p>
              <h1
                id="hero-heading"
                className="mt-8 max-w-3xl font-serif text-4xl font-normal leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl"
              >
                Hi, I&apos;m Chhavi{" "}
                <span aria-hidden>
                  🌙 ☀️
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
                Fourth-year at UBC in Cognitive Systems and Design, building
                accessible interfaces with React and Next.js, and shipping ML-backed
                workflows where research meets product.
              </p>
              <a
                href="https://www.linkedin.com/in/cnayyar/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex border border-ink px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>
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
                src="/self.png"
                alt="Portrait of Chhavi Nayyar"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 40vw"
                priority
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
