import { useState, useEffect } from 'react';

const useTypewriter = (texts, options = {}) => {
  const {
    typeSpeed = 100,
    deleteSpeed = 50,
    pauseTime = 2000,
    loop = true,
    startDelay = 1000
  } = options;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout;

    const typeText = () => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        // Deleting characters
        setCurrentText(fullText.substring(0, currentText.length - 1));
        timeout = setTimeout(typeText, deleteSpeed);
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else if (isPaused) {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseTime);
      } else {
        // Typing characters
        setCurrentText(fullText.substring(0, currentText.length + 1));
        timeout = setTimeout(typeText, typeSpeed);
        
        if (currentText === fullText) {
          setIsPaused(true);
        }
      }
    };

    // Start the animation after initial delay
    timeout = setTimeout(typeText, startDelay);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typeSpeed, deleteSpeed, pauseTime, startDelay]);

  return {
    currentText,
    isDeleting,
    isPaused,
    currentTextIndex
  };
};

export default useTypewriter;
