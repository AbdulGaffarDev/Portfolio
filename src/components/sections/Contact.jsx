import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdSend,
} from "react-icons/md";
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [resultMsg, setResultMsg] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setResultMsg("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setSending(false);
          setResultMsg("Message sent — thanks!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          console.log("EmailJS success", response.status, response.text);
        },
        (error) => {
          setSending(false);
          setResultMsg("Failed to send message. Please try again later.");
          console.error("EmailJS error:", error);
        }
      );
  };

  const contactInfo = [
    {
      icon: <MdEmail className="w-6 h-6" />,
      title: "Email",
      value: "a.gaffar.dev@gmail.com",
      link: "mailto:a.gaffar.dev@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Gaffar,",
      color: "text-blue-500",
    },
    {
      icon: <MdPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+92 303 489 5728",
      link: "tel:+923034895728",
      color: "text-green-500",
    },
    {
      icon: <MdLocationOn className="w-6 h-6" />,
      title: "Location",
      value: "Islamabad, Pakistan",
      link: "https://www.google.com/maps/place/Islamabad,+Pakistan",
      color: "text-red-500",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abdul-gaffar-dev/",
      color: "hover:text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/AbdulGaffarDev",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
      bgColor: "bg-gray-100 dark:bg-gray-800",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      name: "WhatsApp",
      url: "https://wa.me/923034895728",
      color: "hover:text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900/20",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-secondary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
          <div className="animate-fadeInLeft">
            <div className="bg-card border border-base rounded-2xl p-8 shadow-theme-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Name
                    </label>
            <input
              type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-main border border-base rounded-lg text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              placeholder="Your name"
            />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email
                    </label>
            <input
              type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-main border border-base rounded-lg text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-main border border-base rounded-lg text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message
                  </label>
            <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-main border border-base rounded-lg text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60"
            >
              <MdSend className="w-5 h-5" />
              <span>{sending ? "Sending..." : "Send Message"}</span>
            </button>
            {resultMsg && (
              <p className="mt-3 text-sm text-primary">{resultMsg}</p>
            )}
          </form>
            </div>
        </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8 animate-fadeInRight">
            {/* Contact Information */}
            <div className="bg-card border border-base rounded-2xl p-8 shadow-theme-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith("mailto:") ? "_self" : "_blank"} 
                    rel={info.link.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex items-center space-x-4 p-4 bg-main border border-base rounded-lg hover:border-primary transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`p-3 rounded-full bg-primary/10 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{info.title}</h4>
                      <p className="text-muted">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              </div>

            {/* Social Links */}
            <div className="bg-card border border-base rounded-2xl p-8 shadow-theme-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 ${social.bgColor} rounded-lg text-center hover:scale-105 transition-all duration-300 group cursor-pointer`}
                    aria-label={social.name}
                  >
                    <div className={`text-2xl text-muted ${social.color} group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
              </div>
                    <p className="text-sm font-medium text-primary mt-2">{social.name}</p>
                  </a>
                ))}
            </div>
          </div>

            {/* Quick Response */}
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                I typically respond to messages within 12 hours. For urgent inquiries, 
                feel free to reach out via WhatsApp.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/923034895728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-300 cursor-pointer"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>WhatsApp</span>
              </a>
                <a
                  href="https://discord.com/users/1239690249265741946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors duration-300 cursor-pointer"
                >
                  <FaDiscord className="w-5 h-5" />
                  <span>Discord</span>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
