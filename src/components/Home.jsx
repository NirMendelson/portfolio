'use client'

import React, { useState, useRef, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { projects } from './ProjectsPage';
import Link from 'next/link';
import { trackContactClick } from '../utils/analytics';

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

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
  const featuredProjects = projects.filter(p => p.title === 'RAG Optimizer Agent' || p.title === 'Onboarding Agent');
  const [screenshotIndexes, setScreenshotIndexes] = useState(Array(featuredProjects.length).fill(0));
  const intervalRefs = useRef([]);
  const videoRefs = useRef([]);

  const handleMouseEnter = (idx, screenshotsLength) => {
    if (intervalRefs.current[idx]) return;
    intervalRefs.current[idx] = setInterval(() => {
      setScreenshotIndexes(prev => {
        const next = [...prev];
        next[idx] = (next[idx] + 1) % screenshotsLength;
        return next;
      });
    }, 1000);
    const video = videoRefs.current[idx];
    if (video) {
      try { video.currentTime = 0; video.loop = true; video.muted = true; video.play(); } catch (_) {}
    }
  };

  const handleMouseLeave = (idx) => {
    clearInterval(intervalRefs.current[idx]);
    intervalRefs.current[idx] = null;
    setScreenshotIndexes(prev => {
      const next = [...prev];
      next[idx] = 0;
      return next;
    });
    const video = videoRefs.current[idx];
    if (video) {
      try { video.pause(); video.currentTime = 6; } catch (_) {}
    }
  };

  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-col items-center justify-center text-center w-full px-4 sm:px-6 lg:px-8 -mt-0 mb-64 sm:mb-24 lg:mb-32">
        <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-8 sm:mb-4 flex items-center justify-center mt-24 sm:mt-32 lg:mt-40">
          <img 
            src="/profile.webp" 
            alt="Profile" 
            className="w-full h-full object-cover" 
            style={{ objectPosition: 'center' }}
            width="160"
            height="160"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight m-0 px-4">
          Hi I&apos;m Nir <span role="img" aria-label="wave">👋</span>
          <br />
          <span>and I love to build <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI products</span></span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg lg:text-xl my-6 sm:my-8 px-4 sm:px-8 lg:px-40 max-w-4xl">
          I have a strong foundation in AI, product development, full stack web technologies, and I build intelligent, user focused tools that solve real world problems.
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
                    className="inline-flex items-center cursor-pointer relative text-blue-500"
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
      {/* About Me Section */}
      <section className="flex flex-col items-start text-left w-full max-w-5xl mt-12 sm:mt-16 lg:mt-40 mb-36 sm:mb-40 lg:mb-44 px-4 sm:px-8 lg:px-12 mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">About me</h2>
        {/* Bio text */}
        <div className="flex flex-col gap-4 mb-12 max-w-3xl">
          <p className="text-muted-foreground text-base leading-relaxed">
            I&apos;m an AI Engineer with 2 years of hands-on experience shipping AI systems into production. I combine a technical foundation with a builder&apos;s mindset- identifying real problems, prototyping fast, and iterating on solutions in live environments.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            I&apos;m comfortable across the full stack: Python, TypeScript, Node.js, vector databases, prompt engineering and LLM APIs, workflow orchestration, lightweight backend logic, and integrating systems via APIs and webhooks.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            I love creating AI agentic workflows- automating existing processes and building entirely new ones that would be impossible without LLMs.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            What drives me: turning emerging AI capabilities into measurable business value. I experiment relentlessly, stay current with new tools and architectures, and document patterns others can build on.
          </p>
        </div>

        {/* Timeline subheading */}
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-6">My Timeline</h3>

        <div className="relative w-full">
          {/* Vertical timeline line — thick gradient bar, centered at left-4 */}
          <div className="absolute left-4 top-3 bottom-3 w-[3px] rounded-full -translate-x-1/2 bg-gradient-to-b from-indigo-500/80 via-violet-500/60 to-cyan-400/30" />
          <div className="flex flex-col gap-4">
            {[
              {
                title: 'AI Engineer',
                org: 'Quack AI (AUI)',
                description: 'Building production RAG systems and AI Agent workflows. Quack was acquired by AUI.',
                tag: 'Current',
                tagColor: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
                dotColor: 'bg-indigo-500 shadow-[0_0_12px_3px_rgba(99,102,241,0.55)]',
              },
              {
                title: 'Founder',
                org: 'RubyBeam',
                description: 'Built an AI agent that helped influencer agencies close more deals. Funded by Cactus Capital.',
                tag: 'Startup',
                tagColor: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
                dotColor: 'bg-violet-500 shadow-[0_0_12px_3px_rgba(139,92,246,0.55)]',
              },
              {
                title: 'Intelligence Officer',
                org: 'IDF - Shaldag Special Operations',
                description: 'Identified critical operational needs and designed special operations missions to resolve them.',
                tag: 'Service',
                tagColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
                dotColor: 'bg-cyan-400 shadow-[0_0_12px_3px_rgba(34,211,238,0.45)]',
              },
            ].map((item, i) => (
              <div key={i} className="relative flex items-start gap-5 pl-10">
                {/* Glowing dot — centered on the line via -translate-x-1/2 at left-4 */}
                <div className={`absolute left-4 top-[1.1rem] w-3.5 h-3.5 rounded-full -translate-x-1/2 border-2 border-background ${item.dotColor}`} />
                <div className="flex-1 rounded-2xl border-2 border-border bg-card/70 backdrop-blur-sm px-5 py-4 hover:border-border/80 hover:bg-card transition-colors duration-200">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-semibold text-foreground text-sm sm:text-base">{item.title}</span>
                    <span className="text-muted-foreground/50 text-sm hidden sm:inline">·</span>
                    <span className="text-muted-foreground text-sm font-medium">{item.org}</span>
                    <span className={`ml-auto text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${item.tagColor}`}>{item.tag}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Preview Section */}
      <section className="w-full max-w-6xl mt-0 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 w-full gap-4 pl-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-left">Featured Projects</h2>
          <Link
            href="/projects"
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
              href={`/projects/${slugify(project.title)}`}
              key={idx}
              className="relative flex flex-col sm:flex-row bg-card rounded-2xl shadow-lg border border-border p-3 sm:p-2 gap-3 sm:gap-2 items-center transition-transform duration-200 group hover:scale-[1.02] cursor-pointer no-underline text-inherit"
              onMouseEnter={() => handleMouseEnter(idx, project.screenshots.length)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              {(() => {
                const mediaSrc = project.screenshots && project.screenshots.length > 0 ? project.screenshots[screenshotIndexes[idx]].src : project.image;
                const isVideo = typeof mediaSrc === 'string' && mediaSrc.toLowerCase().endsWith('.mp4');
                return isVideo ? (
                  <div className="relative w-full sm:w-72 h-48">
                    <video
                      ref={(el) => {
                        videoRefs.current[idx] = el;
                        if (el) el.oncanplay = () => { try { el.currentTime = 6; } catch (_) {} };
                      }}
                      src={`${mediaSrc}#t=6`}
                      className="w-full h-full rounded-lg object-cover bg-muted border border-border"
                      muted
                      playsInline
                      preload="auto"
                      width="288"
                      height="192"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="text-white">
                          <path fill="currentColor" d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={mediaSrc}
                    alt={project.title}
                    className="w-full sm:w-72 h-48 rounded-lg object-cover bg-muted border border-border"
                  />
                );
              })()}
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
