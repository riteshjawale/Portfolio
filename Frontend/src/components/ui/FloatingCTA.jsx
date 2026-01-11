import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    navigate('/contact');
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="floating-cta group"
      aria-label="Contact me"
    >
      <span className="flex items-center gap-2">
        <span className="hidden sm:inline">contact()</span>
        <Icon
          name="MessageSquare"
          size={20}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </span>
    </button>
  );
};

export default FloatingCTA;