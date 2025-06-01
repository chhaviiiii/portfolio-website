import React, { useRef, useState } from "react";

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
    link: "https://github.com/chhaviiiii/Virtual-Reality-Experience-Recommendation-System",
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
  const [hoveringFirst, setHoveringFirst] = useState(false);
  const [hoveringSecond, setHoveringSecond] = useState(false);
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
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent mb-6 sm:mb-10 text-left pl-4 sm:pl-8 md:pl-20">
          My Projects
        </h2>
        <div
          ref={carouselRef}
          className={`flex ${hoveringFirst ? "overflow-x-auto" : "overflow-x-hidden"} gap-6 sm:gap-10 md:gap-20 px-2 sm:px-6 md:px-12 hide-scrollbar`}
          onMouseEnter={() => setHoveringFirst(true)}
          onMouseLeave={() => setHoveringFirst(false)}
        >
          <div className="carousel-container scroll-left">
            {firstFiveProjects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[90vw] sm:min-w-[400px] md:min-w-[600px] max-w-[90vw] sm:max-w-[400px] md:max-w-[600px] bg-gradient-to-br from-40% to-black bg-opacity-30 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer"
                style={{ flex: "0 0 auto" }}
              >
              
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-5 text-center">
                  {project.title}
                </h3>
                <p className="text-white text-sm sm:text-base mb-2 sm:mb-3 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-5 justify-center mb-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-black bg-opacity-30 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full"
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
                className="min-w-[90vw] sm:min-w-[400px] md:min-w-[600px] max-w-[90vw] sm:max-w-[400px] md:max-w-[600px] bg-gradient-to-br from-40% to-black bg-opacity-30 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer"
                style={{ flex: "0 0 auto" }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-5 text-center">
                  {project.title}
                </h3>
                <p className="text-white text-sm sm:text-base mb-2 sm:mb-3 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-5 justify-center mb-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-black bg-opacity-30 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full"
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
        <div
          className={`flex ${hoveringSecond ? "overflow-x-auto" : "overflow-x-hidden"} gap-6 sm:gap-10 md:gap-20 px-2 sm:px-6 md:px-12 hide-scrollbar`}
          onMouseEnter={() => setHoveringSecond(true)}
          onMouseLeave={() => setHoveringSecond(false)}
        >
          <div className="carousel-container scroll-right">
            {nextFiveProjects.map((project, idx) => (
              <a
                key={`second-${idx}`}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[90vw] sm:min-w-[400px] md:min-w-[600px] max-w-[90vw] sm:max-w-[400px] md:max-w-[600px] bg-gradient-to-br from-40% to-black bg-opacity-30 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer"
                style={{ flex: "0 0 auto" }}
              >
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-5 text-center">
                  {project.title}
                </h3>
                <p className="text-white text-sm sm:text-base mb-2 sm:mb-3 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-5 justify-center mb-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-black bg-opacity-30 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full"
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
                className="min-w-[90vw] sm:min-w-[400px] md:min-w-[600px] max-w-[90vw] sm:max-w-[400px] md:max-w-[600px] bg-gradient-to-br from-40% to-black bg-opacity-30 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer"
                style={{ flex: "0 0 auto" }}
              >
              
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-5 text-center">
                  {project.title}
                </h3>
                <p className="text-white text-sm sm:text-base mb-2 sm:mb-3 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-5 justify-center mb-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-black bg-opacity-30 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full"
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