import React from 'react';
import { Users, Video, Clock, Star } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const stats = [
    {
      icon: <Users size={32} />,
      number: '10,000+',
      label: 'Active Users',
      description: 'Creators worldwide trust our platform'
    },
    {
      icon: <Video size={32} />,
      number: '50,000+',
      label: 'Videos Created',
      description: 'Professional videos generated daily'
    },
    {
      icon: <Clock size={32} />,
      number: '2.5M+',
      label: 'Hours Saved',
      description: 'Time saved by our users'
    },
    {
      icon: <Star size={32} />,
      number: '4.9/5',
      label: 'User Rating',
      description: 'Average satisfaction score'
    }
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Trusted by Creators
            <span className="gradient-text"> Worldwide</span>
          </h2>
          <p className="section-description">
            Join thousands of satisfied users who are creating amazing content with our platform.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;