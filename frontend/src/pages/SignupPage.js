import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLock, FiVideo } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import Background3D from '../components/3DBackground';

const SignupPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      await register(formData.name, formData.email, formData.password);
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center relative overflow-hidden p-4">
      <Background3D />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-8 rounded-2xl w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center">
            <FiVideo className="text-white text-2xl" />
          </div>
          <span className="text-3xl font-bold glow-text">AI VideoLab</span>
        </Link>

        <h1 className="text-3xl font-bold text-center mb-2">Create Account</h1>
        <p className="text-gray-400 text-center mb-8">Start creating amazing videos today</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Full Name</label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Confirm Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-start">
            <input type="checkbox" required className="mt-1 mr-2" />
            <span className="text-sm text-gray-400">
              I agree to the{' '}
              <a href="#" className="text-accent-primary hover:text-accent-secondary">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-accent-primary hover:text-accent-secondary">
                Privacy Policy
              </a>
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-accent-primary hover:text-accent-secondary transition-colors">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;
