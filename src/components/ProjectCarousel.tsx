import React, { useRef, useState, useEffect } from "react";

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
    image: "/web.png",
    title: "Webability Compliance Website",
    description:
      "Accessibility widget ensuring ADA and WCAG 2.1 compliance with keyboard navigation, high contrast modes, and optimized performance.",
    tools: ["CSS", "ADA", "WCAG", "JavaScript"],
    link: "https://www.webability.io/",
  },
  {
    image: "/robot.png",
    title: "Autonomous Arduino Robot",
    description:
      "Multi-stage autonomous robot capable of wall following, line following, and 360° object detection using embedded systems and sensor fusion.",
    tools: ["Arduino", "C++", "PID", "Ultrasonic Sensors", "IR Sensors"],
    link: "https://github.com/chhaviiiii/COGS300"
  },
  {
    image: "/re.png",
    title: "Raffles Educity Online Tool",
    description:
      "Responsive WordPress website integrated with accessibility widget for ADA and WCAG compliance, optimized for mobile devices.",
    tools: ["WordPress", "CSS", "HTML", "Accessibility"],
    link: "https://raffleseducity.com"
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
    link: "https://github.com/chhavi/vr-recommendation",
  },
  {
    image: "/fmm.png",
    title: "Finance Manager Desktop App",
    description:
      "Java Swing GUI application for managing personal finances with JSON-based data persistence and intuitive interface.",
    tools: ["Java", "Swing", "JSON"],
    link: "https://github.com/chhaviiiii/Finance-Manager",
  },

];

const ProjectCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const firstFiveProjects = projects.slice(0, 3);
  const nextFiveProjects = projects.slice(4, 8);


  return (
    <>
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .scroll-left {
          animation: scrollLeft 20s linear infinite;
        }
        
        .scroll-right {
          animation: scrollRight 20s linear infinite;
        }
        
        .scroll-left:hover, .scroll-right:hover {
          animation-play-state: paused;
        }
        
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .carousel-container {
          display: flex;
          width: 200%;
          will-change: transform;
        }

        .carousel-container:hover {
          cursor: pointer;
        }

        .carousel-container:active {
          cursor: pointer;
        }
      `}</style>
      <section className="w-full py-2">
        <h2 className="text-7xl min-h-40 md:text-8xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent mb-10 text-left md:pl-50">
          My Projects
        </h2>
        <div
          ref={carouselRef}
          className="flex overflow-hidden gap-[600px] px-6 md:px-40 hide-scrollbar"
        >
          <div className="carousel-container scroll-left">
            {firstFiveProjects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[600px] max-w-[600px] bg-gradient-to-br from-80% to-pink-500 bg-opacity-10 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer"
                style={{ flex: "0 0 auto" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-2xl mb-8 bg-gray-200"
                />
                <h3 className="text-2xl font-bold text-white mb-5 text-center">
                  {project.title}
                </h3>
                <p className="text-white text-base mb-3 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-5 justify-center mb-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-black bg-opacity-30 text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </a>
            ))}
            {firstFiveProjects.map((project, idx) => (
              <a
                key={`duplicate-${idx}`}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[600px] max-w-[600px] bg-gradient-to-br from-80% to-pink-500 bg-opacity-10 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer"
                style={{ flex: "0 0 auto" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-2xl mb-8 bg-gray-200"
                />
                <h3 className="text-2xl font-bold text-white mb-5 text-center">
                  {project.title}
                </h3>
                <p className="text-white text-base mb-3 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-5 justify-center mb-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-black bg-opacity-30 text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-8">
        <div className="flex overflow-hidden gap-[600px] px-6 md:px-40 hide-scrollbar">
          <div className="carousel-container scroll-right">
            {nextFiveProjects.map((project, idx) => (
              <a
                key={`second-${idx}`}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[600px] max-w-[600px] bg-gradient-to-br from-80% to-pink-500 bg-opacity-10 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer"
                style={{ flex: "0 0 auto" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-2xl mb-8 bg-gray-200"
                />
                <h3 className="text-2xl font-bold text-white mb-5 text-center">
                  {project.title}
                </h3>
                <p className="text-white text-base mb-3 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-5 justify-center mb-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-black bg-opacity-30 text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </a>
            ))}
            {nextFiveProjects.map((project, idx) => (
              <a
                key={`second-duplicate-${idx}`}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[600px] max-w-[600px] bg-gradient-to-br from-80% to-pink-500 bg-opacity-10 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer"
                style={{ flex: "0 0 auto" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-2xl mb-8 bg-gray-200"
                />
                <h3 className="text-2xl font-bold text-white mb-5 text-center">
                  {project.title}
                </h3>
                <p className="text-white text-base mb-3 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-5 justify-center mb-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-black bg-opacity-30 text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectCarousel; 