"use client";
import React, { useRef, useEffect, useState } from "react";

const stackData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "/react.png" },
      { name: "Next.js", icon: "/nextjs-icon.svg" },
      { name: "TypeScript", icon: "/ts.png" }, // Replace with correct icon if you have it
      { name: "Tailwind CSS", icon: "/tailwind-css.svg" }, // Replace with correct icon if you have it
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "/node-js.png" },
      { name: "Express.js", icon: "/express-js.png" },
      { name: "Firebase", icon: "/firebase.png" },
      { name: "C++", icon: "/c++.png" },
      { name: "Java", icon: "/java.jpg" },
    ],
  },
  {
    category: "ML & AI",
    skills: [
      { name: "Python", icon: "/python.png" },
      { name: "TensorFlow", icon: "/tensorflow.svg" },
      { name: "scikit-learn", icon: "/scikit-learn.png" },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", icon: "/figma.png" },
      { name: "Adobe XD", icon: "/adobe.png" },
      { name: "WCAG 2.1", icon: "/wcag.png" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "/git.png" },
      { name: "GitHub", icon: "/github.png" },
      { name: "Docker", icon: "/docker.png" },
      { name: "VS Code", icon: "/vs.png" },
      { name: "CI/CD", icon: "/ci:cd.png" },
    ],
  },
];

const iconFallback = (
  <span className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center text-white font-bold text-3xl">
    <span role="img" aria-label="tool">🛠️</span>
  </span>
);

const StackSection: React.FC = () => {
  const stackRef = useRef<HTMLDivElement | null>(null);
  const [stackInView, setStackInView] = useState(false);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [rowsInView, setRowsInView] = useState<boolean[]>(() => stackData.map(() => false));

  useEffect(() => {
    const node = stackRef.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setStackInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    rowRefs.current.forEach((node, idx) => {
      if (!node) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          setRowsInView(prev => {
            const updated = [...prev];
            updated[idx] = entry.isIntersecting;
            return updated;
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(node);
      observers.push(observer);
    });
    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section className="w-full flex justify-center mt-12 md:mt-32">
      <div className="w-full max-w-7xl flex flex-col px-4 sm:px-8 md:px-20">
        <h2 className="text-2xl sm:text-4xl md:text-7xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent mb-6 text-left pl-4 sm:pl-8 md:pl-20">
          My Stack
        </h2>
        <div
          ref={stackRef}
          className={`mt-8 transition-all duration-1000
            ${stackInView ? "opacity-100 scale-100" : "opacity-100 scale-90"}
          `}
        >
          {stackData.map((cat, idx) => (
            <div
              key={cat.category}
              ref={el => { rowRefs.current[idx] = el; }}
              className={`grid grid-cols-1 md:grid-cols-[minmax(300px,auto)_1fr] items-center w-full transition-all duration-1000 mb-6 md:mb-10
                ${rowsInView[idx] ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              `}
            >
              {/* Category Name */}
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent min-w-[200px] text-left pl-4 md:pl-1 mb-10 md:mb-10">
                {cat.category}
              </span>
              {/* Skills */}
              <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-8 md:gap-x-16 md:gap-y-16 flex-1 place-items-center`}>
                {cat.skills.map((skill) => (
                  <span key={skill.name} className="flex flex-col items-center justify-center gap-4 md:gap-6 text-white">
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white p-2" />
                    ) : (
                      iconFallback
                    )}
                    <span className="text-lg md:text-2xl font-bold text-center">{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
