'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-EE8JXR7CG6', {
        page_path: pathname,
      })
      
      // Also send a page_view event for more detailed tracking
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname
      })
    }
  }, [pathname])
}

export function AnalyticsProvider({ children }) {
  return children
}
