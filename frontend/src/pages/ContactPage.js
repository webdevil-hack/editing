import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: <FiMail />, title: 'Email', value: 'support@aivideolab.com' },
    { icon: <FiPhone />, title: 'Phone', value: '+1 (555) 123-4567' },
    { icon: <FiMapPin />, title: 'Office', value: 'San Francisco, CA 94102' },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              Get In <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-xl"
            >
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiSend /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <div key={index} className="glass p-6 rounded-xl flex items-start gap-4">
                  <div className="text-3xl text-accent-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </div>
              ))}

              <div className="glass p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="glass p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">FAQ</h3>
                <p className="text-gray-400 mb-4">
                  Before reaching out, check our FAQ section for quick answers to common questions.
                </p>
                <a
                  href="#"
                  className="text-accent-primary hover:text-accent-secondary transition-colors"
                >
                  View FAQ →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
