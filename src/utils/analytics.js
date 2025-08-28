// Google Analytics utility functions
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Track specific portfolio interactions
export const trackProjectView = (projectName) => {
  trackEvent('view_project', 'Portfolio', projectName);
};

export const trackProjectClick = (projectName) => {
  trackEvent('click_project', 'Portfolio', projectName);
};

export const trackNavigation = (from, to) => {
  trackEvent('navigation', 'User Interaction', `${from} to ${to}`);
};

export const trackContactClick = (method) => {
  trackEvent('contact_click', 'Contact', method);
};

export const trackDownload = (fileName) => {
  trackEvent('download', 'Files', fileName);
};
