import React, { useRef } from "react";

const projects = [
  {
    image: "your-image-url-1.jpg",
    title: "Your Search Box AI Powered Widget",
    description:
      "AI-powered search bar with voice and visual search, optimized with Next.js SSR for fast performance and platform integration with Shopify, WordPress, and Wix.",
    tools: ["React", "Next.js", "Node.js", "NLP", "AI"],
    link: "https://github.com/chhavi/your-search-box",
  },
  {
    image: "your-image-url-2.jpg",
    title: "Webability Compliance Website",
    description:
      "Accessibility widget ensuring ADA and WCAG 2.1 compliance with keyboard navigation, high contrast modes, and optimized performance.",
    tools: ["CSS", "ADA", "WCAG", "JavaScript"],
    link: "https://github.com/chhavi/webability",
  },
  {
    image: "your-image-url-3.jpg",
    title: "Vynix Dynamic Website",
    description:
      "Responsive data-driven UI using React and D3.js with real-time user heatmaps and ML model integration, boosting engagement by 35%.",
    tools: ["React", "Python", "ML", "D3.js"],
    link: "https://github.com/chhavi/vynix",
  },
  {
    image: "your-image-url-4.jpg",
    title: "Recommendation System for VR Experiences",
    description:
      "Recommendation engine using collaborative and content-based filtering with TensorFlow, improving VR experience suggestions by 20%.",
    tools: ["Python", "TensorFlow", "Jupyter", "Pandas"],
    link: "https://github.com/chhavi/vr-recommendation",
  },
  {
    image: "your-image-url-5.jpg",
    title: "Finance Manager Desktop App",
    description:
      "Java Swing GUI application for managing personal finances with JSON-based data persistence and intuitive interface.",
    tools: ["Java", "Swing", "JSON"],
    link: "https://github.com/chhavi/finance-manager",
  },
];

const ProjectCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className="w-full py-50">
        <h2 className="text-7xl min-h-40 md:text-8xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent mb-10 text-left md:pl-50">
          My Projects
        </h2>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-30 px-6 md:px-40 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-900"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[400px] max-w-xs bg-gradient-to-br from-40% to-purple-600 bg-opacity-10 rounded-2xl shadow-lg p-6 flex flex-col items-center snap-center transition-transform hover:scale-105 cursor-pointer"
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
      </section>
      {/* Second Carousel */}
      <section className="w-full py-8">
        <div
          className="flex overflow-x-auto gap-30 px-6 md:px-40 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-900"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projects.map((project, idx) => (
            <a
              key={"second-" + idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[400px] max-w-xs bg-gradient-to-br from-40% to-purple-600 bg-opacity-10 rounded-2xl shadow-lg p-6 flex flex-col items-center snap-center transition-transform hover:scale-105 cursor-pointer"
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
      </section>
    </>
  );
};

export default ProjectCarousel; 