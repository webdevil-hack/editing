import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiTrash2, FiDownload, FiEye } from 'react-icons/fi';
import { toast } from 'react-toastify';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/video/projects');
      setProjects(response.data.projects || []);
    } catch (error) {
      toast.error('Failed to fetch projects');
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/video/project/${id}`);
      toast.success('Project deleted successfully');
      fetchProjects();
    } catch (error) {
      toast.error('Failed to delete project');
      console.error('Error deleting project:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold glow-text mb-2">My Projects</h1>
        <p className="text-gray-400">Manage all your video projects</p>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden hover:glow-effect transition-all duration-300"
            >
              <div className="aspect-video bg-dark-700 flex items-center justify-center">
                {project.thumbnailUrl ? (
                  <img src={project.thumbnailUrl} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-6xl text-gray-600">📹</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1 truncate">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-2 line-clamp-2">{project.description || project.prompt}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-accent-primary">{project.tool}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'completed' ? 'bg-green-500/20 text-green-500' :
                    project.status === 'processing' ? 'bg-yellow-500/20 text-yellow-500' :
                    project.status === 'failed' ? 'bg-red-500/20 text-red-500' :
                    'bg-gray-500/20 text-gray-500'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex gap-2">
                  {project.videoUrl && (
                    <>
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-accent-primary rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-accent-primary/80 transition-colors"
                      >
                        <FiEye /> View
                      </a>
                      <a
                        href={project.videoUrl}
                        download
                        className="px-3 py-2 bg-dark-700 rounded-lg text-sm flex items-center justify-center hover:bg-dark-600 transition-colors"
                      >
                        <FiDownload />
                      </a>
                    </>
                  )}
                  <button
                    onClick={() => deleteProject(project._id)}
                    className="px-3 py-2 bg-red-500/20 text-red-500 rounded-lg text-sm flex items-center justify-center hover:bg-red-500/30 transition-colors"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="glass p-12 rounded-xl text-center">
          <div className="text-6xl mb-4">🎬</div>
          <h3 className="text-xl font-semibold mb-2">No Projects Yet</h3>
          <p className="text-gray-400">Create your first video project to get started!</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
