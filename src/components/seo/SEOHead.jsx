import { useEffect } from 'react';

const SEOHead = ({
  title = "Abdul Gaffar - MERN Stack Developer Portfolio",
  description = "Portfolio of Abdul Gaffar, a passionate MERN Stack Developer specializing in React, Node.js, MongoDB, and Express.js. View my projects, skills, and experience.",
  keywords = "MERN Stack Developer, React Developer, Node.js Developer, MongoDB Developer, Full Stack Developer, Web Developer, JavaScript Developer, Portfolio, Abdul Gaffar",
  canonical = "https://abdul-gaffar.vercel.app",
  ogImage = "https://abdul-gaffar.vercel.app/assets/profile.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData = null,
  noindex = false,
  nofollow = false
}) => {
  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Function to update or create meta tag
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };
    
    // Function to update or create link tag
    const updateLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      
      if (link) {
        link.setAttribute('href', href);
      } else {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        link.setAttribute('href', href);
        document.head.appendChild(link);
      }
    };
    
    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', robotsContent);
    updateMetaTag('author', 'Abdul Gaffar');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');
    updateMetaTag('theme-color', '#6366f1');
    updateMetaTag('msapplication-TileColor', '#6366f1');
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', 'Abdul Gaffar Portfolio', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    // Update Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:creator', '@AbdulGaffarDev');
    updateMetaTag('twitter:site', '@AbdulGaffarDev');
    
    // Update canonical link
    updateLinkTag('canonical', canonical);
    
    // Add structured data
    if (structuredData) {
      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());
      
      // Add new structured data
      if (Array.isArray(structuredData)) {
        structuredData.forEach(data => {
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.textContent = JSON.stringify(data);
          document.head.appendChild(script);
        });
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }
    
    // Cleanup function
    return () => {
      // Reset to default title if needed
      if (title !== "Abdul Gaffar - MERN Stack Developer Portfolio") {
        document.title = "Abdul Gaffar - MERN Stack Developer Portfolio";
      }
    };
  }, [title, description, keywords, canonical, ogImage, ogType, twitterCard, structuredData, noindex, nofollow, robotsContent]);
  
  // This component doesn't render anything visible
  return null;
};

export default SEOHead;