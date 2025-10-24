import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Wand2, 
  Upload, 
  Template,
  Sparkles,
  Film,
  Mic,
  Image,
  ArrowRight
} from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      title: 'Create from Text',
      description: 'Generate video from text prompt',
      icon: <Wand2 className="w-6 h-6" />,
      color: 'from-blue-500/20 to-blue-600/5',
      borderColor: 'border-blue-500/30',
      link: '/editor?mode=text-to-video',
      popular: true
    },
    {
      title: 'Upload Media',
      description: 'Start with your own content',
      icon: <Upload className="w-6 h-6" />,
      color: 'from-green-500/20 to-green-600/5',
      borderColor: 'border-green-500/30',
      link: '/editor?mode=upload'
    },
    {
      title: 'Use Template',
      description: 'Pick from ready-made templates',
      icon: <Template className="w-6 h-6" />,
      color: 'from-purple-500/20 to-purple-600/5',
      borderColor: 'border-purple-500/30',
      link: '/templates'
    },
    {
      title: 'AI Avatar Video',
      description: 'Create videos with AI avatars',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-pink-500/20 to-pink-600/5',
      borderColor: 'border-pink-500/30',
      link: '/editor?mode=avatar'
    }
  ];

  const tools = [
    { name: 'Shotstack', icon: <Film className="w-5 h-5" />, link: '/tools/shotstack' },
    { name: 'Creatomate', icon: <Template className="w-5 h-5" />, link: '/tools/creatomate' },
    { name: 'Tavus', icon: <Mic className="w-5 h-5" />, link: '/tools/tavus' },
    { name: 'Plainly', icon: <Image className="w-5 h-5" />, link: '/tools/plainly' }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <Link to="/editor" className="text-primary hover:text-primary/80 text-sm flex items-center">
          View All Tools <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {actions.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link
              to={action.link}
              className="block group"
            >
              <motion.div
                className={`card hover:${action.borderColor} transition-all duration-300 relative overflow-hidden h-full`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Popular Badge */}
                {action.popular && (
                  <div className="absolute top-3 right-3 bg-primary text-black text-xs font-semibold px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10 p-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {action.icon}
                  </div>

                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {action.title}
                  </h3>
                  
                  <p className="text-secondary text-sm leading-relaxed">
                    {action.description}
                  </p>

                  <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Popular Tools */}
      <motion.div
        className="card bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-gray-700/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold mb-1">Popular AI Tools</h3>
            <p className="text-secondary text-sm">Quick access to your favorite tools</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  to={tool.link}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700 hover:border-primary/50 transition-all duration-200 group"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <span className="text-sm font-medium">{tool.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuickActions;