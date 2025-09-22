import { useEffect } from 'react';

// Replace with your actual Google Analytics ID
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 measurement ID

const GoogleAnalytics = () => {
  useEffect(() => {
    // Check if GA_TRACKING_ID is set
    if (GA_TRACKING_ID === 'G-XXXXXXXXXX') {
      console.log('Google Analytics not configured. Please set your GA_TRACKING_ID.');
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector(`script[src*="${GA_TRACKING_ID}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

// Helper function to track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Helper function to track events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export default GoogleAnalytics;