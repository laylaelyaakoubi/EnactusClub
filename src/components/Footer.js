// src/components/Footer.js
import React from 'react';
import clubData from '../data/clubData';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          {/* Section Liens Rapides */}
          <div className="footer-column">
            <h3>Liens Rapides</h3>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À Propos</a></li>
              <li><a href="#members">Membres</a></li>
              <li><a href="#events">Événements</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Section Contact */}
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>{clubData.contact.email}</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{clubData.contact.phone}</span>
              </li>
              <li>

             
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {clubData.name}. Tous droits réservés.</p>
        <p>Faculté des Sciences Ben M'Sik - Université Hassan II de Casablanca</p>
      </div>
    </footer>
  );
};

export default Footer;