import { Helmet } from 'react-helmet-async';

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
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Abdul Gaffar Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@GaffarDev" />
      <meta name="twitter:site" content="@GaffarDev" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Abdul Gaffar" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
