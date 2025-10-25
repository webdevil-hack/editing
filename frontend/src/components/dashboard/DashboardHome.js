import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiVideo, FiClock, FiTrendingUp, FiActivity } from 'react-icons/fi';
import axios from 'axios';

const DashboardHome = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    completedProjects: 0,
    processingProjects: 0,
  });
  const [recentProjects, setRecentProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/video/projects');
      const projects = response.data.projects || [];
      
      setStats({
        totalProjects: projects.length,
        completedProjects: projects.filter(p => p.status === 'completed').length,
        processingProjects: projects.filter(p => p.status === 'processing').length,
      });
      
      setRecentProjects(projects.slice(0, 5));
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const quickActions = [
    { name: 'Shotstack', path: '/dashboard/shotstack', icon: <FiVideo />, color: 'from-blue-500 to-blue-600' },
    { name: 'Creatomate', path: '/dashboard/creatomate', icon: <FiVideo />, color: 'from-purple-500 to-purple-600' },
    { name: 'Plainly Videos', path: '/dashboard/plainly', icon: <FiVideo />, color: 'from-green-500 to-green-600' },
    { name: 'Tavus AI', path: '/dashboard/tavus', icon: <FiVideo />, color: 'from-pink-500 to-pink-600' },
  ];

  const statCards = [
    { label: 'Total Projects', value: stats.totalProjects, icon: <FiVideo />, color: 'text-blue-500' },
    { label: 'Completed', value: stats.completedProjects, icon: <FiActivity />, color: 'text-green-500' },
    { label: 'Processing', value: stats.processingProjects, icon: <FiClock />, color: 'text-yellow-500' },
    { label: 'This Month', value: stats.totalProjects, icon: <FiTrendingUp />, color: 'text-purple-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold glow-text mb-2">Welcome Back!</h1>
        <p className="text-gray-400">Here's what's happening with your projects today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-xl hover:glow-effect transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">{stat.label}</span>
              <span className={`text-3xl ${stat.color}`}>{stat.icon}</span>
            </div>
            <div className="text-3xl font-bold">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.path}
              className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                {action.icon}
              </div>
              <h3 className="font-semibold">{action.name}</h3>
              <p className="text-sm text-gray-400 mt-1">Create new video</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Projects */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Recent Projects</h2>
          <Link to="/dashboard/projects" className="text-accent-primary hover:text-accent-secondary">
            View All →
          </Link>
        </div>
        <div className="glass rounded-xl overflow-hidden">
          {recentProjects.length > 0 ? (
            <div className="divide-y divide-dark-700">
              {recentProjects.map((project, index) => (
                <div key={index} className="p-4 hover:bg-dark-700 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{project.title}</h3>
                      <p className="text-sm text-gray-400">{project.tool}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      project.status === 'completed' ? 'bg-green-500/20 text-green-500' :
                      project.status === 'processing' ? 'bg-yellow-500/20 text-yellow-500' :
                      project.status === 'failed' ? 'bg-red-500/20 text-red-500' :
                      'bg-gray-500/20 text-gray-500'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-400">
              <p>No projects yet. Create your first video!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
