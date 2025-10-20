import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <span className="bracket">{'<'}</span>
          <span className="name">Gabriel Araujo</span>
          <span className="bracket">{'/>'}</span>
        </div>
        <nav className="navigation">
          <button onClick={() => scrollToSection('about')}>Sobre</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('experience')}>Experiência</button>
          <button onClick={() => scrollToSection('projects')}>Projetos</button>
          <button onClick={() => scrollToSection('contact')}>Contato</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
