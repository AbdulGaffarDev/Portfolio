import { useState } from 'react';

const SEOImage = ({ 
  src, 
  alt, 
  title,
  className = '', 
  width,
  height,
  priority = false,
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        title={title || alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        {...props}
      />
      {!loaded && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
          style={{ width, height }}
        />
      )}
    </div>
  );
};

export default SEOImage;
