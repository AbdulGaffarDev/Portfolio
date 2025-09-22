// Structured Data Schemas for SEO

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Abdul Gaffar",
  "jobTitle": "MERN Stack Developer",
  "description": "Passionate MERN Stack Developer specializing in React, Node.js, MongoDB, and Express.js. Creating elegant, user-friendly web applications with modern technologies.",
  "url": "https://abdul-gaffar.vercel.app",
  "image": "https://abdul-gaffar.vercel.app/assets/profile.jpg",
  "sameAs": [
    "https://github.com/AbdulGaffarDev",
    "https://www.linkedin.com/in/abdul-gaffar-dev/",
    "https://abdul-gaffar.vercel.app"
  ],
  "email": "a.gaffar.dev@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PK",
    "addressLocality": "Islamabad"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "National University of Modern Languages (NUML)",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Islamabad",
      "addressCountry": "PK"
    }
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Alphinex Solutions"
  },
  "knowsAbout": [
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Redux",
    "Next.js",
    "MERN Stack",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Software Developer",
    "occupationLocation": {
      "@type": "City",
      "name": "Islamabad"
    },
    "skills": [
      "React Development",
      "Node.js Development",
      "MongoDB Development",
      "Express.js Development",
      "JavaScript Programming",
      "Web Application Development"
    ]
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Abdul Gaffar Portfolio",
  "description": "Professional portfolio website showcasing MERN Stack development projects, skills, and experience of Abdul Gaffar.",
  "url": "https://abdul-gaffar.vercel.app",
  "author": {
    "@type": "Person",
    "name": "Abdul Gaffar"
  },
  "inLanguage": "en-US",
  "copyrightYear": "2024",
  "dateCreated": "2024-01-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://abdul-gaffar.vercel.app/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Abdul Gaffar Development",
  "description": "Professional web development services specializing in MERN Stack applications.",
  "url": "https://abdul-gaffar.vercel.app",
  "logo": "https://abdul-gaffar.vercel.app/assets/profile.jpg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92-XXX-XXXXXXX",
    "contactType": "customer service",
    "email": "a.gaffar.dev@gmail.com",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PK",
    "addressLocality": "Islamabad"
  },
  "founder": {
    "@type": "Person",
    "name": "Abdul Gaffar"
  },
  "foundingDate": "2024",
  "sameAs": [
    "https://github.com/AbdulGaffarDev",
    "https://www.linkedin.com/in/abdul-gaffar-dev/"
  ]
};

export const projectSchema = (projects) => {
  return projects.map(project => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "url": project.liveUrl || project.githubUrl,
    "image": project.image ? `https://abdul-gaffar.vercel.app${project.image}` : undefined,
    "author": {
      "@type": "Person",
      "name": "Abdul Gaffar"
    },
    "creator": {
      "@type": "Person",
      "name": "Abdul Gaffar"
    },
    "dateCreated": "2024",
    "programmingLanguage": project.technologies.map(tech => tech.name),
    "codeRepository": project.githubUrl,
    "keywords": project.technologies.map(tech => tech.name).join(", "),
    "genre": "Web Application",
    "inLanguage": "en-US"
  }));
};

export const breadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};
