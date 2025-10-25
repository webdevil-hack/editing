import React from 'react';
import { 
  BarChart3, 
  Video, 
  Zap, 
  Scissors, 
  UserCircle, 
  Sparkles, 
  Wand2, 
  Star, 
  Cpu,
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';

const Overview = () => {
  const stats = [
    { name: 'Total Videos Created', value: '1,234', change: '+12%', changeType: 'positive' },
    { name: 'Active Projects', value: '56', change: '+8%', changeType: 'positive' },
    { name: 'API Calls Today', value: '2,847', change: '+23%', changeType: 'positive' },
    { name: 'Success Rate', value: '98.5%', change: '+2%', changeType: 'positive' },
  ];

  const apiServices = [
    { name: 'ShotStack', icon: Video, color: 'text-red-400', bgColor: 'bg-red-500/10', status: 'Active', usage: '45%' },
    { name: 'CreatoMate', icon: Zap, color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', status: 'Active', usage: '32%' },
    { name: 'Pandly Videos', icon: Scissors, color: 'text-pink-400', bgColor: 'bg-pink-500/10', status: 'Active', usage: '28%' },
    { name: 'Tavus', icon: UserCircle, color: 'text-indigo-400', bgColor: 'bg-indigo-500/10', status: 'Active', usage: '15%' },
    { name: 'PromptClip', icon: Sparkles, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', status: 'Active', usage: '67%' },
    { name: 'LuckyEdit', icon: Wand2, color: 'text-orange-400', bgColor: 'bg-orange-500/10', status: 'Active', usage: '23%' },
    { name: 'LTX Video', icon: Star, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', status: 'Active', usage: '41%' },
    { name: 'Vant 2.1', icon: Cpu, color: 'text-violet-400', bgColor: 'bg-violet-500/10', status: 'Active', usage: '19%' },
  ];

  const recentActivity = [
    { id: 1, action: 'Video generated with ShotStack', time: '2 minutes ago', status: 'completed' },
    { id: 2, action: 'CreatoMate template applied', time: '15 minutes ago', status: 'completed' },
    { id: 3, action: 'Pandly video processing', time: '1 hour ago', status: 'processing' },
    { id: 4, action: 'Tavus avatar created', time: '2 hours ago', status: 'completed' },
    { id: 5, action: 'PromptClip generation', time: '3 hours ago', status: 'completed' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-gray-400 mt-2">Welcome back! Here's what's happening with your AI video studio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">{stat.name}</p>
                <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
              </div>
              <div className={`flex items-center text-sm ${
                stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
              }`}>
                <TrendingUp className="w-4 h-4 mr-1" />
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* API Services Grid */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">AI Services Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {apiServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.name} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${service.bgColor}`}>
                    <Icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                    {service.status}
                  </span>
                </div>
                <h3 className="font-medium text-white mb-2">{service.name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Usage</span>
                    <span>{service.usage}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: service.usage }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className={`p-2 rounded-full ${
                  activity.status === 'completed' ? 'bg-green-500/20' : 'bg-yellow-500/20'
                }`}>
                  {activity.status === 'completed' ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <Clock className="w-5 h-5 text-yellow-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-left">
              <div className="flex items-center">
                <Video className="w-5 h-5 mr-3" />
                <div>
                  <p className="font-medium">Create New Video</p>
                  <p className="text-sm text-blue-200">Start with any AI service</p>
                </div>
              </div>
            </button>
            <button className="w-full p-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-left border border-gray-700">
              <div className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-3" />
                <div>
                  <p className="font-medium">View Analytics</p>
                  <p className="text-sm text-gray-400">Check your performance</p>
                </div>
              </div>
            </button>
            <button className="w-full p-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-left border border-gray-700">
              <div className="flex items-center">
                <UserCircle className="w-5 h-5 mr-3" />
                <div>
                  <p className="font-medium">Manage Profile</p>
                  <p className="text-sm text-gray-400">Update your settings</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
