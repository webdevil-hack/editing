import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Lightbulb, 
  Globe, 
  Shield, 
  Zap,
  Star,
  ChevronRight,
  Play,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
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
  X
} from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  const { isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Visionary leader with 15+ years in AI and video technology",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Tech innovator specializing in machine learning and video processing",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Creative director with expertise in user experience and visual design",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "David Kim",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack developer passionate about scalable video solutions",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI and video technology"
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication"
    },
    {
      icon: <Shield size={32} />,
      title: "Trust",
      description: "Security and privacy are at the core of everything we build"
    },
    {
      icon: <Heart size={32} />,
      title: "Passion",
      description: "We're driven by our love for creating amazing video experiences"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to democratize video creation"
    },
    {
      year: "2021",
      title: "First AI Integration",
      description: "Launched our first AI-powered video editing tool"
    },
    {
      year: "2022",
      title: "10K Users",
      description: "Reached our first major milestone of 10,000 users"
    },
    {
      year: "2023",
      title: "API Platform",
      description: "Launched comprehensive API platform with 8 integrations"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to serve creators worldwide with multi-language support"
    }
  ];

  const stats = [
    { number: "50K+", label: "Videos Created", icon: <Play size={24} /> },
    { number: "10K+", label: "Active Users", icon: <Users size={24} /> },
    { number: "99.9%", label: "Uptime", icon: <Shield size={24} /> },
    { number: "4.9/5", label: "User Rating", icon: <Star size={24} /> },
    { number: "15+", label: "Countries", icon: <Globe size={24} /> },
    { number: "24/7", label: "Support", icon: <MessageCircle size={24} /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <Play size={32} />
            <span>AI Video Editor</span>
          </Link>
          
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link active">About</Link>
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
            <h1 className="hero-title">
              About <span className="gradient-text">AI Video Editor</span>
            </h1>
            <p className="hero-description">
              We're revolutionizing video creation by making professional-quality content 
              accessible to everyone through the power of artificial intelligence.
            </p>
            <div className="hero-actions">
              <Link to="/signup" className="btn-primary">
                Join Our Mission
                <ArrowRight size={20} />
              </Link>
              <button className="btn-secondary">
                <Play size={20} />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                To democratize video creation by providing powerful AI-driven tools that 
                enable anyone to produce professional-quality content without the need for 
                extensive technical skills or expensive equipment.
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <CheckCircle size={20} />
                  <span>Make video creation accessible to everyone</span>
                </div>
                <div className="mission-point">
                  <CheckCircle size={20} />
                  <span>Reduce production time and costs</span>
                </div>
                <div className="mission-point">
                  <CheckCircle size={20} />
                  <span>Foster creativity and innovation</span>
                </div>
                <div className="mission-point">
                  <CheckCircle size={20} />
                  <span>Build a global community of creators</span>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="visual-placeholder">
                <Target size={80} />
                <p>Our Mission in Action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <div className="vision-visual">
              <div className="visual-placeholder">
                <Lightbulb size={80} />
                <p>Our Vision for the Future</p>
              </div>
            </div>
            <div className="vision-text">
              <h2>Our Vision</h2>
              <p>
                We envision a world where creating professional video content is as simple 
                as writing a text message. Our platform will continue to evolve, incorporating 
                the latest AI advancements to make video creation more intuitive, efficient, 
                and accessible to creators worldwide.
              </p>
              <div className="vision-goals">
                <div className="goal-item">
                  <div className="goal-number">1</div>
                  <div className="goal-content">
                    <h3>Global Reach</h3>
                    <p>Serve creators in every corner of the world</p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-number">2</div>
                  <div className="goal-content">
                    <h3>AI Innovation</h3>
                    <p>Lead the industry in AI-powered video technology</p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-number">3</div>
                  <div className="goal-content">
                    <h3>Community Impact</h3>
                    <p>Empower millions of creators to share their stories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The passionate individuals behind our innovative platform</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="social-links">
                      <a href={member.social.twitter} className="social-link">
                        <Twitter size={20} />
                      </a>
                      <a href={member.social.linkedin} className="social-link">
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>From startup to industry leader - our story so far</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
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
              <h2>Our Impact</h2>
              <p>Numbers that tell our story of growth and success</p>
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

      {/* Culture Section */}
      <section className="culture-section">
        <div className="container">
          <div className="culture-content">
            <div className="culture-text">
              <h2>Our Culture</h2>
              <p>
                We foster a culture of innovation, collaboration, and continuous learning. 
                Our team is diverse, inclusive, and passionate about making a positive 
                impact through technology.
              </p>
              <div className="culture-features">
                <div className="culture-feature">
                  <Users size={24} />
                  <div>
                    <h4>Diverse Team</h4>
                    <p>Representing 15+ countries and cultures</p>
                  </div>
                </div>
                <div className="culture-feature">
                  <TrendingUp size={24} />
                  <div>
                    <h4>Growth Mindset</h4>
                    <p>Continuous learning and development</p>
                  </div>
                </div>
                <div className="culture-feature">
                  <Heart size={24} />
                  <div>
                    <h4>Work-Life Balance</h4>
                    <p>Flexible schedules and remote work options</p>
                  </div>
                </div>
                <div className="culture-feature">
                  <Award size={24} />
                  <div>
                    <h4>Recognition</h4>
                    <p>Celebrating achievements and milestones</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="culture-visual">
              <div className="visual-placeholder">
                <Users size={80} />
                <p>Our Amazing Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="future-section">
        <div className="container">
          <div className="future-content">
            <div className="future-visual">
              <div className="visual-placeholder">
                <Globe size={80} />
                <p>The Future of Video</p>
              </div>
            </div>
            <div className="future-text">
              <h2>Looking Ahead</h2>
              <p>
                We're constantly exploring new frontiers in AI and video technology. 
                Our roadmap includes advanced features like real-time collaboration, 
                VR/AR integration, and even more intelligent automation.
              </p>
              <div className="future-goals">
                <div className="future-goal">
                  <Zap size={20} />
                  <span>Real-time collaboration tools</span>
                </div>
                <div className="future-goal">
                  <Globe size={20} />
                  <span>VR/AR video creation</span>
                </div>
                <div className="future-goal">
                  <Shield size={20} />
                  <span>Enhanced security features</span>
                </div>
                <div className="future-goal">
                  <Users size={20} />
                  <span>Global community platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Mission</h2>
            <p>
              Be part of the future of video creation. Whether you're a creator, 
              developer, or just passionate about technology, there's a place for you here.
            </p>
            <div className="cta-actions">
              <Link to="/signup" className="btn-primary">
                Start Creating
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in Touch
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
                <Play size={32} />
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

export default AboutPage;