import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ScrollAnimation = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  threshold = 0.1,
  className = '' 
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);

  const animationClasses = {
    fadeInUp: 'scroll-animate',
    fadeInLeft: 'scroll-animate-left',
    fadeInRight: 'scroll-animate-right',
    scaleIn: 'scroll-animate-scale',
  };

  const baseClass = animationClasses[animation] || animationClasses.fadeInUp;
  const visibleClass = isVisible ? 'animate' : '';

  return (
    <div
      ref={ref}
      className={`${baseClass} ${visibleClass} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
