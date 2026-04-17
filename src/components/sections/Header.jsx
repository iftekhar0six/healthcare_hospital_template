import { useState, useEffect } from 'react';
import { siteInfo } from '@/settings';
import ThemeToggle from '@/components/ui/ThemeToggle';
import './Header.css';

const Header = () => {
  const { name } = siteInfo;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Activities', href: '#activities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header-container">
        <a href="#hero" className="header-logo">
          {name}
        </a>

        <nav className={`header-nav ${isMobileMenuOpen ? 'header-nav--open' : ''}`}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="header-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <button
            className="header-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
