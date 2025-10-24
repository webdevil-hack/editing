import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Play, 
  User, 
  Settings, 
  LogOut,
  ChevronDown,
  Zap
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setUserMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const userNavLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Projects', path: '/projects' },
    { name: 'Editor', path: '/editor' },
    { name: 'Settings', path: '/settings' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white hover:text-primary transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="font-bold text-lg">AI Video Editor</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {user ? (
              // Authenticated user navigation
              <>
                {userNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* User Menu */}
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center space-x-2 text-white hover:text-primary transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-black font-semibold text-sm">
                      {user.firstName?.[0]}{user.lastName?.[0]}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 bg-secondary border border-gray-700 rounded-lg shadow-xl py-2"
                      >
                        <div className="px-4 py-2 border-b border-gray-700">
                          <div className="font-medium text-white">{user.firstName} {user.lastName}</div>
                          <div className="text-sm text-secondary">{user.email}</div>
                        </div>
                        
                        <Link
                          to="/settings"
                          className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                        >
                          <Settings className="w-4 h-4 mr-3" />
                          Settings
                        </Link>
                        
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              // Public navigation
              <>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-white hover:text-primary transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="btn btn-primary btn-sm"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Get Started
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800"
          >
            <div className="container py-4">
              {user ? (
                // Authenticated mobile menu
                <>
                  <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-gray-700">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-black font-semibold">
                      {user.firstName?.[0]}{user.lastName?.[0]}
                    </div>
                    <div>
                      <div className="font-medium text-white">{user.firstName} {user.lastName}</div>
                      <div className="text-sm text-secondary">{user.email}</div>
                    </div>
                  </div>
                  
                  {userNavLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block py-3 text-sm font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-primary'
                          : 'text-white hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-700 mt-4">
                    <Link
                      to="/settings"
                      className="flex items-center py-2 text-sm text-white hover:text-primary transition-colors"
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center py-2 text-sm text-white hover:text-primary transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                // Public mobile menu
                <>
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block py-3 text-sm font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-primary'
                          : 'text-white hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-700 mt-4 space-y-3">
                    <Link
                      to="/login"
                      className="block py-2 text-sm font-medium text-white hover:text-primary transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="btn btn-primary w-full"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Get Started
                    </Link>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;