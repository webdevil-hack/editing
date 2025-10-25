import React, { useState } from 'react';
import { User, Settings, Key, CreditCard, Bell, Shield, Download, Upload, Trash2, Edit } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [apiKeys, setApiKeys] = useState({
    shotstack: 'sk_live_****1234',
    creatomate: 'cm_****5678',
    pandly: 'pd_****9012',
    tavus: 'tv_****3456',
    promptclip: 'pc_****7890',
    luckyedit: 'le_****2345',
    ltx: 'ltx_****6789',
    vant: 'vt_****0123'
  });

  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    plan: 'Pro',
    credits: 8500,
    totalVideos: 1247,
    joinDate: '2024-01-15'
  });

  const tabs = [
    { id: 'general', name: 'General', icon: User },
    { id: 'api-keys', name: 'API Keys', icon: Key },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  const handleApiKeyUpdate = (apiName, newKey) => {
    setApiKeys(prev => ({
      ...prev,
      [apiName]: newKey
    }));
  };

  const handleApiKeyDelete = (apiName) => {
    setApiKeys(prev => ({
      ...prev,
      [apiName]: ''
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Profile Settings</h1>
          <p className="text-gray-400 mt-1">Manage your account settings and preferences</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-400">Plan</p>
            <p className="text-white font-medium">{userProfile.plan}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Credits</p>
            <p className="text-white font-medium">{userProfile.credits.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">General Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={userProfile.name}
                      onChange={(e) => setUserProfile(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={userProfile.email}
                      onChange={(e) => setUserProfile(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Account Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <p className="text-2xl font-bold text-white">{userProfile.totalVideos.toLocaleString()}</p>
                    <p className="text-sm text-gray-400">Videos Created</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <p className="text-2xl font-bold text-white">{userProfile.credits.toLocaleString()}</p>
                    <p className="text-sm text-gray-400">Credits Remaining</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <p className="text-2xl font-bold text-white">{userProfile.plan}</p>
                    <p className="text-sm text-gray-400">Current Plan</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'api-keys' && (
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">API Keys Management</h3>
                <p className="text-gray-400 mb-6">Manage your API keys for different video editing services.</p>
                
                <div className="space-y-4">
                  {Object.entries(apiKeys).map(([apiName, apiKey]) => (
                    <div key={apiName} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-white font-medium capitalize">{apiName.replace(/([A-Z])/g, ' $1').trim()}</h4>
                        <p className="text-sm text-gray-400">{apiKey || 'No API key set'}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            const newKey = prompt('Enter new API key:');
                            if (newKey) handleApiKeyUpdate(apiName, newKey);
                          }}
                          className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleApiKeyDelete(apiName)}
                          className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">API Usage Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'ShotStack', calls: 1247, lastUsed: '2 hours ago' },
                    { name: 'CreatoMate', calls: 856, lastUsed: '1 day ago' },
                    { name: 'PromptClip', calls: 342, lastUsed: '3 hours ago' },
                    { name: 'Tavus', calls: 189, lastUsed: '5 hours ago' }
                  ].map((api) => (
                    <div key={api.name} className="p-4 bg-gray-800 rounded-lg">
                      <h4 className="text-white font-medium">{api.name}</h4>
                      <p className="text-sm text-gray-400">Calls: {api.calls.toLocaleString()}</p>
                      <p className="text-sm text-gray-400">Last used: {api.lastUsed}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Billing Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="**** **** **** 1234"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Current Plan</h3>
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">Pro Plan</h4>
                    <p className="text-sm text-gray-400">$29/month</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Change Plan
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Notification Preferences</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Email notifications', description: 'Receive updates via email' },
                    { name: 'Push notifications', description: 'Get real-time updates' },
                    { name: 'API alerts', description: 'Notifications about API usage' },
                    { name: 'Billing reminders', description: 'Payment and subscription updates' }
                  ].map((notification) => (
                    <label key={notification.name} className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">{notification.name}</p>
                        <p className="text-sm text-gray-400">{notification.description}</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Security Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                    Update Password
                  </button>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Enable 2FA</p>
                    <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Enable
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;