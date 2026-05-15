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

const categories = [
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "/react.svg" },
      { name: "Next.js", icon: "/next.svg" },
      { name: "Angular", icon: "/angular.svg" },
      { name: "HTML", icon: "/html.svg" },
      { name: "JavaScript", icon: "/js.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tailwind.svg" },
    ],
  },
  {
    label: "Backend & data",
    items: [
      { name: "Node.js", icon: "/node.svg" },
      { name: "Python", icon: "/python.svg" },
      { name: "MongoDB", icon: "/mongo.svg" },
      { name: "MySQL", icon: "/sql.svg" },
      { name: "C++", icon: "/c++.svg" },
      { name: "PyTorch", icon: "/pytorch.svg" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", icon: "/git.svg" },
      { name: "GitHub", icon: "/github.svg" },
      { name: "VS Code", icon: "/vscode.svg" },
      { name: "Linux", icon: "/linux.svg" },
      { name: "Bash", icon: "/bash.svg" },
      { name: "JSON", icon: "/json.svg" },
    ],
  },
  {
    label: "Design",
    items: [
      { name: "Figma", icon: "/figma.svg" },
      { name: "Adobe", icon: "/adobe.svg" },
      { name: "InVision", icon: "/invision.svg" },
      { name: "Framer", icon: "/framer.svg" },
    ],
  },
];

export default function StackSection() {
  return (
    <section
      id="stack"
      className="scroll-mt-28 border-t border-rule bg-bg py-24 sm:py-32 lg:scroll-mt-32"
      aria-labelledby="stack-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.h2
          id="stack-heading"
          {...fadeUp}
          className="font-serif text-4xl font-medium tracking-tight text-text sm:text-5xl"
        >
          Stack
        </motion.h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
          Technologies and tools used in production and research.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {categories.map((cat) => (
            <motion.div key={cat.label} {...fadeUp}>
              <h3 className="border-b border-rule pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                {cat.label}
              </h3>
              <ul className="mt-6 grid grid-cols-3 gap-x-1 gap-y-2 md:flex md:flex-col md:gap-0 md:space-y-1">
                {cat.items.map((tech) => (
                  <li key={tech.name} className="min-w-0">
                    <button
                      type="button"
                      className="group flex h-full w-full flex-col items-center gap-1.5 rounded-md border border-transparent px-1 py-2 text-center transition-[border-color,background-color,transform] duration-200 hover:-translate-y-px hover:border-rule hover:bg-card focus-visible:-translate-y-px focus-visible:border-rule focus-visible:bg-card focus-visible:outline-none md:-mx-2 md:flex-row md:gap-3 md:px-2 md:py-2 md:text-left"
                    >
                      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-110">
                        <Image
                          src={tech.icon}
                          alt=""
                          width={32}
                          height={32}
                          className="object-contain opacity-90 transition-opacity group-hover:opacity-100"
                        />
                      </span>
                      <span className="line-clamp-2 text-[11px] font-medium leading-tight text-text transition-colors group-hover:text-accent md:line-clamp-none md:text-sm">
                        {tech.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
