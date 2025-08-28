# Google Analytics Integration

This portfolio website has comprehensive Google Analytics tracking implemented to understand user behavior and engagement.

## What's Tracked

### Page Views
- **Home page** (`/`) - Tracked automatically via `useAnalytics` hook
- **Projects page** (`/projects`) - Tracked when component mounts
- **Projects2 page** (`/projects2`) - Tracked when component mounts  
- **Individual project pages** (`/projects/:slug`) - Tracked when viewing specific projects

### User Interactions
- **Navigation clicks** - When users click on navigation links (Home, Projects)
- **Project clicks** - When users click on project cards or view project details
- **Contact interactions** - Email copying, LinkedIn clicks, GitHub clicks
- **External link clicks** - When users visit external profiles

### Events Sent to Google Analytics

#### Page Views
```javascript
gtag('config', 'G-EE8JXR7CG6', {
  page_path: '/projects',
  page_title: 'Nir. - Projects'
});

gtag('event', 'page_view', {
  page_title: 'Nir. - Projects',
  page_location: 'https://yourdomain.com/projects',
  page_path: '/projects'
});
```

#### Custom Events
```javascript
// Project interactions
gtag('event', 'view_project', {
  event_category: 'Portfolio',
  event_label: 'Rubybeam'
});

gtag('event', 'click_project', {
  event_category: 'Portfolio', 
  event_label: 'MarketBuddy'
});

// Contact interactions
gtag('event', 'contact_click', {
  event_category: 'Contact',
  event_label: 'email_copy'
});

// Navigation
gtag('event', 'navigation', {
  event_category: 'User Interaction',
  event_label: 'header to /projects'
});
```

## Implementation Details

### Files Modified
- `index.html` - Google Analytics script added to `<head>`
- `src/hooks/useAnalytics.js` - Custom hook for page view tracking
- `src/utils/analytics.js` - Utility functions for custom event tracking
- `src/App.jsx` - Main analytics hook integration
- `src/components/Header.jsx` - Navigation and contact tracking
- `src/components/Home.jsx` - Home page interactions
- `src/components/ProjectsPage.jsx` - Project page tracking
- `src/components/Projects2Page.jsx` - Projects2 page tracking
- `src/components/ProjectDetail.jsx` - Individual project tracking

### How It Works
1. **Google Analytics script** loads once when the page loads
2. **useAnalytics hook** tracks route changes and sends page view events
3. **Custom event tracking** captures specific user interactions
4. **All events** are sent to your GA4 property (G-EE8JXR7CG6)

## Viewing Data in Google Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property (G-EE8JXR7CG6)
3. Check **Reports** → **Engagement** → **Events** for custom events
4. Check **Reports** → **Engagement** → **Pages and screens** for page views
5. Check **Reports** → **Engagement** → **User engagement** for session data

## Privacy & GDPR Compliance

- No personal data is collected
- Only anonymous usage statistics are tracked
- Users can opt-out using browser extensions or ad blockers
- Consider adding a cookie consent banner for EU users if needed

## Testing

To verify tracking is working:
1. Open browser developer tools
2. Go to Network tab
3. Navigate between pages
4. Look for requests to `googletagmanager.com`
5. Check Google Analytics real-time reports
