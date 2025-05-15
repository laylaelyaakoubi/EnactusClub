// src/components/Hero.js
import React from 'react';
import clubData from '../data/clubData';
import JoinButton from './JoinButton';
import '../styles/hero.css';

const Hero = () => {
  

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <h1 className="hero-title">{clubData.name}</h1>
        <p className="hero-description">{clubData.description}</p>
        <JoinButton />
      </div>
    </section>
  );
};

export default Hero;
