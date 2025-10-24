import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Zap, ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-badge">
            <Zap size={16} />
            <span>Ready to Get Started?</span>
          </div>
          
          <h2 className="cta-title">
            Create Your First
            <span className="gradient-text"> AI Video</span>
            <br />
            in Minutes
          </h2>
          
          <p className="cta-description">
            Join thousands of creators who are already using our platform to create 
            stunning videos. No experience required - just describe what you want and watch the magic happen.
          </p>
          
          <div className="cta-buttons">
            {isAuthenticated ? (
              <Link to="/dashboard" className="btn-primary btn-large">
                <Zap size={20} />
                Go to Dashboard
                <ArrowRight size={20} />
              </Link>
            ) : (
              <>
                <Link to="/signup" className="btn-primary btn-large">
                  <Zap size={20} />
                  Start Creating Now
                  <ArrowRight size={20} />
                </Link>
                <Link to="/login" className="btn-secondary btn-large">
                  Sign In
                </Link>
              </>
            )}
          </div>
          
          <div className="cta-features">
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>14-day free trial</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>No credit card required</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;