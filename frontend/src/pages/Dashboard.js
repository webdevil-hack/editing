import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Play, 
  Pause,
  BarChart3, 
  Users, 
  Clock, 
  Zap,
  Film,
  Sparkles,
  TrendingUp,
  Download,
  Eye,
  Heart,
  Share2,
  Settings,
  Search,
  Filter,
  Grid3X3,
  List,
  Calendar,
  Star,
  Award,
  Target,
  Cpu,
  Database,
  Globe,
  Shield,
  ChevronRight,
  ArrowUpRight,
  Activity
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Components
import StatsCard from '../components/dashboard/StatsCard';
import ProjectCard from '../components/dashboard/ProjectCard';
import QuickActions from '../components/dashboard/QuickActions';
import RecentActivity from '../components/dashboard/RecentActivity';
import AIToolsGrid from '../components/dashboard/AIToolsGrid';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import WelcomeHero from '../components/dashboard/WelcomeHero';

const Dashboard = () => {
  const { user } = useAuth();
  const [viewMode, setViewMode] = useState('grid');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    videosCreated: 0,
    totalViews: 0,
    storageUsed: 0,
    apiCalls: 0
  });

  useEffect(() => {
    // Simulate loading data
    const loadDashboardData = async () => {
      setLoading(true);
      
      // Simulate API calls
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock data
      setStats({
        videosCreated: 24,
        totalViews: 12500,
        storageUsed: 2.4,
        apiCalls: 156
      });

      setProjects([
        {
          id: 1,
          title: 'Product Launch Video',
          description: 'AI-generated product showcase for Q4 launch',
          status: 'completed',
          tool: 'shotstack',
          thumbnail: '/images/project1.jpg',
          duration: 120,
          views: 1250,
          likes: 89,
          createdAt: '2024-01-15',
          progress: 100
        },
        {
          id: 2,
          title: 'Social Media Campaign',
          description: 'Batch of social videos for Instagram and TikTok',
          status: 'processing',
          tool: 'creatomate',
          thumbnail: '/images/project2.jpg',
          duration: 30,
          views: 0,
          likes: 0,
          createdAt: '2024-01-16',
          progress: 65
        },
        {
          id: 3,
          title: 'Customer Testimonials',
          description: 'AI avatar testimonials for website',
          status: 'draft',
          tool: 'tavus',
          thumbnail: '/images/project3.jpg',
          duration: 90,
          views: 0,
          likes: 0,
          createdAt: '2024-01-16',
          progress: 0
        }
      ]);
      
      setLoading(false);
    };

    loadDashboardData();
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="dashboard min-h-screen bg-black text-white">
      {/* Welcome Hero Section */}
      <WelcomeHero user={user} />

      <div className="container py-8">
        {/* Stats Overview */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Videos Created"
              value={stats.videosCreated}
              icon={<Film className="w-6 h-6" />}
              trend="+12%"
              trendUp={true}
              color="from-blue-500/20 to-blue-600/5"
            />
            <StatsCard
              title="Total Views"
              value={stats.totalViews.toLocaleString()}
              icon={<Eye className="w-6 h-6" />}
              trend="+24%"
              trendUp={true}
              color="from-green-500/20 to-green-600/5"
            />
            <StatsCard
              title="Storage Used"
              value={`${stats.storageUsed} GB`}
              icon={<Database className="w-6 h-6" />}
              trend="2.4/10 GB"
              color="from-purple-500/20 to-purple-600/5"
            />
            <StatsCard
              title="API Calls"
              value={stats.apiCalls}
              icon={<Cpu className="w-6 h-6" />}
              trend="+8%"
              trendUp={true}
              color="from-orange-500/20 to-orange-600/5"
            />
          </div>
        </motion.section>

        {/* Quick Actions */}
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <QuickActions />
        </motion.section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Tools Grid */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">AI Video Tools</h2>
                <Link to="/tools" className="text-primary hover:text-primary/80 text-sm flex items-center">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              <AIToolsGrid />
            </motion.section>

            {/* Recent Projects */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Recent Projects</h2>
                <div className="flex items-center space-x-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input pl-10 pr-4 py-2 w-64"
                    />
                  </div>

                  {/* Filter */}
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="input py-2 px-3"
                  >
                    <option value="all">All Status</option>
                    <option value="draft">Draft</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                    <option value="failed">Failed</option>
                  </select>

                  {/* View Mode */}
                  <div className="flex bg-gray-800 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Projects Grid/List */}
              <AnimatePresence mode="wait">
                {filteredProjects.length > 0 ? (
                  <motion.div
                    key={viewMode}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={
                      viewMode === 'grid'
                        ? 'grid md:grid-cols-2 gap-6'
                        : 'space-y-4'
                    }
                  >
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <ProjectCard project={project} viewMode={viewMode} />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <Film className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No projects found</h3>
                    <p className="text-secondary mb-6">
                      {searchTerm || filterStatus !== 'all'
                        ? 'Try adjusting your search or filter criteria'
                        : 'Create your first AI video project to get started'
                      }
                    </p>
                    <Link to="/editor" className="btn btn-primary">
                      <Plus className="w-4 h-4 mr-2" />
                      Create New Project
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Performance Chart */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <PerformanceChart />
            </motion.section>

            {/* Recent Activity */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <RecentActivity />
            </motion.section>

            {/* Upgrade Prompt */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="card bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-black mr-3">
                      <Star className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Upgrade to Pro</h3>
                      <p className="text-xs text-secondary">Unlock advanced features</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      Unlimited video projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      4K video export
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      Priority AI processing
                    </li>
                  </ul>
                  
                  <button className="btn btn-primary w-full btn-sm">
                    Upgrade Now
                  </button>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Skeleton Loader
const DashboardSkeleton = () => {
  return (
    <div className="dashboard min-h-screen bg-black text-white">
      <div className="container py-8">
        {/* Hero Skeleton */}
        <div className="mb-12 animate-pulse">
          <div className="h-32 bg-gray-800 rounded-lg mb-6"></div>
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-800 rounded-lg animate-pulse"></div>
          ))}
        </div>

        {/* Content Skeleton */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="h-64 bg-gray-800 rounded-lg animate-pulse"></div>
            <div className="h-96 bg-gray-800 rounded-lg animate-pulse"></div>
          </div>
          <div className="space-y-8">
            <div className="h-48 bg-gray-800 rounded-lg animate-pulse"></div>
            <div className="h-64 bg-gray-800 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;