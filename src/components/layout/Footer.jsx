import { FaGithub, FaLinkedinIn, FaHeart, FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/AbdulGaffarDev",
      color: "hover:text-gray-300",
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abdul-gaffar-dev",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaXTwitter className="w-5 h-5" />,
      name: "Twitter",
      url: "https://x.com/AbdulGaffa92758?t=EAPuF6wG2oKFPhJiUd3NyA&s=09",
      color: "hover:text-blue-400",
    },
    {
      icon: <TbBrandFiverr className="w-5 h-5" />,
      name: "Fiverr",
      url: "https://www.fiverr.com/s/GzaVYy7",
      color: "hover:text-green-400",
    },
  ];

  const contactInfo = [
    {
      icon: <MdEmail className="w-4 h-4" />,
      text: "a.gaffar.dev@gmail.com",
      href: "mailto:a.gaffar.dev@gmail.com",
    },
    {
      icon: <MdPhone className="w-4 h-4" />,
      text: "+92 303 489 5728",
      href: "tel:+923034895728",
    },
    {
      icon: <MdLocationOn className="w-4 h-4" />,
      text: "Islamabad, Pakistan",
      href: "#",
    },
  ];

  return (
    <footer className="bg-tertiary border-t border-base relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white p-3 rounded-full shadow-theme-lg hover:scale-110 transition-all duration-300 cursor-pointer"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Abdul Gaffar
              </h3>
              <p className="text-secondary font-semibold mb-4">
                Full Stack Developer
              </p>
              <p className="text-muted leading-relaxed max-w-md">
                Passionate about creating elegant, user-friendly web applications with modern technologies. 
                Let's bring your ideas to life!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-muted hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {contact.icon}
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-6">Follow Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-card border border-base rounded-full text-muted ${social.color} transition-all duration-300 hover:scale-110 shadow-theme hover:shadow-theme-lg cursor-pointer`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-base">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted text-sm">
              <span>&copy; {currentYear} Abdul Gaffar. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-muted text-sm">
              <span>Made with</span>
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by Abdul Gaffar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
