// src/components/Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link
import clubData from '../data/clubData';
import '../styles/navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="container nav-container">
        <div className="nav-logo">
         <img src={clubData.logo} alt={clubData.name} className="nav-photo" />
         <span className="club-name">{clubData.name}</span>
        </div>
        
        {/* Navigation pour desktop */}
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>Propos</Link></li>
          <li><Link to="/members" onClick={() => setIsMenuOpen(false)}>Membres</Link></li>
          <li><Link to="/events" onClick={() => setIsMenuOpen(false)}>Événements</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
        
        {/* Bouton menu mobile */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Menu principal"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      
      {/* Menu mobile */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>À Propos</Link></li>
          <li><Link to="/members" onClick={toggleMenu}>Membres</Link></li>
          <li><Link to="/events" onClick={toggleMenu}>Événements</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
