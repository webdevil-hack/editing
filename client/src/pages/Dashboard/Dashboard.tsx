import React from 'react';
import { Link } from 'react-router-dom';
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
  User,
  Settings,
  LogOut
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700">
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">AI Video Studio</h2>
        </div>

        {/* Main Navigation */}
        <div className="p-4">
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Main
            </h3>
            <Link
              to="/dashboard"
              className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg"
            >
              <BarChart3 className="w-5 h-5 text-white" />
              <span className="ml-3 font-medium">Overview</span>
            </Link>
            <Link
              to="/dashboard/profile"
              className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg"
            >
              <User className="w-5 h-5 text-green-400" />
              <span className="ml-3 font-medium">Profile</span>
            </Link>
            <Link
              to="/dashboard/settings"
              className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg"
            >
              <Settings className="w-5 h-5 text-purple-400" />
              <span className="ml-3 font-medium">Settings</span>
            </Link>
          </div>
        </div>

        {/* API Services */}
        <div className="p-4 border-t border-gray-700">
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              AI Services
            </h3>
            <Link
              to="/dashboard/shotstack"
              className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg"
            >
              <Video className="w-5 h-5 text-red-400" />
              <span className="ml-3 font-medium">ShotStack</span>
            </Link>
            <Link
              to="/dashboard/creatomate"
              className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg"
            >
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="ml-3 font-medium">CreatoMate</span>
            </Link>
            <Link
              to="/dashboard/pandly"
              className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg"
            >
              <Scissors className="w-5 h-5 text-pink-400" />
              <span className="ml-3 font-medium">Pandly Videos</span>
            </Link>
            <Link
              to="/dashboard/tavus"
              className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg"
            >
              <UserCircle className="w-5 h-5 text-indigo-400" />
              <span className="ml-3 font-medium">Tavus</span>
            </Link>
            <Link
              to="/dashboard/promptclip"
              className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="ml-3 font-medium">PromptClip</span>
            </Link>
            <Link
              to="/dashboard/luckyedit"
              className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg"
            >
              <Wand2 className="w-5 h-5 text-orange-400" />
              <span className="ml-3 font-medium">LuckyEdit</span>
            </Link>
            <Link
              to="/dashboard/ltxvideo"
              className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg"
            >
              <Star className="w-5 h-5 text-emerald-400" />
              <span className="ml-3 font-medium">LTX Video</span>
            </Link>
            <Link
              to="/dashboard/vant"
              className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg"
            >
              <Cpu className="w-5 h-5 text-violet-400" />
              <span className="ml-3 font-medium">Vant 2.1</span>
            </Link>
          </div>
        </div>

        {/* Logout */}
        <div className="absolute bottom-4 left-4 right-4">
          <button className="flex items-center w-full px-3 py-2 text-gray-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200">
            <LogOut className="w-5 h-5 text-red-400" />
            <span className="ml-3 font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
              <p className="text-gray-400 mt-2">Welcome back! Here's what's happening with your AI video studio.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Total Videos Created</p>
                    <p className="text-2xl font-bold text-white mt-2">1,234</p>
                  </div>
                  <div className="flex items-center text-sm text-green-400">
                    <span>+12%</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Active Projects</p>
                    <p className="text-2xl font-bold text-white mt-2">56</p>
                  </div>
                  <div className="flex items-center text-sm text-green-400">
                    <span>+8%</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">API Calls Today</p>
                    <p className="text-2xl font-bold text-white mt-2">2,847</p>
                  </div>
                  <div className="flex items-center text-sm text-green-400">
                    <span>+23%</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Success Rate</p>
                    <p className="text-2xl font-bold text-white mt-2">98.5%</p>
                  </div>
                  <div className="flex items-center text-sm text-green-400">
                    <span>+2%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* API Services Grid */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">AI Services Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-red-500/10">
                      <Video className="w-6 h-6 text-red-400" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                      Active
                    </span>
                  </div>
                  <h3 className="font-medium text-white mb-2">ShotStack</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Usage</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-yellow-500/10">
                      <Zap className="w-6 h-6 text-yellow-400" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                      Active
                    </span>
                  </div>
                  <h3 className="font-medium text-white mb-2">CreatoMate</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Usage</span>
                      <span>32%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-1/3"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-pink-500/10">
                      <Scissors className="w-6 h-6 text-pink-400" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                      Active
                    </span>
                  </div>
                  <h3 className="font-medium text-white mb-2">Pandly Videos</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Usage</span>
                      <span>28%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10">
                      <UserCircle className="w-6 h-6 text-indigo-400" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                      Active
                    </span>
                  </div>
                  <h3 className="font-medium text-white mb-2">Tavus</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Usage</span>
                      <span>15%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-1/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
