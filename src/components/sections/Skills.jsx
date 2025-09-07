import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiVite,
  SiFirebase,
  SiPostman,
  SiNextdotjs,
  SiTypescript,
  SiFigma,
} from "react-icons/si";

const technicalSkills = [
  {
    title: "HTML5",
    icon: <FaHtml5 />,
    color: "#E34F26",
    level: "Expert",
  },
  {
    title: "CSS3",
    icon: <FaCss3Alt />,
    color: "#1572B6",
    level: "Expert",
  },
  {
    title: "JavaScript",
    icon: <FaJs />,
    color: "#F7DF1E",
    level: "Advanced",
  },
  {
    title: "React",
    icon: <FaReact />,
    color: "#61DAFB",
    level: "Advanced",
  },
  {
    title: "Redux",
    icon: <SiRedux />,
    color: "#764ABC",
    level: "Intermediate",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
    level: "Advanced",
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap />,
    color: "#CB3837",
    level: "Advanced",
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs />,
    color: "#000000",
    level: "Intermediate",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178C6",
    level: "Intermediate",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs />,
    color: "#339933",
    level: "Intermediate",
  },
  {
    title: "Express.js",
    icon: <SiExpress />,
    color: "#000000",
    level: "Intermediate",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
    color: "#47A248",
    level: "Intermediate",
  },
  {
    title: "Git",
    icon: <FaGitAlt />,
    color: "#F05032",
    level: "Advanced",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    color: "#181717",
    level: "Advanced",
  },
  {
    title: "Postman",
    icon: <SiPostman />,
    color: "#FF6C37",
    level: "Intermediate",
  },
  {
    title: "Figma",
    icon: <SiFigma />,
    color: "#F24E1E",
    level: "Beginner",
  },
];

const softSkills = [
  { title: "Problem Solving", value: 85, color: "bg-gradient-primary" },
  { title: "Communication", value: 87, color: "bg-gradient-secondary" },
  { title: "Team Collaboration", value: 80, color: "bg-gradient-accent" },
  { title: "Time Management", value: 90, color: "bg-gradient-primary" },
  { title: "Adaptability", value: 84, color: "bg-gradient-secondary" },
  { title: "Attention to Detail", value: 83, color: "bg-gradient-accent" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-secondary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks, continuously
            expanding my skill set to deliver the best solutions.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-20 animate-fadeInUp">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-card border border-base rounded-xl p-6 shadow-theme hover:shadow-theme-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div 
                    className="text-4xl group-hover:scale-110 transition-transform duration-300"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">
                      {skill.title}
                    </h4>
                    <span className="text-xs text-muted bg-primary/10 px-2 py-1 rounded-full">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="animate-fadeInUp">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-card border border-base rounded-xl p-6 shadow-theme hover:shadow-theme-lg transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-primary">
                    {skill.title}
                  </h4>
                  <span className="text-sm font-medium text-muted">
                    {skill.value}%
                  </span>
                </div>
                <div className="w-full bg-tertiary h-3 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.value}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center animate-fadeInUp">
          <div className="bg-card border border-base rounded-2xl p-8 shadow-theme-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Why Choose Me?
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              I combine technical expertise with strong soft skills to deliver exceptional results. 
              My problem-solving approach, attention to detail, and collaborative nature make me 
              a valuable team member for any project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">16+</div>
                <div className="text-sm text-muted">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted">Average Skill Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted">Core Soft Skills</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
