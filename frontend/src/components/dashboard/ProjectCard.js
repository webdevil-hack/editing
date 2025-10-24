import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause,
  Eye, 
  Heart, 
  Download, 
  MoreHorizontal,
  Clock,
  Calendar,
  Film,
  Loader
} from 'lucide-react';

const ProjectCard = ({ project, viewMode = 'grid' }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-400/20';
      case 'processing':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'draft':
        return 'text-gray-400 bg-gray-400/20';
      case 'failed':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getToolColor = (tool) => {
    switch (tool) {
      case 'shotstack':
        return 'text-blue-400 bg-blue-400/20';
      case 'creatomate':
        return 'text-purple-400 bg-purple-400/20';
      case 'plainly':
        return 'text-green-400 bg-green-400/20';
      case 'tavus':
        return 'text-orange-400 bg-orange-400/20';
      default:
        return 'text-primary bg-primary/20';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        className="card group hover:border-primary/50 transition-all duration-300"
        whileHover={{ x: 5 }}
      >
        <div className="flex items-center space-x-4">
          {/* Thumbnail */}
          <div className="relative w-20 h-14 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <Film className="w-6 h-6 text-primary" />
            </div>
            {project.status === 'processing' && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Loader className="w-4 h-4 text-primary animate-spin" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <Link
                  to={`/editor/${project.id}`}
                  className="font-semibold hover:text-primary transition-colors truncate block"
                >
                  {project.title}
                </Link>
                <p className="text-secondary text-sm truncate">{project.description}</p>
              </div>

              <div className="flex items-center space-x-4 ml-4">
                {/* Status */}
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>

                {/* Tool */}
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getToolColor(project.tool)}`}>
                  {project.tool}
                </span>

                {/* Stats */}
                <div className="flex items-center space-x-3 text-sm text-secondary">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {project.views}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {formatDuration(project.duration)}
                  </div>
                </div>

                {/* Actions */}
                <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar for Processing */}
        {project.status === 'processing' && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-secondary mb-1">
              <span>Processing...</span>
              <span>{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5">
              <div 
                className="bg-gradient-to-r from-primary to-blue-400 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="card group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
      whileHover={{ y: -5 }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <Film className="w-12 h-12 text-primary" />
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-colors duration-300">
          <motion.button
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {project.status === 'processing' ? (
              <Loader className="w-5 h-5 text-white animate-spin" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" />
            )}
          </motion.button>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>

        {/* Tool Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getToolColor(project.tool)}`}>
            {project.tool}
          </span>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-xs font-medium">
          {formatDuration(project.duration)}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <Link
            to={`/editor/${project.id}`}
            className="font-semibold hover:text-primary transition-colors line-clamp-1"
          >
            {project.title}
          </Link>
          <p className="text-secondary text-sm line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4 text-secondary">
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {project.views.toLocaleString()}
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              {project.likes}
            </div>
          </div>
          
          <div className="flex items-center text-secondary">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(project.createdAt)}
          </div>
        </div>

        {/* Progress Bar for Processing */}
        {project.status === 'processing' && (
          <div>
            <div className="flex justify-between text-xs text-secondary mb-2">
              <span>Processing...</span>
              <span>{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-primary to-blue-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-700">
          <div className="flex items-center space-x-2">
            <motion.button
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-4 h-4" />
            </motion.button>
            <motion.button
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
            </motion.button>
          </div>
          
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;