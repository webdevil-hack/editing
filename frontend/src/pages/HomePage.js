import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiVideo, FiZap, FiTarget, FiAward, FiUsers, 
  FiTrendingUp, FiPlay, FiCheck, FiStar 
} from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background3D from '../components/3DBackground';

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    { icon: <FiZap />, title: 'AI-Powered', description: 'Advanced AI algorithms for smart video editing' },
    { icon: <FiVideo />, title: 'Multiple Tools', description: '8+ integrated video editing tools and APIs' },
    { icon: <FiTarget />, title: 'Prompt-Based', description: 'Create videos using simple text prompts' },
    { icon: <FiAward />, title: 'Professional Quality', description: 'Export in HD and 4K resolutions' },
  ];

  const tools = [
    { name: 'Shotstack API', description: 'Professional video rendering' },
    { name: 'Creatomate', description: 'Template-based video creation' },
    { name: 'Plainly Videos', description: 'Automated video generation' },
    { name: 'Tavus AI', description: 'AI avatar video creation' },
    { name: 'PromptClip', description: 'Prompt to video conversion' },
    { name: 'Lucy Edit', description: 'Advanced AI editing' },
    { name: 'LTXVideo', description: 'Next-gen video processing' },
    { name: 'Wan 2.1', description: 'AI-powered video enhancement' },
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      features: ['5 videos/month', 'HD quality', 'Basic tools', 'Community support'],
    },
    {
      name: 'Pro',
      price: '$29',
      features: ['Unlimited videos', '4K quality', 'All tools', 'Priority support', 'API access'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Custom solutions', 'Dedicated support', 'White label', 'SLA guarantee', 'Training'],
    },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'Content Creator', text: 'This platform revolutionized my video workflow!', rating: 5 },
    { name: 'Mike Chen', role: 'Marketing Director', text: 'Best AI video tool I\'ve ever used. Highly recommended!', rating: 5 },
    { name: 'Emily Davis', role: 'YouTuber', text: 'Creates professional videos in minutes, not hours!', rating: 5 },
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '1M+', label: 'Videos Created' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      {/* Section 1: Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <Background3D />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 glow-text"
          >
            AI-Powered Video Editing
            <br />
            <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
              Reimagined
            </span>
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Transform your ideas into stunning videos with simple text prompts. 
            No editing skills required.
          </motion.p>
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/signup"
              className="px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-accent-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              Start Creating Free
            </Link>
            <Link 
              to="/features"
              className="px-8 py-4 border-2 border-accent-primary text-white rounded-lg text-lg font-semibold hover:bg-accent-primary transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FiPlay /> Watch Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Features Grid */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to create amazing videos
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover:glow-effect transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl text-accent-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              How It Works
            </h2>
            <p className="text-xl text-gray-400">
              Create professional videos in 3 simple steps
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Enter Your Prompt', desc: 'Describe your video idea in simple text' },
              { step: '02', title: 'Choose Your Tool', desc: 'Select from 8+ AI-powered editing tools' },
              { step: '03', title: 'Get Your Video', desc: 'Download your professional video in minutes' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-6xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Tools Showcase */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Integrated Tools & APIs
            </h2>
            <p className="text-xl text-gray-400">
              Access the best AI video tools in one platform
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass p-6 rounded-xl hover:border-accent-primary hover:border-2 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-2 text-accent-primary">
                  {tool.name}
                </h3>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Pricing */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Choose the plan that fits your needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass p-8 rounded-xl ${plan.popular ? 'border-2 border-accent-primary glow-effect' : ''} relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent-primary to-accent-secondary px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6 text-accent-primary">
                  {plan.price}
                  {plan.price !== 'Custom' && <span className="text-lg text-gray-400">/month</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FiCheck className="text-accent-primary" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/signup"
                  className={`block w-full py-3 rounded-lg text-center font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:shadow-lg hover:shadow-accent-primary/50'
                      : 'border border-accent-primary text-white hover:bg-accent-primary'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of satisfied creators
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Stats */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: CTA */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators and start your journey today
            </p>
            <Link
              to="/signup"
              className="inline-block px-12 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-accent-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              Get Started for Free
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
