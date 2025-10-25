import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Film, 
  Sparkles, 
  Wand2, 
  Users,
  ArrowRight,
  Zap,
  Play,
  Settings
} from 'lucide-react';

const AIToolsGrid = () => {
  const tools = [
    {
      name: 'Shotstack',
      description: 'Professional video editing API with timeline-based composition',
      icon: <Film className="w-6 h-6" />,
      color: 'from-blue-500/20 to-blue-600/5',
      borderColor: 'hover:border-blue-500/50',
      status: 'active',
      link: '/tools/shotstack',
      features: ['Timeline Editing', 'Effects & Transitions', 'Multi-format Export']
    },
    {
      name: 'Creatomate',
      description: 'Automated video creation with templates and dynamic content',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-purple-500/20 to-purple-600/5',
      borderColor: 'hover:border-purple-500/50',
      status: 'active',
      link: '/tools/creatomate',
      features: ['Template System', 'Dynamic Content', 'Batch Processing']
    },
    {
      name: 'Plainly Videos',
      description: 'Scalable video generation for data-driven campaigns',
      icon: <Wand2 className="w-6 h-6" />,
      color: 'from-green-500/20 to-green-600/5',
      borderColor: 'hover:border-green-500/50',
      status: 'active',
      link: '/tools/plainly',
      features: ['Data Integration', 'Custom Templates', 'Analytics']
    },
    {
      name: 'Tavus',
      description: 'AI avatar generation for personalized video messages',
      icon: <Users className="w-6 h-6" />,
      color: 'from-orange-500/20 to-orange-600/5',
      borderColor: 'hover:border-orange-500/50',
      status: 'active',
      link: '/tools/tavus',
      features: ['AI Avatars', 'Voice Synthesis', 'Personalization']
    },
    {
      name: 'PromptClip',
      description: 'Open-source video generation with custom prompts',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-pink-500/20 to-pink-600/5',
      borderColor: 'hover:border-pink-500/50',
      status: 'beta',
      link: '/tools/promptclip',
      features: ['Open Source', 'Custom Prompts', 'Community Effects']
    },
    {
      name: 'Lucy Edit',
      description: 'Advanced editing tools with AI-assisted workflows',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-cyan-500/20 to-cyan-600/5',
      borderColor: 'hover:border-cyan-500/50',
      status: 'coming-soon',
      link: '/tools/lucy-edit',
      features: ['Advanced Editing', 'AI Assistance', 'Pro Tools']
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">Active</span>;
      case 'beta':
        return <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full">Beta</span>;
      case 'coming-soon':
        return <span className="px-2 py-1 bg-gray-400/20 text-gray-400 text-xs rounded-full">Soon</span>;
      default:
        return null;
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Link
            to={tool.link}
            className={`block card group ${tool.borderColor} transition-all duration-300 relative overflow-hidden h-full ${
              tool.status === 'coming-soon' ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            <div className="relative z-10 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300`}>
                  {tool.icon}
                </div>
                {getStatusBadge(tool.status)}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                
                <p className="text-secondary text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-secondary">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              {tool.status !== 'coming-soon' && (
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Launch Tool</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
            </div>

            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-lg transition-colors duration-300 pointer-events-none"
              whileHover={{ scale: 1.02 }}
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default AIToolsGrid;