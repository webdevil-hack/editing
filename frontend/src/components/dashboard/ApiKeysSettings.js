import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiKey, FiSave, FiEye, FiEyeOff } from 'react-icons/fi';
import { toast } from 'react-toastify';
import axios from 'axios';

const ApiKeysSettings = () => {
  const [apiKeys, setApiKeys] = useState({
    shotstack: '',
    creatomate: '',
    plainly: '',
    tavus: ''
  });
  const [showKeys, setShowKeys] = useState({
    shotstack: false,
    creatomate: false,
    plainly: false,
    tavus: false
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApiKeys();
  }, []);

  const fetchApiKeys = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/keys');
      setApiKeys(response.data.apiKeys);
    } catch (error) {
      console.error('Error fetching API keys:', error);
    }
  };

  const handleChange = (e) => {
    setApiKeys({ ...apiKeys, [e.target.name]: e.target.value });
  };

  const toggleShowKey = (key) => {
    setShowKeys({ ...showKeys, [key]: !showKeys[key] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put('http://localhost:5000/api/keys', apiKeys);
      toast.success('API keys updated successfully!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update API keys');
    } finally {
      setLoading(false);
    }
  };

  const apiKeyFields = [
    { 
      key: 'shotstack', 
      label: 'Shotstack API Key', 
      description: 'Get your API key from shotstack.io',
      link: 'https://shotstack.io'
    },
    { 
      key: 'creatomate', 
      label: 'Creatomate API Key', 
      description: 'Get your API key from creatomate.com',
      link: 'https://creatomate.com'
    },
    { 
      key: 'plainly', 
      label: 'Plainly Videos API Key', 
      description: 'Get your API key from plainlyvideos.com',
      link: 'https://plainlyvideos.com'
    },
    { 
      key: 'tavus', 
      label: 'Tavus API Key', 
      description: 'Get your API key from tavus.io',
      link: 'https://tavus.io'
    },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-4xl font-bold glow-text mb-2">API Keys</h1>
        <p className="text-gray-400">Configure your API keys for different video editing services</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {apiKeyFields.map((field, index) => (
              <motion.div
                key={field.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <FiKey className="text-accent-primary" />
                      {field.label}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{field.description}</p>
                    <a 
                      href={field.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-accent-primary hover:text-accent-secondary mt-1 inline-block"
                    >
                      Get API Key →
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type={showKeys[field.key] ? 'text' : 'password'}
                    name={field.key}
                    value={apiKeys[field.key]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-12 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                  <button
                    type="button"
                    onClick={() => toggleShowKey(field.key)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showKeys[field.key] ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </motion.div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Saving...
                </>
              ) : (
                <>
                  <FiSave /> Save API Keys
                </>
              )}
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">About API Keys</h3>
            <p className="text-gray-400 mb-4">
              API keys are required to use the respective video editing services. Keep your keys secure and never share them publicly.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Keys are encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Stored securely</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
                <span className="text-gray-300">Never shared</span>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Free Tier Available</h3>
            <p className="text-sm text-gray-400">
              Most of these services offer free tiers or trial periods. Check their websites for current offerings.
            </p>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
            <p className="text-sm text-gray-400 mb-3">
              Having trouble with API keys? Check our documentation or contact support.
            </p>
            <a href="/contact" className="text-accent-primary hover:text-accent-secondary text-sm">
              Contact Support →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeysSettings;
