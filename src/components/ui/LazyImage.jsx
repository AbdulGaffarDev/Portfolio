import { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/assets/placeholder.jpg',
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
      };
      img.src = src;
    }
  }, [inView, src]);

  return (
    <img
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${className}`}
      style={{ opacity: imageSrc === placeholder ? 0.5 : 1 }}
      loading="lazy"
      {...props}
    />
  );
};

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
};

export default LazyImage;
