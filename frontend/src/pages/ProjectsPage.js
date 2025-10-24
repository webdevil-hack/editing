import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Grid3X3, 
  List,
  Calendar,
  Download,
  MoreHorizontal,
  Trash2,
  Edit,
  Share2,
  Eye,
  Clock
} from 'lucide-react';
import ProjectCard from '../components/dashboard/ProjectCard';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  useEffect(() => {
    // Simulate loading projects
    setTimeout(() => {
      setProjects([
        {
          id: 1,
          title: 'Product Launch Video',
          description: 'AI-generated product showcase for Q4 launch campaign',
          status: 'completed',
          tool: 'shotstack',
          thumbnail: '/images/project1.jpg',
          duration: 120,
          views: 1250,
          likes: 89,
          createdAt: '2024-01-15',
          updatedAt: '2024-01-16',
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
          updatedAt: '2024-01-16',
          progress: 65
        },
        {
          id: 3,
          title: 'Customer Testimonials',
          description: 'AI avatar testimonials for website homepage',
          status: 'draft',
          tool: 'tavus',
          thumbnail: '/images/project3.jpg',
          duration: 90,
          views: 0,
          likes: 0,
          createdAt: '2024-01-16',
          updatedAt: '2024-01-16',
          progress: 0
        },
        {
          id: 4,
          title: 'Training Video Series',
          description: 'Educational content for employee onboarding',
          status: 'completed',
          tool: 'plainly',
          thumbnail: '/images/project4.jpg',
          duration: 300,
          views: 456,
          likes: 23,
          createdAt: '2024-01-14',
          updatedAt: '2024-01-15',
          progress: 100
        },
        {
          id: 5,
          title: 'Event Highlights',
          description: 'Conference recap video with AI editing',
          status: 'failed',
          tool: 'shotstack',
          thumbnail: '/images/project5.jpg',
          duration: 180,
          views: 0,
          likes: 0,
          createdAt: '2024-01-13',
          updatedAt: '2024-01-14',
          progress: 0
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredAndSortedProjects = projects
    .filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'name':
          return a.title.localeCompare(b.title);
        case 'views':
          return b.views - a.views;
        default:
          return 0;
      }
    });

  const getStatusCount = (status) => {
    return projects.filter(p => status === 'all' || p.status === status).length;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black pt-16">
        <div className="container py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-800 rounded w-64"></div>
            <div className="h-12 bg-gray-800 rounded"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-800 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="heading-lg mb-2">My Projects</h1>
              <p className="text-secondary">
                Manage and organize your AI video projects
              </p>
            </div>
            
            <Link to="/editor" className="btn btn-primary mt-4 md:mt-0">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {[
              { label: 'All', count: getStatusCount('all'), status: 'all' },
              { label: 'Completed', count: getStatusCount('completed'), status: 'completed' },
              { label: 'Processing', count: getStatusCount('processing'), status: 'processing' },
              { label: 'Draft', count: getStatusCount('draft'), status: 'draft' },
              { label: 'Failed', count: getStatusCount('failed'), status: 'failed' }
            ].map((stat, index) => (
              <motion.button
                key={stat.status}
                onClick={() => setFilterStatus(stat.status)}
                className={`p-4 rounded-lg border transition-all duration-200 text-left ${
                  filterStatus === stat.status
                    ? 'border-primary bg-primary/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="text-2xl font-bold text-primary">{stat.count}</div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </motion.button>
            ))}
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4 w-full md:w-auto">
              {/* Search */}
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input pl-10 pr-4 py-2 w-full"
                />
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input py-2 px-3"
              >
                <option value="recent">Most Recent</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Name A-Z</option>
                <option value="views">Most Viewed</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${
                  viewMode === 'grid' ? 'bg-primary text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${
                  viewMode === 'list' ? 'bg-primary text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredAndSortedProjects.length > 0 ? (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {filteredAndSortedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} viewMode={viewMode} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-secondary mb-6 max-w-md mx-auto">
                {searchTerm || filterStatus !== 'all'
                  ? 'Try adjusting your search terms or filters to find what you\'re looking for.'
                  : 'You haven\'t created any video projects yet. Start by creating your first AI-powered video.'
                }
              </p>
              {(!searchTerm && filterStatus === 'all') && (
                <Link to="/editor" className="btn btn-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Project
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;