import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Play, 
  Zap, 
  Sparkles, 
  Users, 
  Award, 
  ArrowRight,
  Check,
  Star,
  Globe,
  Shield
} from 'lucide-react';

// Components
import ParticleBackground from '../components/effects/ParticleBackground';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import TestimonialCard from '../components/ui/TestimonialCard';
import FeatureCard from '../components/ui/FeatureCard';
import PricingCard from '../components/ui/PricingCard';

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="homepage">
      {/* Section 1: Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
        
        <motion.div 
          className="container relative z-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="heading-xl gradient-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Create Stunning Videos with AI
          </motion.h1>
          
          <motion.p 
            className="text-lg text-secondary max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Transform your ideas into professional videos using cutting-edge AI technology. 
            Integrated with Shotstack, Creatomate, Plainly, Tavus, and more powerful tools.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link to="/signup" className="btn btn-primary btn-lg animate-glow">
              <Play className="w-5 h-5 mr-2" />
              Start Creating Now
            </Link>
            <Link to="/features" className="btn btn-outline btn-lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Explore Features
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex justify-center items-center space-x-8 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex items-center">
              <Check className="w-4 h-4 text-primary mr-2" />
              No Credit Card Required
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-primary mr-2" />
              Free Trial Available
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-primary mr-2" />
              Cancel Anytime
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

      {/* Section 2: Stats Section */}
      <StatsSection />

      {/* Section 3: Features Overview */}
      <FeaturesOverviewSection />

      {/* Section 4: AI Tools Integration */}
      <AIToolsSection />

      {/* Section 5: How It Works */}
      <HowItWorksSection />

      {/* Section 6: Testimonials */}
      <TestimonialsSection />

      {/* Section 7: Pricing */}
      <PricingSection />

      {/* Section 8: CTA Section */}
      <CTASection />
    </div>
  );
};

// Section 2: Stats Section
const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { number: 50000, label: 'Videos Created', suffix: '+' },
    { number: 10000, label: 'Happy Users', suffix: '+' },
    { number: 99, label: 'Uptime', suffix: '%' },
    { number: 24, label: 'Support', suffix: '/7' }
  ];

  return (
    <section ref={ref} className="py-20 bg-secondary/50">
      <div className="container">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter 
                  end={stat.number} 
                  duration={2}
                  suffix={stat.suffix}
                  start={inView}
                />
              </div>
              <div className="text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Section 3: Features Overview
const FeaturesOverviewSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Powered Generation',
      description: 'Create videos from simple text prompts using advanced AI algorithms'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multiple Integrations',
      description: 'Access Shotstack, Creatomate, Plainly, Tavus, and more in one platform'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encrypted data and secure API connections'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Work together with your team on video projects in real-time'
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
          <h2 className="heading-lg mb-4">Powerful Features</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Everything you need to create professional videos with AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 4: AI Tools Integration
const AIToolsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const tools = [
    {
      name: 'Shotstack',
      description: 'Professional video editing API',
      logo: '/images/shotstack-logo.png',
      features: ['Timeline editing', 'Effects & transitions', 'Multi-format output']
    },
    {
      name: 'Creatomate',
      description: 'Automated video creation',
      logo: '/images/creatomate-logo.png',
      features: ['Template-based', 'Dynamic content', 'Batch processing']
    },
    {
      name: 'Plainly Videos',
      description: 'Scalable video generation',
      logo: '/images/plainly-logo.png',
      features: ['Data-driven videos', 'Custom templates', 'API integration']
    },
    {
      name: 'Tavus',
      description: 'AI avatar videos',
      logo: '/images/tavus-logo.png',
      features: ['Realistic avatars', 'Voice synthesis', 'Personalization']
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
          <h2 className="heading-lg mb-4">Integrated AI Tools</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Access the best AI video generation tools through our unified platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="card hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary font-bold text-lg">{tool.name[0]}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">{tool.name}</h3>
              <p className="text-secondary text-sm text-center mb-4">{tool.description}</p>
              <ul className="space-y-2">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    {feature}
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

// Section 5: How It Works
const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      step: '01',
      title: 'Describe Your Video',
      description: 'Simply type what you want to create. Our AI understands natural language.'
    },
    {
      step: '02',
      title: 'Choose Your Tool',
      description: 'Select from Shotstack, Creatomate, Plainly, Tavus, or other integrated tools.'
    },
    {
      step: '03',
      title: 'AI Generates Content',
      description: 'Our AI processes your request and creates professional video content.'
    },
    {
      step: '04',
      title: 'Download & Share',
      description: 'Get your finished video in multiple formats, ready to share anywhere.'
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
          <h2 className="heading-lg mb-4">How It Works</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Create professional videos in just four simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-black font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 6: Testimonials
const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      content: 'This platform revolutionized our video marketing. We create professional videos in minutes instead of hours.',
      avatar: '/images/avatar1.jpg',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Content Creator',
      company: 'Independent',
      content: 'The AI tools integration is seamless. I can access multiple platforms without switching between different apps.',
      avatar: '/images/avatar2.jpg',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Social Media Manager',
      company: 'BrandCo',
      content: 'Amazing results with minimal effort. The quality of AI-generated videos exceeds our expectations.',
      avatar: '/images/avatar3.jpg',
      rating: 5
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
          <h2 className="heading-lg mb-4">What Our Users Say</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Join thousands of creators who trust our platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 7: Pricing
const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const plans = [
    {
      name: 'Starter',
      price: 0,
      period: 'month',
      description: 'Perfect for getting started',
      features: [
        '5 videos per month',
        'Basic AI tools',
        'Standard quality',
        'Community support'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: 29,
      period: 'month',
      description: 'For professional creators',
      features: [
        'Unlimited videos',
        'All AI tools access',
        'HD & 4K quality',
        'Priority support',
        'Custom branding',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 99,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Advanced analytics',
        'White-label solution'
      ],
      popular: false
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
          <h2 className="heading-lg mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 8: CTA Section
const CTASection = () => {
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
          <h2 className="heading-lg text-black mb-6">
            Ready to Create Amazing Videos?
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Join thousands of creators who are already using AI to produce stunning videos. 
            Start your free trial today and experience the future of video creation.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/signup" className="btn bg-black text-white hover:bg-gray-800 btn-lg">
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link to="/contact" className="btn bg-transparent text-black border-black hover:bg-black/10 btn-lg">
              <Users className="w-5 h-5 mr-2" />
              Contact Sales
            </Link>
          </motion.div>

          <motion.div 
            className="mt-8 text-black/70 text-sm"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            No credit card required • Cancel anytime • 14-day free trial
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-lg" />
    </section>
  );
};

export default HomePage;