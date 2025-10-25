import { useState } from 'react'
import { motion } from 'framer-motion'

interface VideoProject {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  provider: string
  status: 'completed' | 'processing' | 'failed'
  createdAt: string
  tags: string[]
}

const mockProjects: VideoProject[] = [
  {
    id: '1',
    title: 'Cinematic Product Showcase',
    description: 'A stunning slow-motion product reveal with neon lighting effects',
    thumbnail: '/api/placeholder/400/225',
    duration: '0:30',
    provider: 'Shotstack',
    status: 'completed',
    createdAt: '2024-01-15',
    tags: ['product', 'cinematic', 'neon']
  },
  {
    id: '2',
    title: 'Corporate Presentation',
    description: 'Professional animated presentation with data visualizations',
    thumbnail: '/api/placeholder/400/225',
    duration: '1:15',
    provider: 'Creatomate',
    status: 'completed',
    createdAt: '2024-01-12',
    tags: ['corporate', 'data', 'animation']
  },
  {
    id: '3',
    title: 'Social Media Ad',
    description: 'Dynamic social media advertisement with trending effects',
    thumbnail: '/api/placeholder/400/225',
    duration: '0:15',
    provider: 'Plainly',
    status: 'processing',
    createdAt: '2024-01-14',
    tags: ['social', 'ad', 'trending']
  },
  {
    id: '4',
    title: 'Tutorial Introduction',
    description: 'Educational video intro with step-by-step animations',
    thumbnail: '/api/placeholder/400/225',
    duration: '0:45',
    provider: 'Tavus',
    status: 'completed',
    createdAt: '2024-01-10',
    tags: ['tutorial', 'education', 'animation']
  },
  {
    id: '5',
    title: 'Event Promo',
    description: 'High-energy event promotion with music sync',
    thumbnail: '/api/placeholder/400/225',
    duration: '1:00',
    provider: 'PromptClip',
    status: 'failed',
    createdAt: '2024-01-08',
    tags: ['event', 'promo', 'music']
  },
  {
    id: '6',
    title: 'Brand Story',
    description: 'Emotional brand storytelling with cinematic shots',
    thumbnail: '/api/placeholder/400/225',
    duration: '2:30',
    provider: 'Lucy Edit',
    status: 'completed',
    createdAt: '2024-01-05',
    tags: ['brand', 'story', 'cinematic']
  }
]

function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<VideoProject | null>(null)

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'completed', label: 'Completed' },
    { key: 'processing', label: 'Processing' },
    { key: 'failed', label: 'Failed' }
  ]

  const filteredProjects = selectedFilter === 'all' 
    ? mockProjects 
    : mockProjects.filter(project => project.status === selectedFilter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/20'
      case 'processing': return 'text-yellow-400 bg-yellow-400/20'
      case 'failed': return 'text-red-400 bg-red-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  return (
    <div className="min-h-screen text-white cinematic-gradient">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
          <p className="text-white/70 text-lg max-w-3xl">
            Explore our collection of AI-generated videos created with cutting-edge technology. 
            Each project showcases the power of prompt-driven video creation across multiple providers.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedFilter === filter.key
                  ? 'bg-white/20 text-white border border-white/30'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-surface/80 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-green-400">{mockProjects.filter(p => p.status === 'completed').length}</div>
            <div className="text-white/70 text-sm">Completed</div>
          </div>
          <div className="bg-surface/80 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-yellow-400">{mockProjects.filter(p => p.status === 'processing').length}</div>
            <div className="text-white/70 text-sm">Processing</div>
          </div>
          <div className="bg-surface/80 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-red-400">{mockProjects.filter(p => p.status === 'failed').length}</div>
            <div className="text-white/70 text-sm">Failed</div>
          </div>
          <div className="bg-surface/80 border border-white/10 rounded-xl p-6">
            <div className="text-2xl font-bold text-blue-400">{mockProjects.length}</div>
            <div className="text-white/70 text-sm">Total Projects</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-surface/80 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-black/50 text-white">
                    {project.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-white/50 capitalize">{project.provider}</span>
                </div>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full text-xs bg-white/5 text-white/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-white/50">
                  Created {new Date(project.createdAt).toLocaleDateString()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
              <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-white/70">Try adjusting your filters or create a new project.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-surface border border-white/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Description</h3>
                  <p className="text-white/70 mb-4">{selectedProject.description}</p>
                  
                  <h3 className="font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/70">Duration:</span>
                      <span>{selectedProject.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Provider:</span>
                      <span className="capitalize">{selectedProject.provider}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Created:</span>
                      <span>{new Date(selectedProject.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="flex-1 bg-accent hover:bg-accent/80 text-black font-medium py-3 px-6 rounded-lg transition-colors">
                  Download Video
                </button>
                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Edit Project
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default PortfolioPage