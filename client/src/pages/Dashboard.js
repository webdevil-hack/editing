import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import apiService from '../services/api';
import { 
  Plus, 
  Video, 
  Settings, 
  User, 
  BarChart3, 
  Zap,
  Play,
  Download,
  Share2,
  Edit3,
  Trash2,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader,
  Menu,
  X,
  Home,
  LogOut,
  CreditCard,
  Activity,
  TrendingUp,
  Users,
  Film,
  Sparkles,
  Wand2,
  Scissors,
  Palette,
  Camera,
  Mic,
  Music,
  Image,
  FileText,
  Globe,
  Shield,
  Star,
  ChevronRight,
  ChevronDown,
  Bell,
  Search,
  Filter,
  Grid,
  List,
  RefreshCw,
  Pause,
  PlayCircle,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showApiKeysModal, setShowApiKeysModal] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    prompt: '',
    apiUsed: 'shotstack'
  });

  // API configurations with detailed information
  const apis = [
    {
      id: 'shotstack',
      name: 'ShortStack',
      status: 'connected',
      color: '#00d4ff',
      description: 'Professional video generation with advanced editing',
      features: ['HD/4K Video', 'Multiple Formats', 'Real-time Processing'],
      icon: '🎬',
      category: 'Video Generation',
      credits: 150,
      usage: 45
    },
    {
      id: 'creatomate',
      name: 'CreatoMate',
      status: 'connected',
      color: '#ff6b35',
      description: 'Template-based video creation with motion graphics',
      features: ['Templates', 'Motion Graphics', 'Brand Integration'],
      icon: '🎨',
      category: 'Template Editing',
      credits: 200,
      usage: 78
    },
    {
      id: 'plainly',
      name: 'Pandly Videos',
      status: 'connected',
      color: '#9c27b0',
      description: 'Automated video production with AI assistance',
      features: ['AI Automation', 'Stock Assets', 'Voiceover'],
      icon: '🤖',
      category: 'AI Automation',
      credits: 100,
      usage: 32
    },
    {
      id: 'tavus',
      name: 'Tavas',
      status: 'connected',
      color: '#4caf50',
      description: 'AI avatar video generation and personalization',
      features: ['AI Avatars', 'Personalization', 'Multi-language'],
      icon: '👤',
      category: 'Avatar Generation',
      credits: 300,
      usage: 120
    },
    {
      id: 'promptclip',
      name: 'PromptClip',
      status: 'available',
      color: '#ff9800',
      description: 'Open-source video generation from text prompts',
      features: ['Open Source', 'Text-to-Video', 'Customizable'],
      icon: '🔧',
      category: 'Open Source',
      credits: 0,
      usage: 0
    },
    {
      id: 'luckyedit',
      name: 'LuckyEdit',
      status: 'available',
      color: '#e91e63',
      description: 'AI-powered video editing with beat sync',
      features: ['Beat Sync', 'Auto Edit', 'Motion Effects'],
      icon: '🎵',
      category: 'AI Editing',
      credits: 0,
      usage: 0
    },
    {
      id: 'ltxvideo',
      name: 'LTX Video',
      status: 'available',
      color: '#2196f3',
      description: 'Advanced text-to-video with camera motion',
      features: ['4K Output', 'Camera Motion', 'High Quality'],
      icon: '🎥',
      category: 'Advanced Generation',
      credits: 0,
      usage: 0
    },
    {
      id: 'vant21',
      name: 'Vant 2.1',
      status: 'available',
      color: '#795548',
      description: 'Real-time preview with facial retargeting',
      features: ['Real-time Preview', 'Facial Retargeting', 'Animation Effects'],
      icon: '✨',
      category: 'Real-time Processing',
      credits: 0,
      usage: 0
    }
  ];

  // Navigation tabs
  const navigationTabs = [
    { id: 'overview', label: 'Overview', icon: <Home size={20} /> },
    { id: 'shotstack', label: 'ShortStack', icon: <Film size={20} /> },
    { id: 'creatomate', label: 'CreatoMate', icon: <Palette size={20} /> },
    { id: 'plainly', label: 'Pandly Videos', icon: <Sparkles size={20} /> },
    { id: 'tavus', label: 'Tavas', icon: <User size={20} /> },
    { id: 'promptclip', label: 'PromptClip', icon: <Wand2 size={20} /> },
    { id: 'luckyedit', label: 'LuckyEdit', icon: <Music size={20} /> },
    { id: 'ltxvideo', label: 'LTX Video', icon: <Camera size={20} /> },
    { id: 'vant21', label: 'Vant 2.1', icon: <Globe size={20} /> },
    { id: 'profile', label: 'Profile', icon: <Settings size={20} /> }
  ];

  // Load projects from API
  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const projectsData = await apiService.getProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error('Failed to load projects:', error);
        setError('Failed to load projects');
        // Fallback to mock data for demo
        setProjects([
          {
            id: 1,
            name: 'Demo Project 1',
            prompt: 'Create a cinematic video about space exploration',
            apiUsed: 'shotstack',
            status: 'completed',
            createdAt: new Date().toISOString(),
            videoUrl: 'https://example.com/video1.mp4'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const handleCreateProject = async (e) => {
    e.preventDefault();
    if (!newProject.name || !newProject.prompt) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      const projectData = {
        name: newProject.name,
        prompt: newProject.prompt,
        apiUsed: newProject.apiUsed,
        status: 'draft'
      };

      const createdProject = await apiService.createProject(projectData);
      setProjects([createdProject, ...projects]);
      setShowCreateModal(false);
      setNewProject({ name: '', prompt: '', apiUsed: 'shotstack' });
      setError(null);
    } catch (error) {
      console.error('Failed to create project:', error);
      setError('Failed to create project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleProcessVideo = async (projectId, apiKey, service) => {
    try {
      setLoading(true);
      const result = await apiService.processVideo(projectId, apiKey, service);
      console.log('Video processing result:', result);
      // Handle success
    } catch (error) {
      console.error('Failed to process video:', error);
      setError('Failed to process video. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderOverview = () => (
    <div className="dashboard-overview">
      <div className="overview-header">
        <h1>Welcome back, {user?.name || 'Creator'}!</h1>
        <p>Ready to create amazing videos with AI?</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="card-icon">
            <Video size={24} />
          </div>
          <div className="card-content">
            <h3>Total Videos</h3>
            <span className="card-number">1,247</span>
            <span className="card-change">+12% this month</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon">
            <CreditCard size={24} />
          </div>
          <div className="card-content">
            <h3>Credits Used</h3>
            <span className="card-number">2,456</span>
            <span className="card-change">+8% this month</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon">
            <Activity size={24} />
          </div>
          <div className="card-content">
            <h3>Processing Queue</h3>
            <span className="card-number">3</span>
            <span className="card-change">Active now</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon">
            <TrendingUp size={24} />
          </div>
          <div className="card-content">
            <h3>Success Rate</h3>
            <span className="card-number">98.5%</span>
            <span className="card-change">+2.1% this month</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button 
            className="action-btn primary"
            onClick={() => setShowCreateModal(true)}
          >
            <Plus size={20} />
            Generate New Video
          </button>
          <button className="action-btn secondary">
            <Upload size={20} />
            Upload Media
          </button>
          <button className="action-btn secondary">
            <Templates size={20} />
            Browse Templates
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          {projects.slice(0, 5).map((project) => (
            <div key={project.id} className="activity-item">
              <div className="activity-icon">
                <Video size={16} />
              </div>
              <div className="activity-content">
                <h4>{project.name}</h4>
                <p>Created with {project.apiUsed}</p>
                <span className="activity-time">
                  {new Date(project.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="activity-status">
                <span className={`status-badge ${project.status}`}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* API Status */}
      <div className="api-status">
        <h2>API Status</h2>
        <div className="api-grid">
          {apis.map((api) => (
            <div key={api.id} className="api-status-card">
              <div className="api-header">
                <div className="api-icon">{api.icon}</div>
                <div className="api-info">
                  <h4>{api.name}</h4>
                  <p>{api.category}</p>
                </div>
                <div className={`api-status-indicator ${api.status}`}>
                  <Circle size={8} />
                </div>
              </div>
              <div className="api-metrics">
                <div className="metric">
                  <span>Credits</span>
                  <span>{api.credits}</span>
                </div>
                <div className="metric">
                  <span>Used</span>
                  <span>{api.usage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderApiPage = (apiId) => {
    const api = apis.find(a => a.id === apiId);
    if (!api) return null;

    return (
      <div className="api-page">
        <div className="api-header">
          <div className="api-branding">
            <div className="api-logo">{api.icon}</div>
            <div className="api-title">
              <h1>{api.name}</h1>
              <p>{api.description}</p>
            </div>
          </div>
          <div className="api-status-badge">
            <span className={`status ${api.status}`}>{api.status}</span>
          </div>
        </div>

        <div className="api-content">
          <div className="api-form">
            <h2>Generate Video</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Project Name</label>
                <input 
                  type="text" 
                  placeholder="Enter project name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Prompt</label>
                <textarea 
                  placeholder="Describe your video idea..."
                  className="form-textarea"
                  rows={4}
                />
              </div>

              {apiId === 'shotstack' && (
                <>
                  <div className="form-group">
                    <label>Aspect Ratio</label>
                    <select className="form-select">
                      <option value="16:9">16:9 (Widescreen)</option>
                      <option value="9:16">9:16 (Vertical)</option>
                      <option value="1:1">1:1 (Square)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Voice Selection</label>
                    <select className="form-select">
                      <option value="male">Male Voice</option>
                      <option value="female">Female Voice</option>
                      <option value="neutral">Neutral Voice</option>
                    </select>
                  </div>
                </>
              )}

              {apiId === 'creatomate' && (
                <>
                  <div className="form-group">
                    <label>Template</label>
                    <select className="form-select">
                      <option value="corporate">Corporate</option>
                      <option value="social">Social Media</option>
                      <option value="promotional">Promotional</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Resolution</label>
                    <select className="form-select">
                      <option value="1080p">1080p HD</option>
                      <option value="4k">4K Ultra HD</option>
                    </select>
                  </div>
                </>
              )}

              <div className="form-actions">
                <button type="button" className="btn-secondary">
                  Preview
                </button>
                <button type="submit" className="btn-primary">
                  <Zap size={16} />
                  Generate Now
                </button>
              </div>
            </form>
          </div>

          <div className="api-preview">
            <h3>Preview</h3>
            <div className="preview-window">
              <div className="preview-placeholder">
                <Video size={48} />
                <p>Your video preview will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderProfile = () => (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Profile Settings</h1>
        <p>Manage your account and preferences</p>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <form className="profile-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" defaultValue={user?.name || ''} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue={user?.email || ''} />
              </div>
            </div>
            <button type="submit" className="btn-primary">Save Changes</button>
          </form>
        </div>

        <div className="profile-section">
          <h2>Subscription & Credits</h2>
          <div className="credits-overview">
            <div className="credits-card">
              <h3>Total Credits</h3>
              <span className="credits-amount">10,000</span>
            </div>
            <div className="credits-card">
              <h3>Used This Month</h3>
              <span className="credits-amount">2,456</span>
            </div>
            <div className="credits-card">
              <h3>Remaining</h3>
              <span className="credits-amount">7,544</span>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>API Access History</h2>
          <div className="api-history">
            {apis.map((api) => (
              <div key={api.id} className="api-history-item">
                <div className="api-info">
                  <span className="api-icon">{api.icon}</span>
                  <span className="api-name">{api.name}</span>
                </div>
                <div className="api-usage">
                  <span>{api.usage} / {api.credits}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <Film size={24} />
            {!sidebarCollapsed && <span>AI Video Editor</span>}
          </div>
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            {sidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        <nav className="sidebar-nav">
          {navigationTabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="nav-icon">{tab.icon}</span>
              {!sidebarCollapsed && <span className="nav-label">{tab.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={logout}>
            <LogOut size={20} />
            {!sidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-header">
          <div className="header-left">
            <h1>{navigationTabs.find(tab => tab.id === activeTab)?.label}</h1>
          </div>
          <div className="header-right">
            <button className="header-btn">
              <Bell size={20} />
            </button>
            <button className="header-btn">
              <Search size={20} />
            </button>
            <button className="header-btn">
              <Settings size={20} />
            </button>
          </div>
        </div>

        <div className="content-body">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'profile' && renderProfile()}
          {apis.some(api => api.id === activeTab) && renderApiPage(activeTab)}
        </div>
      </div>

      {/* Create Project Modal */}
      {showCreateModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Create New Project</h2>
              <button 
                className="modal-close"
                onClick={() => setShowCreateModal(false)}
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleCreateProject}>
              {error && <div className="error-message">{error}</div>}
              <div className="form-group">
                <label>Project Name</label>
                <input
                  type="text"
                  placeholder="Enter project name"
                  value={newProject.name}
                  onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Prompt</label>
                <textarea
                  placeholder="Describe your video idea..."
                  value={newProject.prompt}
                  onChange={(e) => setNewProject({...newProject, prompt: e.target.value})}
                  rows={4}
                  required
                />
              </div>
              <div className="form-group">
                <label>Select API/Tool</label>
                <select
                  value={newProject.apiUsed}
                  onChange={(e) => setNewProject({...newProject, apiUsed: e.target.value})}
                >
                  <option value="">Choose an option</option>
                  {apis.map(api => (
                    <option key={api.id} value={api.id}>{api.name}</option>
                  ))}
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowCreateModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'Creating...' : 'Create Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;