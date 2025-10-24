import React from 'react';
import { 
  Zap, 
  Palette, 
  Video, 
  Sparkles, 
  Clock, 
  Shield, 
  Download, 
  Share2 
} from 'lucide-react';
import './FeaturesOverview.css';

const FeaturesOverview = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Lightning Fast',
      description: 'Generate professional videos in seconds with our advanced AI processing technology.'
    },
    {
      icon: <Palette size={32} />,
      title: 'AI-Powered Design',
      description: 'Intelligent color grading, composition, and visual effects automatically applied.'
    },
    {
      icon: <Video size={32} />,
      title: 'Multiple Formats',
      description: 'Support for all major video formats including MP4, MOV, AVI, and more.'
    },
    {
      icon: <Sparkles size={32} />,
      title: '3D Effects',
      description: 'Stunning 3D animations and effects that bring your videos to life.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Real-time Preview',
      description: 'See your changes instantly with our real-time preview system.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Secure & Private',
      description: 'Your content is protected with enterprise-grade security measures.'
    },
    {
      icon: <Download size={32} />,
      title: 'High Quality Export',
      description: 'Export in up to 4K resolution with professional quality settings.'
    },
    {
      icon: <Share2 size={32} />,
      title: 'Easy Sharing',
      description: 'Share your creations directly to social media or download for offline use.'
    }
  ];

  return (
    <section className="features-overview">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Powerful Features for
            <span className="gradient-text"> Creative Professionals</span>
          </h2>
          <p className="section-description">
            Everything you need to create stunning videos with AI-powered tools and effects.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;