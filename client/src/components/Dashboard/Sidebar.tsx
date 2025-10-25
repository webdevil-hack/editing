import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Video, 
  Settings, 
  User, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Zap,
  Palette,
  Scissors,
  Camera,
  Wand2,
  Sparkles,
  Film,
  Play,
  Star
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const apiServices = [
    { id: 'shotstack', name: 'ShotStack', icon: Video, color: 'text-blue-400' },
    { id: 'creatomate', name: 'CreatoMate', icon: Palette, color: 'text-purple-400' },
    { id: 'pandly', name: 'Pandly Videos', icon: Scissors, color: 'text-green-400' },
    { id: 'tavus', name: 'Tavus', icon: Camera, color: 'text-orange-400' },
    { id: 'promptclip', name: 'PromptClip', icon: Wand2, color: 'text-pink-400' },
    { id: 'luckyedit', name: 'LuckyEdit', icon: Sparkles, color: 'text-yellow-400' },
    { id: 'ltx', name: 'LTX Video', icon: Film, color: 'text-red-400' },
    { id: 'vant', name: 'Vant 2.1', icon: Play, color: 'text-cyan-400' }
  ];

  const mainNavItems = [
    { path: '/dashboard', name: 'Overview', icon: LayoutDashboard },
    { path: '/dashboard/profile', name: 'Profile', icon: User },
    { path: '/dashboard/settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className={`bg-gray-900 border-r border-gray-800 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-xl font-bold text-white">AI Video Studio</h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isCollapsed ? <ChevronRight className="w-5 h-5 text-gray-400" /> : <ChevronLeft className="w-5 h-5 text-gray-400" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {/* Main Navigation */}
        <div className="space-y-1">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
              </NavLink>
            );
          })}
        </div>

        {/* API Services Section */}
        <div className="pt-4">
          {!isCollapsed && (
            <div className="flex items-center space-x-2 mb-3">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">API Services</span>
            </div>
          )}
          
          <div className="space-y-1">
            {apiServices.map((service) => {
              const Icon = service.icon;
              const isActive = location.pathname === `/dashboard/${service.id}`;
              return (
                <NavLink
                  key={service.id}
                  to={`/dashboard/${service.id}`}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gray-800 text-white border-l-2 border-blue-500'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${service.color}`} />
                  {!isCollapsed && (
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium block truncate">{service.name}</span>
                      <span className="text-xs text-gray-500">API Service</span>
                    </div>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
        <button className="flex items-center space-x-3 w-full px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;