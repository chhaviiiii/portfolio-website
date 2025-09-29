import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    title: "Automation Engineer",
    place: "UBC Extended Learning",
    date: "Sept 2025 – Present",
    responsibilities: [
      "As an Automation Engineer, I created a platform that automates CSV survey responses into structured PDF reports, cutting manual processing time by 70%. I also developed Google Apps Script workflows integrated with Sheets to send automated reminders and notifications, improving response rates by 25%. Additionally, I provide technical and administrative support to ensure seamless integration of automated workflows into ongoing course operations."
    ]
  },

  {
    title: "Web Designer",
    place: "UBC Michael Smith Laboratories",
    date: "July 2025 – Present",
    responsibilities: [
      "As a Web Designer, I design a new program website for Biochemistry and Molecular Biology to support graduate training in mass spectrometry, ensuring a user-focused design across platforms and boosting user engagement by an estimated 40%. I also support ongoing content updates and continuous website improvements, reducing update turnaround time by 30% and improving information accessibility for stakeholders."
    ]
  },
  {
    title: "Machine Learning Engineer",
    place: "BC Cancer",
    date: "June 2025 – Dec 2025",
    responsibilities: [
      "As a Machine Learning Engineer, I support Concept Mapping research in Implementation Science by analyzing qualitative feedback from advisory members, contributing to a 40% improvement in thematic clarity. I assist in developing an open-source implementation of Concept Mapping’s final computational stage using MDS and hierarchical clustering, reducing manual processing time by 50%. I also explore unsupervised machine learning techniques to enhance the representation of diverse perspectives on AI deployment in healthcare, improving model interpretability by 35%."
    ]
  },
  {
    title: "Machine Learning Researcher",
    place: "UBC Department of Computer Science",
    date: "April 2025 – Aug 2025",
    responsibilities: [
      "As a Machine Learning Engineer, I design and implement deep learning models (VTNet) using TensorFlow and PyTorch to analyze eye-tracking data, improving predictive accuracy by 25%. I apply mathematical foundations in linear algebra and statistics for model tuning and Big-O complexity analysis. I lead high-performance computing experiments using Slurm, accelerating model training and deployment by 30%."
    ]
  },
  {
    title: "Design Director",
    place: "UBC UX Hub",
    date: "April 2025 – Sept 2025",
    responsibilities: [
      "As Design Director, I lead the design team in creating user-centered projects and initiatives, ensuring accessibility and usability standards across all deliverables. I mentor junior designers, oversee design strategy, and foster a collaborative, inclusive environment that supports creative and professional growth. I also collaborate with cross-disciplinary teams to integrate UX research into innovative design solutions."
    ]
  },
  {
    title: "Design Assistant",
    place: "UBC Extended Learning",
    date: "Sept 2024 – Apr 2025",
    responsibilities: [
      "As a Design Assistant, I design and build accessible, visually engaging courses on Canvas LMS in collaboration with faculty and instructional designers. I lead the graphic design of course materials, improving learner engagement by 40%. I coordinate project tasks and provide administrative support to ensure smooth course launches."
    ]
  },
  {
    title: "Software Engineer Intern",
    place: "TechyWeb Solutions",
    date: "Jan 2024 – Mar 2024",
    responsibilities: [
      "As a Software Engineer Intern, I developed RESTful APIs in Python and integrated CI/CD pipelines to streamline deployments. I collaborated in Agile teams using Git, Jira, and Confluence to deliver client-driven features. I improved code quality through testing, debugging, and performance optimization."
    ]
  }
]

  

const ExperienceItem: React.FC<{
  exp: typeof experiences[number];
  idx: number;
  openIdx: number | null;
  setOpenIdx: (idx: number | null) => void;
}> = ({ exp, idx, openIdx, setOpenIdx }) => {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { amount: 0.2, margin: "0px 0px -20% 0px" });
  const isOpen = openIdx === idx;

  return (
    <motion.li
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="bg-transparent"
    >
      <button
        className={`w-full text-left px-6 py-5 focus:outline-none flex flex-col gap-1 transition-colors rounded-xl
          ${isOpen ? 'bg-white/5 shadow-[0_2px_24px_0_rgba(169,46,163,0.15)] ring-2 ring-pink-400/30' : 'hover:bg-white/2'}`}
        onClick={() => setOpenIdx(isOpen ? null : idx)}
        aria-expanded={isOpen}
        style={{ transition: 'box-shadow 0.3s, background 0.3s' }}
      >
        <span className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-between">
          {exp.title}
          <span className={`ml-2 transition-transform ${isOpen ? 'rotate-90' : ''}`}>▶</span>
        </span>
        <span className="text-base sm:text-lg font-semibold text-white/80">{exp.place}</span>
        <span className="text-sm sm:text-base text-white/50">{exp.date}</span>
      </button>
      {isOpen && (
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
  );
};

const ExperienceSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

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
          <ExperienceItem
            key={exp.title}
            exp={exp}
            idx={idx}
            openIdx={openIdx}
            setOpenIdx={setOpenIdx}
          />
        ))}
      </ul>
    </motion.section>
  );
};

export default ExperienceSection; 