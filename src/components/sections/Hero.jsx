import Button from "../ui/Button";
import { FaCode, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import useTypewriter from "../../hooks/useTypewriter";

const typewriterTexts = [
  "MERN Developer",
  "Frontend Developer",
  "Backend Developer", 
  "UI/UX Developer",
];

const Hero = () => {
  const { currentText } = useTypewriter(typewriterTexts, {
    typeSpeed: 30,
    deleteSpeed: 15,
    pauseTime: 600,
    startDelay: 300
  });

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      role="banner"
      aria-label="Hero section with introduction"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-main z-0"></div>
      <div className="absolute inset-0 bg-gradient-hero opacity-10 z-0"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float z-0"></div>
      
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float z-0" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent/20 rounded-full animate-float z-0" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300" style={{zIndex: 20, position: 'relative'}}>Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-indigo-600 dark:text-indigo-400" style={{zIndex: 20, position: 'relative'}}>
                Abdul Gaffar
              </h1>
              <div className="text-2xl lg:text-3xl font-semibold min-h-[2.5rem] flex items-center" style={{zIndex: 20, position: 'relative'}}>
                <span className="typewriter-text">
                  {currentText}
                  <span className="typewriter-cursor">|</span>
                </span>
              </div>
            </div>
            
            <p className="text-lg max-w-lg leading-relaxed text-gray-600 dark:text-gray-300" style={{zIndex: 20, position: 'relative'}}>
              Passionate about creating elegant, user-friendly web applications with
              modern technologies. I love turning complex problems into simple, beautiful designs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4" style={{zIndex: 20, position: 'relative'}}>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-primary text-white cursor-pointer"
              >
                Get in Touch
              </button>
              <button 
                onClick={() => scrollToSection('#projects')}
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-gradient-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4" style={{zIndex: 20, position: 'relative'}}>
              <a
                href="https://github.com/AbdulGaffarDev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-gaffar-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="/assets/Abdul_Gaffar_Resume.pdf"
                download
                className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
                aria-label="Download Resume"
              >
                <FaDownload className="w-5 h-5" />
              </a>
            </div>
      </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fadeInRight">
            <div className="relative">
              {/* Floating Background Circles */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full animate-pulse z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full animate-pulse z-0" style={{ animationDelay: '1s' }}></div>
              
              {/* Main Profile Image */}
              <div className="relative z-10">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-theme-lg">
        <img
          src="/assets/profile.jpg"
          alt="Abdul Gaffar - MERN Stack Developer and Software Engineer professional headshot"
          title="Abdul Gaffar - Professional MERN Stack Developer"
          className="w-full h-full object-cover"
        />
                </div>
                
                {/* Floating Code Icon */}
                <div className="absolute -bottom-2 -right-2 bg-card border border-base rounded-full p-4 shadow-theme-lg animate-float">
                  <FaCode className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button
          onClick={() => scrollToSection('#about')}
          className="p-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 cursor-pointer"
          aria-label="Scroll to about section"
        >
          <HiArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
