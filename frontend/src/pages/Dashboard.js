import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiHome, FiVideo, FiSettings, FiLogOut, FiMenu, FiX, FiKey,
  FiPlay, FiEdit, FiZap, FiLayers, FiUser, FiFolder
} from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

// Dashboard Components
import DashboardHome from '../components/dashboard/DashboardHome';
import Projects from '../components/dashboard/Projects';
import ShotstackTool from '../components/dashboard/tools/ShotstackTool';
import CreatomateTool from '../components/dashboard/tools/CreatomateTool';
import PlainlyTool from '../components/dashboard/tools/PlainlyTool';
import TavusTool from '../components/dashboard/tools/TavusTool';
import PromptClipTool from '../components/dashboard/tools/PromptClipTool';
import LucyEditTool from '../components/dashboard/tools/LucyEditTool';
import LTXVideoTool from '../components/dashboard/tools/LTXVideoTool';
import Wan21Tool from '../components/dashboard/tools/Wan21Tool';
import ApiKeysSettings from '../components/dashboard/ApiKeysSettings';
import Profile from '../components/dashboard/Profile';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: <FiHome />, label: 'Dashboard', exact: true },
    { path: '/dashboard/projects', icon: <FiFolder />, label: 'My Projects' },
    { 
      label: 'AI Tools',
      isGroup: true,
      items: [
        { path: '/dashboard/shotstack', icon: <FiVideo />, label: 'Shotstack' },
        { path: '/dashboard/creatomate', icon: <FiLayers />, label: 'Creatomate' },
        { path: '/dashboard/plainly', icon: <FiPlay />, label: 'Plainly Videos' },
        { path: '/dashboard/tavus', icon: <FiUser />, label: 'Tavus AI' },
      ]
    },
    { 
      label: 'Open Source Tools',
      isGroup: true,
      items: [
        { path: '/dashboard/promptclip', icon: <FiEdit />, label: 'PromptClip' },
        { path: '/dashboard/lucyedit', icon: <FiZap />, label: 'Lucy Edit' },
        { path: '/dashboard/ltxvideo', icon: <FiVideo />, label: 'LTXVideo' },
        { path: '/dashboard/wan21', icon: <FiLayers />, label: 'Wan 2.1' },
      ]
    },
    { path: '/dashboard/api-keys', icon: <FiKey />, label: 'API Keys' },
    { path: '/dashboard/profile', icon: <FiSettings />, label: 'Profile' },
  ];

  const handleLogout = () => {
    logout();
  };

  const isActiveRoute = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-dark-900 flex">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed lg:sticky top-0 left-0 h-screen w-64 glass border-r border-dark-700 z-50 overflow-y-auto"
          >
            {/* Logo */}
            <div className="p-6 border-b border-dark-700">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center">
                  <FiVideo className="text-white" />
                </div>
                <span className="text-xl font-bold glow-text">AI VideoLab</span>
              </Link>
            </div>

            {/* User Info */}
            <div className="p-6 border-b border-dark-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-sm text-gray-400">{user?.subscription || 'Free'}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="p-4 space-y-2">
              {menuItems.map((item, index) => {
                if (item.isGroup) {
                  return (
                    <div key={index} className="mt-6">
                      <p className="text-xs text-gray-500 uppercase px-3 mb-2">{item.label}</p>
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                            isActiveRoute(subItem.path)
                              ? 'bg-accent-primary text-white'
                              : 'text-gray-400 hover:bg-dark-700 hover:text-white'
                          }`}
                        >
                          <span className="text-xl">{subItem.icon}</span>
                          <span>{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  );
                }

                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActiveRoute(item.path, item.exact)
                        ? 'bg-accent-primary text-white'
                        : 'text-gray-400 hover:bg-dark-700 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-dark-700 mt-auto">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-red-500/20 hover:text-red-500 transition-all duration-200 w-full"
              >
                <FiLogOut className="text-xl" />
                <span>Logout</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-40 glass border-b border-dark-700 p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-2xl text-gray-400 hover:text-white transition-colors"
            >
              {sidebarOpen ? <FiX /> : <FiMenu />}
            </button>
            <div className="text-sm text-gray-400">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/shotstack" element={<ShotstackTool />} />
            <Route path="/creatomate" element={<CreatomateTool />} />
            <Route path="/plainly" element={<PlainlyTool />} />
            <Route path="/tavus" element={<TavusTool />} />
            <Route path="/promptclip" element={<PromptClipTool />} />
            <Route path="/lucyedit" element={<LucyEditTool />} />
            <Route path="/ltxvideo" element={<LTXVideoTool />} />
            <Route path="/wan21" element={<Wan21Tool />} />
            <Route path="/api-keys" element={<ApiKeysSettings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
