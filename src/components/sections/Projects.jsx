
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiRedux, SiExpress } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with MERN stack featuring user authentication, product management, shopping cart, and payment integration.",
    image: "/assets/project1.jpg",
    technologies: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Express", icon: <SiExpress />, color: "#000000" },
    ],
    githubUrl: "https://github.com/abdulgaffar/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/assets/project2.jpg",
    technologies: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    ],
    githubUrl: "https://github.com/abdulgaffar/task-manager",
    liveUrl: "https://taskmanager-demo.netlify.app",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my work and skills with smooth animations and dark mode support.",
    image: "/assets/project3.jpg",
    technologies: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    ],
    githubUrl: "https://github.com/abdulgaffar/portfolio",
    liveUrl: "https://abdulgaffar.dev",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A comprehensive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/assets/project4.jpg",
    technologies: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    ],
    githubUrl: "https://github.com/abdulgaffar/weather-dashboard",
    liveUrl: "https://weather-demo.herokuapp.com",
    featured: false,
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "A social media management dashboard with analytics, post scheduling, and engagement tracking features.",
    image: "/assets/project5.jpg",
    technologies: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      { name: "Express", icon: <SiExpress />, color: "#000000" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    ],
    githubUrl: "https://github.com/abdulgaffar/social-dashboard",
    liveUrl: "https://social-dashboard-demo.vercel.app",
    featured: true,
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "A full-featured blog platform with rich text editor, comment system, and admin panel for content management.",
    image: "/assets/project6.jpg",
    technologies: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    ],
    githubUrl: "https://github.com/abdulgaffar/blog-platform",
    liveUrl: "https://blog-demo.netlify.app",
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
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <div className="text-6xl text-primary/50">
            <FaDatabase />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
            aria-label="View GitHub repository"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
            aria-label="View live project"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
          </a>
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
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 bg-indigo-100 text-indigo-600 hover:bg-gradient-primary hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer"
          >
            <FaGithub className="w-4 h-4" />
            <span>Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 border border-indigo-600 text-indigo-600 hover:bg-gradient-primary hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span>Live</span>
          </a>
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
                href="https://github.com/abdulgaffar"
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
