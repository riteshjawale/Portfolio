import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/homepage', label: 'Home', icon: 'Home' },
    { path: '/portfolio', label: 'Portfolio', icon: 'Briefcase' },
    { path: '/about', label: 'About', icon: 'User' },
    { path: '/skills', label: 'Skills', icon: 'Code' },
    { path: '/blog', label: 'Blog', icon: 'FileText' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-card shadow-md' : 'bg-card/95'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/homepage" className="header-logo">
              <div className="header-logo-icon">
                <Icon name="Code2" size={24} color="var(--color-primary)" />
              </div>
              <span className="header-logo-text">Ritesh Jawale</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
                >
                  {item?.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                iconName="Github"
                iconPosition="left"
                onClick={() => window.open('https://github.com/riteshjawale', '_blank')}
              >
                GitHub
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="Mail"
                iconPosition="left"
                onClick={() => (window.location.href = '/contact')}
              >
                Contact
              </Button>
            </div>

            <button
              className="mobile-menu-button lg:hidden"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay animate-fade-in lg:hidden">
          <div className="flex items-center justify-between h-16 px-4 border-b border-border">
            <Link to="/homepage" className="header-logo" onClick={handleMobileLinkClick}>
              <div className="header-logo-icon">
                <Icon name="Code2" size={24} color="var(--color-primary)" />
              </div>
              <span className="header-logo-text">Ritesh Jawale</span>
            </Link>
            <button
              className="mobile-menu-button"
              onClick={handleMobileMenuToggle}
              aria-label="Close mobile menu"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`mobile-nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
                onClick={handleMobileLinkClick}
              >
                <div className="flex items-center gap-3">
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.label}</span>
                </div>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-border space-y-3">
            <Button
              variant="outline"
              fullWidth
              iconName="Github"
              iconPosition="left"
              onClick={() => {
                window.open('https://github.com/riteshjawale', '_blank');
                handleMobileLinkClick();
              }}
            >
              GitHub Profile
            </Button>
            <Button
              variant="default"
              fullWidth
              iconName="Mail"
              iconPosition="left"
              onClick={() => {
                window.location.href = '/contact';
                handleMobileLinkClick();
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;