import React, { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "/CHHAVI NAYYAR.pdf", external: true },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className="relative">
      <nav
        style={{
          borderRadius: isScrolled ? "50%" : 30,
          border: "1px solid #A92EA3",
          opacity: 1,
          background:
            "linear-gradient(90deg, rgba(211, 9, 137, 0.50) 0%, rgba(148, 6, 199, 0.50) 100%)",
        }}
        className={`fixed top-8 z-[100] transition-all duration-1000 ease-in-out ${
          isScrolled 
            ? "right-8 w-14 h-14" 
            : "left-1/2 -translate-x-1/2 w-[1000px] max-w-[calc(100%-4rem)]"
        } py-4 px-8 flex justify-center items-center`}
      >
        {isScrolled ? (
          <button
            type="button"
            onClick={handleMenuClick}
            className="w-9 h-9 flex items-center justify-center cursor-pointer hover:opacity-80 transition-all duration-500 ease-in-out focus:outline-none"
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
              <span className={`w-full h-0.5 bg-white transition-all duration-500 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-500 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        ) : (
          <ul className="flex items-center gap-4">
            {navItems.map((item, idx) => (
              <React.Fragment key={item.label}>
                <li>
                  <a
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    style={{
                      height: 31,
                      flexShrink: 0,
                      color: "#FFFFFF",
                      textAlign: "center",
                      fontFamily: "Inter, sans-serif",
                      fontSize: 20,
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "normal",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 18px",
                    }}
                    className="hover:text-pink-200 transition"
                  >
                    {item.label}
                  </a>
                </li>
                {idx < navItems.length - 1 && (
                  <li aria-hidden className="flex items-center justify-center">
                    <div style={{ width: 1, height: 28, background: "#FFF", opacity: 1 }} />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        )}
      </nav>

      {isScrolled && isMenuOpen && (
        <div
          className="fixed top-28 right-8 z-[99] transition-all duration-500 ease-in-out"
          style={{
            borderRadius: 20,
            border: "1px solid #A92EA3",
            background:
              "linear-gradient(90deg, rgba(211, 9, 137, 0.50) 0%, rgba(148, 6, 199, 0.50) 100%)",
          }}
        >
          <ul className="py-4 px-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 20,
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px 18px",
                  }}
                  className="hover:text-pink-200 transition"
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