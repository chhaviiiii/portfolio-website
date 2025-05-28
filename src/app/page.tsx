"use client";

import Navbar from "../components/Navbar";
import TypeWriter from "../components/TypeWriter";
import SplashScreen from "../components/SplashScreen";
import ThemeToggle from "../components/ThemeToggle";
import StackSection from "../components/StackSection";
import VerticalTextCarousel from "../components/VerticalTextCarousel";
import ProjectCarousel from "../components/ProjectCarousel";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "@/components/Footer";
import StarsBackground from "@/components/StarsBackground";
import CustomCursor from "@/components/CustomCursor";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLight, setIsLight] = useState(false);
  const [showCircle1, setShowCircle1] = useState(false);
  const [showCircle2, setShowCircle2] = useState(false);
  const [stackInView, setStackInView] = useState(false);

  const handleThemeToggle = () => setIsLight((prev) => !prev);

  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageInView, setImageInView] = useState(false);

  const stackRef = useRef<HTMLDivElement | null>(null);

  // Show circles in sequence after splash, hide both on scroll
  useEffect(() => {
    let timeout2: NodeJS.Timeout;
    if (!showSplash) {
      setShowCircle1(true);
      timeout2 = setTimeout(() => setShowCircle2(true), 400);
    } else {
      setShowCircle1(false);
      setShowCircle2(false);
    }
    return () => clearTimeout(timeout2);
  }, [showSplash]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowCircle1(false);
        setShowCircle2(false);
      } else if (!showSplash) {
        setShowCircle1(true);
        setTimeout(() => setShowCircle2(true), 400);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSplash]);

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
      <ThemeToggle onClick={handleThemeToggle} isLight={isLight} />
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
          isLight
            ? "bg-white text-black"
            : "bg-black text-white"
        } ${showSplash ? "opacity-0 pointer-events-none" : "opacity-100 cursor-none"}`}
        style={{
          overflow: "hidden",
        }}
      >
        <CustomCursor />
        <StarsBackground />
        {/* Decorative circles with animation */}
        {!isLight && (
          <>
            <div
              style={{
                position: "absolute",
                width: 500,
                height: 500,
                top: 420,
                left: 250,
                borderRadius: 459,
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(211, 9, 137, 0.60) 37.27%, rgba(99, 10, 173, 0.60) 100%)",
                boxShadow: "0px 4px 4px 0px #D30989",
                zIndex: 1,
                transition: "opacity 1.2s cubic-bezier(0.4,0,0.2,1), transform 1.2s cubic-bezier(0.4,0,0.2,1)",
                opacity: showCircle1 ? 1 : 0,
                transform: showCircle1 ? "scale(1)" : "scale(0.8)",
              }}
              aria-hidden
            />
            <div
              style={{
                position: "absolute",
                width: 500,
                height: 500,
                top: 250,
                left: 380,
                borderRadius: 459,
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(99, 10, 173, 0.40) 34.62%, rgba(211, 9, 137, 0.40) 100%)",
                boxShadow: "0px 4px 4px 0px #FFF",
                zIndex: 1,
                transition: "opacity 1.2s cubic-bezier(0.4,0,0.2,1), transform 1.2s cubic-bezier(0.4,0,0.2,1)",
                opacity: showCircle2 ? 1 : 0,
                transform: showCircle2 ? "scale(1)" : "scale(0.8)",
              }}
              aria-hidden
            />
          </>
        )}
        <div id="home" className= "relative z-10">
          <Navbar />
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
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
            className="w-full flex justify-center mt-[240px]"
          >
            <div className="max-w-15xl rounded-3xl p-1 text-white text-left">
              <h2
                className="font-bold mb-10 text-white"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 74,
                  lineHeight: "100%",
                  letterSpacing: 0,
                  maxWidth: 1350,
                  marginLeft: 850,
                  marginTop: -60,
                }}
              >
                <VerticalTextCarousel
                  phrases={[
                    "Fullstack Developer",
                    "UX/ UI Designer",
                    "ML Engineer",
                    "Certified Yapper",
                  ]}
                  className="text-white bg-clip-text text-transparent"
                />
              </h2>
              <h3
  className="text-3xl md:text-4xl font-bold text-white mb-4"
  style={{
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    marginLeft: 850,
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
                className="text-xl md:text-2xl text-white/90 mb-10"
                style={{
                  fontFamily: "Inter, sans-serif",
                  maxWidth: 800,
                  marginLeft: 850,
                }}
              >
                A creative full-stack developer and design-driven engineer passionate about building accessible, performant web experiences. I love combining clean code with thoughtful design to create interfaces that work beautifully for everyone.
              </p>
              
              <a
                href="https://www.linkedin.com/in/cnayyar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 ml-[850px] px-13 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:scale-110 transition-transform flex items-center gap-3"
              >
              
                <span>Let&apos;s Connect!</span>
              </a>
             
            </div>
            
          </section>
         
          <section id="about" className="w-full flex justify-center mt-160">
            <div className="w-full max-w-20xl flex flex-col md:flex-row items-center md:items-start gap-1 px-60">
            
              <div  className="flex-1">
                <h2 className="text-4xl md:text-8xl font-bold bg-gradient-to-r from-white to-pink-500  bg-clip-text text-transparent mb-25 text-left">
                  About Me
                </h2>
                <ul className="text-4xl md:text-2xl text-white/100 mb-20 space-y-4 font-sans text-left" style={{ fontFamily: "Inter, sans-serif" }}>
                  <li>🎓 Fourth-year Cognitive Systems &amp; Design student at UBC</li>
                  <li>💻 Fullstack developer with experience in React, Next.js, Node.js, and accessibility-first design</li>
                  <li>🔍 Detail-oriented with experience in UI/UX, A/B testing, and cross-functional collaboration</li>
                  <li>⚙️ Familiar with ML workflows, backend APIs, and building scalable systems</li>
                  <li>🚀 Worked on AI-powered tools, accessibility widgets, and data-driven web apps</li>
                  <li>🌱 Always learning, currently exploring MLOps and advanced system design</li>
                </ul>
              </div>
              {/* Right: Image */}
              <div className="flex-1 flex justify-center md:justify-end">
                <img
                  ref={imageRef}
                  src="/self.png"
                  alt="Chhavi Nayyar"
                  className={`object-cover rounded-2xl shadow-lg border-4 border-pink-400 transition-all duration-1000
                    ${imageInView ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                  `}
                  style={{ maxWidth: 600, maxHeight: 700 }}
                />
              </div>
            </div>
          </section>
          
          <section
            id="stack"
            className={`transition-all duration-700 ${stackInView ? "opacity-100" : "opacity-100"}`}
          >
            <StackSection />
          </section>
          
          <section id="projects" className="w-full flex justify-center mt-70">
              {/* Projects content */}
              
          </section>
          <ProjectCarousel />
          <a
                href="https://github.com/chhaviiiii"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-20 ml-[1000px] px-13 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:scale-110 transition-transform flex items-center gap-3"
              >
              
                <span>More on Github</span>
              </a>
          <section id="experience" className="w-full flex justify-center mt-4">
              {/* Exoerience content */}
          </section>
          <ExperienceSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
