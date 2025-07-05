import React from 'react';

const projects = [
  {
    title: 'Rubybeam',
    description: 'AI-powered lead generation for influencer agencies',
    tags: ['AI Agents', 'LangChain', 'React'],
    image: '/public/rubybeamScreenshot.png',
    link: '#',
  },
  {
    title: 'MarketBuddy',
    description: 'AI-powered shared grocery orders for students',
    tags: ['AI Agents', 'RAG', 'FastAPI', 'Vue'],
    image: 'https://placehold.co/200x140?text=Project+2',
    link: '#',
  },
  {
    title: 'WikiQuest',
    description: 'Turn doomscrolling into discovery with AI-powered Wikipedia journeys.',
    tags: ['Search', 'LLM', 'Flask'],
    image: 'https://placehold.co/200x140?text=Project+3',
    link: '#',
  },
  {
    title: 'Altcast',
    description: 'The platform for commentary creators.',
    tags: ['Extraction', 'NLP', 'Python'],
    image: 'https://placehold.co/200x140?text=Project+4',
    link: '#',
  },
];

const ArrowIcon = ({ className }) => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className={className}>
    <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProjectsPage = () => {
  return (
    <div className="min-h-screen py-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto pt-10">
        {projects.map((project, idx) => (
          <div key={idx} className="relative flex bg-white rounded-2xl shadow-lg border border-gray-300 p-6 gap-8 items-center transition-transform duration-200 group hover:scale-105 cursor-pointer">
            <img src={project.image} alt={project.title} className="w-72 h-48 rounded-lg object-cover bg-gray-500 border border-gray-300" />
            <div className="flex-1 flex flex-col justify-center gap-2 h-full items-center text-center">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2 my-2 items-center justify-center">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">{tag}</span>
                ))}
              </div>
            </div>
            <a href={project.link} className="absolute bottom-4 right-4">
              <ArrowIcon className="text-slate-400 group-hover:text-slate-600 transition-colors duration-200" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage; 