import React, { useState, useRef, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { projects } from './ProjectsPage';
import { Link } from 'react-router-dom';
import { trackContactClick } from '../utils/analytics';

const Home = () => {
  const [showContactBar, setShowContactBar] = useState(false);
  const [copied, setCopied] = useState(false);
  const contactBtnRef = useRef(null);

  // Track home page view
  useEffect(() => {
    // This will be tracked by the main useAnalytics hook in App.jsx
    // But we can add additional home-specific tracking here if needed
  }, []);

  const handleCopyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('nirmendelson98@gmail.com');
      setCopied(true);
      trackContactClick('email_copy_home');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {}
  };

  const handleContactClick = (method) => {
    trackContactClick(method);
  };

  // --- Screenshot cycling for featured projects ---
  const featuredProjects = projects.filter(p => p.title === 'Rubybeam' || p.title === 'MarketBuddy');
  const [screenshotIndexes, setScreenshotIndexes] = useState(Array(featuredProjects.length).fill(0));
  const intervalRefs = useRef([]);

  const handleMouseEnter = (idx, screenshotsLength) => {
    if (intervalRefs.current[idx]) return;
    intervalRefs.current[idx] = setInterval(() => {
      setScreenshotIndexes(prev => {
        const next = [...prev];
        next[idx] = (next[idx] + 1) % screenshotsLength;
        return next;
      });
    }, 1000);
  };

  const handleMouseLeave = (idx) => {
    clearInterval(intervalRefs.current[idx]);
    intervalRefs.current[idx] = null;
    setScreenshotIndexes(prev => {
      const next = [...prev];
      next[idx] = 0;
      return next;
    });
  };

  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-col items-center justify-center text-center w-full px-4 sm:px-6 lg:px-8 -mt-0 mb-16 sm:mb-24 lg:mb-32">
        <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-4 flex items-center justify-center mt-16 sm:mt-20 lg:mt-28">
          <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" style={{ objectPosition: 'center' }} />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight m-0 px-4">
          Hi I&apos;m Nir <span role="img" aria-label="wave">👋</span>
          <br />
          <span>and I love to build <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI products</span></span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg lg:text-xl my-6 sm:my-8 px-4 sm:px-8 lg:px-40 max-w-4xl">
          I have a strong foundation in AI, product development, and full-stack web technologies, and I build intelligent, user-focused tools that solve real-world problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <div className="relative inline-block">
            <button
              ref={contactBtnRef}
              className="bg-blue-600 text-white rounded-lg px-6 sm:px-8 py-3 text-base sm:text-lg font-medium shadow-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 h-12 flex items-center justify-center"
              onClick={() => {
                setShowContactBar((v) => {
                  if (v) {
                    setTimeout(() => contactBtnRef.current && contactBtnRef.current.blur(), 0);
                  }
                  return !v;
                });
              }}
            >
              Contact me
            </button>
            {showContactBar && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 flex items-center justify-center w-max z-20">
                <div className="flex gap-6 px-8 py-3 rounded-full border border-border dark:border-gray-500 shadow bg-card/80 backdrop-blur">
                  <a
                    href="https://www.linkedin.com/in/nirmendelson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 text-2xl"
                    title="LinkedIn"
                    onClick={() => handleContactClick('linkedin_home')}
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="#copy-email"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center cursor-pointer relative"
                    title="Copy email"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="4" /><path d="M22 6.5 12 13 2 6.5" /></svg>
                    {copied && (
                      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-gray-600 text-xs whitespace-nowrap select-none pointer-events-none">
                        Email copied
                      </span>
                    )}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Let's Work Together Section */}
      <section className="flex flex-col items-start justify-center text-left w-full max-w-5xl mt-12 sm:mt-16 lg:mt-16 mb-36 sm:mb-40 lg:mb-44 px-4 sm:px-8 lg:px-12 mx-auto">        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-base sm:text-lg mb-6">
        Whether you're a company looking to prototype an AI product, build internal tools, or explore automation, or an individual with a bold idea and no clue where to start - I can help you bring it to life.
        </p>
        <div className="mb-6">
          <span className="font-semibold text-base sm:text-lg">What I offer:</span>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base sm:text-lg">
            <li><span className="font-medium">AI-powered MVPs</span>- fast, functional, and tailored to your use case</li>
            <li><span className="font-medium">Automation & Internal Tools</span>- streamline workflows using AI and modern web tech</li>
            <li><span className="font-medium">Product Strategy & Tech Guidance</span>- helping you make the right early decisions</li>
          </ul>
        </div>
        <p className="text-base sm:text-lg mb-6">If you're building something interesting, I'd love to hear about it.</p>
        {/* Contact Capsule (reuse) */}
        <div className="flex gap-4 sm:gap-6 px-6 sm:px-8 py-3 rounded-full border border-border dark:border-gray-500 shadow bg-card/80 backdrop-blur items-center w-max">
          <a
            href="https://www.linkedin.com/in/nirmendelson/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-500 text-2xl"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#copy-email"
            onClick={handleCopyEmail}
            className="inline-flex items-center cursor-pointer relative"
            title="Copy email"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="4" /><path d="M22 6.5 12 13 2 6.5" /></svg>
            {copied && (
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 text-gray-600 text-xs whitespace-nowrap select-none pointer-events-none">
                Email copied
              </span>
            )}
          </a>
        </div>
      </section>
      {/* Projects Preview Section */}
      <section className="w-full max-w-6xl mt-0 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 w-full gap-4 pl-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-left">Featured Projects</h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-blue-600 text-sm sm:text-base font-normal hover:underline hover:text-blue-700 transition-colors"
            onClick={() => window.scrollTo(0, 0)}
          >
            View all projects
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="inline-block align-middle">
              <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 items-center">
          {featuredProjects.map((project, idx) => (
            <Link
              to={`/projects/${project.title.toLowerCase()}`}
              key={idx}
              className="relative flex flex-col sm:flex-row bg-card rounded-2xl shadow-lg border border-border p-3 sm:p-2 gap-3 sm:gap-2 items-center transition-transform duration-200 group hover:scale-[1.02] cursor-pointer no-underline text-inherit"
              onMouseEnter={() => handleMouseEnter(idx, project.screenshots.length)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <img
                src={project.screenshots && project.screenshots.length > 0 ? project.screenshots[screenshotIndexes[idx]].src : project.image}
                alt={project.title}
                className="w-full sm:w-72 h-48 rounded-lg object-cover bg-muted border border-border"
              />
              <div className="flex-1 flex flex-col justify-center gap-1 h-full items-center text-center overflow-hidden p-2">
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-1 my-1 items-center justify-center">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-muted text-muted-foreground px-2 py-1 rounded-lg text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </div>
              <span className="absolute bottom-4 right-4">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
