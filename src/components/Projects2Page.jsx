import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from './ProjectsPage';
import { trackProjectView, trackProjectClick } from '../utils/analytics';

// Map project titles to logo images in public folder
const projectLogos = {
  Rubybeam: '/rubybeam/RubybeamLogo.webp',
  MarketBuddy: '/marketbuddy/marketBuddyLogo.webp',
  // Add more mappings as you add logos
};

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const ArrowIcon = ({ className }) => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className={className}>
    <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Projects2Page = () => {
  // Track page view when component mounts
  useEffect(() => {
    trackProjectView('projects2_page');
  }, []);

  const handleProjectClick = (projectTitle) => {
    trackProjectClick(projectTitle);
  };

  return (
    <div className="min-h-screen py-10 w-full bg-background text-foreground">
      <h1 className="text-4xl font-semibold mt-6 mb-4 text-foreground text-left max-w-7xl mx-auto ">Projects</h1>
      <div className="h-px bg-border border-0 max-w-7xl mx-auto mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <Link
            to={`/projects/${slugify(project.title)}`}
            key={idx}
            className="relative flex flex-row items-start bg-card rounded-xl border border-border p-6 gap-3 transition-all duration-200 group cursor-pointer no-underline text-inherit min-h-[120px] shadow-sm hover:-translate-y-1 hover:shadow-md hover:shadow-black/10"
            onClick={() => handleProjectClick(project.title)}
          >
            <img
              src={projectLogos[project.title] || project.image}
              alt={project.title}
              className="w-10 h-10 rounded-full object-contain bg-white flex-shrink-0 mr-2"
            />
            <div className="flex flex-col flex-1 h-full justify-between min-w-0">
              <div>
                <h3 className="text-base font-semibold text-card-foreground text-left leading-tight mb-1 truncate">{project.title}</h3>
                <p className="text-muted-foreground text-sm text-left leading-snug mb-2 line-clamp-2 font-normal">{project.description}</p>
              </div>
              <div className="flex items-end justify-between w-full">
                <div className="flex flex-wrap gap-1 items-end">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-muted text-muted-foreground px-2 py-0.5 rounded-lg text-xs font-normal">{tag}</span>
                  ))}
                </div>
                <span className="ml-2">
                  <ArrowIcon className="text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects2Page; 