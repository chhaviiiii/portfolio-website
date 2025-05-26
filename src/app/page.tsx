"use client";

import Navbar from "../components/Navbar";
import TypeWriter from "../components/TypeWriter";
import SplashScreen from "../components/SplashScreen";
import ThemeToggle from "../components/ThemeToggle";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLight, setIsLight] = useState(false);
  const [showCircle1, setShowCircle1] = useState(false);
  const [showCircle2, setShowCircle2] = useState(false);
  const [showCircles, setShowCircles] = useState(true);
  const [shuffleStart, setShuffleStart] = useState(false);
  const [showFullStack, setShowFullStack] = useState(false);

  const handleThemeToggle = () => setIsLight((prev) => !prev);

  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageInView, setImageInView] = useState(false);

  const stackRef = useRef<HTMLDivElement | null>(null);
  const [stackInView, setStackInView] = useState(false);

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
          setTimeout(() => setShuffleStart(false), 700);
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
        } ${showSplash ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        style={{
          overflow: "hidden",
        }}
      >
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
        <div className="relative z-10">
          <Navbar />
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              <TypeWriter
                text="CHHAVI NAYYAR"
                speed={150}
                className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent hidden"
              />
            </h1>
            <p className="text-lg sm:text-2xl max-w-2xl mb-8 text-black/80 dark:text-white/80">

            </p>
          </main>
          <section
            id="about"
            ref={aboutSectionRef}
            className="w-full flex justify-center mt-[240px]"
          >
            <div className="max-w-10xl rounded-3xl p-1 text-white text-left">
              <h2
                className="font-bold mb-10 text-white"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 74,
                  lineHeight: "100%",
                  letterSpacing: 0,
                  maxWidth: 1200,
                  marginLeft: 850,
                  marginTop: -60,
                }}
              >
                FULL-STACK DEVELOPER
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
  Hi, I'm{" "}
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
                className="inline-block mt-2 ml-[850px] px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:scale-120 transition-transform"
              >
                Let's Connect
              </a>
             
            </div>
          </section>
          <section className="w-full flex justify-center mt-140">
            <div className="w-full max-w-20xl flex flex-col md:flex-row items-center md:items-start gap-1 px-50">
            
              <div className="flex-1">
                <h2 className="text-4xl md:text-8xl font-bold bg-gradient-to-r from-white to-pink-500  bg-clip-text text-transparent mb-8 text-left">
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
          <section className="w-full flex justify-center mt-44">
            <div
              ref={stackRef}
              className={`w-full max-w-6xl  transition-all duration-1000
                ${stackInView ? "opacity-80 scale-100" : "opacity100 scale-90"}
              `}
            >
              <div className="space-y-16">
                {/* Frontend */}
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-extrabold text-gray-100 mb-6">Frontend</span>
                  <div className="flex flex-wrap justify-center gap-14">
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-3xl">JS</span>
                      <span className="text-3xl mt-2">React</span>
                    </span>
                    <span className="flex flex-col items-center gap-3 text-white">
                      <img src="/nextjs-icon.svg" alt="Next.js" className="w-16 h-16 inline-block bg-white rounded-full p-2" />
                      <span className="text-3xl mt-2">Next.js</span>
                    </span>
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-3xl">TS</span>
                      <span className="text-3xl mt-2">TypeScript</span>
                    </span>
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-3xl">TW</span>
                      <span className="text-3xl mt-2">Tailwind CSS</span>
                    </span>
                  </div>
                </div>
                {/* Backend */}
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-extrabold text-gray-100 mb-6">Backend</span>
                  <div className="flex flex-wrap justify-center gap-14">
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-3xl">N</span>
                      <span className="text-3xl mt-2">Node.js</span>
                    </span>
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-black font-bold text-3xl">Ex</span>
                      <span className="text-3xl mt-2">Express.js</span>
                    </span>
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-3xl">F</span>
                      <span className="text-3xl mt-2">Firebase</span>
                    </span>
                  </div>
                </div>
                {/* Machine Learning */}
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-extrabold text-gray-100 mb-6">Machine Learning</span>
                  <div className="flex flex-wrap justify-center gap-14">
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-3xl">Py</span>
                      <span className="text-3xl mt-2">Python</span>
                    </span>
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-3xl">TF</span>
                      <span className="text-3xl mt-2">TensorFlow</span>
                    </span>
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-3xl">Sk</span>
                      <span className="text-3xl mt-2">scikit-learn</span>
                    </span>
                  </div>
                </div>
                {/* Design */}
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-extrabold text-gray-100 mb-6">Design</span>
                  <div className="flex flex-wrap justify-center gap-14">
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold text-3xl">F</span>
                      <span className="text-3xl mt-2">Figma</span>
                    </span>
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold text-3xl">XD</span>
                      <span className="text-3xl mt-2">Adobe XD</span>
                    </span>
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-black font-bold text-3xl">A</span>
                      <span className="text-3xl mt-2">Accessibility (WCAG 2.1)</span>
                    </span>
                  </div>
                </div>
                {/* Tools */}
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-extrabold text-gray-100 mb-6">Tools</span>
                  <div className="flex flex-wrap justify-center gap-14">
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-3xl">G</span>
                      <span className="text-3xl mt-2">Git</span>
                    </span>
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-3xl">GH</span>
                      <span className="text-3xl mt-2">GitHub</span>
                    </span>
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center text-white font-bold text-3xl">D</span>
                      <span className="text-3xl mt-2">Docker (basic)</span>
                    </span>
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-indigo-400 rounded-full flex items-center justify-center text-white font-bold text-3xl">VS</span>
                      <span className="text-3xl mt-2">VS Code</span>
                    </span>
                    <span className="flex flex-col items-center gap-3 text-white">
                      <span className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center text-white font-bold text-3xl">CI</span>
                      <span className="text-3xl mt-2">CI/CD</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
