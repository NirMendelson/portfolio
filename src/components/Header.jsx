import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // On mount, set theme from localStorage or system
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  // Toggle dark mode
  const handleToggleDark = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleCopyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('nirmendelson98@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Optionally handle error
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-background backdrop-blur z-50 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2">
            <Link to="/" className="font-bold text-xl sm:text-2xl text-foreground hover:text-foreground mx-2">Nir.</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/projects" className="text-foreground hover:text-foreground font-semibold">Projects</Link>
            <button
              aria-label="Toggle dark mode"
              onClick={handleToggleDark}
              className="text-xl text-foreground dark:text-foreground focus:outline-none bg-transparent border-none p-0 hover:text-yellow-500 transition-colors duration-200"
              style={{ background: 'none', border: 'none' }}
            >
              {isDark ? <Moon strokeWidth={1.5} /> : <Sun strokeWidth={1.5} />}
            </button>
            <a href="https://github.com/NirMendelson" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 text-2xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nirmendelson/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 text-2xl">
              <FaLinkedin />
            </a>
            <a href="#copy-email" onClick={handleCopyEmail} className="inline-flex items-center cursor-pointer relative" title="Copy email">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="4" /><path d="M22 6.5 12 13 2 6.5" /></svg>
              {copied && (
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-gray-600 text-xs whitespace-nowrap select-none pointer-events-none">
                  Email copied
                </span>
              )}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background backdrop-blur border-t border-border">
            <nav className="flex flex-col px-4 py-4 space-y-4">
              <Link 
                to="/projects" 
                className="text-foreground hover:text-foreground font-semibold py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <div className="flex items-center justify-between py-2">
                <span className="text-foreground">Theme:</span>
                <button
                  aria-label="Toggle dark mode"
                  onClick={handleToggleDark}
                  className="text-xl text-foreground dark:text-foreground focus:outline-none bg-transparent border-none p-0 hover:text-yellow-500 transition-colors duration-200"
                >
                  {isDark ? <Moon strokeWidth={1.5} /> : <Sun strokeWidth={1.5} />}
                </button>
              </div>
              <div className="flex items-center gap-4 py-2">
                <a href="https://github.com/NirMendelson" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 text-2xl">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/nirmendelson/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 text-2xl">
                  <FaLinkedin />
                </a>
                <a href="#copy-email" onClick={handleCopyEmail} className="inline-flex items-center cursor-pointer relative" title="Copy email">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="4" /><path d="M22 6.5 12 13 2 6.5" /></svg>
                  {copied && (
                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-gray-600 text-xs whitespace-nowrap select-none pointer-events-none">
                      Email copied
                    </span>
                  )}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header; 