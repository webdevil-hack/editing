import React, { useState, useEffect } from 'react';
import { 
  Play, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
  Palette, 
  Scissors, 
  Camera, 
  Wand2, 
  Sparkles, 
  Film, 
  Play as PlayIcon,
  Users,
  Clock,
  Shield,
  Award,
  MessageCircle,
  Twitter,
  Github,
  Linkedin
} from 'lucide-react';

const ModernHome = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      content: "This platform revolutionized my video creation process. The AI integration is incredible!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Marketing Director",
      content: "The quality of videos generated is outstanding. Our engagement rates increased by 300%.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Social Media Manager",
      content: "Easy to use, powerful features, and the support team is amazing. Highly recommended!",
      rating: 5
    }
  ];

  const apis = [
    { name: 'ShotStack', icon: Play, description: 'Professional video editing and rendering' },
    { name: 'CreatoMate', icon: Palette, description: 'AI-powered video creation and templates' },
    { name: 'Pandly Videos', icon: Scissors, description: 'Automated video editing and trimming' },
    { name: 'Tavus', icon: Camera, description: 'AI avatar and video generation' },
    { name: 'PromptClip', icon: Wand2, description: 'Text-to-video generation' },
    { name: 'LuckyEdit', icon: Sparkles, description: 'Smart video editing and effects' },
    { name: 'LTX Video', icon: Film, description: 'Advanced video processing and effects' },
    { name: 'Vant 2.1', icon: PlayIcon, description: 'Next-gen video AI and automation' }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate professional videos in seconds with our advanced AI technology"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data is protected with bank-level security and encryption"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized by industry leaders for innovation and excellence"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support to help you succeed with your projects"
    }
  ];

  const stats = [
    { number: "1M+", label: "Videos Created" },
    { number: "50K+", label: "Happy Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "8", label: "APIs Integrated" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Video Studio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create stunning videos with the power of AI. Integrate 8 powerful APIs for professional video editing, 
            generation, and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Start Creating</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide a comprehensive AI-powered video editing platform that integrates multiple cutting-edge APIs 
              to deliver professional-quality video content at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200">
                  <div className="p-3 bg-blue-600 rounded-lg w-fit mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APIs Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Integrated APIs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've integrated 8 powerful video editing and generation APIs to give you the most comprehensive 
              video creation platform available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apis.map((api, index) => {
              const Icon = api.icon;
              return (
                <div key={index} className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200 group cursor-pointer">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{api.name}</h3>
                  <p className="text-gray-400 text-sm">{api.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with user-friendly design to deliver the best video editing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Advanced AI Integration",
              "Professional Quality Output",
              "Easy-to-Use Interface",
              "Scalable Solutions",
              "24/7 Customer Support",
              "Regular Updates & Features"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Users Say
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-300 mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="text-white font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-400">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How many APIs are integrated?",
                answer: "We have integrated 8 powerful video editing and generation APIs including ShotStack, CreatoMate, Pandly Videos, Tavus, PromptClip, LuckyEdit, LTX Video, and Vant 2.1."
              },
              {
                question: "What video formats are supported?",
                answer: "We support all major video formats including MP4, MOV, AVI, and more. You can export in various resolutions from 720p to 4K."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started."
              },
              {
                question: "How accurate is the AI video generation?",
                answer: "Our AI technology achieves 95%+ accuracy in video generation and editing tasks, with continuous improvements through machine learning."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Amazing Videos?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are already using our platform to create professional videos with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">AI Video Studio</h3>
              <p className="text-gray-400 mb-4">
                The ultimate platform for AI-powered video creation and editing.
              </p>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 AI Video Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernHome;