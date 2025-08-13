import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from './ProjectsPage'; // We'll import the projects array from ProjectsPage
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../components/ui/carousel';
import ReactMarkdown from 'react-markdown';
// import { Badge } from '../components/ui/badge'; // Uncomment if badge exists
// import { Separator } from '../components/ui/separator'; // Uncomment if separator exists

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const badgeClass =
  'inline-block rounded-lg border border-border bg-card px-4 py-1 text-sm font-medium text-card-foreground shadow-sm';

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
  const [carouselApi, setCarouselApi] = useState(null);
  const [showFullOverview, setShowFullOverview] = useState(false);
  const overviewText = project.overview || project.description || '';
  const charLimit = 250;
  const isTruncated = !showFullOverview && overviewText.length > charLimit;
  const truncatedText = isTruncated ? overviewText.slice(0, charLimit) : overviewText;
  const truncatedWithReadMore = isTruncated
    ? truncatedText + '... ' + `<span class=\"text-blue-600 underline cursor-pointer\" style=\"font-size:inherit\" onclick=\"window.__readMoreClick && window.__readMoreClick()\" role=\"button\">Read More</span>`
    : overviewText;
  const slidesPerPage = 3;
  const totalSlides = screenshots.length;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handlePrev = () => {
    if (!carouselApi) return;
    const currentPage = Math.floor(current / slidesPerPage);
    const prevPage = Math.max(0, currentPage - 1);
    const newIdx = prevPage * slidesPerPage;
    carouselApi.scrollTo(newIdx);
    setCurrent(newIdx);
  };

  const handleNext = () => {
    if (!carouselApi) return;
    const currentPage = Math.floor(current / slidesPerPage);
    const lastPage = Math.ceil(totalSlides / slidesPerPage) - 1;
    const nextPage = Math.min(lastPage, currentPage + 1);
    const newIdx = nextPage * slidesPerPage;
    carouselApi.scrollTo(newIdx);
    setCurrent(newIdx);
  };

  if (!project) {
    return (
      <div className="max-w-2xl mx-auto py-16 sm:py-20 px-4 sm:px-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Project not found</h2>
        <button className="underline text-blue-600 text-sm sm:text-base" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-left">
      {/* Modal for screenshot */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setModalOpen(false)}>
          <div className="relative bg-transparent w-full max-w-4xl" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-xl sm:text-2xl font-bold bg-black/50 rounded-full w-8 h-8 hover:bg-black/80 transition p-0 flex items-center justify-center"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              <span className="absolute inset-0 m-auto flex items-center justify-center leading-none -mt-2.49" style={{fontSize: '1.5rem', lineHeight: 1}}>×</span>
            </button>
            <img
              src={modalImage?.src || modalImage}
              alt={modalImage?.caption || 'Screenshot'}
              className="w-full max-w-[90vw] max-h-[80vh] rounded-xl shadow-lg border border-border bg-white"
            />
            {modalImage?.caption && (
              <div className="text-white text-center mt-2 text-sm sm:text-base bg-black/40 rounded px-2 py-1 inline-block mx-auto w-full">
                {modalImage.caption}
              </div>
            )}
          </div>
        </div>
      )}
      {/* Hero Section */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 tracking-tight text-foreground text-left">{project.title}</h1>

      {/* Cover Image/Card */}

      {/* Overview */}
      <section className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-foreground text-left">📌 Overview</h2>
        <div className="prose max-w-none text-foreground dark:text-foreground prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-a:text-blue-600 text-sm sm:text-base" style={{ marginBottom: 0 }}>
          {isTruncated ? (
            <p style={{ marginBottom: 0 }}>
              {truncatedText}
              <span>...</span>
              <span
                className="text-blue-600 underline cursor-pointer"
                style={{ fontSize: 'inherit' }}
                onClick={() => setShowFullOverview(true)}
              >
                show more
              </span>
            </p>
          ) : (
            <ReactMarkdown components={{ p: ({node, ...props}) => <p style={{marginBottom: 0}} {...props} /> }}>
              {overviewText}
            </ReactMarkdown>
          )}
          {showFullOverview && overviewText.length > charLimit && (
            <span
              className="text-blue-600 underline cursor-pointer"
              style={{ fontSize: 'inherit' }}
              onClick={() => setShowFullOverview(false)}
            >
              show less
            </span>
          )}
        </div>
      </section>
      {/* Technologies */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-foreground text-left">💻 Technologies</h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {(project.technologies || project.tags).map((tech, i) => (
            <span key={i} className={badgeClass + ' text-sm sm:text-base px-2 sm:px-3 py-1'}>{tech}</span>
          ))}
        </div>
      </section>
      {/* Screenshots Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-foreground text-left">🖼️ Screenshots</h2>
        
        {/* Mobile: Vertical list of all screenshots */}
        <div className="block md:hidden">
          <div className="space-y-4">
            {screenshots.map((shot, idx) => (
              <div key={idx} className="rounded-2xl border border-border bg-muted shadow-sm p-4 cursor-pointer" onClick={() => { setModalImage(shot); setModalOpen(true); }}>
                <img
                  src={shot.src || shot}
                  alt={shot.caption || `Screenshot ${idx + 1}`}
                  className="object-contain w-full max-h-64 rounded-lg mb-3"
                />
                <span className="text-sm text-muted-foreground font-medium text-center block">{shot.caption || `Screenshot ${idx + 1}`}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Carousel */}
        <div className="hidden md:block">
          <div className="w-full">
            <Carousel className="w-full max-w-3xl mx-auto" setApi={api => {
              if (api) {
                setCarouselApi(api);
                api.on('select', () => setCurrent(api.selectedScrollSnap()));
              }
            }}>
              <CarouselContent className="-ml-4">
                {screenshots.map((shot, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:basis-1/3">
                    <div className="rounded-2xl border border-border bg-muted shadow-sm flex flex-col items-center p-6 min-h-[220px] cursor-pointer" onClick={() => { setModalImage(shot); setModalOpen(true); }}>
                      <img
                        src={shot.src || shot}
                        alt={shot.caption || `Screenshot ${idx + 1}`}
                        className="object-contain w-full max-h-40 mb-4"
                      />
                      <span className="text-base text-muted-foreground font-medium">{shot.caption || `Screenshot ${idx + 1}`}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Use previous design but custom movement */}
              <CarouselPrevious onClick={handlePrev} disabled={current === 0} />
              <CarouselNext onClick={handleNext} disabled={current >= totalSlides - slidesPerPage} />
            </Carousel>
            {/* Dot navigation */}
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: Math.ceil(screenshots.length / slidesPerPage) }).map((_, idx) => {
                const isActive = Math.floor(current / slidesPerPage) === idx;
                return (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full ${isActive ? 'bg-foreground' : 'bg-muted'} inline-block`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail; 