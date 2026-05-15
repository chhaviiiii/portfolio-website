"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

const projects = [
  {
    title: "CourseInsights",
    summary:
      "Automates and visualizes course survey data into PDF reports with an accessible instructor dashboard.",
    tools: ["Python", "Flask", "Pandas"],
    link: "https://cpp-production-7774.up.railway.app/",
  },
  {
    title: "BCPM Network",
    summary:
      "Program site for the BC Proteomics and Metabolomics Network: research, events, and resources with an accessible layout.",
    tools: ["Next.js", "Tailwind", "Vercel"],
    link: "https://www.bcpm-network.ca/",
  },
  {
    title: "Concept Mapping Tool",
    summary:
      "Open-source healthcare research tooling for MDS, clustering, and thematic maps from qualitative input.",
    tools: ["Python", "FastAPI", "Plotly"],
    link: "https://github.com/chhaviiiii/concept_mapping",
  },
  {
    title: "Autonomous Arduino Robot",
    summary:
      "Embedded robot with wall follow, line follow, and proximity sensing using sensor fusion and PID control.",
    tools: ["Arduino", "C++"],
    link: "https://github.com/chhaviiiii/COGS300",
  },
  {
    title: "Webability",
    summary:
      "Accessibility widget and compliance site emphasizing WCAG 2.1 patterns and keyboard-first interaction.",
    tools: ["JavaScript", "WCAG"],
    link: "https://www.webability.io/",
  },
  {
    title: "VR Recommendation System",
    summary:
      "Collaborative and content-based filtering for VR experiences using TensorFlow-backed workflows.",
    tools: ["Python", "TensorFlow"],
    link: "https://github.com/chhaviiiii/Virtual-Reality-Experience-Recommendation-System",
  },
];

function ProjectCard({
  project,
  featured,
  indexLabel,
}: {
  project: (typeof projects)[number];
  featured: boolean;
  indexLabel: string;
}) {
  return (
    <motion.article
      {...fadeUp}
      className={`group flex h-full flex-col border border-rule bg-card shadow-sm transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent hover:shadow-md focus-within:-translate-y-0.5 focus-within:border-accent focus-within:shadow-md ${
        featured ? "p-6 sm:p-8" : "p-5 sm:p-6"
      }`}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-0 flex-1 flex-col rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-paper"
      >
        <span className="font-mono text-xs tabular-nums text-ink-muted transition-colors group-hover:text-accent">
          {indexLabel}
        </span>
        <h3
          className={`mt-3 font-serif font-medium tracking-tight text-ink transition-colors group-hover:text-accent ${
            featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`mt-2 flex-1 leading-relaxed text-ink-muted transition-colors group-hover:text-ink ${
            featured
              ? "text-[13px] leading-relaxed sm:text-sm md:text-base"
              : "text-[13px] sm:text-sm"
          }`}
        >
          {project.summary}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tools.map((t) => (
            <li
              key={t}
              className="border border-rule px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-ink-muted transition-[border-color,color] duration-200 group-hover:border-accent/35 group-hover:text-ink"
            >
              {t}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-accent transition-colors group-hover:text-accent-hover sm:text-sm">
          Visit project
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </a>
    </motion.article>
  );
}

const layoutPattern: ("featured" | "pair")[] = [
  "featured",
  "pair",
  "featured",
  "pair",
];

export default function ProjectsSection() {
  let index = 0;
  let n = 1;
  const nextLabel = () => String(n++).padStart(2, "0");

  return (
    <section
      id="projects"
      className="scroll-mt-28 border-t border-rule bg-paper py-20 sm:py-28 lg:scroll-mt-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.h2
          id="projects-heading"
          {...fadeUp}
          className="max-w-2xl font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl"
        >
          Selected work
        </motion.h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
          Product, research tooling, and client sites: full stack and design-adjacent.
        </p>

        <div className="mt-12 flex flex-col gap-6 sm:mt-14 sm:gap-8 lg:gap-10">
          {layoutPattern.map((kind, row) => {
            if (kind === "featured") {
              const p = projects[index];
              index += 1;
              if (!p) return null;
              return (
                <div key={`f-${row}`} className="grid grid-cols-1">
                  <ProjectCard
                    project={p}
                    featured
                    indexLabel={nextLabel()}
                  />
                </div>
              );
            }
            const a = projects[index];
            const b = projects[index + 1];
            index += 2;
            if (!a) return null;
            return (
              <div
                key={`p-${row}`}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
              >
                <ProjectCard
                  project={a}
                  featured={false}
                  indexLabel={nextLabel()}
                />
                {b ? (
                  <ProjectCard
                    project={b}
                    featured={false}
                    indexLabel={nextLabel()}
                  />
                ) : null}
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center sm:mt-14">
          <a
            href="https://github.com/chhaviiiii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            More on GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
