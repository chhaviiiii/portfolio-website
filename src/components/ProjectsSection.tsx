"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

const projects = [
  {
    title: "Cancer Care Navigator",
    summary:
      "Patient-partner portal for BC Cancer over a 951-page resource database: full-text and smart search, filterable columns, and a moderation queue for partner-submitted edits. Explainable-AI work sits alongside it so clinical decisions are easier to interpret.",
    tools: ["Search", "XAI"],
    note: "In use at BC Cancer",
  },
  {
    title: "Your Search Box",
    summary:
      "Live search product that answers from a site's own documents and pages, with voice, image, and text input and a one-line embed.",
    tools: ["TypeScript", "Next.js", "Node.js"],
    link: "https://yoursearchbox.com/",
    image: "/work/your-search-box.png",
    imageAlt:
      "Your Search Box homepage, with a cited answer and an audit trail of indexed sources",
  },
  {
    title: "BCPM Network",
    summary:
      "Program site for the BC Proteomics and Metabolomics Network: research, events, and resources with an accessible layout.",
    tools: ["Next.js", "Tailwind", "Vercel"],
    link: "https://www.bcpm-network.ca/",
    image: "/work/bcpm-network.png",
    imageAlt:
      "BCPM Network homepage with the proteomics and metabolomics heading over a lab photograph",
  },
  {
    title: "Concept Mapping Tool",
    summary:
      "Open-source healthcare research tooling for MDS, clustering, and thematic maps. Unsupervised models improved pattern detection by about 40% and cut manual analysis time by about 50%.",
    tools: ["Python", "FastAPI", "Plotly"],
    link: "https://github.com/chhaviiiii/concept_mapping",
  },
  {
    title: "Webability",
    summary:
      "Accessibility platform with a Playwright and axe-core scanner, custom WCAG 2.1 and 2.2 checks, and generated fixes.",
    tools: ["TypeScript", "Playwright", "WCAG"],
    link: "https://www.webability.io/",
    image: "/work/webability.png",
    imageAlt:
      "Webability homepage introducing an accessibility compliance tool with WCAG checks and AI fixes",
  },
  {
    title: "CourseInsights",
    summary:
      "Automates course survey data into PDF reports and an instructor dashboard, cutting manual processing by about 70%.",
    tools: ["Python", "Flask", "Pandas"],
    link: "https://cpp.fly.dev",
    image: "/work/courseinsights.png",
    imageAlt:
      "CourseInsights upload screen for a Qualtrics CSV, with instructor and course-section report options",
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
  const body = (
    <>
      {"image" in project && project.image ? (
        <div
          className={`relative overflow-hidden bg-bg ${
            featured
              ? "order-first aspect-[16/10] md:order-last md:aspect-auto md:h-full md:min-h-[280px]"
              : "aspect-[16/10]"
          }`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover object-top"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, 40vw"
            }
          />
        </div>
      ) : null}
      <div
        className={`flex min-h-0 flex-1 flex-col ${
          featured ? "p-6 sm:p-8" : "p-5 sm:p-6"
        }`}
      >
        <span className="font-mono text-xs tabular-nums text-text-muted transition-colors group-hover:text-accent">
          {indexLabel}
        </span>
        <h3
          className={`mt-3 font-serif font-medium tracking-tight text-text transition-colors group-hover:text-accent ${
            featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`mt-2 flex-1 leading-relaxed text-text-muted transition-colors group-hover:text-text ${
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
              className="border border-rule px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-text-muted transition-[border-color,color] duration-200 group-hover:border-accent/35 group-hover:text-text"
            >
              {t}
            </li>
          ))}
        </ul>
        {"link" in project && project.link ? (
          <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-accent transition-colors group-hover:text-accent-hover sm:text-sm">
            Visit project
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </span>
        ) : "note" in project && project.note ? (
          <span className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
            {project.note}
          </span>
        ) : null}
      </div>
    </>
  );

  const frame = `flex min-h-0 flex-1 flex-col rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg dark:focus-visible:ring-offset-bg ${
    "image" in project && project.image && featured ? "md:grid md:grid-cols-2" : ""
  }`;

  return (
    <motion.article
      {...fadeUp}
      className="group flex h-full flex-col overflow-hidden border border-rule bg-card shadow-sm transition-[border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent hover:shadow-md focus-within:-translate-y-0.5 focus-within:border-accent focus-within:shadow-md"
    >
      {"link" in project && project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={frame}
        >
          {body}
        </a>
      ) : (
        <div className={frame}>{body}</div>
      )}
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
      className="scroll-mt-28 border-t border-rule bg-bg py-20 sm:py-28 lg:scroll-mt-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.h2
          id="projects-heading"
          {...fadeUp}
          className="max-w-2xl font-serif text-4xl font-medium tracking-tight text-text sm:text-5xl"
        >
          Selected work
        </motion.h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
          Product, clinical, and research work.
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
