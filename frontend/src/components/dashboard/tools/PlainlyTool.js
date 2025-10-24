import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiUpload } from 'react-icons/fi';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlainlyTool = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    prompt: '',
    template: '',
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
        tool: 'plainly',
        inputData: {
          template: formData.template,
          parameters: {}
        }
      });
      toast.success('Video project created! Processing in background...');
      setFormData({ title: '', description: '', prompt: '', template: '' });
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
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
            <FiPlay className="text-2xl" />
          </div>
          <div>
            <h1 className="text-4xl font-bold glow-text">Plainly Videos</h1>
            <p className="text-gray-400">Automated video production</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Create Video</h2>
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
                  placeholder="My Plainly Video"
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
                <label className="block text-gray-300 mb-2">Template Name (Optional)</label>
                <input
                  type="text"
                  name="template"
                  value={formData.template}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="Enter template name if you have one"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Video Prompt</label>
                <textarea
                  name="prompt"
                  value={formData.prompt}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors resize-none"
                  placeholder="Describe the automated video you want to create..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="spinner"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <FiUpload /> Create Video
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">About Plainly Videos</h3>
            <p className="text-gray-400 mb-4">
              Plainly Videos specializes in automated video production workflows, perfect for scalable content creation.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Automated workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Batch processing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">API integration</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Scalable production</span>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Tips</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Perfect for repetitive content</li>
              <li>• Use templates for consistency</li>
              <li>• Great for social media batches</li>
              <li>• Supports data-driven videos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlainlyTool;
