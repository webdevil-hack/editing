import React from 'react';
import { Link } from 'react-router-dom';
import { FiVideo, FiTwitter, FiFacebook, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center">
                <FiVideo className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold glow-text">AI VideoLab</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transform your ideas into stunning videos with AI-powered editing tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-accent-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-accent-primary transition-colors">About Us</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-accent-primary transition-colors">Features</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-accent-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-primary transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-primary transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-primary transition-colors text-xl">
                <FiTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-primary transition-colors text-xl">
                <FiFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-primary transition-colors text-xl">
                <FiInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-primary transition-colors text-xl">
                <FiLinkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-primary transition-colors text-xl">
                <FiGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-600 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AI VideoLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
