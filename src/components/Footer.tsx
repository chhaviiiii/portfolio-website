import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full flex flex-col items-center justify-center bg-black/60 rounded-t-2xl px-8 py-4 shadow-lg mt-4">
    <div className="flex items-center gap-6 mb-2">
      <a href="https://www.linkedin.com/in/cnayyar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin className="text-white hover:text-pink-400 transition" size={40} />
      </a>
      <a href="https://github.com/chhaviiiii" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub className="text-white hover:text-pink-400 transition" size={40} />
      </a>
      <a href="mailto:chhavinayyar@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
        <FaEnvelope className="text-white hover:text-pink-400 transition" size={40} />
      </a>
    </div>
    <span className="text-white/600 text-lg font-mono text-center">
      made with <span className="text-pink-400">&lt;3</span>
      <br/> &copy; Chhavi Nayyar
    </span>
  </footer>
);

export default Footer; 