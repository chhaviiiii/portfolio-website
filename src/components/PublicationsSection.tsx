"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

type Publication = {
  title: string;
  subtitle: string;
  authors: string;
  note?: string;
  journal: string;
  abstract: string;
  doi: string;
  doiLabel: string;
  url: string;
  published: string;
};

const publications: Publication[] = [
  {
    title:
      "Towards clinical implementation of artificial intelligence in cancer care",
    subtitle: "Concept mapping analysis of provincial workshop findings",
    authors:
      "Chhavi Nayyar, Hong Hao Xu, Daniel Hilbers, Jonathan Avery, Srinivas Raman, Alan T Bates, Cristina Conati, Ahmad Fayaz-Bakhsh, John-Jose Nunez",
    note: "Nayyar and Xu contributed equally (co-first authors)",
    journal: "Implementation Science Communications (2026)",
    abstract:
      "Workshop at the 2024 BC Cancer Summit (Vancouver): 48 participants produced 265 statements on AI in cancer care. Concept mapping identified two clusters (challenges and safeguards versus clinical benefits and efficiency), with higher importance and feasibility for the latter, offering a stakeholder-informed framework for implementation sequencing.",
    doi: "https://doi.org/10.1186/s43058-026-01075-x",
    doiLabel: "10.1186/s43058-026-01075-x",
    url: "https://link.springer.com/article/10.1186/s43058-026-01075-x",
    published: "Published 14 August 2026",
  },
];

export default function PublicationsSection() {
  return (
    <section
      id="publications"
      className="scroll-mt-28 border-t border-rule bg-bg py-24 sm:py-32 lg:scroll-mt-32"
      aria-labelledby="publications-heading"
    >
      <div className="mx-auto max-w-3xl px-5 max-sm:pr-[5.5rem] sm:px-8 lg:px-10">
        <motion.h2
          id="publications-heading"
          {...fadeUp}
          className="font-serif text-4xl font-medium tracking-tight text-text sm:text-5xl"
        >
          Publications
        </motion.h2>

        <div className="mt-14 space-y-16">
          {publications.map((publication) => (
            <motion.article
              key={publication.doi}
              {...fadeUp}
              className="border-l-2 border-accent pl-6 sm:pl-8"
            >
              <h3 className="font-serif text-2xl font-normal leading-snug tracking-tight text-text sm:text-3xl">
                {publication.title}
                <span className="mt-2 block text-xl text-text-muted sm:text-2xl">
                  {publication.subtitle}
                </span>
              </h3>

              <p className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-text-muted leading-relaxed">
                {publication.authors}
              </p>

              {publication.note && (
                <p className="mt-2 text-xs italic text-text-muted">
                  {publication.note}
                </p>
              )}

              <p className="mt-2 text-sm italic text-text-muted">
                {publication.journal}
              </p>

              <p className="mt-8 text-base leading-[1.75] text-text-muted sm:text-lg">
                {publication.abstract}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                <p className="text-sm text-text">
                  <span className="font-semibold uppercase tracking-wider">
                    DOI
                  </span>
                  <a
                    href={publication.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-accent underline-offset-4 hover:underline"
                  >
                    {publication.doiLabel}
                  </a>
                </p>
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  Read full text
                  <span aria-hidden>↗</span>
                </a>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-text-muted">
                {publication.published}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
