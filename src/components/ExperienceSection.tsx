import React, { useState, useEffect, useRef } from "react";

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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute('data-section-id');
          if (sectionId) {
            setVisibleSections(prev => ({
              ...prev,
              [sectionId]: entry.isIntersecting
            }));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (sectionId: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[sectionId] = el;
  };

  return (
    <section className="w-full flex flex-col md:flex-row justify-center items-start gap-12 py-60">
      {/* Left: Heading and job titles */}
      <div className="w-full md:w-1/2 flex flex-col">
        <h2 
          ref={setRef('title')}
          data-section-id="title"
          className={`text-7xl min-h-40 md:text-8xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent mb-10 text-left md:pl-50 transition-all duration-1000 ease-in-out transform ${
            visibleSections['title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Experience
        </h2>
        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.title}
              ref={setRef(`job-${idx}`)}
              data-section-id={`job-${idx}`}
              className={`p-8 min-h-40 rounded-2xl transition-all duration-1000 ease-in-out cursor-pointer transform ${
                visibleSections[`job-${idx}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className={`text-6xl font-bold mb-3 transition-all duration-500 md:pl-40 ${
                hoveredIdx === idx
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
                  : "text-white"
              }`}>
                {exp.title}
              </div>
              <div className={`text-xl font-semibold transition-all duration-500 md:pl-40 ${
                hoveredIdx === idx
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
                  : "text-white/60"
              }`}>
                {exp.place}
              </div>
              <div className="text-lg text-white/40 md:pl-40 mt-1">{exp.date}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Responsibilities */}
      <div 
        ref={setRef('responsibilities')}
        data-section-id="responsibilities"
        className={`w-full md:w-1/2 min-h-[1100px] flex items-center justify-left transition-all duration-1000 ease-in-out transform ${
          visibleSections['responsibilities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {hoveredIdx !== null && (
          <div className="relative p-6 mt-45 mr-54 rounded-2xl bg-[#000000] animate-border-trace">
            <p className="text-3xl text-white text-justify">
              {experiences[hoveredIdx].responsibilities[0]}
            </p>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease;
        }

        @keyframes border-trace {
          0% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        .animate-border-trace {
          position: relative;
        
          border: 5px solid transparent;
          background-clip: padding-box;
        }

        .animate-border-trace::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(90deg, #A92EA3 50%, transparent 50%);
          background-size: 200% 200%;
          border-radius: 1rem;
          animation: border-trace 2.3s linear infinite;
          z-index: -3;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection; 