import React from 'react';
import { 
  Zap, 
  Palette, 
  Video, 
  Sparkles, 
  Clock, 
  Shield, 
  Download, 
  Share2,
  Brain,
  Layers,
  Camera,
  Music,
  Globe,
  Smartphone,
  Settings,
  BarChart3
} from 'lucide-react';
import './FeaturesPage.css';

const FeaturesPage = () => {
  const features = [
    {
      icon: <Zap size={48} />,
      title: 'AI-Powered Generation',
      description: 'Create professional videos from simple text prompts using advanced artificial intelligence.',
      details: 'Our cutting-edge AI understands context, emotion, and creative intent to generate videos that match your vision perfectly.',
      highlights: ['Natural language processing', 'Context-aware generation', 'Emotion recognition', 'Creative optimization']
    },
    {
      icon: <Palette size={48} />,
      title: 'Advanced Visual Effects',
      description: 'Access a comprehensive library of 3D effects, transitions, and visual enhancements.',
      details: 'From subtle color grading to dramatic 3D animations, our effects library gives you professional-quality results.',
      highlights: ['3D animations', 'Color grading', 'Particle effects', 'Motion graphics']
    },
    {
      icon: <Video size={48} />,
      title: 'Multiple Format Support',
      description: 'Export your videos in any format and resolution, from social media to 4K cinema.',
      details: 'Support for all major video formats including MP4, MOV, AVI, and more, with resolutions up to 4K.',
      highlights: ['4K resolution', 'Multiple formats', 'Social media optimized', 'Cinema quality']
    },
    {
      icon: <Sparkles size={48} />,
      title: '3D Design Elements',
      description: 'Incorporate stunning 3D models, animations, and environments into your videos.',
      details: 'Our 3D engine allows you to create immersive experiences with realistic lighting and physics.',
      highlights: ['3D models', 'Realistic lighting', 'Physics simulation', 'Immersive environments']
    },
    {
      icon: <Clock size={48} />,
      title: 'Real-time Preview',
      description: 'See your changes instantly with our real-time preview and editing system.',
      details: 'Make adjustments and see results immediately, speeding up your creative workflow significantly.',
      highlights: ['Instant preview', 'Live editing', 'Fast rendering', 'Quick iterations']
    },
    {
      icon: <Shield size={48} />,
      title: 'Enterprise Security',
      description: 'Your content is protected with bank-level security and privacy controls.',
      details: 'End-to-end encryption, secure cloud storage, and comprehensive privacy controls keep your work safe.',
      highlights: ['End-to-end encryption', 'Secure storage', 'Privacy controls', 'GDPR compliant']
    },
    {
      icon: <Download size={48} />,
      title: 'High-Quality Export',
      description: 'Export your videos in professional quality with customizable settings.',
      details: 'Choose from multiple quality presets or customize your own export settings for perfect results.',
      highlights: ['Custom quality settings', 'Batch export', 'Cloud storage', 'Direct sharing']
    },
    {
      icon: <Share2 size={48} />,
      title: 'Easy Collaboration',
      description: 'Share projects with team members and collaborate in real-time.',
      details: 'Invite team members, share projects, and work together seamlessly with our collaboration tools.',
      highlights: ['Team sharing', 'Real-time collaboration', 'Version control', 'Comment system']
    }
  ];

  const additionalFeatures = [
    {
      icon: <Brain size={32} />,
      title: 'Smart Templates',
      description: 'AI-curated templates that adapt to your content and style preferences.'
    },
    {
      icon: <Layers size={32} />,
      title: 'Layer Management',
      description: 'Advanced layer system for complex compositions and detailed editing.'
    },
    {
      icon: <Camera size={32} />,
      title: 'Camera Controls',
      description: 'Professional camera movements and cinematography techniques.'
    },
    {
      icon: <Music size={32} />,
      title: 'Audio Integration',
      description: 'Sync music and sound effects with your video content automatically.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Global Assets',
      description: 'Access millions of stock videos, images, and audio files worldwide.'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Ready',
      description: 'Create and edit videos on any device with our responsive interface.'
    },
    {
      icon: <Settings size={32} />,
      title: 'Custom Workflows',
      description: 'Create custom workflows and automation for repetitive tasks.'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Analytics Dashboard',
      description: 'Track performance and engagement metrics for your video content.'
    }
  ];

  return (
    <div className="features-page">
      <div className="features-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Powerful Features for
              <span className="gradient-text"> Creative Professionals</span>
            </h1>
            <p className="hero-description">
              Discover the comprehensive suite of tools and features that make AI Video Editor 
              the most advanced platform for creating professional-quality videos.
            </p>
          </div>
        </div>
      </div>

      <div className="main-features">
        {features.map((feature, index) => (
          <div key={index} className={`feature-section ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <div className="container">
              <div className="feature-content">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-text">
                  <h2 className="feature-title">{feature.title}</h2>
                  <p className="feature-description">{feature.description}</p>
                  <p className="feature-details">{feature.details}</p>
                  <div className="feature-highlights">
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="highlight">
                        <div className="highlight-icon">✓</div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="additional-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Even More
              <span className="gradient-text"> Capabilities</span>
            </h2>
            <p className="section-description">
              Explore additional features that enhance your creative workflow and productivity.
            </p>
          </div>

          <div className="features-grid">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="card-icon">
                  {feature.icon}
                </div>
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="features-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Experience These Features?</h2>
            <p className="cta-description">
              Start creating amazing videos with our full suite of AI-powered tools.
            </p>
            <div className="cta-buttons">
              <a href="/signup" className="btn-primary btn-large">
                Start Free Trial
              </a>
              <a href="/contact" className="btn-secondary btn-large">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;