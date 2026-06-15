import React, { useState, useEffect } from 'react';
import './Header.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Impacto', path: '/impacto' },
    { name: 'Brasil ↔ África', path: '/brasil-africa' },
    { name: 'Parceiros', path: '/parceiros' },
    { name: 'Investidores', path: '/investidores' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo">
          <h1 className="header__logo-text">
            FAVELA<span className="header__logo-highlight">ECOS</span>
          </h1>
        </Link>

        <button className="header__mobile-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="header__nav-item">
                <Link 
                  to={item.path} 
                  className={`header__nav-link ${location.pathname === item.path ? 'header__nav-link--active' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;