import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Plus, 
  Video, 
  Settings, 
  User, 
  BarChart3, 
  Zap,
  Play,
  Pause,
  Download,
  Share2,
  Edit3,
  Trash2,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showApiKeysModal, setShowApiKeysModal] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    setProjects([
      {
        id: 1,
        name: 'Cinematic Landscape',
        prompt: 'A breathtaking mountain landscape with dramatic lighting',
        status: 'completed',
        thumbnail: '/api/placeholder/300/200',
        duration: '0:30',
        createdAt: '2024-01-15',
        apiUsed: 'shotstack'
      },
      {
        id: 2,
        name: 'Product Showcase',
        prompt: 'Professional product presentation with 3D effects',
        status: 'processing',
        thumbnail: '/api/placeholder/300/200',
        duration: '0:45',
        createdAt: '2024-01-14',
        apiUsed: 'creatomate'
      },
      {
        id: 3,
        name: 'Abstract Art',
        prompt: 'Colorful abstract animation with fluid motion graphics',
        status: 'draft',
        thumbnail: '/api/placeholder/300/200',
        duration: '1:00',
        createdAt: '2024-01-13',
        apiUsed: 'promptclip'
      }
    ]);
  }, []);

  const tabs = [
    { id: 'projects', label: 'My Projects', icon: <Video size={20} /> },
    { id: 'templates', label: 'Templates', icon: <Zap size={20} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> }
  ];

  const apis = [
    { id: 'shotstack', name: 'Shotstack', status: 'connected', color: '#10b981' },
    { id: 'creatomate', name: 'Creatomate', status: 'connected', color: '#3b82f6' },
    { id: 'plainly', name: 'Plainly Videos', status: 'not_connected', color: '#f59e0b' },
    { id: 'tavus', name: 'Tavus', status: 'connected', color: '#10b981' },
    { id: 'promptclip', name: 'PromptClip', status: 'available', color: '#8b5cf6' },
    { id: 'lucy', name: 'Lucy Edit', status: 'available', color: '#ec4899' },
    { id: 'ltx', name: 'LTXVideo', status: 'available', color: '#06b6d4' },
    { id: 'wan', name: 'Wan 2.1', status: 'available', color: '#84cc16' }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'processing':
        return <Loader size={16} className="text-blue-500 animate-spin" />;
      case 'failed':
        return <AlertCircle size={16} className="text-red-500" />;
      default:
        return <Clock size={16} className="text-gray-500" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'processing':
        return 'Processing';
      case 'failed':
        return 'Failed';
      default:
        return 'Draft';
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon">AI</div>
            <span className="logo-text">Video Editor</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">
              {user?.firstName?.[0]}{user?.lastName?.[0]}
            </div>
            <div className="user-details">
              <div className="user-name">{user?.firstName} {user?.lastName}</div>
              <div className="user-email">{user?.email}</div>
            </div>
          </div>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      <div className="dashboard-main">
        <div className="dashboard-header">
          <div className="header-content">
            <h1 className="dashboard-title">
              {tabs.find(tab => tab.id === activeTab)?.label}
            </h1>
            <button 
              className="create-btn"
              onClick={() => setShowCreateModal(true)}
            >
              <Plus size={20} />
              Create New
            </button>
          </div>
        </div>

        <div className="dashboard-content">
          {activeTab === 'projects' && (
            <div className="projects-section">
              <div className="projects-header">
                <div className="projects-stats">
                  <div className="stat-card">
                    <div className="stat-number">{projects.length}</div>
                    <div className="stat-label">Total Projects</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">{projects.filter(p => p.status === 'completed').length}</div>
                    <div className="stat-label">Completed</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">{projects.filter(p => p.status === 'processing').length}</div>
                    <div className="stat-label">Processing</div>
                  </div>
                </div>
              </div>

              <div className="projects-grid">
                {projects.map((project) => (
                  <div key={project.id} className="project-card">
                    <div className="project-thumbnail">
                      <div className="thumbnail-overlay">
                        <button className="play-btn">
                          <Play size={24} />
                        </button>
                      </div>
                      <div className="project-status">
                        {getStatusIcon(project.status)}
                        <span>{getStatusText(project.status)}</span>
                      </div>
                    </div>
                    
                    <div className="project-info">
                      <h3 className="project-name">{project.name}</h3>
                      <p className="project-prompt">{project.prompt}</p>
                      <div className="project-meta">
                        <span className="project-duration">{project.duration}</span>
                        <span className="project-api">{project.apiUsed}</span>
                        <span className="project-date">{project.createdAt}</span>
                      </div>
                    </div>

                    <div className="project-actions">
                      <button className="action-btn">
                        <Eye size={16} />
                      </button>
                      <button className="action-btn">
                        <Edit3 size={16} />
                      </button>
                      <button className="action-btn">
                        <Download size={16} />
                      </button>
                      <button className="action-btn">
                        <Share2 size={16} />
                      </button>
                      <button className="action-btn delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'templates' && (
            <div className="templates-section">
              <div className="section-header">
                <h2>Video Templates</h2>
                <p>Choose from our collection of professional templates</p>
              </div>
              
              <div className="templates-grid">
                {['Cinematic', 'Corporate', 'Social Media', 'Product', 'Educational', 'Creative'].map((template, index) => (
                  <div key={index} className="template-card">
                    <div className="template-preview">
                      <div className="template-thumbnail"></div>
                    </div>
                    <div className="template-info">
                      <h3>{template} Template</h3>
                      <p>Professional {template.toLowerCase()} video template</p>
                    </div>
                    <button className="use-template-btn">Use Template</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="analytics-section">
              <div className="analytics-grid">
                <div className="analytics-card">
                  <h3>Video Performance</h3>
                  <div className="chart-placeholder">
                    <BarChart3 size={48} />
                    <p>Performance metrics will appear here</p>
                  </div>
                </div>
                <div className="analytics-card">
                  <h3>Usage Statistics</h3>
                  <div className="stats-list">
                    <div className="stat-item">
                      <span>Videos Created</span>
                      <span>24</span>
                    </div>
                    <div className="stat-item">
                      <span>Total Views</span>
                      <span>1,234</span>
                    </div>
                    <div className="stat-item">
                      <span>Hours Saved</span>
                      <span>48</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-section">
              <div className="settings-grid">
                <div className="settings-card">
                  <h3>API Keys</h3>
                  <p>Configure your API keys for external services</p>
                  <button 
                    className="settings-btn"
                    onClick={() => setShowApiKeysModal(true)}
                  >
                    Manage API Keys
                  </button>
                </div>
                
                <div className="settings-card">
                  <h3>Account Settings</h3>
                  <p>Update your profile and preferences</p>
                  <button className="settings-btn">Edit Profile</button>
                </div>
                
                <div className="settings-card">
                  <h3>Billing</h3>
                  <p>Manage your subscription and billing</p>
                  <button className="settings-btn">View Billing</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Project Modal */}
      {showCreateModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Create New Video</h2>
              <button 
                className="modal-close"
                onClick={() => setShowCreateModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-content">
              <div className="form-group">
                <label>Project Name</label>
                <input type="text" placeholder="Enter project name" />
              </div>
              <div className="form-group">
                <label>Video Prompt</label>
                <textarea 
                  placeholder="Describe your video idea..."
                  rows="4"
                ></textarea>
              </div>
              <div className="form-group">
                <label>Select API/Tool</label>
                <select>
                  <option value="">Choose an option</option>
                  {apis.map(api => (
                    <option key={api.id} value={api.id}>
                      {api.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="modal-actions">
                <button 
                  className="btn-secondary"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
                <button className="btn-primary">Create Project</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* API Keys Modal */}
      {showApiKeysModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>API Keys Management</h2>
              <button 
                className="modal-close"
                onClick={() => setShowApiKeysModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-content">
              <div className="api-keys-list">
                {apis.map(api => (
                  <div key={api.id} className="api-key-item">
                    <div className="api-info">
                      <div className="api-name">{api.name}</div>
                      <div className={`api-status ${api.status}`}>
                        {api.status.replace('_', ' ')}
                      </div>
                    </div>
                    <div className="api-actions">
                      <input 
                        type="password" 
                        placeholder="Enter API key"
                        className="api-key-input"
                      />
                      <button className="api-save-btn">Save</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="modal-actions">
                <button 
                  className="btn-secondary"
                  onClick={() => setShowApiKeysModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;