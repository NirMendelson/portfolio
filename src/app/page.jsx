import Home from '@/components/Home'

export const metadata = {
  title: 'Nir.',
  description: 'AI Builder and full-stack developer specializing in AI agents, LLM applications, and innovative web solutions. Building the future with AI-powered tools.',
}

export default function HomePage() {
  return (
    <div className="App min-h-screen flex items-center justify-center bg-background text-foreground">
      <Home />
    </div>
  )
}