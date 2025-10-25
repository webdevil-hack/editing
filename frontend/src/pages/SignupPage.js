import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User,
  Users,
  Building,
  ArrowRight,
  Zap,
  Github,
  Chrome,
  Loader,
  Check,
  Shield,
  Globe
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ParticleBackground from '../components/effects/ParticleBackground';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    newsletter: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1); // Multi-step form

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = 'Username can only contain letters, numbers, and underscores';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one lowercase letter, one uppercase letter, and one number';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep2()) return;

    setIsLoading(true);

    try {
      const result = await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
      
      if (result.success) {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = (provider) => {
    // Implement social signup
    console.log(`Sign up with ${provider}`);
  };

  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(formData.password);
  const strengthColors = ['bg-red-500', 'bg-red-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <ParticleBackground />
      
      <div className="container relative z-10 py-12">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <span className="font-bold text-xl text-white">AI Video Editor</span>
            </Link>
            
            <h1 className="heading-lg mb-2">Create Your Account</h1>
            <p className="text-secondary">
              Join thousands of creators using AI to make amazing videos
            </p>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center mt-6 space-x-2">
              <div className={`w-8 h-2 rounded-full transition-colors ${step >= 1 ? 'bg-primary' : 'bg-gray-700'}`} />
              <div className={`w-8 h-2 rounded-full transition-colors ${step >= 2 ? 'bg-primary' : 'bg-gray-700'}`} />
            </div>
            <div className="text-xs text-secondary mt-2">
              Step {step} of 2
            </div>
          </motion.div>

          {/* Signup Form */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
              {step === 1 && (
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                    <p className="text-secondary text-sm">Tell us a bit about yourself</p>
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`input pl-10 ${errors.firstName ? 'border-red-500' : ''}`}
                          placeholder="John"
                          autoComplete="given-name"
                        />
                      </div>
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Users className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`input pl-10 ${errors.lastName ? 'border-red-500' : ''}`}
                          placeholder="Doe"
                          autoComplete="family-name"
                        />
                      </div>
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Username Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Username
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className={`input pl-10 ${errors.username ? 'border-red-500' : ''}`}
                        placeholder="johndoe"
                        autoComplete="username"
                      />
                    </div>
                    {errors.username && (
                      <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                    )}
                    <p className="text-xs text-secondary mt-1">
                      This will be your unique identifier on the platform
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-2">Account Security</h3>
                    <p className="text-secondary text-sm">Set up your login credentials</p>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input pl-10 ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="john@example.com"
                        autoComplete="email"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`input pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
                        placeholder="Create a strong password"
                        autoComplete="new-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                        ) : (
                          <Eye className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                        )}
                      </button>
                    </div>
                    
                    {/* Password Strength Indicator */}
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex space-x-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 flex-1 rounded ${
                                i < passwordStrength ? strengthColors[passwordStrength - 1] : 'bg-gray-700'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-secondary">
                          Password strength: {strengthLabels[passwordStrength - 1] || 'Too weak'}
                        </p>
                      </div>
                    )}
                    
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`input pl-10 pr-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                        placeholder="Confirm your password"
                        autoComplete="new-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                        ) : (
                          <Eye className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                    )}
                  </div>

                  {/* Terms and Newsletter */}
                  <div className="space-y-3">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary bg-gray-800 border-gray-600 rounded focus:ring-primary focus:ring-2 mt-0.5"
                      />
                      <span className="ml-2 text-sm text-secondary">
                        I agree to the{' '}
                        <Link to="/terms" className="text-primary hover:text-primary/80">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-primary hover:text-primary/80">
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                    {errors.acceptTerms && (
                      <p className="text-red-500 text-sm">{errors.acceptTerms}</p>
                    )}

                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary bg-gray-800 border-gray-600 rounded focus:ring-primary focus:ring-2 mt-0.5"
                      />
                      <span className="ml-2 text-sm text-secondary">
                        Send me updates about new features and tips
                      </span>
                    </label>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="btn btn-secondary flex-1"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn btn-primary flex-1"
                    >
                      {isLoading ? (
                        <>
                          <Loader className="w-4 h-4 mr-2 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        <>
                          Create Account
                          <Check className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </form>

            {step === 1 && (
              <>
                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-secondary text-gray-400">Or sign up with</span>
                  </div>
                </div>

                {/* Social Signup */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleSocialSignup('google')}
                    className="btn btn-secondary flex items-center justify-center"
                  >
                    <Chrome className="w-4 h-4 mr-2" />
                    Google
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSocialSignup('github')}
                    className="btn btn-secondary flex items-center justify-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </button>
                </div>
              </>
            )}

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-secondary">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Benefits Preview */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-4">
              <p className="text-sm text-secondary">Join thousands of creators who trust us</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-xs text-secondary">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-2">
                  <Shield className="w-4 h-4" />
                </div>
                <span>Secure & Private</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-2">
                  <Globe className="w-4 h-4" />
                </div>
                <span>Global Platform</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-2">
                  <Zap className="w-4 h-4" />
                </div>
                <span>AI-Powered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-primary/3 rounded-full blur-3xl" />
    </div>
  );
};

export default SignupPage;