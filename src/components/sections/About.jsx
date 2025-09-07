import { FaGraduationCap, FaLightbulb, FaCode, FaRocket } from "react-icons/fa";
import AboutCard from "../ui/AboutCard";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import Button from "../ui/Button";
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const aboutCardsData = [
  {
    icon: <FaGraduationCap className="w-8 h-8" />,
    title: "Education",
    summary: "BS in Software Engineering, NUML, Islamabad",
    color: "text-blue-500",
  },
  {
    icon: <BsFillSuitcaseLgFill className="w-8 h-8" />,
    title: "Experience",
    summary: "1+ year in web development at Alphinex Solutions",
    color: "text-green-500",
  },
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: "Passion",
    summary: "Creating elegant, efficient solutions to complex problems",
    color: "text-yellow-500",
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Goals",
    summary: "Building scalable applications that make a difference",
    color: "text-purple-500",
  },
];

const socialLinks = [
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    url: "https://www.linkedin.com/in/abdul-gaffar/",
    label: "LinkedIn",
    color: "hover:text-blue-600",
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    url: "https://github.com/abdulgaffar",
    label: "GitHub",
    color: "hover:text-gray-800 dark:hover:text-gray-200",
  },
  {
    icon: <FaEnvelope className="w-5 h-5" />,
    url: "mailto:abdulgaffar@example.com",
    label: "Email",
    color: "hover:text-red-500",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-main relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Get to know more about my journey, experience, and passion for creating amazing web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - About Text */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Who am I?</h3>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  I'm <span className="text-primary font-semibold">Abdul Gaffar</span>, a passionate 
                  MERN Stack Developer with a solid foundation in full-stack web development. 
                  While I primarily focus on React and MongoDB, I also work with Node.js and 
                  Express.js to build responsive, user-friendly interfaces supported by robust 
                  server-side logic.
                </p>
                <p>
                  Although I'm early in my professional journey, I've already worked on
                  a variety of personal and team projects that reflect my drive to learn
                  and improve. I'm continuously exploring new technologies and best
                  practices to enhance my skill set and contribute meaningfully to the
                  development community.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with 
                  fellow developers in the community.
                </p>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-4">
              <a
                href="/assets/Abdul_Gaffar_Resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <FaDownload className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`p-3 bg-card border border-base rounded-full text-muted transition-all duration-300 hover:scale-110 shadow-theme hover:shadow-theme-lg cursor-pointer ${link.color}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - About Cards */}
          <div className="animate-fadeInRight">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutCardsData.map((card, index) => (
                <div
                  key={index}
                  className="group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AboutCard
                    icon={card.icon}
                    title={card.title}
                    summary={card.summary}
                    color={card.color}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fadeInUp">
          {[
            { number: "1+", label: "Years Experience" },
            { number: "20+", label: "Projects Completed" },
            { number: "5+", label: "Technologies Mastered" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card border border-base rounded-xl shadow-theme hover:shadow-theme-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
