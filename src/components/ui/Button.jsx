
const Button = ({
  text,
  variant = 'solid',
  icon,
  url,
  onClick,
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95 focus-ring disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
  
  const variantClasses = {
    solid: 'bg-gradient-primary text-white shadow-theme hover:shadow-theme-lg',
    outline: 'border-2 border-primary text-primary hover:bg-gradient-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10',
    secondary: 'bg-gradient-secondary text-white shadow-theme hover:shadow-theme-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (url) {
    return (
      <a
        href={url}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {text}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
