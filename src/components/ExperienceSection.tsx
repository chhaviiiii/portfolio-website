import React, { useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    title: "Machine Learning Engineer",
    place: "UBC Computer Science",
    date: "Apr 2025 – Present",
    responsibilities: [
      "As a Machine Learning Engineer, I am responsible for conducting research under Dr. Cristina Conati at the Human-AI Interaction Lab, developing deep learning models (VTNet) for adaptive educational systems using eye-tracking data. I handle dataset preprocessing, scan path extraction, and model experimentation across within-task and across-task settings. I also design modular code architecture for high-performance computing workflows, including Slurm job templates and statistical analysis scripts to evaluate model accuracy and AUC variability on the UBC ML cluster."
    ]
  },
  {
    title: "Design Director",
    place: "UBC UX HUB",
    date: "April 2025 – Present",
    responsibilities: [
      "As Design Director at UBC UX Hub, I am responsible for leading the design team in creating user-centered projects and initiatives. I oversee design strategy, mentor junior designers, and ensure accessibility and usability standards are met across all deliverables. I collaborate closely with cross-disciplinary teams to integrate UX research and innovative design solutions, fostering a creative and inclusive environment that supports student learning and professional growth."
    ]
  },
  {
    title: "Design Assistant",
    place: "UBC Extended Learning",
    date: "Sept 2024 – Present",
    responsibilities: [
      "As a Design Assistant, I am responsible for designing and developing Learning Management System (LMS) course pages using HTML to enhance structure and visual clarity for micro-certificate programs. I conduct user research to identify usability issues and collaborate with cross-functional teams to implement design improvements that increase learner engagement."
    ]
  },
  {
    title: "Software Developer Intern",
    place: "TechyWeb Solutions",
    date: "Jan 2024 – Mar 2024",
    responsibilities: [
      "As a Software Developer Intern, I am responsible for developing and maintaining scalable web applications using modern frontend technologies. I implement APIs and contribute to service-oriented architecture to enhance system performance and modularity. Additionally, I optimize code for speed and accessibility, participate in continuous integration workflows, live deployments, and performance monitoring to ensure reliable user experiences."
    ]
  }
];

const ExperienceSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // Create an array of refs for each experience
  const refs = useMemo(
    () => experiences.map(() => React.createRef<HTMLLIElement>()),
    []
  );
  // Create an array of inView states for each ref
  const inViews = refs.map(ref => useInView(ref, { amount: 0.2, margin: "0px 0px -20% 0px" }));

  const handleClick = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <motion.section
      className="w-full mx-auto mt-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent mb-8 text-left pl-4 sm:pl-8 md:pl-20">
        Experience
      </h2>
      <ul className="divide-y divide-white/10 pl-4 sm:pl-8 md:pl-20 pr-4 sm:pr-8 md:pr-20">
        {experiences.map((exp, idx) => (
          <motion.li
            key={exp.title}
            ref={refs[idx]}
            animate={inViews[idx] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="bg-transparent"
          >
            <button
              className={`w-full text-left px-6 py-5 focus:outline-none flex flex-col gap-1 transition-colors rounded-xl
                ${openIdx === idx ? 'bg-white/5 shadow-[0_2px_24px_0_rgba(169,46,163,0.15)] ring-2 ring-pink-400/30' : 'hover:bg-white/2'}`}
              onClick={() => handleClick(idx)}
              aria-expanded={openIdx === idx}
              style={{ transition: 'box-shadow 0.3s, background 0.3s' }}
            >
              <span className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-between">
                {exp.title}
                <span className={`ml-2 transition-transform ${openIdx === idx ? 'rotate-90' : ''}`}>▶</span>
              </span>
              <span className="text-base sm:text-lg font-semibold text-white/80">{exp.place}</span>
              <span className="text-sm sm:text-base text-white/50">{exp.date}</span>
            </button>
            {openIdx === idx && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="px-8 pb-6 pt-1"
              >
                <div className="rounded-xl bg-gradient-to-br from-[#18181c]/80 to-[#A92EA3]/10 border border-[#A92EA3]/30 p-4 shadow-md">
                  <p className="text-base sm:text-lg text-white/90 text-justify">
                    {exp.responsibilities[0]}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default ExperienceSection; 