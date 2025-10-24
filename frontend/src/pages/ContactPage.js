import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Users,
  Headphones,
  Globe,
  Twitter,
  Linkedin,
  Github,
  Calendar,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import toast from 'react-hot-toast';

const ContactPage = () => {
  return (
    <div className="contact-page pt-16">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Contact Form & Info */}
      <ContactFormSection />
      
      {/* Contact Methods */}
      <ContactMethodsSection />
      
      {/* Office Locations */}
      <OfficeLocationsSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Support Resources */}
      <SupportResourcesSection />
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="heading-xl gradient-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          
          <motion.p 
            className="text-lg text-secondary mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have questions about our AI video editing platform? Need help with your projects? 
            Our team is here to help you create amazing videos. Reach out to us anytime.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-primary" />
              24/7 Support
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-2 text-primary" />
              Live Chat Available
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-primary" />
              Quick Response
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

// Contact Form Section
const ContactFormSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      value: 'hello@aivideoeditor.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM PST'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      value: 'Available 24/7',
      description: 'Get instant help'
    }
  ];

  return (
    <section ref={ref} className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="card">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="input"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press & Media</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input textarea"
                    rows="5"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-secondary leading-relaxed mb-8">
                We're here to help you succeed with AI video creation. Whether you have 
                questions about features, need technical support, or want to explore 
                partnership opportunities, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <div className="text-primary font-medium mb-1">{info.value}</div>
                    <div className="text-secondary text-sm">{info.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, url: 'https://twitter.com' },
                  { icon: Linkedin, url: 'https://linkedin.com' },
                  { icon: Github, url: 'https://github.com' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-700 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Contact Methods Section
const ContactMethodsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const methods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7 Available',
      action: 'Start Chat',
      color: 'from-blue-500/20 to-blue-600/5'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Schedule a Demo',
      description: 'Book a personalized demo with our team',
      availability: 'Mon-Fri 9AM-6PM',
      action: 'Book Demo',
      color: 'from-green-500/20 to-green-600/5'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Business Hours',
      action: 'Call Now',
      color: 'from-purple-500/20 to-purple-600/5'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Forum',
      description: 'Connect with other creators and get help',
      availability: 'Always Active',
      action: 'Join Forum',
      color: 'from-orange-500/20 to-orange-600/5'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-secondary/20">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">Multiple Ways to Connect</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Choose the method that works best for you. We're committed to providing 
            excellent support through all channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              className={`card text-center group hover:border-primary/50 transition-all duration-300 relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                
                <h3 className="text-lg font-semibold mb-3">{method.title}</h3>
                <p className="text-secondary text-sm mb-4 leading-relaxed">{method.description}</p>
                
                <div className="text-primary text-xs font-medium mb-4">{method.availability}</div>
                
                <button className="btn btn-outline btn-sm w-full group-hover:btn-primary transition-all duration-300">
                  {method.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Office Locations Section
const OfficeLocationsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const offices = [
    {
      city: 'San Francisco',
      country: 'United States',
      address: '123 Tech Street, Suite 100\nSan Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@aivideoeditor.com',
      timezone: 'PST (UTC-8)'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '456 Innovation Lane\nLondon, EC1A 1BB',
      phone: '+44 20 7123 4567',
      email: 'london@aivideoeditor.com',
      timezone: 'GMT (UTC+0)'
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      address: '789 Future Building\nTokyo, 100-0001',
      phone: '+81 3-1234-5678',
      email: 'tokyo@aivideoeditor.com',
      timezone: 'JST (UTC+9)'
    }
  ];

  return (
    <section ref={ref} className="py-20">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">Our Global Presence</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            We have offices around the world to better serve our global community of creators.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              className="card group hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{office.city}</h3>
                  <div className="text-secondary text-sm">{office.country}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-primary mb-1">Address</div>
                  <div className="text-secondary text-sm whitespace-pre-line">{office.address}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-primary mb-1">Phone</div>
                    <div className="text-secondary text-sm">{office.phone}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary mb-1">Timezone</div>
                    <div className="text-secondary text-sm">{office.timezone}</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-primary mb-1">Email</div>
                  <div className="text-secondary text-sm">{office.email}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: 'How quickly can I expect a response?',
      answer: 'We typically respond to emails within 2-4 hours during business hours. For urgent issues, use our live chat for immediate assistance.'
    },
    {
      question: 'Do you offer phone support?',
      answer: 'Yes, we offer phone support for Pro and Enterprise customers during business hours (9 AM - 6 PM PST). Free users can access our comprehensive help center and community forum.'
    },
    {
      question: 'Can I schedule a demo or consultation?',
      answer: 'Absolutely! We offer personalized demos for teams and businesses. You can schedule a demo through our calendar link or contact our sales team directly.'
    },
    {
      question: 'What languages do you support?',
      answer: 'Our support team primarily operates in English, but we have multilingual support available for our major markets including Spanish, French, German, and Japanese.'
    },
    {
      question: 'How can I report a bug or technical issue?',
      answer: 'You can report bugs through our support portal, live chat, or by emailing support@aivideoeditor.com. Please include as much detail as possible to help us resolve the issue quickly.'
    },
    {
      question: 'Do you offer training or onboarding?',
      answer: 'Yes, we provide comprehensive onboarding for Enterprise customers and group training sessions. We also have extensive documentation and video tutorials available for all users.'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Quick answers to common questions about our support and services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-left p-6 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-primary/50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold pr-4">{faq.question}</h3>
                  <div className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </button>
              
              {openFAQ === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6 bg-gray-900/50 rounded-b-lg border-x border-b border-gray-700"
                >
                  <p className="text-secondary leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Support Resources Section
const SupportResourcesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const resources = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Help Center',
      description: 'Comprehensive guides and tutorials',
      link: '/help'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Forum',
      description: 'Connect with other creators',
      link: '/community'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Status Page',
      description: 'Check system status and updates',
      link: '/status'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg text-black mb-4">Additional Resources</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Explore our self-service resources for quick answers and community support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              className="card bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40 text-black group transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                {resource.icon}
              </div>
              <h3 className="font-semibold mb-2">{resource.title}</h3>
              <p className="text-black/70 text-sm">{resource.description}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-black/70 mb-4">
            Still need help? Our team is standing by to assist you.
          </p>
          <button className="btn bg-black text-white hover:bg-gray-800">
            <MessageCircle className="w-4 h-4 mr-2" />
            Start Live Chat
          </button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-lg" />
    </section>
  );
};

export default ContactPage;