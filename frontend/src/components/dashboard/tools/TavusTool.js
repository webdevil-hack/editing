import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiUpload } from 'react-icons/fi';
import { toast } from 'react-toastify';
import axios from 'axios';

const TavusTool = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    prompt: '',
    replicaId: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('http://localhost:5000/api/video/create', {
        ...formData,
        tool: 'tavus',
        inputData: {
          replicaId: formData.replicaId,
          videoName: formData.title
        }
      });
      toast.success('Video project created! Processing in background...');
      setFormData({ title: '', description: '', prompt: '', replicaId: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create project');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
            <FiUser className="text-2xl" />
          </div>
          <div>
            <h1 className="text-4xl font-bold glow-text">Tavus AI</h1>
            <p className="text-gray-400">AI-powered avatar videos</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Create Avatar Video</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Project Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="My Avatar Video"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="Brief description"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Replica ID (Optional)</label>
                <input
                  type="text"
                  name="replicaId"
                  value={formData.replicaId}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="Enter replica ID if you have one"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Script / Prompt</label>
                <textarea
                  name="prompt"
                  value={formData.prompt}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors resize-none"
                  placeholder="Write the script for your avatar to speak..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="spinner"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <FiUpload /> Create Avatar Video
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">About Tavus AI</h3>
            <p className="text-gray-400 mb-4">
              Tavus creates personalized AI avatar videos that look and sound like real people.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">AI avatars</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Realistic speech</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Personalization</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Quick generation</span>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Tips</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Write natural, conversational scripts</li>
              <li>• Keep sentences clear and concise</li>
              <li>• Perfect for personalized messages</li>
              <li>• Great for sales and marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TavusTool;
