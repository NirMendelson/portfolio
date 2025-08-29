import ProjectDetail from '@/components/ProjectDetail'

// Import projects to generate static params
const projects = [
  { title: 'Rubybeam' },
  { title: 'MarketBuddy' },
  { title: 'Shortcut Master' },
  { title: 'Scenario Simulator' }
]

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

// Generate static params for all projects at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: slugify(project.title),
  }))
}

export async function generateMetadata({ params }) {
  // Await params first (Next.js 15 requirement)
  const { slug } = await params;
  
  // Convert slug back to proper project title for clean tab names
  const project = projects.find(p => slugify(p.title) === slug);
  const projectTitle = project ? project.title : slug;
  
  return {
    title: projectTitle,
    description: `Explore ${projectTitle}, an AI-powered project built with cutting-edge artificial intelligence technology. See how AI agents and LLM applications solve real-world problems.`,
  }
}

export default async function ProjectDetailPage({ params }) {
  // Await params first (Next.js 15 requirement)
  const { slug } = await params;
  return <ProjectDetail slug={slug} />
}