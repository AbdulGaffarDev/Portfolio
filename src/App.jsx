import { useEffect } from "react";
import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { ToastProvider } from "./contexts/ToastContext";
import SEOHead from "./components/seo/SEOHead";
import { personSchema, websiteSchema, organizationSchema } from "./components/seo/StructuredData";

function App() {
  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }

    // Add smooth scrolling behavior
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar for webkit browsers */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: var(--color-bg-secondary);
      }
      
      ::-webkit-scrollbar-thumb {
        background: var(--color-primary);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: var(--color-primary-hover);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <ToastProvider>
      <SEOHead 
        title="Abdul Gaffar - MERN Stack Developer Portfolio"
        description="Portfolio of Abdul Gaffar, a passionate MERN Stack Developer specializing in React, Node.js, MongoDB, and Express.js. View my projects, skills, and experience."
        keywords="MERN Stack Developer, React Developer, Node.js Developer, MongoDB Developer, Full Stack Developer, Web Developer, JavaScript Developer, Portfolio, Abdul Gaffar"
        structuredData={[personSchema, websiteSchema, organizationSchema]}
      />
      <div className="min-h-screen bg-main text-primary transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ToastProvider>
  );
}

export default App;
