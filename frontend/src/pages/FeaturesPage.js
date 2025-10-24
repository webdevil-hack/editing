import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiZap, FiVideo, FiEdit, FiDownload, FiCloud, 
  FiShield, FiCpu, FiLayers, FiTrendingUp, 
  FiSettings, FiUsers, FiGlobe 
} from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FeaturesPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const mainFeatures = [
    {
      icon: <FiZap />,
      title: 'AI-Powered Generation',
      description: 'Transform text prompts into professional videos using advanced AI algorithms',
      details: ['Natural language processing', 'Intelligent scene generation', 'Auto-synchronization']
    },
    {
      icon: <FiVideo />,
      title: 'Multi-Tool Integration',
      description: 'Access 8+ professional video editing APIs and tools from one dashboard',
      details: ['Shotstack API', 'Creatomate', 'Plainly Videos', 'Tavus', 'PromptClip', 'Lucy Edit', 'LTXVideo', 'Wan 2.1']
    },
    {
      icon: <FiEdit />,
      title: 'Advanced Editing',
      description: 'Professional-grade editing tools with intuitive controls',
      details: ['Timeline editing', 'Transitions & effects', 'Color grading', 'Audio mixing']
    },
    {
      icon: <FiDownload />,
      title: 'High-Quality Export',
      description: 'Export your videos in multiple formats and resolutions',
      details: ['4K resolution', 'Multiple formats (MP4, MOV, WebM)', 'Custom bitrates']
    },
  ];

  const technicalFeatures = [
    { icon: <FiCpu />, title: 'GPU Acceleration', description: 'Lightning-fast processing with GPU support' },
    { icon: <FiCloud />, title: 'Cloud Rendering', description: 'Powerful cloud infrastructure for quick renders' },
    { icon: <FiShield />, title: 'Secure Storage', description: 'Enterprise-grade security for your content' },
    { icon: <FiLayers />, title: 'Template Library', description: '1000+ professional templates to start from' },
  ];

  const aiCapabilities = [
    'Text-to-video conversion',
    'Automatic scene detection',
    'Smart object tracking',
    'Voice synthesis',
    'Auto-captioning',
    'Background removal',
    'Style transfer',
    'Intelligent cropping',
  ];

  const integrations = [
    { name: 'Shotstack', category: 'Video API', description: 'Professional video rendering and editing' },
    { name: 'Creatomate', category: 'Template Engine', description: 'Template-based video generation' },
    { name: 'Plainly Videos', category: 'Automation', description: 'Automated video production workflows' },
    { name: 'Tavus', category: 'AI Avatars', description: 'AI-powered personalized video avatars' },
    { name: 'PromptClip', category: 'AI Generation', description: 'Open-source prompt-to-video tool' },
    { name: 'Lucy Edit', category: 'AI Editing', description: 'Advanced AI video editing capabilities' },
    { name: 'LTXVideo', category: 'Processing', description: 'Next-generation video processing' },
    { name: 'Wan 2.1', category: 'Enhancement', description: 'AI-powered video enhancement' },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />

      {/* Section 1: Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              Powerful <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Features</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, edit, and publish professional videos with AI
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Main Features */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-xl hover:glow-effect transition-all duration-300"
              >
                <div className="text-5xl text-accent-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent-primary rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Technical Features */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Technical Excellence</h2>
            <p className="text-xl text-gray-400">Built on cutting-edge technology</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl text-center hover:border-accent-primary hover:border-2 transition-all duration-300"
              >
                <div className="text-4xl text-accent-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: AI Capabilities */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">AI Capabilities</h2>
            <p className="text-xl text-gray-400">Powered by advanced machine learning</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass p-4 rounded-lg flex items-center gap-3 hover:bg-dark-700 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                <span className="text-gray-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Integrations */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Integrated Tools & APIs</h2>
            <p className="text-xl text-gray-400">All your favorite tools in one place</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass p-6 rounded-xl hover:border-accent-primary hover:border-2 transition-all duration-300 cursor-pointer"
              >
                <div className="text-sm text-accent-secondary mb-2">{integration.category}</div>
                <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
                <p className="text-gray-400 text-sm">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Workflow */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Streamlined Workflow</h2>
            <p className="text-xl text-gray-400">From prompt to professional video in minutes</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Input Prompt', desc: 'Describe your video' },
              { step: '2', title: 'Choose Tool', desc: 'Select AI engine' },
              { step: '3', title: 'AI Processing', desc: 'Magic happens' },
              { step: '4', title: 'Review & Edit', desc: 'Fine-tune results' },
              { step: '5', title: 'Export', desc: 'Download & share' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent-primary to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Use Cases */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Perfect For</h2>
            <p className="text-xl text-gray-400">Whatever your video needs</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FiUsers />, title: 'Content Creators', desc: 'YouTube, TikTok, Instagram content' },
              { icon: <FiTrendingUp />, title: 'Marketing Teams', desc: 'Ads, promotions, and campaigns' },
              { icon: <FiGlobe />, title: 'Businesses', desc: 'Product demos, explainers, tutorials' },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-xl text-center hover:glow-effect transition-all duration-300"
              >
                <div className="text-5xl text-accent-primary mb-4 flex justify-center">
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.desc}</p>
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
              Ready to Experience the Power?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start creating professional videos with AI today
            </p>
            <a
              href="/signup"
              className="inline-block px-12 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-accent-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              Try It Free
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
