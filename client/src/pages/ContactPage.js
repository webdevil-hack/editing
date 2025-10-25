import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send,
  CheckCircle,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Github,
  Linkedin,
  Menu,
  X,
  User,
  Mail as MailIcon,
  FileText,
  Headphones,
  Zap,
  Shield,
  Globe,
  Star,
  ChevronRight,
  ChevronDown,
  Play,
  Film
} from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const { isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      contact: "support@aivideoeditor.com",
      availability: "24/7"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available now",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <MapPin size={24} />,
      title: "Office Visit",
      description: "Visit our headquarters",
      contact: "123 AI Street, Tech City, TC 12345",
      availability: "By appointment"
    }
  ];

  const supportTopics = [
    {
      icon: <Zap size={20} />,
      title: "Technical Support",
      description: "Get help with technical issues and troubleshooting"
    },
    {
      icon: <Shield size={20} />,
      title: "Account & Billing",
      description: "Manage your account, billing, and subscription"
    },
    {
      icon: <Globe size={20} />,
      title: "API Integration",
      description: "Help with API integration and development"
    },
    {
      icon: <Star size={20} />,
      title: "Feature Requests",
      description: "Suggest new features and improvements"
    }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to support requests?",
      answer: "We typically respond to all support requests within 24 hours. For urgent issues, we offer priority support for Enterprise customers."
    },
    {
      question: "Do you offer phone support?",
      answer: "Yes! We offer phone support for Pro and Enterprise customers during business hours (Mon-Fri 9AM-6PM EST)."
    },
    {
      question: "Can I schedule a demo or consultation?",
      answer: "Absolutely! You can schedule a personalized demo or consultation with our team through our contact form or by calling us directly."
    },
    {
      question: "What languages do you support?",
      answer: "We provide support in English, Spanish, French, German, and Japanese. Our team is multilingual and ready to help in your preferred language."
    },
    {
      question: "Do you have a knowledge base or documentation?",
      answer: "Yes! We have a comprehensive knowledge base with tutorials, guides, and documentation available 24/7 on our support portal."
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <Film size={32} />
            <span>AI Video Editor</span>
          </Link>
          
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/contact" className="nav-link active">Contact</Link>
            {isAuthenticated ? (
              <Link to="/dashboard" className="nav-link dashboard-link">
                Dashboard
              </Link>
            ) : (
              <div className="nav-auth">
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-btn">Get Started</Link>
              </div>
            )}
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="hero-description">
              We're here to help! Reach out to our team for support, questions, 
              or just to say hello. We'd love to hear from you.
            </p>
            <div className="hero-actions">
              <a href="#contact-form" className="btn-primary">
                Send Message
                <ArrowRight size={20} />
              </a>
              <button className="btn-secondary">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods-section">
        <div className="container">
          <div className="section-header">
            <h2>How Can We Help?</h2>
            <p>Choose the best way to reach us based on your needs</p>
          </div>
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-method-card">
                <div className="method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
                <div className="method-contact">
                  <strong>{method.contact}</strong>
                </div>
                <div className="method-availability">
                  <Clock size={16} />
                  <span>{method.availability}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Topics */}
      <section className="support-topics-section">
        <div className="container">
          <div className="section-header">
            <h2>What Can We Help With?</h2>
            <p>Our support team is ready to assist with a wide range of topics</p>
          </div>
          <div className="support-topics-grid">
            {supportTopics.map((topic, index) => (
              <div key={index} className="support-topic-card">
                <div className="topic-icon">{topic.icon}</div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible</p>
            </div>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                <CheckCircle size={20} />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <div className="input-container">
                    <User size={20} className="input-icon" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <div className="input-container">
                    <MailIcon size={20} className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="inquiryType">Inquiry Type</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Account</option>
                    <option value="api">API Integration</option>
                    <option value="feature">Feature Request</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <div className="input-container">
                    <FileText size={20} className="input-icon" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your inquiry"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <div className="input-container">
                  <MessageCircle size={20} className="input-icon" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide as much detail as possible about your inquiry..."
                    rows="6"
                    required
                    className="form-textarea"
                  />
                </div>
              </div>

              <div className="form-actions">
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our support</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <ChevronRight size={20} className="faq-chevron" />
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-content">
            <div className="map-info">
              <h2>Visit Our Office</h2>
              <p>
                Located in the heart of the tech district, our headquarters 
                is easily accessible by public transportation and car.
              </p>
              <div className="office-details">
                <div className="office-detail">
                  <MapPin size={20} />
                  <div>
                    <h4>Address</h4>
                    <p>123 AI Street, Tech City, TC 12345</p>
                  </div>
                </div>
                <div className="office-detail">
                  <Clock size={20} />
                  <div>
                    <h4>Office Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
                <div className="office-detail">
                  <Phone size={20} />
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-placeholder">
              <MapPin size={48} />
              <p>Interactive Map</p>
              <span>Click to view directions</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Join thousands of creators who are already using our platform 
              to create amazing videos with AI.
            </p>
            <div className="cta-actions">
              <Link to="/signup" className="btn-primary">
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
              <button className="btn-secondary">
                <Headphones size={20} />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <Film size={32} />
                <span>AI Video Editor</span>
              </div>
              <p>Creating the future of video content with AI-powered technology.</p>
              <div className="social-links">
                <a href="#" className="social-link"><Twitter size={20} /></a>
                <a href="#" className="social-link"><Facebook size={20} /></a>
                <a href="#" className="social-link"><Instagram size={20} /></a>
                <a href="#" className="social-link"><Youtube size={20} /></a>
                <a href="#" className="social-link"><Github size={20} /></a>
                <a href="#" className="social-link"><Linkedin size={20} /></a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Documentation</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 AI Video Editor. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;