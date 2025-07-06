import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from './ProjectsPage'; // We'll import the projects array from ProjectsPage
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
// import { Badge } from '../components/ui/badge'; // Uncomment if badge exists
// import { Separator } from '../components/ui/separator'; // Uncomment if separator exists

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const badgeClass =
  'inline-block rounded-lg border border-gray-200 bg-white px-4 py-1 text-sm font-medium text-gray-800 shadow-sm';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = React.useMemo(() =>
    projects.find(p => slugify(p.title) === slug),
    [slug]
  );
  // Placeholder meta data (replace with real data if available)
  const status = project?.status || 'In Progress';
  const lastUpdated = project?.lastUpdated || 'April 2024';
  const commits = project?.commits || 100;
  const screenshots = project?.screenshots || [project?.image];
  const [current, setCurrent] = useState(0);

  if (!project) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <button className="underline text-blue-600" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-left">
      {/* Hero Section */}
      <h1 className="text-4xl font-semibold mb-6 tracking-tight text-gray-900 text-left">{project.title}</h1>
      <div className="flex flex-wrap gap-3 mb-8">
        <span className={badgeClass}>{status}</span>
        <span className={badgeClass}>Last updated: {lastUpdated}</span>
        <span className={badgeClass}>{commits} commits</span>
      </div>
      {/* Cover Image/Card */}

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 text-left">Overview</h2>
        <p className="text-lg text-gray-700 text-left">{project.overview || project.description}</p>
      </section>
      {/* Technologies */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 text-left">Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {(project.technologies || project.tags).map((tech, i) => (
            <span key={i} className={badgeClass + ' text-base px-3 py-1'}>{tech}</span>
          ))}
        </div>
      </section>
      {/* Screenshots Carousel */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-left">Screenshots</h2>
        <div className="w-full">
          <Carousel className="w-full max-w-3xl mx-auto" setApi={api => {
            if (api) {
              api.on('select', () => setCurrent(api.selectedScrollSnap()));
            }
          }}>
            <CarouselContent className="-ml-4">
              {screenshots.map((shot, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/3">
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm flex flex-col items-center p-6 min-h-[220px]">
                    <img
                      src={shot.src || shot}
                      alt={shot.caption || `Screenshot ${idx + 1}`}
                      className="object-contain w-full max-h-40 mb-4"
                    />
                    <span className="text-base text-gray-700 font-medium">{shot.caption || `Screenshot ${idx + 1}`}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          {/* Dot navigation */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: Math.ceil(screenshots.length / 3) }).map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full ${current === idx * 3 ? 'bg-gray-900' : 'bg-gray-300'} inline-block`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail; 