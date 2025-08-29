import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { AnalyticsProvider } from '@/hooks/useAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nir Mendelson - AI Builder',
  description: 'AI Builder and full-stack developer specializing in AI agents, LLM applications, and innovative web solutions. Building the future with AI-powered tools.',
  keywords: 'AI Builder, developer, portfolio, AI agents, LLM applications, web development, react, next.js, artificial intelligence',
  openGraph: {
    title: 'Nir Mendelson - AI Builder',
    description: 'AI Builder and full-stack developer specializing in AI agents, LLM applications, and innovative web solutions.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnalyticsProvider>
          <Header />
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  )
}
