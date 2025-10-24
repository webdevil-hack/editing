import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiUpload } from 'react-icons/fi';
import { toast } from 'react-toastify';
import axios from 'axios';

const Wan21Tool = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    prompt: '',
    enhancement: 'balanced',
  });
  const [loading, setLoading] = useState(false);

  const enhancementModes = ['subtle', 'balanced', 'dramatic', 'extreme'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('http://localhost:5000/api/video/create', {
        ...formData,
        tool: 'wan21',
        inputData: {
          enhancement: formData.enhancement
        }
      });
      toast.success('Video project created! Processing in background...');
      setFormData({ title: '', description: '', prompt: '', enhancement: 'balanced' });
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
          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
            <FiLayers className="text-2xl" />
          </div>
          <div>
            <h1 className="text-4xl font-bold glow-text">Wan 2.1</h1>
            <p className="text-gray-400">AI video enhancement by Alibaba</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Enhance Video with AI</h2>
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
                  placeholder="My Enhanced Video"
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
                <label className="block text-gray-300 mb-2">Enhancement Level</label>
                <select
                  name="enhancement"
                  value={formData.enhancement}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                >
                  {enhancementModes.map((mode) => (
                    <option key={mode} value={mode}>
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Video Prompt & Enhancement Goals</label>
                <textarea
                  name="prompt"
                  value={formData.prompt}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors resize-none"
                  placeholder="Describe what you want to create and how you want it enhanced..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="spinner"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <FiUpload /> Enhance Video
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">About Wan 2.1</h3>
            <p className="text-gray-400 mb-4">
              Wan 2.1 by Alibaba provides cutting-edge AI-powered video enhancement and generation capabilities.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">AI enhancement</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Quality upscaling</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Noise reduction</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Smart restoration</span>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Enhancement Modes</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><strong className="text-white">Subtle:</strong> Light touch-ups</li>
              <li><strong className="text-white">Balanced:</strong> Optimal enhancement</li>
              <li><strong className="text-white">Dramatic:</strong> Bold improvements</li>
              <li><strong className="text-white">Extreme:</strong> Maximum enhancement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wan21Tool;
