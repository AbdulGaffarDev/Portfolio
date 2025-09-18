import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaCss3, FaChrome } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiRedux, SiExpress, SiNextdotjs, SiMongoose, SiElectron  } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "StaffVertex (Alphinex Solutions)",
    description: "A time tracking and team management tool. Worked as a React & Next.js frontend developer, also contributed to backend APIs. Built features for user dashboards, reports, and admin management.",
    image: "/assets/StaffVertex.png",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Mongoose", icon: <SiMongoose />, color: "#880000" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    ],
    githubUrl: "",
    liveUrl: "https://staffvertex.com",
    featured: true,
  },
  {
    id: 2,
    title: "Timsync (Ongoing Project)",
    description: "A time tracking and productivity management tool built with Next.js, React, and Electron. Currently stores data locally, with future plans for team support and backend integration.",
    image: "assets/Timsync.png",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Electron", icon: <SiElectron />, color: "#47848F" },
      { name: "Express.js", icon: <SiExpress />, color: "#000000" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    ],
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive personal portfolio website built with React and TailwindCSS, showcasing my projects, skills, and resume. Implemented Redux for state management and theme management (light/dark mode).",
    image: "/assets/Portfolio.png",
    technologies: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    ],
    githubUrl: "https://github.com/AbdulGaffarDev/portfolio",
    liveUrl: "https://abdul-gaffar.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "GitHub User Finder",
    description: "A React-based app to search GitHub users and display their profile details, repositories, and activity using GitHub API.",
    image: "/assets/Github-User-Finder.png",
    technologies: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "API", icon: <FaGithub />, color: "#181717" },
    ],
    githubUrl: "https://github.com/AbdulGaffarDev/github-user-finder",
    liveUrl: "https://abdulgaffardev.github.io/Github-User-Finder/",
    featured: false,
  },
  {
    id: 5,
    title: "Library Management System",
    description: "A JavaScript-based library management system with admin and user sides. Stores records in browser localStorage for managing books, issuing, and returning.",
    image: "/assets/LibraryManagmentSystem.png",
    technologies: [
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <FaCss3 />, color: "#1572B6" },
      { name: "LocalStorage", icon: <FaChrome />, color: "#4285F4" },
    ],
    githubUrl: "https://github.com/AbdulGaffarDev/Library-managment-system",
    liveUrl: "",
    featured: false,
  },
];


const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="group bg-card border border-base rounded-xl overflow-hidden shadow-theme hover:shadow-theme-lg transition-all duration-300 hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover aspect-video"
          />
        ) : (
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-6xl text-primary/50">
              <FaDatabase />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <div className="relative group/button">
            <div
              className={`p-3 backdrop-blur-sm rounded-full transition-colors duration-300 ${
                project.githubUrl 
                  ? "bg-white/20 text-white hover:bg-white/30 cursor-pointer" 
                  : "bg-white/20 text-white hover:bg-gray-500/20 hover:text-gray-400 cursor-not-allowed"
              }`}
              aria-label={project.githubUrl ? "View GitHub repository" : "GitHub repository not available"}
              onClick={project.githubUrl ? () => window.open(project.githubUrl, '_blank') : (e) => e.preventDefault()}
            >
              <FaGithub className="w-5 h-5" />
            </div>
            {!project.githubUrl && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded opacity-0 group-hover/button:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10" style={{backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg-primary)'}}>
                Link not available
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent" style={{borderTopColor: 'var(--color-text-primary)'}}></div>
              </div>
            )}
          </div>
          <div className="relative group/button">
            <div
              className={`p-3 backdrop-blur-sm rounded-full transition-colors duration-300 ${
                project.liveUrl 
                  ? "bg-white/20 text-white hover:bg-white/30 cursor-pointer" 
                  : "bg-white/20 text-white hover:bg-gray-500/20 hover:text-gray-400 cursor-not-allowed"
              }`}
              aria-label={project.liveUrl ? "View live project" : "Live project not available"}
              onClick={project.liveUrl ? () => window.open(project.liveUrl, '_blank') : (e) => e.preventDefault()}
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </div>
            {!project.liveUrl && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded opacity-0 group-hover/button:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10" style={{backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg-primary)'}}>
                Link not available
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent" style={{borderTopColor: 'var(--color-text-primary)'}}></div>
              </div>
            )}
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <div
              key={techIndex}
              className="flex items-center space-x-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
            >
              <span style={{ color: tech.color }}>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <div className="relative group/button flex-1">
            <div
              className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                project.githubUrl 
                  ? "bg-indigo-100 text-indigo-600 hover:bg-gradient-primary hover:text-white cursor-pointer" 
                  : "bg-indigo-100 text-indigo-600 hover:bg-gray-100 hover:text-gray-400 cursor-not-allowed"
              }`}
              onClick={project.githubUrl ? () => window.open(project.githubUrl, '_blank') : (e) => e.preventDefault()}
            >
              <FaGithub className="w-4 h-4" />
              <span>Code</span>
            </div>
            {!project.githubUrl && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded opacity-0 group-hover/button:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10" style={{backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg-primary)'}}>
                Link not available
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent" style={{borderTopColor: 'var(--color-text-primary)'}}></div>
              </div>
            )}
          </div>
          <div className="relative group/button flex-1">
            <div
              className={`flex items-center justify-center space-x-2 border px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                project.liveUrl 
                  ? "border-indigo-600 text-indigo-600 hover:bg-gradient-primary hover:text-white cursor-pointer" 
                  : "border-indigo-600 text-indigo-600 hover:border-gray-300 hover:text-gray-400 cursor-not-allowed"
              }`}
              onClick={project.liveUrl ? () => window.open(project.liveUrl, '_blank') : (e) => e.preventDefault()}
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span>Live</span>
            </div>
            {!project.liveUrl && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded opacity-0 group-hover/button:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10" style={{backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg-primary)'}}>
                Link not available
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent" style={{borderTopColor: 'var(--color-text-primary)'}}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section
      id="projects"
      className="py-20 bg-main relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating amazing web experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16 animate-fadeInUp">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">
            Featured Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="animate-fadeInUp">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fadeInUp">
          <div className="bg-card border border-base rounded-2xl p-8 shadow-theme-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-primary text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/AbdulGaffarDev"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-gradient-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
