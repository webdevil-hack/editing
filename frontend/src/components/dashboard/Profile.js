import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiSave } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

const Profile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put('http://localhost:5000/api/user/profile', formData);
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update profile');
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
        <h1 className="text-4xl font-bold glow-text mb-2">Profile Settings</h1>
        <p className="text-gray-400">Manage your account information</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

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
                    <FiSave /> Save Changes
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="glass p-6 rounded-xl mt-6">
            <h2 className="text-2xl font-bold mb-4">Account Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-700 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Member Since</p>
                <p className="text-xl font-semibold mt-1">
                  {new Date(user?.createdAt || Date.now()).toLocaleDateString()}
                </p>
              </div>
              <div className="bg-dark-700 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Subscription</p>
                <p className="text-xl font-semibold mt-1 capitalize">{user?.subscription || 'Free'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Account Info</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400">Account Type</p>
                <p className="font-semibold capitalize">{user?.subscription || 'Free'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">{user?.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Joined</p>
                <p className="font-semibold">
                  {new Date(user?.createdAt || Date.now()).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Upgrade Plan</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Unlock more features with a Pro or Enterprise plan
            </p>
            <a
              href="/"
              className="block w-full px-4 py-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg text-center font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transition-all duration-300"
            >
              View Plans
            </a>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-red-500">Danger Zone</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Permanently delete your account and all data
            </p>
            <button className="w-full px-4 py-2 bg-red-500/20 text-red-500 rounded-lg font-semibold hover:bg-red-500/30 transition-all duration-300">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
