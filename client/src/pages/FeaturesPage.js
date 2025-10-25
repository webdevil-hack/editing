import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Zap, 
  Palette, 
  Shield, 
  Globe, 
  Users, 
  Clock, 
  Star, 
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Share2,
  Settings,
  Wand2,
  Camera,
  Music,
  Scissors,
  Sparkles,
  Target,
  TrendingUp,
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
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Film,
  Video,
  Image,
  Mic,
  Headphones,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop
} from 'lucide-react';
import './FeaturesPage.css';

const FeaturesPage = () => {
  const { isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const mainFeatures = [
    {
      id: 1,
      icon: <Zap size={48} />,
      title: "Lightning Fast Generation",
      description: "Create professional videos in seconds with our advanced AI technology",
      details: [
        "Real-time video processing",
        "Optimized rendering pipeline",
        "Cloud-based infrastructure",
        "Automatic quality optimization"
      ],
      color: "#00d4ff"
    },
    {
      id: 2,
      icon: <Palette size={48} />,
      title: "Creative Freedom",
      description: "Unlimited customization options to match your brand and vision",
      details: [
        "Custom templates and styles",
        "Brand color integration",
        "Typography options",
        "Visual effects library"
      ],
      color: "#ff6b35"
    },
    {
      id: 3,
      icon: <Shield size={48} />,
      title: "Enterprise Security",
      description: "Your content is protected with industry-leading security measures",
      details: [
        "End-to-end encryption",
        "GDPR compliance",
        "SOC 2 certification",
        "Regular security audits"
      ],
      color: "#9c27b0"
    },
    {
      id: 4,
      icon: <Globe size={48} />,
      title: "Global Reach",
      description: "Support for multiple languages and formats for worldwide audiences",
      details: [
        "50+ language support",
        "Regional content optimization",
        "Multi-format export",
        "Cultural adaptation tools"
      ],
      color: "#4caf50"
    }
  ];

  const apis = [
    {
      name: "ShortStack",
      description: "Professional video generation with advanced editing capabilities",
      icon: "🎬",
      color: "#00d4ff",
      features: [
        "HD/4K video output",
        "Multiple aspect ratios",
        "Professional transitions",
        "Voice synthesis",
        "Brand integration"
      ],
      pricing: "From $29/month"
    },
    {
      name: "CreatoMate",
      description: "Template-based video creation with motion graphics",
      icon: "🎨",
      color: "#ff6b35",
      features: [
        "500+ templates",
        "Motion graphics",
        "Brand customization",
        "Bulk processing",
        "API integration"
      ],
      pricing: "From $49/month"
    },
    {
      name: "Pandly Videos",
      description: "Automated video production with AI assistance",
      icon: "🤖",
      color: "#9c27b0",
      features: [
        "AI automation",
        "Stock asset library",
        "Voiceover generation",
        "Auto-captioning",
        "Social media optimization"
      ],
      pricing: "From $19/month"
    },
    {
      name: "Tavas",
      description: "AI avatar video generation and personalization",
      icon: "👤",
      color: "#4caf50",
      features: [
        "AI avatars",
        "Personalization",
        "Multi-language support",
        "Emotion recognition",
        "Real-time generation"
      ],
      pricing: "From $39/month"
    },
    {
      name: "PromptClip",
      description: "Open-source video generation from text prompts",
      icon: "🔧",
      color: "#ff9800",
      features: [
        "Open source",
        "Text-to-video",
        "Customizable",
        "Community driven",
        "Free to use"
      ],
      pricing: "Free"
    },
    {
      name: "LuckyEdit",
      description: "AI-powered video editing with beat sync",
      icon: "🎵",
      color: "#e91e63",
      features: [
        "Beat synchronization",
        "Auto-editing",
        "Motion effects",
        "Color enhancement",
        "Audio processing"
      ],
      pricing: "From $24/month"
    },
    {
      name: "LTX Video",
      description: "Advanced text-to-video with camera motion",
      icon: "🎥",
      color: "#2196f3",
      features: [
        "4K output",
        "Camera motion",
        "High quality",
        "Advanced effects",
        "Professional tools"
      ],
      pricing: "From $59/month"
    },
    {
      name: "Vant 2.1",
      description: "Real-time preview with facial retargeting",
      icon: "✨",
      color: "#795548",
      features: [
        "Real-time preview",
        "Facial retargeting",
        "Animation effects",
        "Live editing",
        "Collaborative tools"
      ],
      pricing: "From $79/month"
    }
  ];

  const capabilities = [
    {
      category: "Video Generation",
      icon: <Video size={32} />,
      features: [
        "Text-to-video conversion",
        "Image-to-video generation",
        "Template-based creation",
        "Custom video styles",
        "Batch processing"
      ]
    },
    {
      category: "Audio & Music",
      icon: <Music size={32} />,
      features: [
        "Voice synthesis",
        "Background music",
        "Sound effects",
        "Audio mixing",
        "Noise reduction"
      ]
    },
    {
      category: "Visual Effects",
      icon: <Sparkles size={32} />,
      features: [
        "Transitions & animations",
        "Color grading",
        "Special effects",
        "Motion graphics",
        "3D elements"
      ]
    },
    {
      category: "Editing Tools",
      icon: <Scissors size={32} />,
      features: [
        "Cut & trim",
        "Merge videos",
        "Add captions",
        "Crop & resize",
        "Speed adjustment"
      ]
    },
    {
      category: "Export & Share",
      icon: <Share2 size={32} />,
      features: [
        "Multiple formats",
        "Social media optimization",
        "Cloud storage",
        "Direct sharing",
        "Download options"
      ]
    },
    {
      category: "Collaboration",
      icon: <Users size={32} />,
      features: [
        "Team workspaces",
        "Real-time editing",
        "Comment system",
        "Version control",
        "Permission management"
      ]
    }
  ];

  const faqs = [
    {
      question: "What video formats are supported?",
      answer: "We support all major video formats including MP4, MOV, AVI, WebM, and more. You can export in various resolutions from 720p to 4K depending on your subscription plan."
    },
    {
      question: "How does the AI video generation work?",
      answer: "Our AI analyzes your text prompts, images, or templates and generates professional-quality videos using advanced machine learning algorithms. The process is fully automated and takes just seconds."
    },
    {
      question: "Can I customize the generated videos?",
      answer: "Absolutely! Our platform offers extensive customization options including templates, styles, colors, fonts, music, transitions, and more. You have full control over the final output."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started."
    },
    {
      question: "What's the difference between the plans?",
      answer: "Our plans vary in video generation limits, resolution options, and advanced features. The Pro plan includes 4K export, while the Enterprise plan offers unlimited generation and priority support."
    },
    {
      question: "Do you offer API access?",
      answer: "Yes! We provide comprehensive API access for developers to integrate our video generation capabilities into their own applications and workflows."
    }
  ];

  const stats = [
    { number: "50K+", label: "Videos Created", icon: <Video size={24} /> },
    { number: "10K+", label: "Active Users", icon: <Users size={24} /> },
    { number: "99.9%", label: "Uptime", icon: <Shield size={24} /> },
    { number: "4.9/5", label: "User Rating", icon: <Star size={24} /> },
    { number: "15+", label: "Countries", icon: <Globe size={24} /> },
    { number: "24/7", label: "Support", icon: <MessageCircle size={24} /> }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="features-page">
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
            <Link to="/features" className="nav-link active">Features</Link>
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
            <h1 className="hero-title">
              Powerful <span className="gradient-text">Features</span>
            </h1>
            <p className="hero-description">
              Discover the comprehensive suite of AI-powered tools and capabilities 
              that make professional video creation accessible to everyone.
            </p>
            <div className="hero-actions">
              <Link to="/signup" className="btn-primary">
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
              <button className="btn-secondary">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="main-features-section">
        <div className="container">
          <div className="section-header">
            <h2>Core Features</h2>
            <p>Everything you need to create professional videos with AI</p>
          </div>
          <div className="features-grid">
            {mainFeatures.map((feature, index) => (
              <div 
                key={feature.id} 
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                style={{ '--feature-color': feature.color }}
                onClick={() => setActiveFeature(index)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-details">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="detail-item">
                      <CheckCircle size={16} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Integrations */}
      <section className="apis-section">
        <div className="container">
          <div className="section-header">
            <h2>AI Integrations</h2>
            <p>Choose from our comprehensive suite of AI-powered video tools</p>
          </div>
          <div className="apis-grid">
            {apis.map((api, index) => (
              <div key={index} className="api-card" style={{ '--api-color': api.color }}>
                <div className="api-header">
                  <div className="api-icon">{api.icon}</div>
                  <div className="api-info">
                    <h3>{api.name}</h3>
                    <p>{api.description}</p>
                  </div>
                </div>
                <div className="api-features">
                  {api.features.map((feature, idx) => (
                    <div key={idx} className="api-feature">
                      <CheckCircle size={14} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="api-footer">
                  <div className="api-pricing">{api.pricing}</div>
                  <button className="api-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="capabilities-section">
        <div className="container">
          <div className="section-header">
            <h2>Complete Capabilities</h2>
            <p>Everything you need for professional video creation</p>
          </div>
          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className="capability-card">
                <div className="capability-icon">{capability.icon}</div>
                <h3>{capability.category}</h3>
                <ul className="capability-features">
                  {capability.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-content">
            <div className="stats-text">
              <h2>Trusted by Creators Worldwide</h2>
              <p>Join thousands of satisfied users who create amazing videos every day</p>
            </div>
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
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our features</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <ChevronRight 
                    size={20} 
                    className={`faq-chevron ${expandedFaq === index ? 'expanded' : ''}`}
                  />
                </div>
                <div className={`faq-answer ${expandedFaq === index ? 'expanded' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
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
              <Link to="/contact" className="btn-secondary">
                Contact Sales
                <MessageCircle size={20} />
              </Link>
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

export default FeaturesPage;