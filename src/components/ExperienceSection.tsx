"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Mastercard",
    date: "Jan 2026 to Present",
    detail: "",
  },
  {
    role: "Automation Engineer",
    company: "UBC Extended Learning",
    date: "Sept 2025 to Present",
    detail:
      "Automated CSV survey workflows into structured PDF reports (~70% less manual work). Google Apps Script integrations for reminders and notifications; technical support for course operations.",
  },
  {
    role: "Web Designer",
    company: "UBC Michael Smith Laboratories",
    date: "July 2025 to Present",
    detail:
      "Graduate program site for Biochemistry and Molecular Biology / mass spectrometry training: user-focused IA, ongoing content and accessibility improvements.",
  },
  {
    role: "Machine Learning Engineer",
    company: "BC Cancer",
    date: "June 2025 to Dec 2025",
    detail:
      "Concept mapping in implementation science: qualitative analysis, open-source MDS/clustering pipeline, and ML methods to clarify themes around AI in healthcare.",
  },
  {
    role: "Machine Learning Researcher",
    company: "UBC Department of Computer Science",
    date: "April 2025 to Aug 2025",
    detail:
      "Deep learning (VTNet) on eye-tracking data in TensorFlow/PyTorch; HPC with Slurm; linear-algebra-heavy experimentation and model evaluation.",
  },
  {
    role: "Design Director",
    company: "UBC UX Hub",
    date: "April 2025 to Sept 2025",
    detail:
      "Led design initiatives, mentored juniors, aligned accessibility standards with research-backed UX practice across interdisciplinary teams.",
  },
  {
    role: "Design Assistant",
    company: "UBC Extended Learning",
    date: "Sept 2024 to Apr 2025",
    detail:
      "Canvas LMS course builds with faculty, graphic design for materials, and coordination for accessible, engaging launches.",
  },
  {
    role: "Software Engineer Intern",
    company: "TechyWeb Solutions",
    date: "Jan 2024 to Mar 2024",
    detail:
      "Python REST APIs, CI/CD, Agile delivery with Git/Jira; testing and performance-focused iteration.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 border-t border-rule bg-paper py-24 sm:py-32 lg:scroll-mt-32"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.h2
          id="experience-heading"
          {...fadeUp}
          className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl"
        >
          Experience
        </motion.h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
          Roles across teaching and learning, research labs, cancer research, and industry.
        </p>

        <ol className="mt-16">
          {experiences.map((exp, i) => (
            <motion.li
              key={`${exp.company}-${exp.role}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t border-rule first:border-t-0"
            >
              <div className="grid gap-6 py-10 md:grid-cols-[1fr_auto] md:items-start md:gap-12">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                    {exp.role}
                  </p>
                  <p className="mt-2 font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {exp.company}
                  </p>
                  {exp.detail ? (
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
                      {exp.detail}
                    </p>
                  ) : null}
                </div>
                <p className="text-sm tabular-nums text-ink-muted md:pt-1 md:text-right">
                  {exp.date}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
