import React from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
];

const Navbar = () => {
  return (
    <nav
      style={{
        borderRadius: 30,
        border: "1px solid #A92EA3",
        opacity: 1,
        background:
          "linear-gradient(90deg, rgba(211, 9, 137, 0.50) 0%, rgba(148, 6, 199, 0.50) 100%)",
      }}
      className="w-full max-w-[1200px] mx-auto mt-8 py-4 px-8 flex justify-center items-center"
    >
      <ul className="flex items-center gap-4">
        {navItems.map((item, idx) => (
          <React.Fragment key={item.label}>
            <li>
              <a
                href={item.href}
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
    </nav>
  );
};

export default Navbar; 