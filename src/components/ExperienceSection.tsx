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
    role: "AI / XAI Developer",
    company: "BC Cancer",
    date: "Aug 2026 to Present",
    current: true,
    detail:
      "Cancer Care Navigation Assistant, funded by the Canadian Cancer Society: a patient-partner portal with full-text search over a 951-page resource database, and explainable-AI methods so clinicians and patients can interpret model decisions.",
  },
  {
    role: "Software Engineer Intern",
    company: "Mastercard",
    date: "May 2026 to Aug 2026",
    detail:
      "Decision Intelligence on the Decision Management Platform: transaction-processing services, and production fraud-detection pipelines on Docker, Terraform, and AWS, with dashboards for the engineering team.",
  },
  {
    role: "Teaching Assistant",
    company: "UBC Computer Science & Cognitive Science",
    date: "Jan 2026 to Apr 2026",
    detail:
      "Graduate TA for Human-Centered AI (CPSC 532C/554C); undergraduate instruction and labs for COGS 300 and COGS 303.",
  },
  {
    role: "Automation Engineer",
    company: "UBC Extended Learning",
    date: "Sept 2025 to Apr 2026",
    detail:
      "Automated CSV survey workflows into structured PDF reports (~70% less manual work). Google Apps Script integrations for reminders and notifications; technical support for course operations.",
  },
  {
    role: "Web Designer",
    company: "UBC Michael Smith Laboratories",
    date: "July 2025 to Apr 2026",
    detail:
      "Graduate program site for Biochemistry and Molecular Biology / mass spectrometry training: user-focused IA, ongoing content and accessibility improvements.",
  },
  {
    role: "Machine Learning Engineer",
    company: "BC Cancer",
    date: "June 2025 to Dec 2025",
    detail:
      "Concept mapping in implementation science: unsupervised models improved thematic pattern detection by about 40%, and an open-source MDS/clustering toolkit cut manual analysis time by about 50%.",
  },
  {
    role: "Machine Learning Researcher",
    company: "UBC Department of Computer Science",
    date: "April 2025 to Aug 2025",
    detail:
      "Deep learning (VTNet) on eye-tracking data in TensorFlow/PyTorch, about a 25% gain in predictive accuracy. Slurm HPC sped training pipelines by about 30%.",
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
      className="scroll-mt-28 border-t border-rule bg-bg py-24 sm:py-32 lg:scroll-mt-32"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.h2
          id="experience-heading"
          {...fadeUp}
          className="font-serif text-4xl font-medium tracking-tight text-text sm:text-5xl"
        >
          Experience
        </motion.h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
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
              <div className="group -mx-2 rounded-md border border-transparent px-2 py-10 transition-[border-color,background-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent hover:bg-card hover:shadow-md sm:-mx-3 sm:px-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted transition-colors duration-200 group-hover:text-accent">
                  {exp.role}
                </p>
                <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="min-w-0 font-serif text-2xl font-semibold tracking-tight text-text transition-colors duration-200 group-hover:text-accent sm:text-3xl">
                    {exp.company}
                  </p>
                  <p className="flex shrink-0 items-center gap-2 text-sm tabular-nums text-text-muted transition-colors duration-200 group-hover:text-accent">
                    {"current" in exp && exp.current ? (
                      <span className="rounded-full border border-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                        Now
                      </span>
                    ) : null}
                    {exp.date}
                  </p>
                </div>
                {exp.detail ? (
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted transition-colors duration-200 group-hover:text-text">
                    {exp.detail}
                  </p>
                ) : null}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
