'use client'

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { trackProjectView, trackProjectClick } from '../utils/analytics';

const projects = [
  {
    title: 'Rubybeam',
    description: 'AI-powered lead generation for influencer agencies',
    overview: `Rubybeam is an AI tool that automates the sponsorship outreach process for influencer agencies. It identifies relevant brands for each YouTuber and generates personalized pitch emails at scale. The system reduces manual work, improves targeting accuracy, and helps agencies close more deals, faster.

The core workflow involves four automated steps:

1. Featching brand data from multiple sources  
2. Analyzing influencer content to understand audience and niche  
3. Matching brands using category alignment and audience fit  
4. Generating emails with contextual personalization

The entire process is orchestrated through an AI agent framework powered by Python and OpenAI's language models. I built the backend in Node.js with MongoDB, exposed endpoints via REST APIs, and used React for the frontend. The app is deployed on AWS and supports high-throughput batch processing of outreach campaigns.
`,

    technologies: ['Python', 'LangChain', 'OpenAI API', 'React', 'Node.js', 'MongoDB', 'AWS', 'Husky'],
    screenshots: [
      { src: '/rubybeam/rubybeamScreenshot.webp', caption: 'Homepage' },
      { src: '/rubybeam/rubybeamFeatures.webp', caption: 'Features' },
      { src: '/rubybeam/rubybeamLeads1.webp', caption: 'Leads' },
      { src: '/rubybeam/rubybeamBrandOverview.webp', caption: 'Brand Overview' },
      { src: '/rubybeam/rubybeamOutreach.webp', caption: 'Outreach' }
    ],
    tags: ['AI Agents', 'LangChain', 'Data Enrichment'],
    image: '/rubybeam/rubybeamScreenshot.webp',
    link: '#',
  },

  {
    title: 'MarketBuddy',
    description: 'AI-powered shared grocery orders for students',
    overview: `MarketBuddy is an AI-powered platform that helps students save money by coordinating shared online grocery orders. When a student starts an order, nearby users are notified and can join in, splitting the delivery cost and unlocking cheaper supermarket options even if they're farther away.

The core workflow involves four automated steps:

1.  Fetching real-time product data from multiple supermarket websites
2.  Reading users’ grocery lists and finding the best prices
3.  Purchasing the products from the selected supermarket
4.  Coordinating delivery windows across multiple users in proximity

The backend is built with FastAPI and uses custom Python scrapers to pull product data. A chatbot interface handles order entry and suggestions, while Google Maps API manages user clustering by location. The frontend is developed with Vue.js, offering a simple, responsive experience.

I built and integrated every component- data scraping, AI matching, user flows, and payment integration, as part of a capstone project aimed at solving a real financial pain point for students.`,
    technologies: ['OpenAI API', 'PostgreSQL', 'Supabase', 'Node', 'React'],
    screenshots: [
      { src: '/marketbuddy/marketBuddyHomepage.webp', caption: 'Homepage' },
      { src: '/marketbuddy/marketbuddyOrder1.webp', caption: 'Order Page' },
      { src: '/marketbuddy/marketbuddyOrder2.webp', caption: 'Validating Items' },
      { src: '/marketbuddy/marketbuddyOrder3.webp', caption: 'Choosing Delivery' },
      { src: '/marketbuddy/marketbuddyPaypal.webp', caption: 'Paypal Integration' },
      { src: '/marketbuddy/marketbuddyEmail.webp', caption: 'Email Notification' }
    ],
    tags: ['Similarity Search', 'OpenAI API', 'Supabase'],
    image: '/marketbuddy/marketBuddyHomepage.webp',
    link: '#',
  },
  {
    "title": "Shortcut Master",
    "description": "AI-powered live shortcut suggestions and custom automation builder",
    "overview": "Shortcut Master is a desktop productivity assistant that listens to global keyboard and mouse events, detects inefficient mouse-heavy actions, and instantly suggests relevant keyboard shortcuts. Its AI engine also analyzes repeated user actions across apps to propose new custom shortcuts, enabling users to automate multi-step processes effortlessly.\n\nThe core workflow involves:\n\n1. Tracking real-time keyboard and mouse input globally\n2. Detecting when a mouse action has an equivalent keyboard shortcut\n3. Displaying a lightweight, Apple-style liquid glass notification with the shortcut\n4. Logging all interactions in a local database for AI analysis\n5. Using AI (via Ollama running Mistral 7B) to identify repetitive sequences and suggest custom automation shortcuts\n\nThe backend is built with Python, leveraging PyQt6 for the notification UI and Microsoft UI Automation for precise click tracking. An SQLite database stores interaction logs locally. The AI suggestion module runs locally using Ollama with Mistral 7B, ensuring privacy while providing fast, context-aware recommendations.",
    "technologies": ["Python", "Ollama", "Mistral", "PyQt6", "SQLite", "Microsoft UI Automation"],
    "screenshots": [
      { "src": "/shortcut/shortcuts-demo.mp4", "caption": "Demo" },
      { "src": "/shortcut/shortcut-notification.webp", "caption": "Notification" },
      { "src": "/shortcut/shortcut-shortcuts.webp", "caption": "Shortcuts Tab" },
      { "src": "/shortcut/shortcut-live-tracker.webp", "caption": "Live Tracker Tab" }
    ],
    "tags": ["Ollama", "Mistral", "SQLite"],
    "image": "/shortcut/shortcut-notification.webp",
    "link": "#"
  },

  {
    "title": "Scenario Simulator",
    "description": "Multi-agent scenario brainstorming that turns world events into investable outcomes",
    "overview": "After COVID hit, I kept thinking how obvious some trades became in hindsight. Stocks like Netflix, Zoom, and DoorDash skyrocketed because everyone was locked at home. Since then I’ve often asked myself: if a big event happens, how will it ripple through the world, and where will the investment opportunities be?\n\nI first built a single-agent system that generated outcomes from a scenario, but the results were generic and lacked creativity. To improve it, I introduced four specialized experts- Economy, Geopolitics, Social, and Tech, along with a judge who picked the best ideas. This was better, but still too one-dimensional.\n\nThe breakthrough came when I realized my best ideas in real life come from brainstorming with friends, not just making lists. The agents were only talking to the judge, not to each other. So I rebuilt the system as true agent-to-agent (A2A) debate: each expert proposes outcomes, critiques the others, and refines their ideas. This back-and-forth produces far more nuanced and creative results. Finally, a Profit Mapper adds concrete investment opportunities for each outcome.\n\nThe React frontend brings this process to life by visualizing the brainstorm as an interactive tree. Each branch shows how outcomes evolve through critique rounds and where specific trade ideas (tickers, ETFs, sectors) are mapped.\n\nCore A2A workflow:\n1. Intake the scenario\n2. Experts Round: four agents each propose 1 outcome\n3. Critique Round: agents critique each other’s suggestions and refine them\n4. Profit Mapping: system suggests concrete tickers/ETFs for each outcome\n5. Another A2A round can run on each outcome to create deeper branches\n6. Final output is a tree of outcomes with mapped investment ideas, visualized in React",
    "technologies": [
      "Python",
      "LangChain",
      "Grok",
      "FastAPI",
      "Pydantic",
      "Uvicorn",
      "React Flow",
    ],
    "screenshots": [
      { "src": "/scenario/scenario-tree.webp", "caption": "Tree" },
      { "src": "/scenario/scenario-subtree.webp", "caption": "Subtree" },
      { "src": "/scenario/scenario-agent-logs.webp", "caption": "Agents Logs" }
    ],
    "tags": ["A2A", "Multi-Agent Orchestration",],
    "image": "/scenario/scenario-tree.webp",
    "link": "#"
  }




  // {
  //   title: 'Global YouTuber',
  //   description: 'Translate your videos to multiple languages, with your own voice',
  //   overview: 'Global YouTuber enables creators to reach a worldwide audience by translating and dubbing videos using AI voice cloning.',
  //   technologies: ['Vue', 'Whisper', 'Hugging Face'],
  //   screenshots: [
  //     { src: 'https://placehold.co/400x240?text=Main+UI', caption: 'Main interface' },
  //     { src: 'https://placehold.co/400x240?text=Voice+Clone', caption: 'Voice cloning setup' }
  //   ],
  //   tags: ['Multimodal AI', 'Whisper', 'Hugging Face'],
  //   image: 'https://placehold.co/200x140?text=Project+2',
  //   link: '#',
  // },
  // {
  //   title: 'WikiQuest',
  //   description: 'Turn doomscrolling into discovery with AI-powered Wikipedia journeys.',
  //   overview: 'WikiQuest is an AI-powered platform that allows users to explore Wikipedia articles in a more engaging and interactive way.',
  //   technologies: ['RAG', 'LLM Apps', 'User Simulation', 'Wikipedia API'],
  //   screenshots: [
  //     { src: 'https://placehold.co/400x240?text=WikiQuest+Dashboard', caption: 'WikiQuest Dashboard' },
  //     { src: 'https://placehold.co/400x240?text=Journey+Start', caption: 'Starting a journey' },
  //     { src: 'https://placehold.co/400x240?text=Article+View', caption: 'Viewing an article' }
  //   ],
  //   tags: ['RAG', 'LLM Apps', 'User Simulation', 'Wikipedia API'],
  //   image: 'https://placehold.co/200x140?text=Project+3',
  //   link: '#',
  // },
  // {
  //   title: 'Altcast',
  //   description: 'The platform for commentary creators.',
  //   overview: 'Altcast is a platform that allows creators to commentate on videos and interact with their audience.',
  //   technologies: ['Audio Syncing', 'React', 'Python'],
  //   screenshots: [
  //     { src: 'https://placehold.co/400x240?text=Altcast+Dashboard', caption: 'Altcast Dashboard' },
  //     { src: 'https://placehold.co/400x240?text=Commentary+Creation', caption: 'Creating a commentary' },
  //     { src: 'https://placehold.co/400x240?text=Live+Stream', caption: 'Live stream' }
  //   ],
  //   tags: ['Audio Syncing', 'React', 'Python'],
  //   image: 'https://placehold.co/200x140?text=Project+4',
  //   link: '#',
  // },
  // {
  //   title: 'YouTube Fantasy League',
  //   description: 'Choose up and coming YouTubers and compete with friends',
  //   overview: 'YouTube Fantasy League is a platform that allows users to create fantasy leagues based on YouTube videos.',
  //   technologies: ['Gamification', 'Data Scraping', 'Node.js'],
  //   screenshots: [
  //     { src: 'https://placehold.co/400x240?text=Fantasy+League+Dashboard', caption: 'Fantasy League Dashboard' },
  //     { src: 'https://placehold.co/400x240?text=League+Creation', caption: 'Creating a league' },
  //     { src: 'https://placehold.co/400x240?text=Competition', caption: 'Competition page' }
  //   ],
  //   tags: ['Gamification', 'Data Scraping', 'Node.js'],
  //   image: 'https://placehold.co/200x140?text=Project+4',
  //   link: '#',
  // },
  // {
  //   title: 'History-based Ideas Generator',
  //   description: 'Simulate historical events and generate startup ideas',
  //   overview: 'History-based Ideas Generator is a platform that allows users to simulate historical events and generate startup ideas based on those events.',
  //   technologies: ['Simulation', 'LLM', 'Prompt Engineering', 'OpenAI', 'Idea Generation'],
  //   screenshots: [
  //     { src: 'https://placehold.co/400x240?text=Idea+Generator+Dashboard', caption: 'Idea Generator Dashboard' },
  //     { src: 'https://placehold.co/400x240?text=Event+Simulation', caption: 'Simulating an event' },
  //     { src: 'https://placehold.co/400x240?text=Idea+Generation', caption: 'Generating an idea' }
  //   ],
  //   tags: ['Simulation', 'LLM', 'Prompt Engineering', 'OpenAI', 'Idea Generation'],
  //   image: 'https://placehold.co/200x140?text=Project+4',
  //   link: '#',
  // }
];

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const ArrowIcon = ({ className }) => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className={className}>
    <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectsPage = () => {
  // State to track which screenshot is shown for each project
  const [screenshotIndexes, setScreenshotIndexes] = useState(Array(projects.length).fill(0));
  // Store interval refs for each card
  const intervalRefs = useRef([]);
  // Store video refs for each card so we can control playback on hover
  const videoRefs = useRef([]);

  // Track page view when component mounts
  useEffect(() => {
    trackProjectView('projects_page');
  }, []);

  // Track when users click on projects
  const handleProjectClick = (projectTitle) => {
    trackProjectClick(projectTitle);
  };

  // Handle mouse enter: start cycling screenshots
  const handleMouseEnter = (idx, screenshotsLength) => {
    // Avoid multiple intervals
    if (intervalRefs.current[idx]) return;
    intervalRefs.current[idx] = setInterval(() => {
      setScreenshotIndexes(prev => {
        const next = [...prev];
        next[idx] = (next[idx] + 1) % screenshotsLength;
        return next;
      });
    }, 1000);

    // If this card has a video element, start playing it on hover
    const video = videoRefs.current[idx];
    if (video) {
      try {
        video.loop = true;
        video.muted = true;
        video.play();
      } catch (_) { }
    }
  };

  // Handle mouse leave: stop cycling and reset
  const handleMouseLeave = (idx) => {
    clearInterval(intervalRefs.current[idx]);
    intervalRefs.current[idx] = null;
    setScreenshotIndexes(prev => {
      const next = [...prev];
      next[idx] = 0;
      return next;
    });

    // Pause and reset video when not hovering
    const video = videoRefs.current[idx];
    if (video) {
      try {
        video.pause();
        video.currentTime = 0;
      } catch (_) { }
    }
  };

  return (
    <div className="min-h-screen py-6 sm:py-10 w-full bg-background text-foreground">
      <h1 className="text-3xl sm:text-4xl font-semibold mt-6 mb-4 text-foreground text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">Projects</h1>
      <div className="h-px bg-border border-0 max-w-7xl mx-auto mb-4 px-4 sm:px-6 lg:px-8" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {projects.map((project, idx) => {
          const hasScreenshots = project.screenshots && project.screenshots.length > 0;
          const mediaSource = hasScreenshots ? project.screenshots[screenshotIndexes[idx]].src : project.image;
          const isVideo = typeof mediaSource === 'string' && mediaSource.toLowerCase().endsWith('.mp4');

          return (
            <Link
              href={`/projects/${slugify(project.title)}`}
              key={idx}
              className="relative flex flex-col sm:flex-row bg-card rounded-2xl shadow-lg border border-border p-3 sm:p-2 gap-3 sm:gap-2 items-center transition-transform duration-200 group hover:scale-[1.02] cursor-pointer no-underline text-inherit"
              onMouseEnter={() => handleMouseEnter(idx, project.screenshots.length)}
              onMouseLeave={() => handleMouseLeave(idx)}
              onClick={() => handleProjectClick(project.title)}
            >
              {isVideo ? (
                <video
                  ref={(el) => { videoRefs.current[idx] = el; }}
                  src={mediaSource}
                  className="w-full sm:w-72 h-48 rounded-lg object-cover bg-card border border-border"
                  muted
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  src={mediaSource}
                  alt={project.title}
                  className="w-full sm:w-72 h-48 rounded-lg object-cover bg-card border border-border"
                />
              )}
              <div className="flex-1 flex flex-col justify-center gap-1 h-full items-center text-center p-2">
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-1 my-1 items-center justify-center">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-muted text-muted-foreground px-2 py-1 rounded-lg text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </div>
              <span className="absolute bottom-4 right-4">
                <ArrowIcon className="text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
export { projects }; 