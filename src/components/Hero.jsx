import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Your Path to Peak Recovery</h1>
        <p>Personalized training programs designed to help athletes recover faster and perform better</p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Placeholder for hero image */}
        <div className="image-placeholder"></div>
      </div>
    </div>
  );
};

export default Hero;