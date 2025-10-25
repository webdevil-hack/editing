import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Play, 
  ArrowRight, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Film, 
  Sparkles,
  Wand2,
  Camera,
  Music,
  Palette,
  Globe,
  ChevronRight,
  CheckCircle,
  TrendingUp,
  Clock,
  Award,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Share2,
  Heart,
  Eye,
  ThumbsUp,
  Quote,
  Menu,
  X
} from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Content Creator",
      company: "TechVids Inc.",
      content: "This platform revolutionized how I create content. The AI-powered editing saves me hours every week!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Digital Agency",
      content: "The quality of videos generated is incredible. Our clients are amazed by the professional results.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Social Media Manager",
      company: "Brand Studio",
      content: "From concept to final video in minutes. This is the future of video content creation!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  const stats = [
    { number: "50K+", label: "Videos Created", icon: <Film size={24} /> },
    { number: "10K+", label: "Happy Users", icon: <Users size={24} /> },
    { number: "99.9%", label: "Uptime", icon: <Shield size={24} /> },
    { number: "4.9/5", label: "User Rating", icon: <Star size={24} /> }
  ];

  const features = [
    {
      icon: <Zap size={32} />,
      title: "Lightning Fast",
      description: "Generate professional videos in seconds with our advanced AI technology"
    },
    {
      icon: <Palette size={32} />,
      title: "Creative Freedom",
      description: "Unlimited customization options to match your brand and vision"
    },
    {
      icon: <Shield size={32} />,
      title: "Secure & Private",
      description: "Your content is protected with enterprise-grade security measures"
    },
    {
      icon: <Globe size={32} />,
      title: "Global Reach",
      description: "Support for multiple languages and formats for worldwide audiences"
    }
  ];

  const apis = [
    {
      name: "ShortStack",
      description: "Professional video generation with advanced editing",
      icon: "🎬",
      color: "#00d4ff"
    },
    {
      name: "CreatoMate",
      description: "Template-based video creation with motion graphics",
      icon: "🎨",
      color: "#ff6b35"
    },
    {
      name: "Pandly Videos",
      description: "Automated video production with AI assistance",
      icon: "🤖",
      color: "#9c27b0"
    },
    {
      name: "Tavas",
      description: "AI avatar video generation and personalization",
      icon: "👤",
      color: "#4caf50"
    },
    {
      name: "PromptClip",
      description: "Open-source video generation from text prompts",
      icon: "🔧",
      color: "#ff9800"
    },
    {
      name: "LuckyEdit",
      description: "AI-powered video editing with beat sync",
      icon: "🎵",
      color: "#e91e63"
    },
    {
      name: "LTX Video",
      description: "Advanced text-to-video with camera motion",
      icon: "🎥",
      color: "#2196f3"
    },
    {
      name: "Vant 2.1",
      description: "Real-time preview with facial retargeting",
      icon: "✨",
      color: "#795548"
    }
  ];

  const faqs = [
    {
      question: "How does AI video editing work?",
      answer: "Our platform uses advanced machine learning algorithms to analyze your input and generate professional-quality videos automatically. Simply provide a text prompt or upload media, and our AI handles the rest."
    },
    {
      question: "What video formats are supported?",
      answer: "We support all major video formats including MP4, MOV, AVI, and more. You can export in various resolutions from 720p to 4K depending on your subscription plan."
    },
    {
      question: "Is my content secure?",
      answer: "Absolutely. We use enterprise-grade encryption and never share your content with third parties. Your videos are stored securely and can be deleted at any time."
    },
    {
      question: "Can I customize the generated videos?",
      answer: "Yes! Our platform offers extensive customization options including templates, styles, music, transitions, and more. You have full control over the final output."
    },
    {
      question: "What's the difference between the plans?",
      answer: "Our plans vary in video generation limits, resolution options, and advanced features. The Pro plan includes 4K export, while the Enterprise plan offers unlimited generation and priority support."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Film size={32} />
            <span>AI Video Editor</span>
          </div>
          
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
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
            <div className="hero-text">
              <h1 className="hero-title">
                Create Stunning Videos with
                <span className="gradient-text"> AI Power</span>
              </h1>
              <p className="hero-description">
                Transform your ideas into professional videos in seconds. 
                Our advanced AI technology handles everything from editing to effects, 
                giving you more time to focus on what matters most.
              </p>
              <div className="hero-actions">
                <Link to="/signup" className="btn-primary">
                  Start Creating Free
                  <ArrowRight size={20} />
                </Link>
                <button className="btn-secondary">
                  <Play size={20} />
                  Watch Demo
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Videos Created</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">Happy Users</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Uptime</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="video-preview">
                <div className="video-placeholder">
                  <Play size={64} />
                </div>
                <div className="floating-elements">
                  <div className="floating-icon icon-1">🎬</div>
                  <div className="floating-icon icon-2">✨</div>
                  <div className="floating-icon icon-3">🎨</div>
                  <div className="floating-icon icon-4">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="features-showcase">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Platform?</h2>
            <p>Experience the future of video creation with cutting-edge AI technology</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Revolutionizing Video Creation</h2>
              <p>
                Our platform combines the power of artificial intelligence with intuitive design 
                to make professional video creation accessible to everyone. Whether you're a 
                content creator, marketer, or business owner, our AI handles the complex 
                technical aspects while you focus on your creative vision.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <CheckCircle size={20} />
                  <span>No technical skills required</span>
                </div>
                <div className="about-feature">
                  <CheckCircle size={20} />
                  <span>Professional quality output</span>
                </div>
                <div className="about-feature">
                  <CheckCircle size={20} />
                  <span>Multiple AI integrations</span>
                </div>
                <div className="about-feature">
                  <CheckCircle size={20} />
                  <span>Real-time collaboration</span>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="visual-placeholder">
                <Film size={80} />
                <p>AI Video Creation Process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Capabilities */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Powerful AI Integrations</h2>
            <p>Choose from our comprehensive suite of AI-powered video tools</p>
          </div>
          <div className="apis-grid">
            {apis.map((api, index) => (
              <div key={index} className="api-card" style={{ '--api-color': api.color }}>
                <div className="api-icon">{api.icon}</div>
                <h3>{api.name}</h3>
                <p>{api.description}</p>
                <div className="api-actions">
                  <button className="api-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages-section">
        <div className="container">
          <div className="advantages-content">
            <div className="advantages-text">
              <h2>Why We're Different</h2>
              <div className="advantage-list">
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <Zap size={24} />
                  </div>
                  <div className="advantage-content">
                    <h3>Lightning Fast</h3>
                    <p>Generate professional videos in seconds, not hours</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <TrendingUp size={24} />
                  </div>
                  <div className="advantage-content">
                    <h3>Cost Effective</h3>
                    <p>Save thousands on video production costs</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <Sparkles size={24} />
                  </div>
                  <div className="advantage-content">
                    <h3>Creative Freedom</h3>
                    <p>Unlimited customization and creative control</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <Globe size={24} />
                  </div>
                  <div className="advantage-content">
                    <h3>Global Scale</h3>
                    <p>Reach audiences worldwide with multi-language support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="advantages-visual">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow-section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Create professional videos in just three simple steps</p>
          </div>
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Describe Your Vision</h3>
                <p>Tell our AI what kind of video you want to create using simple text prompts</p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>AI Generates Content</h3>
                <p>Our advanced AI creates your video with professional editing and effects</p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Download & Share</h3>
                <p>Get your finished video in high quality and share it with the world</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-content">
            <div className="stats-text">
              <h2>Join Thousands of Creators</h2>
              <p>See what our community is creating in real-time</p>
            </div>
            <div className="live-stats">
              <div className="live-stat">
                <div className="live-number">1,247</div>
                <div className="live-label">Videos Created Today</div>
              </div>
              <div className="live-stat">
                <div className="live-number">89</div>
                <div className="live-label">Active Editors</div>
              </div>
              <div className="live-stat">
                <div className="live-number">15</div>
                <div className="live-label">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Users Say</h2>
            <p>Don't just take our word for it - hear from our satisfied customers</p>
          </div>
          <div className="testimonials-container">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <Quote size={32} />
                <p>"{testimonials[activeTestimonial].content}"</p>
              </div>
              <div className="testimonial-author">
                <img 
                  src={testimonials[activeTestimonial].avatar} 
                  alt={testimonials[activeTestimonial].name}
                  className="author-avatar"
                />
                <div className="author-info">
                  <h4>{testimonials[activeTestimonial].name}</h4>
                  <p>{testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}</p>
                  <div className="author-rating">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#ffd700" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our platform</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <ChevronRight size={20} />
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Have questions? We're here to help you succeed</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <Mail size={24} />
                  <div>
                    <h4>Email Support</h4>
                    <p>support@aivideoeditor.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <MessageCircle size={24} />
                  <div>
                    <h4>Live Chat</h4>
                    <p>Available 24/7</p>
                  </div>
                </div>
                <div className="contact-method">
                  <Phone size={24} />
                  <div>
                    <h4>Phone Support</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="4"></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                  <ArrowRight size={20} />
                </button>
              </form>
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

export default HomePage;