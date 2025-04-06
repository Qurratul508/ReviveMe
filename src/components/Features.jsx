import React from 'react';
import '../styles/Features.css';

const Features = () => {
  const features = [
    {
      title: 'Personalized Recovery Plans',
      description: 'Get customized training programs tailored to your sport, injury history, and recovery needs.',
      icon: '🎯'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your recovery journey with detailed analytics and performance metrics.',
      icon: '📈'
    },
    {
      title: 'Expert Guidance',
      description: 'Access professional advice and proven recovery techniques from sports medicine experts.',
      icon: '👨‍⚕️'
    }
  ];

  return (
    <section className="features" id="features">
      <h2>Why Choose RecoverMe</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;