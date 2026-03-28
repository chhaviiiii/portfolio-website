"use client";

import React from "react";
import { motion } from "framer-motion";

export type Publication = {
  title: string;
  subtitle?: string;
  authors: string;
  description: string;
  href: string;
  linkLabel?: string;
};

const publications: Publication[] = [
  {
    title:
      "Towards clinical implementation of artificial intelligence in cancer care",
    subtitle: "Concept mapping analysis of provincial workshop findings",
    authors:
      "Chhavi Nayyar, Hong Hao Xu, Alan T Bates, Cristina Conati, Daniel Hilbers, Jonathan Avery, Srinivas Raman, Ahmad Fayaz-Bakhsh, John-Jose Nunez",
    description:
      "Workshop study at the 2024 BC Cancer Summit (Vancouver): 48 participants generated 265 statements on benefits, concerns, and priorities for AI in cancer care. Concept mapping (MDS and hierarchical clustering) yielded two clusters—challenges/safeguards vs clinical benefits and efficiency—with higher importance and feasibility ratings for the latter. Results support a stakeholder-informed framework for prioritizing and sequencing AI implementation in cancer care.",
    href: "https://doi.org/10.64898/2026.03.26.26349205",
    linkLabel: "Read Paper",
  },
];

const PublicationsSection: React.FC = () => {
  return (
    <motion.section
      id="publications"
      className="mx-auto mt-32 w-full scroll-mt-28 sm:mt-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="mb-10 bg-gradient-to-r from-white to-pink-500 bg-clip-text pl-4 text-left text-3xl font-bold text-transparent sm:pl-8 sm:text-5xl md:pl-20 md:text-7xl">
        Publications
      </h2>

      <ul className="flex flex-col gap-6 px-4 sm:px-8 md:px-20">
        {publications.map((pub, i) => (
          <motion.li
            key={pub.title + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-[#A92EA3]/35 bg-gradient-to-br from-[#18181c]/90 to-[#A92EA3]/10 p-6 shadow-lg sm:p-8"
          >
            <h3 className="text-lg font-bold leading-snug text-white sm:text-xl md:text-2xl">
              {pub.title}
              {pub.subtitle ? (
                <span className="block pt-1 text-base font-semibold text-white/90 md:text-lg">
                  {pub.subtitle}
                </span>
              ) : null}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              {pub.authors}
            </p>
  
            <p className="mt-4 text-left text-base leading-relaxed text-white/85 sm:text-lg">
              {pub.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 sm:text-base"
              >
                {pub.linkLabel ?? "Read paper"}
              </a>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default PublicationsSection;
