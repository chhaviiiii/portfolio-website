import React, { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "/ChhaviNayyar.pdf", external: true },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Tailwind's lg breakpoint
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <nav
        className={`fixed top-4 z-[100] transition-all duration-300 ease-in-out
          ${isMobile 
            ? "right-4 w-12 h-12 flex items-center justify-center rounded-full border border-[#A92EA3] bg-black/80 backdrop-blur-sm"
            : "left-1/2 -translate-x-1/2 w-full max-w-[95vw] sm:max-w-2xl md:max-w-4xl lg:w-[1000px] py-4 px-2 sm:px-4 md:px-8 flex justify-center items-center rounded-[30px] border border-[#A92EA3] bg-black/80 backdrop-blur-sm"
          }`}
      >
        {isMobile ? (
          <button
            type="button"
            onClick={handleMenuClick}
            className="w-9 h-9 flex items-center justify-center cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out focus:outline-none"
            style={{
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div 
              className="w-6 h-5 relative flex flex-col justify-between"
              style={{ pointerEvents: 'none' }}
            >
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        ) : (
          <ul className="flex items-center gap-4 w-full justify-center">
            {navItems.map((item, idx) => (
              <React.Fragment key={item.label}>
                <li>
                  <a
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-white hover:text-pink-200 transition-colors duration-300 text-center font-inter text-xl font-bold flex items-center justify-center px-4 py-1"
                  >
                    {item.label}
                  </a>
                </li>
                {idx < navItems.length - 1 && (
                  <li aria-hidden className="flex items-center justify-center">
                    <div className="w-[1px] h-7 bg-white opacity-100" />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        )}
      </nav>

      {isMobile && isMenuOpen && (
        <div
          className="fixed top-20 right-4 left-4 sm:left-auto z-[99] transition-all duration-300 ease-in-out rounded-[20px] border border-[#A92EA3] bg-gradient-to-r from-[rgba(211,9,137,0.5)] to-[rgba(148,6,199,0.5)] backdrop-blur-sm max-w-[90vw]"
        >
          <ul className="py-4 px-4 sm:px-6 flex flex-col gap-4 w-full">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-pink-200 transition-colors duration-300 text-center font-inter text-xl font-bold flex items-center justify-center py-2 px-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar; 