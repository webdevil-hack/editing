import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  User, 
  Settings, 
  LogOut,
  Video,
  Zap,
  Scissors,
  UserCircle,
  Sparkles,
  Wand2,
  Star,
  Cpu,
  Bot,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const mainNavItems = [
    { name: 'Overview', path: '/dashboard', icon: BarChart3, color: 'text-blue-400' },
    { name: 'Profile', path: '/dashboard/profile', icon: User, color: 'text-green-400' },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings, color: 'text-purple-400' },
  ];

  const apiItems = [
    { name: 'ShotStack', path: '/dashboard/shotstack', icon: Video, color: 'text-red-400' },
    { name: 'CreatoMate', path: '/dashboard/creatomate', icon: Zap, color: 'text-yellow-400' },
    { name: 'Pandly Videos', path: '/dashboard/pandly', icon: Scissors, color: 'text-pink-400' },
    { name: 'Tavus', path: '/dashboard/tavus', icon: UserCircle, color: 'text-indigo-400' },
    { name: 'PromptClip', path: '/dashboard/promptclip', icon: Sparkles, color: 'text-cyan-400' },
    { name: 'LuckyEdit', path: '/dashboard/luckyedit', icon: Wand2, color: 'text-orange-400' },
    { name: 'LTX Video', path: '/dashboard/ltxvideo', icon: Star, color: 'text-emerald-400' },
    { name: 'Vant 2.1', path: '/dashboard/vant', icon: Cpu, color: 'text-violet-400' },
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className={`bg-gray-900 border-r border-gray-700 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-xl font-bold text-white">AI Video Studio</h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="p-4">
        <div className="space-y-2">
          <h3 className={`text-xs font-semibold text-gray-400 uppercase tracking-wider ${
            isCollapsed ? 'hidden' : 'block'
          }`}>
            Main
          </h3>
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-lg transition-all duration-200 group ${
                  isActive(item.path)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${item.color} ${isActive(item.path) ? 'text-white' : ''}`} />
                {!isCollapsed && (
                  <span className="ml-3 font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* API Services */}
      <div className="p-4 border-t border-gray-700">
        <div className="space-y-2">
          <h3 className={`text-xs font-semibold text-gray-400 uppercase tracking-wider ${
            isCollapsed ? 'hidden' : 'block'
          }`}>
            AI Services
          </h3>
          {apiItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-lg transition-all duration-200 group ${
                  isActive(item.path)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${item.color} ${isActive(item.path) ? 'text-white' : ''}`} />
                {!isCollapsed && (
                  <span className="ml-3 font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Logout */}
      <div className="absolute bottom-4 left-4 right-4">
        <button className="flex items-center w-full px-3 py-2 text-gray-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200 group">
          <LogOut className="w-5 h-5 text-red-400 group-hover:text-white" />
          {!isCollapsed && (
            <span className="ml-3 font-medium">Logout</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
