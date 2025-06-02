"use client";
import React from "react";
import { motion } from "framer-motion";

const stackCategories = {
  frontend: [
    { name: "React", icon: "/react.svg" },
    { name: "Next.js", icon: "/next.svg" },
    { name: "Angular", icon: "/angular.svg" },
    { name: "HTML", icon: "/html.svg" },
    { name: "JS", icon: "/js.svg" },
    { name: "Typescript", icon: "/typescript.svg" },
    { name: "Tailwind-CSS", icon: "/tailwind.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/node.svg" },
    { name: "Python", icon: "/python.svg" },
    { name: "MongoDB", icon: "/mongo.svg" },
    { name: "MySQL", icon: "/sql.svg" },
    { name: "C++", icon: "/c++.svg" },
    { name: "Pytorch", icon: "/pytorch.svg" },
  ],
  tools: [
    { name: "Git", icon: "/git.svg" },
    { name: "Github", icon: "/github.svg" },
    { name: "VSCode", icon: "/vscode.svg" },
    { name: "Linux", icon: "/linux.svg" },
    { name: "Bash", icon: "/bash.svg" },
    { name: "JSON", icon: "/json.svg" },
  ],
  design: [
    { name: "Figma", icon: "/figma.svg" },
    { name: "Adobe", icon: "/adobe.svg" },
    { name: "Invision", icon: "/invision.svg" },
  ],
};

const StackSection: React.FC = () => (
  <section className="w-full mx-auto">
    <div className="mx-auto mt-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent mb-6 sm:mb-10 text-left pl-4 sm:pl-8 md:pl-20"
      >
        Tech Stack
      </motion.h2>
      
      {Object.entries(stackCategories).map(([category, items]) => (
        <div key={category} className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-white mb-6 pl-4 sm:pl-8 md:pl-20 capitalize"
          >
            {category}
          </motion.h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center">
            {items.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.05
                }}
                className="relative bg-[#23234f]/50 rounded-xl p-3 shadow-lg flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(169,46,163,0.5)] hover:border hover:border-[#A92EA3] w-[100px] h-[100px]"
              >
                <div className="w-14 h-14 flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(0,225,120,0.5)]"
                  />
                </div>
                <span className="mt-1 text-xs text-white text-opacity-80 text-center line-clamp-1 w-full">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StackSection;