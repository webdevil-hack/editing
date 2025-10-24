import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe,
  Zap,
  TrendingUp,
  Calendar,
  MapPin,
  Linkedin,
  Twitter
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="about-page pt-16">
      {/* Section 1: Hero Section */}
      <HeroSection />
      
      {/* Section 2: Our Story */}
      <StorySection />
      
      {/* Section 3: Mission, Vision & Values */}
      <MissionVisionSection />
      
      {/* Section 4: Team */}
      <TeamSection />
      
      {/* Section 5: Company Stats */}
      <StatsSection />
      
      {/* Section 6: Timeline */}
      <TimelineSection />
      
      {/* Section 7: Culture & Values */}
      <CultureSection />
      
      {/* Section 8: Join Us */}
      <JoinUsSection />
    </div>
  );
};

// Section 1: Hero Section
const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
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
            Revolutionizing Video Creation with AI
          </motion.h1>
          
          <motion.p 
            className="text-lg text-secondary mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We're on a mission to democratize video creation by making professional-quality 
            video production accessible to everyone through the power of artificial intelligence. 
            Our platform brings together the best AI tools in one seamless experience.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2 text-primary" />
              Global Reach
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-primary" />
              50,000+ Users
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-primary" />
              Industry Leading
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/3 rounded-full blur-3xl" />
    </section>
  );
};

// Section 2: Our Story
const StorySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg mb-6">Our Story</h2>
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>
                Founded in 2023 by a team of AI researchers and video production experts, 
                AI Video Editor was born from a simple observation: creating professional 
                videos was too complex, time-consuming, and expensive for most people.
              </p>
              <p>
                We saw the incredible potential of AI to transform this landscape. By 
                integrating cutting-edge tools like Shotstack, Creatomate, Plainly Videos, 
                and Tavus into a single platform, we've created something unprecedented.
              </p>
              <p>
                Today, we're proud to serve creators, marketers, and businesses worldwide, 
                helping them bring their visions to life with the power of artificial intelligence.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <Zap className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Innovation at Our Core</h3>
                <p className="text-secondary">
                  We believe that the future of content creation lies in the seamless 
                  integration of human creativity and artificial intelligence.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Section 3: Mission, Vision & Values
const MissionVisionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const items = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Our Mission',
      description: 'To democratize video creation by making professional-quality video production accessible to everyone through AI-powered tools and seamless integrations.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Our Vision',
      description: 'A world where anyone can create stunning, professional videos in minutes, not hours, empowering creators and businesses to tell their stories effectively.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Our Values',
      description: 'Innovation, accessibility, quality, and user-centricity drive everything we do. We believe in the power of technology to enhance human creativity.'
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
          <h2 className="heading-lg mb-4">What Drives Us</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Our mission, vision, and values shape every decision we make and every feature we build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="card text-center group hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 4: Team
const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-founder',
      bio: 'Former AI researcher at Google with 10+ years in machine learning and computer vision.',
      image: '/images/team/alex.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/alexchen',
        twitter: 'https://twitter.com/alexchen'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO & Co-founder',
      bio: 'Ex-Netflix engineer specializing in video processing and scalable systems architecture.',
      image: '/images/team/sarah.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        twitter: 'https://twitter.com/sarahjohnson'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Product',
      bio: 'Product leader with experience at Adobe and Figma, passionate about creator tools.',
      image: '/images/team/michael.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/michaelrodriguez',
        twitter: 'https://twitter.com/michaelrodriguez'
      }
    },
    {
      name: 'Emily Davis',
      role: 'Head of AI Research',
      bio: 'PhD in Computer Science from MIT, specializing in generative AI and video synthesis.',
      image: '/images/team/emily.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/emilydavis',
        twitter: 'https://twitter.com/emilydavis'
      }
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
          <h2 className="heading-lg mb-4">Meet Our Team</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            We're a diverse group of engineers, designers, and researchers united by our passion for AI and video technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="card text-center group hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
              <div className="text-primary text-sm font-medium mb-3">{member.role}</div>
              <p className="text-secondary text-sm leading-relaxed mb-4">{member.bio}</p>
              
              <div className="flex justify-center space-x-3">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-700 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 5: Company Stats
const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { number: '50K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '500K+', label: 'Videos Created', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime', icon: <Zap className="w-6 h-6" /> },
    { number: '150+', label: 'Countries', icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">Our Impact</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Numbers that reflect our commitment to empowering creators worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-black mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 6: Timeline
const TimelineSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const timeline = [
    {
      year: '2023',
      quarter: 'Q1',
      title: 'Company Founded',
      description: 'AI Video Editor was founded with the vision of democratizing video creation.'
    },
    {
      year: '2023',
      quarter: 'Q2',
      title: 'First Integration',
      description: 'Successfully integrated Shotstack API, enabling professional video editing capabilities.'
    },
    {
      year: '2023',
      quarter: 'Q3',
      title: 'Platform Launch',
      description: 'Launched beta version with Creatomate and Plainly Videos integrations.'
    },
    {
      year: '2023',
      quarter: 'Q4',
      title: '10K Users',
      description: 'Reached 10,000 active users and added Tavus AI avatar generation.'
    },
    {
      year: '2024',
      quarter: 'Q1',
      title: 'Series A Funding',
      description: 'Raised $5M Series A to accelerate product development and team growth.'
    },
    {
      year: '2024',
      quarter: 'Q2',
      title: 'Global Expansion',
      description: 'Expanded to serve users in 150+ countries with multi-language support.'
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
          <h2 className="heading-lg mb-4">Our Journey</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            From a small startup to a global platform serving creators worldwide.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="card">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 text-primary mr-2" />
                      <span className="text-primary font-semibold">{item.year} {item.quarter}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-secondary">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-black relative z-10"></div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 7: Culture & Values
const CultureSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and video technology.',
      icon: '🚀'
    },
    {
      title: 'User-Centric',
      description: 'Every feature we build starts with understanding our users\' needs and challenges.',
      icon: '👥'
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in everything we do, from code to customer support.',
      icon: '⭐'
    },
    {
      title: 'Transparency',
      description: 'We believe in open communication, honest feedback, and transparent business practices.',
      icon: '🔍'
    },
    {
      title: 'Continuous Learning',
      description: 'We embrace growth, learn from failures, and constantly improve our skills and products.',
      icon: '📚'
    },
    {
      title: 'Global Impact',
      description: 'We strive to make a positive impact on creators and businesses worldwide.',
      icon: '🌍'
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
          <h2 className="heading-lg mb-4">Our Culture & Values</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            The principles that guide our team and shape our company culture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="card group hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
              <p className="text-secondary leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 8: Join Us
const JoinUsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg text-black mb-6">Join Our Mission</h2>
          <p className="text-lg text-black/80 mb-8 leading-relaxed">
            We're always looking for talented individuals who share our passion for AI, 
            video technology, and empowering creators. Join us in shaping the future of video creation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="/careers"
              className="btn bg-black text-white hover:bg-gray-800 btn-lg"
            >
              <Users className="w-5 h-5 mr-2" />
              View Open Positions
            </a>
            <a
              href="/contact"
              className="btn bg-transparent text-black border-black hover:bg-black/10 btn-lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Visit Our Office
            </a>
          </div>

          <div className="text-black/70 text-sm">
            Remote-first company • Competitive benefits • Equity participation
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-lg" />
    </section>
  );
};

export default AboutPage;