"use client";
import React from "react";
import { motion } from "framer-motion";

const stackIcons = [
  { name: "Github", icon: "/github.svg" },
  { name: "Node.js", icon: "/node.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "MongoDB", icon: "/mongo.svg" },
  { name: "Bash", icon: "/bash.svg" },
  { name: "Python", icon: "/python.svg" },
  { name: "Pytorch", icon: "/pytorch.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "Figma", icon: "/figma.svg" },
  { name: "HTML", icon: "/html.svg" },
  { name: "Invision", icon: "/invision.svg" },
  { name: "Linux", icon: "/linux.svg" },
  { name: "JS", icon: "/js.svg" },
  { name: "Json", icon: "/json.svg" },
  { name: "MySQL", icon: "/sql.svg" },
  { name: "Typescript", icon: "/typescript.svg" },
  { name: "VScode", icon: "/vscode.svg" },
  { name: "Angular", icon: "/angular.svg" },
  { name: "TailwindCSS", icon: "/tailwind.svg" },
  { name: "Next.js", icon: "/next.svg" },
  { name: "C++", icon: "/c++.svg" },
  { name: "Adobe", icon: "/adobe.svg" },
];

const StackSection: React.FC = () => (
  <section className="w-full mx-auto">
    <div className="mx-auto mt-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent mb-6 sm:mb-10 text-left pl-4 sm:pl-8 md:pl-20"
      >
        Tech Stack
      </motion.h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
        {stackIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            viewport={{ amount: 0.3 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.05 // Reduced stagger delay for smoother exit
            }}
            className="relative bg-[#23234f]/50 rounded-xl p-4 shadow-lg flex flex-col items-center transition-transform duration-200 hover:scale-105"
          >
            <div className="absolute top-2 right-2"></div>
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 sm:w-20 sm:h-20 md:w-22 md:h-18 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(0,225,120,0.5)]"
            />
            <span className="mt-2 text-xs text-white text-opacity-80 text-center">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StackSection;