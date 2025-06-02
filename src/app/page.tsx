"use client";

import Navbar from "../components/Navbar";
import TypeWriter from "../components/TypeWriter";
import SplashScreen from "../components/SplashScreen";
import StackSection from "../components/StackSection";
import VerticalTextCarousel from "../components/VerticalTextCarousel";
import ProjectCarousel from "../components/ProjectCarousel";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "@/components/Footer";
import CDPlayer from "../components/CDPlayer";
import PlasmaBackground from '@/components/PlasmaBackground';

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const [stackInView, setStackInView] = useState(false);


  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageInView, setImageInView] = useState(false);

  const stackRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const node = aboutSectionRef.current;
    if (!node) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Removed setShuffleStart since it's not defined and doesn't appear to be needed
          // for the about section intersection observer
        }
      },
      { threshold: 0.5 } // Adjust as needed
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const node = imageRef.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setImageInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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

  return (
    <>
      {showSplash && (
        <SplashScreen
          onFinish={() => {
            setShowSplash(false);
            window.scrollTo({ top: 0, behavior: "auto" });
          }}
        />
      )}
      <div
        className={`relative min-h-screen flex flex-col transition-colors duration-700 ${
        showSplash ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        style={{
          overflow: "hidden",
        }}
      >
        <PlasmaBackground />
        <div id="home" className= "relative z-10">
          <Navbar />
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-center w-full justify-center text-2xl sm:text-5xl md:text-7xl font-bold mb-6">
              <TypeWriter
                text="CHHAVI NAYYAR"
                speed={150}
                className="text-white text-transparent hidden"
              />
            </h1>
            <p className="text-lg sm:text-2xl max-w-2xl mb-8 text-black/80 dark:text-white/80">

            </p>
          </main>
          <section 
            ref={aboutSectionRef}
            className="w-full flex justify-center mt-62 px-4 sm:px-8 md:px-20"
          >
            <div className="max-w-3xl w-full rounded-3xl p-1 text-center">
              <h2
                className="font-bold mb-6 text-white sm:text-2xl md:text-3xl min-h-[100px] sm:min-h-[120px] md:min-h-[150px]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "100%",
                  letterSpacing: 0,
                  marginTop: -30,
                }}
              >
                <div className="w-full flex justify-center">
                  <VerticalTextCarousel
                    phrases={[
                      "Fullstack Developer",
                      "UX/ UI Designer",
                      "ML Engineer",
                      "Certified Yapper",
                    ]}
                    className="text-white bg-clip-text text-transparent"
                  />
                </div>
              </h2>
              <h3
                className="text-xl sm:text-4xl md:text-4xl font-bold text-white mb-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  marginTop: 0,
                }}
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Chhavi
                </span>
                <span> 🌙</span>
              </h3>
              <p
                className="text-base sm:text-xl md:text-3xl text-white/90 mb-8 lg:mb-10 mx-auto"
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                A creative full-stack developer and design-driven engineer passionate about building accessible, performant web experiences. I love combining clean code with thoughtful design to create interfaces that work beautifully for everyone.
              </p>
              <a
                href="https://www.linkedin.com/in/cnayyar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 sm:mt-20 px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg md:px-10 md:py-4 md:text-lg rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-lg hover:scale-110 transition-transform flex items-center gap-3 mx-auto"
              >
                <span>Let&apos;s Connect!</span>
              </a>
            </div>
          </section>
         
          <section
            id="about"
            className="w-full flex flex-col md:flex-row justify-center items-center md:items-start mt-52 md:mt-150 px-4 sm:px-8 md:px-20 relative z-20"
          >
            <div className="w-full md:w-1/2 flex-1 mb-8 md:mb-0">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-pink-500 bg-clip-text text-transparent mb-6 text-left">
                About Me
              </h2>
              <ul className="text-base sm:text-lg md:text-2xl text-white/100 mb-8 md:mb-20 space-y-4 font-sans text-left" style={{ fontFamily: "Inter, sans-serif" }}>
                <li>🎓 Fourth-year Cognitive Systems &amp; Design student at UBC</li>
                <li>💻 Fullstack developer with experience in React, Next.js, Node.js, and accessibility-first design</li>
                <li>🔍 Detail-oriented with experience in UI/UX, A/B testing, and cross-functional collaboration</li>
                <li>⚙️ Familiar with ML workflows, backend APIs, and building scalable systems</li>
                <li>🚀 Worked on AI-powered tools, accessibility widgets, and data-driven web apps</li>
                <li>🌱 Always learning, currently exploring MLOps and advanced system design</li>
              </ul>
            </div>
            {/* Right: Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-20">
              <img
                ref={imageRef}
                src="/self.png"
                alt="Chhavi Nayyar"
                className={`object-cover rounded-2xl shadow-lg border-4 border-pink-400 transition-all duration-1000 w-full max-w-xs sm:max-w-md md:max-w-lg max-h-[40vh] ${
                  imageInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                style={{ position: 'relative', zIndex: 20 }}
              />
            </div>
          </section>
          
          <section
            id="stack"
            className={`w-full flex  justify-center px-0 mt-12 transition-all duration-700 ${stackInView ? "opacity-100" : "opacity-100"}`}
          >
            <StackSection />
          </section>
          
          <section id="projects" className="w-full flex justify-center mt-70">
              {/* Projects content */}
              
          </section>
          <ProjectCarousel />
          <div className="w-full flex justify-center mt-10 sm:mt-20">
            <a
              href="https://github.com/chhaviiiii"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg md:px-10 md:py-4 md:text-lg rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-lg hover:scale-110 transition-transform flex items-center gap-3"
            >
              <span>More on Github</span>
            </a>
          </div>
          <section id="experience" className="w-full flex justify-center mt-4">
              {/* Experience content */}
          </section>
          <ExperienceSection />
        </div>
      </div>
      <CDPlayer />
      <Footer />
    </>
  );
}
