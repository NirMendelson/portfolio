import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Rubybeam',
    description: 'AI-powered lead generation for influencer agencies',
    overview: `Rubybeam is an AI tool that automates the sponsorship outreach process for influencer agencies. It identifies relevant brands for each YouTuber and generates personalized pitch emails at scale. The system reduces manual work, improves targeting accuracy, and helps agencies close more deals, faster.

The core workflow involves four automated steps:

1. **Featching brand data** from multiple sources  
2. **Analyzing influencer content** to understand audience and niche  
3. **Matching brands** using category alignment and audience fit  
4. **Generating emails** with contextual personalization

The entire process is orchestrated through an AI agent framework powered by Python and OpenAI's language models. I built the backend in Node.js with MongoDB, exposed endpoints via REST APIs, and used React for the frontend. The app is deployed on AWS and supports high-throughput batch processing of outreach campaigns.

I designed and implemented the system architecture, built internal tools for debugging and QA, and iterated the matching logic based on feedback from real agencies during pilot testing.`,

    technologies: ['Python', 'LangChain', 'OpenAI API', 'React', 'Node.js', 'MongoDB',  'AWS', 'Husky'],
    screenshots: [
      { src: '/public/rubybeamScreenshot.png', caption: 'Homepage' },
      { src: '/public/rubybeamFeatures.png', caption: 'Features' },
      { src: '/public/rubybeamLeads1.png', caption: 'Leads' },
      { src: '/public/rubybeamBrandOverview.png', caption: 'Brand Overview' },
      { src: '/public/rubybeamOutreach.png', caption: 'Outreach' }
    ],
    status: 'In Progress',
    lastUpdated: 'April 2024',
    commits: 100,
    tags: ['AI Agents', 'LangChain', 'Data Enrichment'],
    image: '/public/rubybeamScreenshot.png',
    link: '#',
  },
  {
    title: 'Global YouTuber',
    description: 'Translate your videos to multiple languages, with your own voice',
    overview: 'Global YouTuber enables creators to reach a worldwide audience by translating and dubbing videos using AI voice cloning.',
    technologies: ['Vue', 'Whisper', 'Hugging Face'],
    screenshots: [
      { src: 'https://placehold.co/400x240?text=Main+UI', caption: 'Main interface' },
      { src: 'https://placehold.co/400x240?text=Voice+Clone', caption: 'Voice cloning setup' }
    ],
    status: 'Shipped',
    lastUpdated: 'March 2024',
    commits: 80,
    tags: ['Multimodal AI', 'Whisper', 'Hugging Face'],
    image: 'https://placehold.co/200x140?text=Project+2',
    link: '#',
  },
  {
    title: 'MarketBuddy',
    description: 'AI-powered shared grocery orders for students',
    overview: 'MarketBuddy is an AI-powered platform that allows students to order groceries together and share the cost.',
    technologies: ['RAG', 'Vector Search', 'Agents', 'FastAPI', 'PostgreSQL'],
    screenshots: [
      { src: 'https://placehold.co/400x240?text=MarketBuddy+Dashboard', caption: 'MarketBuddy Dashboard' },
      { src: 'https://placehold.co/400x240?text=Order+Process', caption: 'Order process' },
      { src: 'https://placehold.co/400x240?text=Analytics', caption: 'Analytics dashboard' }
    ],
    status: 'In Progress',
    lastUpdated: 'February 2024',
    commits: 50,
    tags: ['RAG', 'Vector Search', 'Agents', 'FastAPI', 'PostgreSQL'],
    image: 'https://placehold.co/200x140?text=Project+2',
    link: '#',
  },
  {
    title: 'WikiQuest',
    description: 'Turn doomscrolling into discovery with AI-powered Wikipedia journeys.',
    overview: 'WikiQuest is an AI-powered platform that allows users to explore Wikipedia articles in a more engaging and interactive way.',
    technologies: ['RAG', 'LLM Apps', 'User Simulation', 'Wikipedia API'],
    screenshots: [
      { src: 'https://placehold.co/400x240?text=WikiQuest+Dashboard', caption: 'WikiQuest Dashboard' },
      { src: 'https://placehold.co/400x240?text=Journey+Start', caption: 'Starting a journey' },
      { src: 'https://placehold.co/400x240?text=Article+View', caption: 'Viewing an article' }
    ],
    status: 'Shipped',
    lastUpdated: 'January 2024',
    commits: 70,
    tags: ['RAG', 'LLM Apps', 'User Simulation', 'Wikipedia API'],
    image: 'https://placehold.co/200x140?text=Project+3',
    link: '#',
  },
  {
    title: 'Altcast',
    description: 'The platform for commentary creators.',
    overview: 'Altcast is a platform that allows creators to commentate on videos and interact with their audience.',
    technologies: ['Audio Syncing', 'React', 'Python'],
    screenshots: [
      { src: 'https://placehold.co/400x240?text=Altcast+Dashboard', caption: 'Altcast Dashboard' },
      { src: 'https://placehold.co/400x240?text=Commentary+Creation', caption: 'Creating a commentary' },
      { src: 'https://placehold.co/400x240?text=Live+Stream', caption: 'Live stream' }
    ],
    status: 'In Progress',
    lastUpdated: 'December 2023',
    commits: 30,
    tags: ['Audio Syncing', 'React', 'Python'],
    image: 'https://placehold.co/200x140?text=Project+4',
    link: '#',
  },
  {
    title: 'YouTube Fantasy League',
    description: 'Choose up and coming YouTubers and compete with friends',
    overview: 'YouTube Fantasy League is a platform that allows users to create fantasy leagues based on YouTube videos.',
    technologies: ['Gamification', 'Data Scraping', 'Node.js'],
    screenshots: [
      { src: 'https://placehold.co/400x240?text=Fantasy+League+Dashboard', caption: 'Fantasy League Dashboard' },
      { src: 'https://placehold.co/400x240?text=League+Creation', caption: 'Creating a league' },
      { src: 'https://placehold.co/400x240?text=Competition', caption: 'Competition page' }
    ],
    status: 'Shipped',
    lastUpdated: 'November 2023',
    commits: 60,
    tags: ['Gamification', 'Data Scraping', 'Node.js'],
    image: 'https://placehold.co/200x140?text=Project+4',
    link: '#',
  },
  {
    title: 'History-based Ideas Generator',
    description: 'Simulate historical events and generate startup ideas',
    overview: 'History-based Ideas Generator is a platform that allows users to simulate historical events and generate startup ideas based on those events.',
    technologies: ['Simulation', 'LLM', 'Prompt Engineering', 'OpenAI', 'Idea Generation'],
    screenshots: [
      { src: 'https://placehold.co/400x240?text=Idea+Generator+Dashboard', caption: 'Idea Generator Dashboard' },
      { src: 'https://placehold.co/400x240?text=Event+Simulation', caption: 'Simulating an event' },
      { src: 'https://placehold.co/400x240?text=Idea+Generation', caption: 'Generating an idea' }
    ],
    status: 'In Progress',
    lastUpdated: 'October 2023',
    commits: 40,
    tags: ['Simulation', 'LLM', 'Prompt Engineering', 'OpenAI', 'Idea Generation'],
    image: 'https://placehold.co/200x140?text=Project+4',
    link: '#',
  }
];

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

const ProjectsPage = () => {
  return (
    <div className="min-h-screen py-10 w-full bg-background text-foreground">
      <h1 className="text-4xl font-semibold mt-6 mb-4 text-foreground text-left max-w-7xl mx-auto ">Projects</h1>
      <div className="h-px bg-border border-0 max-w-7xl mx-auto mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        {projects.map((project, idx) => (
          <Link
            to={`/projects/${slugify(project.title)}`}
            key={idx}
            className="relative flex bg-card rounded-2xl shadow-lg border border-border p-4 gap-6 items-center transition-transform duration-200 group hover:scale-[1.02] cursor-pointer no-underline text-inherit"
          >
            <img src={project.image} alt={project.title} className="w-72 h-48 rounded-lg object-cover bg-muted border border-border" />
            <div className="flex-1 flex flex-col justify-center gap-1 h-full items-center text-center">
              <h3 className="text-xl font-semibold text-card-foreground">{project.title}</h3>
              <p className="text-muted-foreground text-base">{project.description}</p>
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
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
export { projects }; 