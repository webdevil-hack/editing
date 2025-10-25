import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Key, 
  Bell, 
  Shield, 
  Palette, 
  Database,
  CreditCard,
  Download,
  Trash2,
  Save,
  Eye,
  EyeOff,
  Check,
  X,
  AlertTriangle
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const SettingsPage = () => {
  const { user, updateProfile, updateApiKeys } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(false);

  const tabs = [
    { id: 'profile', name: 'Profile', icon: <User className="w-4 h-4" /> },
    { id: 'api-keys', name: 'API Keys', icon: <Key className="w-4 h-4" /> },
    { id: 'notifications', name: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'preferences', name: 'Preferences', icon: <Palette className="w-4 h-4" /> },
    { id: 'billing', name: 'Billing', icon: <CreditCard className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="container py-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-lg mb-2">Settings</h1>
          <p className="text-secondary">
            Manage your account, preferences, and integrations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary text-black font-medium'
                      : 'text-secondary hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card">
              {activeTab === 'profile' && <ProfileTab user={user} updateProfile={updateProfile} />}
              {activeTab === 'api-keys' && <ApiKeysTab user={user} updateApiKeys={updateApiKeys} />}
              {activeTab === 'notifications' && <NotificationsTab />}
              {activeTab === 'security' && <SecurityTab />}
              {activeTab === 'preferences' && <PreferencesTab />}
              {activeTab === 'billing' && <BillingTab />}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Profile Tab Component
const ProfileTab = ({ user, updateProfile }) => {
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    username: user?.username || '',
    email: user?.email || ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await updateProfile(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              className="input"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              className="input"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            className="input"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            value={formData.email}
            className="input opacity-50"
            disabled
          />
          <p className="text-xs text-secondary mt-1">
            Email address cannot be changed. Contact support if needed.
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin mr-2" />
              Saving...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          )}
        </button>
      </form>
    </div>
  );
};

// API Keys Tab Component
const ApiKeysTab = ({ user, updateApiKeys }) => {
  const [apiKeys, setApiKeys] = useState({
    shotstack: user?.apiKeys?.shotstack || '',
    creatomate: user?.apiKeys?.creatomate || '',
    plainly: user?.apiKeys?.plainly || '',
    tavus: user?.apiKeys?.tavus || ''
  });
  const [showKeys, setShowKeys] = useState({});
  const [loading, setLoading] = useState(false);

  const services = [
    {
      id: 'shotstack',
      name: 'Shotstack',
      description: 'Professional video editing API',
      website: 'https://shotstack.io',
      status: apiKeys.shotstack ? 'connected' : 'not-connected'
    },
    {
      id: 'creatomate',
      name: 'Creatomate',
      description: 'Automated video creation platform',
      website: 'https://creatomate.com',
      status: apiKeys.creatomate ? 'connected' : 'not-connected'
    },
    {
      id: 'plainly',
      name: 'Plainly Videos',
      description: 'Scalable video generation service',
      website: 'https://plainlyvideos.com',
      status: apiKeys.plainly ? 'connected' : 'not-connected'
    },
    {
      id: 'tavus',
      name: 'Tavus',
      description: 'AI avatar video generation',
      website: 'https://tavus.io',
      status: apiKeys.tavus ? 'connected' : 'not-connected'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await updateApiKeys(apiKeys);
    } finally {
      setLoading(false);
    }
  };

  const toggleShowKey = (service) => {
    setShowKeys(prev => ({
      ...prev,
      [service]: !prev[service]
    }));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">API Keys</h2>
      <p className="text-secondary mb-6">
        Connect your AI video service accounts to start creating videos
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {services.map((service) => (
          <div key={service.id} className="border border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                  <Key className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{service.name}</h3>
                  <p className="text-sm text-secondary">{service.description}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  service.status === 'connected'
                    ? 'bg-green-400/20 text-green-400'
                    : 'bg-gray-400/20 text-gray-400'
                }`}>
                  {service.status === 'connected' ? 'Connected' : 'Not Connected'}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-2">API Key</label>
                <div className="relative">
                  <input
                    type={showKeys[service.id] ? 'text' : 'password'}
                    value={apiKeys[service.id]}
                    onChange={(e) => setApiKeys({...apiKeys, [service.id]: e.target.value})}
                    className="input pr-10"
                    placeholder="Enter your API key"
                  />
                  <button
                    type="button"
                    onClick={() => toggleShowKey(service.id)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showKeys[service.id] ? (
                      <EyeOff className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Eye className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <a
                  href={service.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  Get API Key →
                </a>
                
                {apiKeys[service.id] && (
                  <button
                    type="button"
                    onClick={() => setApiKeys({...apiKeys, [service.id]: ''})}
                    className="text-red-400 hover:text-red-300"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-400 mb-1">Security Notice</h4>
              <p className="text-sm text-secondary">
                API keys are stored securely and encrypted. Never share your API keys with others.
                You can revoke access at any time through the respective service providers.
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin mr-2" />
              Saving...
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save API Keys
            </>
          )}
        </button>
      </form>
    </div>
  );
};

// Placeholder components for other tabs
const NotificationsTab = () => (
  <div>
    <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
    <p className="text-secondary">Notification settings coming soon...</p>
  </div>
);

const SecurityTab = () => (
  <div>
    <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
    <p className="text-secondary">Security settings coming soon...</p>
  </div>
);

const PreferencesTab = () => (
  <div>
    <h2 className="text-xl font-semibold mb-6">Preferences</h2>
    <p className="text-secondary">User preferences coming soon...</p>
  </div>
);

const BillingTab = () => (
  <div>
    <h2 className="text-xl font-semibold mb-6">Billing & Subscription</h2>
    <p className="text-secondary">Billing information coming soon...</p>
  </div>
);

export default SettingsPage;