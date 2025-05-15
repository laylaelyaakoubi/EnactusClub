// src/components/About.js
import React from 'react';
import clubData from '../data/clubData';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">À Propos de Notre Club</h2>
        
        <div className="about-container">
          <div className="objective-card">
            <h3>Notre Objectif</h3>
            <p>{clubData.objective}</p>
          </div>
          
          <div className="features-container">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Réunions Régulières</h3>
                <p>Nous nous réunissons tous les mardis à 18h dans la Salle 205 du Bâtiment Informatique.</p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="feature-content">
                <h3>Ouvert à Tous</h3>
                <p>Les étudiants de tous les départements et de toutes les années sont les bienvenus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;