import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, Users } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: 'support@aivideoeditor.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak with our support team during business hours'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Come visit our headquarters in the heart of Silicon Valley'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: 'Mon - Fri, 9AM - 6PM PST',
      description: 'We\'re here to help during regular business hours'
    }
  ];

  const supportOptions = [
    {
      icon: <MessageCircle size={32} />,
      title: 'Live Chat',
      description: 'Get instant help with our 24/7 live chat support',
      action: 'Start Chat'
    },
    {
      icon: <HelpCircle size={32} />,
      title: 'Help Center',
      description: 'Browse our comprehensive knowledge base and FAQs',
      action: 'Visit Help Center'
    },
    {
      icon: <Users size={32} />,
      title: 'Community Forum',
      description: 'Connect with other users and share your experiences',
      action: 'Join Community'
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Get in
              <span className="gradient-text"> Touch</span>
            </h1>
            <p className="hero-description">
              Have questions about our platform? Need help getting started? 
              We're here to help you succeed with AI video creation.
            </p>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2 className="form-title">Send us a Message</h2>
              <p className="form-description">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                    rows="6"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary btn-large">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2 className="info-title">Contact Information</h2>
              <p className="info-description">
                Choose the best way to reach us based on your needs.
              </p>

              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="info-icon">
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <h3 className="info-item-title">{info.title}</h3>
                      <p className="info-details">{info.details}</p>
                      <p className="info-description">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="support-options">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Need Help
              <span className="gradient-text"> Right Now?</span>
            </h2>
            <p className="section-description">
              Get instant support through our various help channels.
            </p>
          </div>

          <div className="support-grid">
            {supportOptions.map((option, index) => (
              <div key={index} className="support-card">
                <div className="support-icon">
                  {option.icon}
                </div>
                <h3 className="support-title">{option.title}</h3>
                <p className="support-description">{option.description}</p>
                <button className="support-action">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Join thousands of creators who are already using our platform to create amazing videos.
            </p>
            <div className="cta-buttons">
              <a href="/signup" className="btn-primary btn-large">
                Start Free Trial
              </a>
              <a href="/features" className="btn-secondary btn-large">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;