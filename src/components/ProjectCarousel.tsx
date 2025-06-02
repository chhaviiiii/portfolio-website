import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    image: "/sb.png",
    title: "Your Search Box AI Powered Widget",
    description:
      "AI-powered search bar with voice and visual search, optimized with Next.js SSR for fast performance and platform integration with Shopify, WordPress, and Wix.",
    tools: ["React", "Next.js", "Node.js", "NLP", "AI"],
    link: "https://yoursearchbox.com/",
  }, 
   {
    image: "/ROBOT.png",
    title: "Autonomous Arduino Robot",
    description:
      "Multi-stage autonomous robot capable of wall following, line following, and 360° object detection using embedded systems and sensor fusion.",
    tools: ["Arduino", "C++", "PID", "Ultrasonic Sensors", "IR Sensors"],
    link: "https://github.com/chhaviiiii/COGS300"
  },
  {
    image: "/WEB.png",
    title: "Webability Compliance Website",
    description:
      "Accessibility widget ensuring ADA and WCAG 2.1 compliance with keyboard navigation, high contrast modes, and optimized performance.",
    tools: ["CSS", "ADA", "WCAG", "JavaScript"],
    link: "https://www.webability.io/",
  },
  {
    image: "/sc.png",
    title: "Starcrew Website",
    description:
      "UX research-driven responsive website built with Framer, featuring smooth animations and cross-browser compatibility.",
    tools: ["Framer", "CSS", "UX Research", "BrowserStack"],
    link: "https://starcrew.com"
  },
  {
    image: "/vph.png",
    title: "Vancouver Pizza Heaven",
    description:
      "UX researched website designed in Figma, coded in responsive HTML/CSS with SEO best practices and intuitive navigation.",
    tools: ["HTML", "CSS", "Figma", "SEO"],
    link: "https://vancouverpizzahaven.ca"
  },
  {
    image: "/vr.png",
    title: "Recommendation System for VR Experiences",
    description:
      "Recommendation engine using collaborative and content-based filtering with TensorFlow, improving VR experience suggestions by 20%.",
    tools: ["Python", "TensorFlow", "Jupyter", "Pandas"],
    link: "https://github.com/chhaviiiii/Virtual-Reality-Experience-Recommendation-System",
  },
];

const ProjectCarousel: React.FC = () => {
  return (
    <section className="w-full py-2">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent mb-6 sm:mb-10 text-left pl-4 sm:pl-8 md:pl-20"
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-12">
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ 
              duration: 0.5,
              delay: idx * 0.1
            }}
            className="group bg-[#23234f]/50 rounded-2xl shadow-lg p-4 sm:p-5 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(169,46,163,0.5)] hover:border hover:border-[#A92EA3]"
          >
            <div className="aspect-video w-full mb-3 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
              {project.title}
            </h3>
            <p className="text-white/80 text-xs sm:text-sm mb-3 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-1 text-xs bg-white/10 rounded-full text-white/80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectCarousel; 