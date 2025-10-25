import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Wand2, 
  Layers, 
  Globe, 
  Shield, 
  Gauge,
  Users,
  Palette,
  Play,
  Download,
  Settings,
  BarChart3,
  Sparkles,
  Film,
  Mic,
  Image,
  Type,
  Clock,
  Cloud,
  Smartphone,
  Monitor,
  Headphones,
  Camera,
  Edit3,
  Sliders,
  Crop,
  Volume2,
  Eye,
  Cpu,
  Database,
  Lock,
  Workflow
} from 'lucide-react';

const FeaturesPage = () => {
  return (
    <div className="features-page pt-16">
      {/* Section 1: Hero Section */}
      <HeroSection />
      
      {/* Section 2: Core AI Features */}
      <CoreFeaturesSection />
      
      {/* Section 3: Integrated Tools */}
      <IntegratedToolsSection />
      
      {/* Section 4: Video Editing Capabilities */}
      <VideoEditingSection />
      
      {/* Section 5: Advanced Features */}
      <AdvancedFeaturesSection />
      
      {/* Section 6: Platform & Performance */}
      <PlatformSection />
      
      {/* Section 7: Collaboration & Workflow */}
      <CollaborationSection />
      
      {/* Section 8: Security & Enterprise */}
      <SecuritySection />
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
            Powerful Features for Every Creator
          </motion.h1>
          
          <motion.p 
            className="text-lg text-secondary mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the comprehensive suite of AI-powered video creation tools that make 
            professional video production accessible to everyone. From simple text prompts 
            to complex video compositions, we've got you covered.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-secondary">AI-Powered</div>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-secondary">Multi-Platform</div>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-secondary">Enterprise Ready</div>
            </div>
            <div className="text-center">
              <Gauge className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-secondary">Lightning Fast</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 0.8, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
};

// Section 2: Core AI Features
const CoreFeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: 'Text-to-Video Generation',
      description: 'Transform simple text prompts into professional videos using advanced AI algorithms.',
      highlights: ['Natural language processing', 'Context understanding', 'Style adaptation']
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Scene Composition',
      description: 'Automatically arrange scenes, transitions, and effects for optimal visual impact.',
      highlights: ['Smart scene detection', 'Auto transitions', 'Dynamic pacing']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Intelligent Color Grading',
      description: 'AI-powered color correction and grading that matches your content mood and style.',
      highlights: ['Mood detection', 'Style matching', 'Professional looks']
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: 'Voice Synthesis & Cloning',
      description: 'Generate realistic voiceovers or clone existing voices for consistent branding.',
      highlights: ['Multiple languages', 'Emotion control', 'Voice cloning']
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
          <h2 className="heading-lg mb-4">Core AI Features</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Harness the power of artificial intelligence to create videos that would typically require hours of manual work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card group hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-secondary mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 3: Integrated Tools
const IntegratedToolsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const tools = [
    {
      name: 'Shotstack',
      category: 'Video Editing API',
      description: 'Professional video editing with timeline-based composition, effects, and transitions.',
      features: ['Timeline editing', 'Video effects', 'Multi-format output', 'Cloud rendering'],
      color: 'from-blue-500/20 to-blue-600/5'
    },
    {
      name: 'Creatomate',
      category: 'Automated Video Creation',
      description: 'Template-based video generation with dynamic content and batch processing capabilities.',
      features: ['Template system', 'Dynamic content', 'Batch processing', 'API integration'],
      color: 'from-purple-500/20 to-purple-600/5'
    },
    {
      name: 'Plainly Videos',
      category: 'Scalable Video Generation',
      description: 'Data-driven video creation for marketing campaigns and personalized content.',
      features: ['Data integration', 'Custom templates', 'Scalable rendering', 'Analytics'],
      color: 'from-green-500/20 to-green-600/5'
    },
    {
      name: 'Tavus',
      category: 'AI Avatar Generation',
      description: 'Create realistic AI avatars and personalized video messages at scale.',
      features: ['AI avatars', 'Voice synthesis', 'Personalization', 'Lip sync'],
      color: 'from-orange-500/20 to-orange-600/5'
    },
    {
      name: 'PromptClip',
      category: 'Open Source Tool',
      description: 'Community-driven video generation tool with customizable prompts and effects.',
      features: ['Open source', 'Custom prompts', 'Community effects', 'Free to use'],
      color: 'from-pink-500/20 to-pink-600/5'
    },
    {
      name: 'Lucy Edit',
      category: 'Advanced Editing',
      description: 'Professional-grade editing tools with AI-assisted workflow optimization.',
      features: ['Advanced editing', 'AI assistance', 'Workflow optimization', 'Pro tools'],
      color: 'from-cyan-500/20 to-cyan-600/5'
    },
    {
      name: 'LTXVideo',
      category: 'AI Video Processing',
      description: 'Lightricks-powered video enhancement and processing capabilities.',
      features: ['Video enhancement', 'AI processing', 'Quality upscaling', 'Smart filters'],
      color: 'from-yellow-500/20 to-yellow-600/5'
    },
    {
      name: 'Wan 2.1',
      category: 'Advanced AI Model',
      description: 'Alibaba\'s cutting-edge AI model for sophisticated video generation and editing.',
      features: ['Advanced AI', 'High quality', 'Complex scenes', 'Style transfer'],
      color: 'from-red-500/20 to-red-600/5'
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
          <h2 className="heading-lg mb-4">Integrated AI Tools</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Access the best AI video generation and editing tools through our unified platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className={`card relative overflow-hidden group hover:border-primary/50 transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-1">{tool.name}</h3>
                  <div className="text-primary text-sm font-medium">{tool.category}</div>
                </div>
                
                <p className="text-secondary text-sm mb-4 leading-relaxed">{tool.description}</p>
                
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 4: Video Editing Capabilities
const VideoEditingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: 'Timeline Editing',
      icon: <Film className="w-5 h-5" />,
      features: [
        { icon: <Layers className="w-5 h-5" />, name: 'Multi-track timeline', desc: 'Professional timeline with unlimited tracks' },
        { icon: <Crop className="w-5 h-5" />, name: 'Precision cutting', desc: 'Frame-accurate editing and trimming' },
        { icon: <Edit3 className="w-5 h-5" />, name: 'Advanced transitions', desc: 'Smooth transitions and effects' },
        { icon: <Clock className="w-5 h-5" />, name: 'Keyframe animation', desc: 'Precise animation control' }
      ]
    },
    {
      name: 'Effects & Filters',
      icon: <Sparkles className="w-5 h-5" />,
      features: [
        { icon: <Palette className="w-5 h-5" />, name: 'Color grading', desc: 'Professional color correction tools' },
        { icon: <Eye className="w-5 h-5" />, name: 'Visual effects', desc: 'Cinematic effects and filters' },
        { icon: <Sliders className="w-5 h-5" />, name: 'Real-time preview', desc: 'See changes instantly' },
        { icon: <Settings className="w-5 h-5" />, name: 'Custom presets', desc: 'Save and share your settings' }
      ]
    },
    {
      name: 'Audio Tools',
      icon: <Volume2 className="w-5 h-5" />,
      features: [
        { icon: <Mic className="w-5 h-5" />, name: 'Voice enhancement', desc: 'AI-powered audio cleanup' },
        { icon: <Headphones className="w-5 h-5" />, name: 'Music library', desc: 'Royalty-free music collection' },
        { icon: <Volume2 className="w-5 h-5" />, name: 'Audio mixing', desc: 'Professional audio mixing tools' },
        { icon: <Wand2 className="w-5 h-5" />, name: 'Auto sync', desc: 'Automatic audio synchronization' }
      ]
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
          <h2 className="heading-lg mb-4">Professional Video Editing</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Full-featured video editing capabilities that rival desktop applications, all in your browser.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-700">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 font-medium transition-colors ${
                  activeTab === index
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-secondary hover:text-white'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {tabs[activeTab].features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="card group hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.name}</h3>
                      <p className="text-secondary text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Section 5: Advanced Features
const AdvancedFeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation for repetitive tasks',
      items: ['Auto scene detection', 'Smart cropping', 'Content-aware editing', 'Batch processing']
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into your video performance',
      items: ['Engagement metrics', 'Performance tracking', 'A/B testing', 'ROI analysis']
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Rendering',
      description: 'Powerful cloud infrastructure for fast processing',
      items: ['Distributed rendering', 'Auto-scaling', 'Priority queues', 'Real-time progress']
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Workflow Automation',
      description: 'Streamline your video production pipeline',
      items: ['Custom workflows', 'Approval processes', 'Auto publishing', 'Integration hooks']
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">Advanced Capabilities</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Enterprise-grade features that scale with your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-black mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-secondary text-sm mb-4">{feature.description}</p>
              
              <ul className="space-y-2 text-left">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 6: Platform & Performance
const PlatformSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const platforms = [
    {
      icon: <Monitor className="w-8 h-8" />,
      name: 'Web Browser',
      description: 'Full-featured editor in any modern browser',
      features: ['No downloads required', 'Cross-platform', 'Auto-updates', 'Cloud sync']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      name: 'Mobile Apps',
      description: 'Edit on the go with our mobile applications',
      features: ['iOS & Android', 'Touch optimized', 'Offline editing', 'Cloud sync']
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: 'API Access',
      description: 'Integrate video creation into your applications',
      features: ['RESTful API', 'SDKs available', 'Webhooks', 'Documentation']
    }
  ];

  const performance = [
    { metric: 'Render Speed', value: '10x Faster', description: 'Than traditional software' },
    { metric: 'Uptime', value: '99.9%', description: 'Guaranteed availability' },
    { metric: 'Processing', value: 'Real-time', description: 'Live preview & editing' },
    { metric: 'Storage', value: 'Unlimited', description: 'Cloud storage included' }
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
          <h2 className="heading-lg mb-4">Platform & Performance</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Built for speed, reliability, and accessibility across all devices and platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Platforms */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Available Platforms</h3>
            <div className="space-y-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  className="card group hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {platform.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{platform.name}</h4>
                      <p className="text-secondary text-sm mb-3">{platform.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {platform.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div>
            <h3 className="text-xl font-semibold mb-8">Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-6">
              {performance.map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="font-medium mb-1">{metric.metric}</div>
                  <div className="text-xs text-secondary">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 7: Collaboration & Workflow
const CollaborationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with your team members in real-time.',
      points: ['Real-time editing', 'Comment system', 'Version control', 'Role management']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Project Management',
      description: 'Organize and manage your video projects with powerful tools.',
      points: ['Project templates', 'Asset libraries', 'Approval workflows', 'Deadline tracking']
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: 'Export & Sharing',
      description: 'Export in multiple formats and share directly to social platforms.',
      points: ['Multiple formats', 'Social integration', 'Custom presets', 'Batch export']
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
          <h2 className="heading-lg mb-4">Collaboration & Workflow</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Built for teams with features that streamline collaboration and project management.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card text-center group hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-secondary mb-6 leading-relaxed">{feature.description}</p>
              
              <ul className="space-y-3 text-left">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 8: Security & Enterprise
const SecuritySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Enterprise Security',
      items: ['End-to-end encryption', 'SOC 2 compliance', 'GDPR compliant', 'Regular audits']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Data Protection',
      items: ['Secure cloud storage', 'Automatic backups', 'Data residency options', 'Privacy controls']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Access Control',
      items: ['SSO integration', 'Role-based permissions', 'Multi-factor auth', 'Audit logs']
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Compliance',
      items: ['HIPAA ready', 'ISO 27001', 'Privacy by design', 'Data portability']
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg mb-4">Enterprise Security & Compliance</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Built with enterprise-grade security and compliance features to protect your data and meet regulatory requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="card text-center group hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center text-black mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="font-semibold mb-4">{feature.title}</h3>
              
              <ul className="space-y-2 text-left">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
          <p className="text-secondary mb-6 max-w-2xl mx-auto">
            Experience the power of AI-driven video creation. Start your free trial today and see how our platform can transform your video production workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg">
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="btn btn-outline btn-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesPage;