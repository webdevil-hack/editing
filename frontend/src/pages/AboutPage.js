import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiTarget, FiEye, FiHeart, FiAward, 
  FiUsers, FiGlobe, FiTrendingUp, FiZap 
} from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    { icon: <FiTarget />, title: 'Innovation', description: 'Pushing boundaries with cutting-edge AI technology' },
    { icon: <FiHeart />, title: 'User-Centric', description: 'Designing with our users\' needs at the forefront' },
    { icon: <FiAward />, title: 'Excellence', description: 'Delivering high-quality results every time' },
    { icon: <FiGlobe />, title: 'Accessibility', description: 'Making professional video editing accessible to all' },
  ];

  const team = [
    { name: 'Alex Rivera', role: 'CEO & Founder', expertise: 'AI & Machine Learning' },
    { name: 'Sarah Kim', role: 'CTO', expertise: 'Video Processing' },
    { name: 'Michael Chen', role: 'Head of Design', expertise: 'UX/UI Design' },
    { name: 'Emma Watson', role: 'Lead Engineer', expertise: 'Full-Stack Development' },
  ];

  const milestones = [
    { year: '2021', title: 'Company Founded', description: 'Started with a vision to democratize video editing' },
    { year: '2022', title: 'First Product Launch', description: 'Released our AI-powered video editor to the public' },
    { year: '2023', title: '50K Users', description: 'Reached 50,000 active users worldwide' },
    { year: '2024', title: 'Global Expansion', description: 'Expanded to 100+ countries with multi-language support' },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      {/* Section 1: Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              About <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to revolutionize video creation with AI-powered tools that empower everyone to bring their ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Mission & Vision */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <div className="text-4xl text-accent-primary mb-4">
                <FiTarget />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 text-lg">
                To democratize professional video creation by providing powerful, AI-driven tools that are accessible to creators of all skill levels, enabling them to transform their ideas into stunning visual content effortlessly.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <div className="text-4xl text-accent-secondary mb-4">
                <FiEye />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 text-lg">
                To become the world's leading AI video platform, empowering millions of creators to tell their stories through innovative technology that breaks down barriers and unleashes creativity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Core Values */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Our Core Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl text-center hover:glow-effect transition-all duration-300"
              >
                <div className="text-5xl text-accent-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Story */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Our Story</h2>
            <p className="text-xl text-gray-400">The journey that brought us here</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass p-8 rounded-xl"
          >
            <p className="text-lg text-gray-300 mb-4">
              AI VideoLab was born from a simple observation: creating professional videos was too complex, time-consuming, and expensive for most people. Our founders, a team of AI researchers and creative professionals, saw an opportunity to change that.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              We started in a small garage in Silicon Valley, working tirelessly to develop AI algorithms that could understand creative intent and translate it into stunning visuals. What began as a research project quickly evolved into a platform that thousands now rely on daily.
            </p>
            <p className="text-lg text-gray-300">
              Today, we're proud to serve creators from over 100 countries, helping them bring their visions to life with technology that was once only available to major studios. But we're just getting started – the future of video creation is being written right now, and we're excited to be part of it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Team */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Meet Our Team</h2>
            <p className="text-xl text-gray-400">The brilliant minds behind AI VideoLab</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl text-center hover:border-accent-primary hover:border-2 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-accent-primary mb-2">{member.role}</p>
                <p className="text-sm text-gray-400">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Milestones */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Our Journey</h2>
            <p className="text-xl text-gray-400">Key milestones in our growth</p>
          </motion.div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl flex flex-col md:flex-row items-center gap-6"
              >
                <div className="text-4xl font-bold text-accent-primary min-w-[100px]">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Impact Stats */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Our Impact</h2>
            <p className="text-xl text-gray-400">Making a difference, one video at a time</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FiUsers />, number: '100K+', label: 'Global Users' },
              { icon: <FiGlobe />, number: '120+', label: 'Countries' },
              { icon: <FiTrendingUp />, number: '5M+', label: 'Videos Created' },
              { icon: <FiZap />, number: '99.9%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl text-accent-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-accent-primary mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Join Us CTA */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the AI video revolution. Start creating today.
            </p>
            <a
              href="/signup"
              className="inline-block px-12 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-accent-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
