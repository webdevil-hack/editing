import React from 'react';

const TestDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700">
        <div className="p-4">
          <h2 className="text-xl font-bold text-white">AI Video Studio</h2>
        </div>
        <div className="p-4 space-y-2">
          <a href="/dashboard" className="block px-3 py-2 bg-blue-600 text-white rounded-lg">
            Overview
          </a>
          <a href="/dashboard/shotstack" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg">
            ShotStack
          </a>
          <a href="/dashboard/creatomate" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg">
            CreatoMate
          </a>
          <a href="/dashboard/pandly" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg">
            Pandly Videos
          </a>
          <a href="/dashboard/tavus" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg">
            Tavus
          </a>
          <a href="/dashboard/promptclip" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg">
            PromptClip
          </a>
          <a href="/dashboard/luckyedit" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg">
            LuckyEdit
          </a>
          <a href="/dashboard/ltxvideo" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg">
            LTX Video
          </a>
          <a href="/dashboard/vant" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg">
            Vant 2.1
          </a>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-white mb-6">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white">Total Videos</h3>
            <p className="text-3xl font-bold text-blue-400">1,234</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white">Active Projects</h3>
            <p className="text-3xl font-bold text-green-400">56</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white">API Calls</h3>
            <p className="text-3xl font-bold text-yellow-400">2,847</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white">Success Rate</h3>
            <p className="text-3xl font-bold text-purple-400">98.5%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDashboard;
