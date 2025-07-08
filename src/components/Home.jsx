import React, { useState, useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa';

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
      <section className="flex flex-col items-center justify-center text-center w-full -mt-8 mb-32">
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
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 flex items-center justify-center w-max z-20">
              <div className="flex gap-6 px-8 py-3 rounded-full border border-border shadow bg-card/80 backdrop-blur">
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
        <div className="flex gap-6 px-8 py-3 rounded-full border border-border shadow bg-card/80 backdrop-blur items-center w-max">
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
    </div>
  );
};

export default Home;
