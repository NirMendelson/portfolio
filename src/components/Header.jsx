import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="font-bold text-2xl text-gray-800 hover:text-gray-800">Nir.</Link>
        <nav className="flex items-center gap-6">
          <Link to="/projects" className="text-gray-800 hover:text-gray-800 font-medium">Projects</Link>
          <a href="#contact" className="text-gray-800 hover:text-gray-800 font-medium">Contact</a>
          <a href="https://github.com/NirMendelson" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nirmendelson/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:your@email.com" className="inline-flex items-center">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="4"/><path d="M22 6.5 12 13 2 6.5"/></svg>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 