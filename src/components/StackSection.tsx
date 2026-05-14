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
      className="scroll-mt-28 border-t border-rule bg-paper py-24 sm:py-32 lg:scroll-mt-32"
      aria-labelledby="stack-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.h2
          id="stack-heading"
          {...fadeUp}
          className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl"
        >
          Stack
        </motion.h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
          Technologies and tools used in production and coursework.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {categories.map((cat) => (
            <motion.div key={cat.label} {...fadeUp}>
              <h3 className="border-b border-rule pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                {cat.label}
              </h3>
              <ul className="mt-6 space-y-1">
                {cat.items.map((tech) => (
                  <li key={tech.name}>
                    <button
                      type="button"
                      className="group flex w-full cursor-default items-center gap-3 rounded-md border border-transparent px-2 py-2 text-left -mx-2 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-px hover:border-rule hover:bg-card focus-visible:-translate-y-px focus-visible:border-rule focus-visible:bg-card focus-visible:outline-none"
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
                      <span className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
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
