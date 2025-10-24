import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiUpload } from 'react-icons/fi';
import { toast } from 'react-toastify';
import axios from 'axios';

const CreatomateTool = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    prompt: '',
    templateId: '',
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
        tool: 'creatomate',
        inputData: {
          templateId: formData.templateId,
          modifications: {}
        }
      });
      toast.success('Video project created! Processing in background...');
      setFormData({ title: '', description: '', prompt: '', templateId: '' });
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
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
            <FiLayers className="text-2xl" />
          </div>
          <div>
            <h1 className="text-4xl font-bold glow-text">Creatomate</h1>
            <p className="text-gray-400">Template-based video generation</p>
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
                  placeholder="My Creatomate Video"
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
                <label className="block text-gray-300 mb-2">Template ID (Optional)</label>
                <input
                  type="text"
                  name="templateId"
                  value={formData.templateId}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="Enter template ID if you have one"
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
                  placeholder="Describe your video content, style, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
            <h3 className="text-xl font-bold mb-4">About Creatomate</h3>
            <p className="text-gray-400 mb-4">
              Creatomate provides powerful template-based video creation with extensive customization options.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Template library</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Dynamic modifications</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Fast rendering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">High quality output</span>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Tips</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Use templates for faster creation</li>
              <li>• Describe visual style clearly</li>
              <li>• Include text overlay requirements</li>
              <li>• Specify duration preferences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatomateTool;
