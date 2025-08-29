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
  return {
    title: `AI Project - ${params.slug} - Nir Mendelson`,
    description: `Explore ${params.slug}, an AI-powered project built with cutting-edge artificial intelligence technology. See how AI agents and LLM applications solve real-world problems.`,
  }
}

export default function ProjectDetailPage({ params }) {
  return <ProjectDetail slug={params.slug} />
}
