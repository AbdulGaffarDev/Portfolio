const AboutCard = ({ icon, title, summary, color = "text-primary" }) => {
  return (
    <div className="group bg-card border border-base rounded-xl p-6 shadow-theme hover:shadow-theme-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer h-full">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`p-4 bg-primary/10 rounded-full flex items-center justify-center ${color} group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
