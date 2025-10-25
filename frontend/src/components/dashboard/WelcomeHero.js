import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Sparkles, 
  TrendingUp, 
  Clock,
  ArrowRight,
  Zap
} from 'lucide-react';

const WelcomeHero = ({ user }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 border-b border-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Welcome Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <motion.h1 
                className="text-3xl lg:text-4xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {getGreeting()}, {user?.firstName}! 👋
              </motion.h1>
              
              <motion.p 
                className="text-lg text-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ready to create some amazing videos with AI?
              </motion.p>
            </div>

            {/* Quick Stats */}
            <motion.div 
              className="flex flex-wrap gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/5 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">24 Videos</div>
                  <div className="text-xs text-secondary">This month</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-green-600/5 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">2.5 hours</div>
                  <div className="text-xs text-secondary">Time saved</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-purple-600/5 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Pro Plan</div>
                  <div className="text-xs text-secondary">Active</div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to="/editor" className="btn btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Create New Video
              </Link>
              
              <Link to="/projects" className="btn btn-outline">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div 
                className="card bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700/50 p-6 relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold">AI Video Studio</h3>
                        <p className="text-xs text-secondary">Ready to create</p>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-secondary">Processing Power</span>
                      <span className="text-green-400">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-green-400 to-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, delay: 1 }}
                      ></motion.div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="text-center p-2 bg-gray-800/50 rounded">
                      <div className="text-primary font-semibold">8</div>
                      <div className="text-secondary">Tools</div>
                    </div>
                    <div className="text-center p-2 bg-gray-800/50 rounded">
                      <div className="text-primary font-semibold">∞</div>
                      <div className="text-secondary">Projects</div>
                    </div>
                    <div className="text-center p-2 bg-gray-800/50 rounded">
                      <div className="text-primary font-semibold">4K</div>
                      <div className="text-secondary">Quality</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl backdrop-blur-sm border border-primary/20 flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-6 h-6 text-primary" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg backdrop-blur-sm border border-blue-400/20 flex items-center justify-center"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeHero;