import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is available (Google Analytics script loaded)
    if (typeof window !== 'undefined' && window.gtag) {
      // Track page view
      window.gtag('config', 'G-EE8JXR7CG6', {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
      
      // Also send a page_view event for more detailed tracking
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname
      });
    }
  }, [location.pathname, location.search]);
};
