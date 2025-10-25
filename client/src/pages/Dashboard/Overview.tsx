import React from 'react';
import { 
  Video, 
  Palette, 
  Scissors, 
  Camera, 
  Wand2, 
  Sparkles, 
  Film, 
  Play,
  TrendingUp,
  Clock,
  Users,
  Zap
} from 'lucide-react';

const Overview = () => {
  const apiServices = [
    { 
      id: 'shotstack', 
      name: 'ShotStack', 
      icon: Video, 
      color: 'bg-blue-500', 
      description: 'Professional video editing and rendering',
      status: 'Active',
      usage: '85%',
      lastUsed: '2 hours ago'
    },
    { 
      id: 'creatomate', 
      name: 'CreatoMate', 
      icon: Palette, 
      color: 'bg-purple-500', 
      description: 'AI-powered video creation and templates',
      status: 'Active',
      usage: '72%',
      lastUsed: '1 day ago'
    },
    { 
      id: 'pandly', 
      name: 'Pandly Videos', 
      icon: Scissors, 
      color: 'bg-green-500', 
      description: 'Automated video editing and trimming',
      status: 'Active',
      usage: '45%',
      lastUsed: '3 hours ago'
    },
    { 
      id: 'tavus', 
      name: 'Tavus', 
      icon: Camera, 
      color: 'bg-orange-500', 
      description: 'AI avatar and video generation',
      status: 'Active',
      usage: '60%',
      lastUsed: '5 hours ago'
    },
    { 
      id: 'promptclip', 
      name: 'PromptClip', 
      icon: Wand2, 
      color: 'bg-pink-500', 
      description: 'Text-to-video generation',
      status: 'Active',
      usage: '38%',
      lastUsed: '1 hour ago'
    },
    { 
      id: 'luckyedit', 
      name: 'LuckyEdit', 
      icon: Sparkles, 
      color: 'bg-yellow-500', 
      description: 'Smart video editing and effects',
      status: 'Active',
      usage: '55%',
      lastUsed: '4 hours ago'
    },
    { 
      id: 'ltx', 
      name: 'LTX Video', 
      icon: Film, 
      color: 'bg-red-500', 
      description: 'Advanced video processing and effects',
      status: 'Active',
      usage: '67%',
      lastUsed: '6 hours ago'
    },
    { 
      id: 'vant', 
      name: 'Vant 2.1', 
      icon: Play, 
      color: 'bg-cyan-500', 
      description: 'Next-gen video AI and automation',
      status: 'Active',
      usage: '90%',
      lastUsed: '30 minutes ago'
    }
  ];

  const stats = [
    { label: 'Total Videos Created', value: '1,247', icon: Video, change: '+12%' },
    { label: 'API Calls Today', value: '8,432', icon: Zap, change: '+8%' },
    { label: 'Active Projects', value: '23', icon: TrendingUp, change: '+5%' },
    { label: 'Processing Time', value: '2.3h', icon: Clock, change: '-15%' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
          <p className="text-gray-400 mt-1">Welcome back! Here's what's happening with your video editing platform.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-400">Last updated</p>
            <p className="text-white font-medium">Just now</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-green-400 mt-1">{stat.change}</p>
                </div>
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* API Services Grid */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">API Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {apiServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${service.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-2 py-1 text-xs font-medium text-green-400 bg-green-400/10 rounded-full">
                    {service.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Usage</span>
                    <span className="text-white font-medium">{service.usage}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: service.usage }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500">Last used: {service.lastUsed}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'Video created with ShotStack', time: '2 minutes ago', type: 'success' },
            { action: 'PromptClip generation completed', time: '15 minutes ago', type: 'success' },
            { action: 'CreatoMate template applied', time: '1 hour ago', type: 'info' },
            { action: 'Tavus avatar generated', time: '2 hours ago', type: 'success' },
            { action: 'LTX Video processing started', time: '3 hours ago', type: 'processing' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'success' ? 'bg-green-400' :
                activity.type === 'info' ? 'bg-blue-400' :
                'bg-yellow-400'
              }`}></div>
              <div className="flex-1">
                <p className="text-white text-sm">{activity.action}</p>
                <p className="text-gray-400 text-xs">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;