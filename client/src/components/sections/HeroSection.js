import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Play, Sparkles, Zap } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
          <div className="floating-element element-4"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Powered by Advanced AI</span>
          </div>
          
          <h1 className="hero-title">
            Create Stunning Videos
            <br />
            <span className="gradient-text">With Just a Prompt</span>
          </h1>
          
          <p className="hero-subtitle">
            Transform your ideas into professional videos using cutting-edge AI technology. 
            No editing skills required - just describe what you want and watch the magic happen.
          </p>
          
          <div className="hero-buttons">
            {isAuthenticated ? (
              <Link to="/dashboard" className="btn-primary btn-large">
                <Zap size={20} />
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link to="/signup" className="btn-primary btn-large">
                  <Zap size={20} />
                  Start Creating
                </Link>
                <Link to="/login" className="btn-secondary btn-large">
                  Sign In
                </Link>
              </>
            )}
            <button className="btn-play">
              <Play size={20} />
              Watch Demo
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Videos Created</div>
            </div>
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Users</div>
            </div>
            <div className="stat">
              <div className="stat-number">99%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;