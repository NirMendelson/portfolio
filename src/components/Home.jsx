import React, { useState, useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { projects } from './ProjectsPage';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showContactBar, setShowContactBar] = useState(false);
  const [copied, setCopied] = useState(false);
  const contactBtnRef = useRef(null);

  const handleCopyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('nirmendelson98@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {}
  };

  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-col items-center justify-center text-center w-full -mt-0 mb-32">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-4 flex items-center justify-center mt-28">
          <img src="/profile.png" alt="Profile" className="w-40 h-40 object-cover" style={{ objectPosition: 'center' }} />
        </div>
        <h1 className="text-6xl font-bold leading-tight m-0">
          Hi I&apos;m Nir <span role="img" aria-label="wave">👋</span>
          <br />
          <span>and I love to build <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI products</span></span>
        </h1>
        <p className="text-muted-foreground text-xl my-8 px-40">
          I have a strong foundation in AI, product development, and full-stack web technologies, and I build intelligent, user-focused tools that solve real-world problems.
        </p>
        <div className="flex gap-6 relative" style={{ minHeight: '56px' }}>
          <button
            ref={contactBtnRef}
            className="bg-blue-600 text-white rounded-lg px-8 py-2.5 text-lg font-medium shadow-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
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
          <a href="/Nir_Mendelson_CV.pdf" download target="_blank" rel="noopener noreferrer" className="bg-muted text-foreground rounded-lg px-8 py-2.5 text-lg font-medium hover:bg-accent transition inline-block">
            Download CV
          </a>
          {showContactBar && (
            <div className="absolute left-1/2 -translate-x-1/2 -ml-[6px] top-full mt-4 flex items-center justify-center w-max z-20">
              <div className="flex gap-6 px-8 py-3 rounded-full border border-border dark:border-gray-400 shadow bg-card/80 backdrop-blur">
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
            </div>
          )}
        </div>
      </section>
      {/* Let's Work Together Section */}
      <section className="flex flex-col items-start justify-center text-left w-full max-w-2xl mt-16 mb-24 pl-12 ml-0">
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-lg mb-6">
        Whether you're a company looking to prototype an AI product, build internal tools, or explore automation, or an individual with a bold idea and no clue where to start - I can help you bring it to life.
        </p>
        <div className="mb-6">
          <span className="font-semibold">What I offer:</span>
          <ul className="list-disc list-inside mt-2 space-y-1 text-base">
            <li><span className="font-medium">AI-powered MVPs</span> – fast, functional, and tailored to your use case</li>
            <li><span className="font-medium">Automation & Internal Tools</span> – streamline workflows using AI and modern web tech</li>
            <li><span className="font-medium">Product Strategy & Tech Guidance</span> – helping you make the right early decisions</li>
          </ul>
        </div>
        <p className="text-lg mb-6">If you're building something interesting, I'd love to hear about it.</p>
        {/* Contact Capsule (reuse) */}
        <div className="flex gap-6 px-8 py-3 rounded-full border border-border dark:border-gray-400 shadow bg-card/80 backdrop-blur items-center w-max">
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
      <section className="w-full max-w-6xl mt-0 mx-auto">
        <div className="flex items-center justify-between mb-6 w-full">
          <h2 className="text-3xl font-bold text-left">Featured Projects</h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-blue-600 text-base font-normal hover:underline hover:text-blue-700 transition-colors"
            onClick={() => window.scrollTo(0, 0)}
          >
            View all projects
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="inline-block align-middle">
              <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 items-center">
          {projects.filter(p => p.title === 'Rubybeam' || p.title === 'MarketBuddy').map((project, idx) => (
            <Link
              to={`/projects/${project.title.toLowerCase()}`}
              key={idx}
              className="relative flex bg-card rounded-2xl shadow-lg border border-border p-2 gap-2 items-center transition-transform duration-200 group hover:scale-[1.02] cursor-pointer no-underline text-inherit"
            >
              <img src={project.image} alt={project.title} className="w-72 h-48 rounded-lg object-cover bg-muted border border-border" />
              <div className="flex-1 flex flex-col justify-center gap-1 h-full items-center text-center overflow-hidden">
                <h3 className="text-xl font-semibold text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-base">{project.description}</p>
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
