import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <div className="brand-logo">
              <div className="logo-icon">AI</div>
              <span className="logo-text">Video Editor</span>
            </div>
          </Link>

          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/features" 
              className={`navbar-link ${isActive('/features') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/contact" 
              className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div className="navbar-actions">
              {isAuthenticated ? (
                <div className="user-menu">
                  <Link to="/dashboard" className="btn-primary">
                    Dashboard
                  </Link>
                  <div className="user-dropdown">
                    <button className="user-button">
                      <User size={20} />
                      <span>{user?.firstName}</span>
                    </button>
                    <div className="dropdown-menu">
                      <Link to="/dashboard" className="dropdown-item">
                        <Settings size={16} />
                        Settings
                      </Link>
                      <button onClick={handleLogout} className="dropdown-item">
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="auth-buttons">
                  <Link to="/login" className="btn-secondary">
                    Login
                  </Link>
                  <Link to="/signup" className="btn-primary">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>

          <button 
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;