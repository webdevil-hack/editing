import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Save, 
  Download, 
  Settings,
  Layers,
  Wand2,
  Upload,
  Type,
  Image,
  Volume2,
  Scissors,
  Palette,
  Sparkles,
  ArrowLeft,
  MoreHorizontal
} from 'lucide-react';

const VideoEditor = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'default';
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(120);
  const [selectedTool, setSelectedTool] = useState('shotstack');
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load project data if editing existing project
    if (id) {
      // Simulate loading project
      setTimeout(() => {
        setProject({
          id,
          title: 'My Video Project',
          description: 'AI-generated video project'
        });
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
    }
  }, [id]);

  const tools = [
    { id: 'shotstack', name: 'Shotstack', icon: <Play className="w-4 h-4" /> },
    { id: 'creatomate', name: 'Creatomate', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'plainly', name: 'Plainly', icon: <Type className="w-4 h-4" /> },
    { id: 'tavus', name: 'Tavus', icon: <Wand2 className="w-4 h-4" /> }
  ];

  const editorTools = [
    { id: 'text', name: 'Text', icon: <Type className="w-5 h-5" /> },
    { id: 'media', name: 'Media', icon: <Image className="w-5 h-5" /> },
    { id: 'audio', name: 'Audio', icon: <Volume2 className="w-5 h-5" /> },
    { id: 'effects', name: 'Effects', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'transitions', name: 'Transitions', icon: <Scissors className="w-5 h-5" /> },
    { id: 'colors', name: 'Colors', icon: <Palette className="w-5 h-5" /> }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-white">Loading Video Editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="video-editor min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="font-semibold">
                {project ? project.title : 'New Video Project'}
              </h1>
              <p className="text-sm text-secondary">
                {mode === 'text-to-video' ? 'Text to Video Mode' : 'Video Editor'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* AI Tool Selector */}
            <select
              value={selectedTool}
              onChange={(e) => setSelectedTool(e.target.value)}
              className="input py-2 px-3"
            >
              {tools.map(tool => (
                <option key={tool.id} value={tool.id}>{tool.name}</option>
              ))}
            </select>

            <button className="btn btn-secondary">
              <Save className="w-4 h-4 mr-2" />
              Save
            </button>
            
            <button className="btn btn-primary">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Left Sidebar - Tools */}
        <aside className="w-16 border-r border-gray-800 flex flex-col items-center py-4 space-y-2">
          {editorTools.map(tool => (
            <button
              key={tool.id}
              className="w-12 h-12 rounded-lg hover:bg-gray-800 flex items-center justify-center transition-colors group"
              title={tool.name}
            >
              <span className="text-gray-400 group-hover:text-white transition-colors">
                {tool.icon}
              </span>
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Preview Area */}
          <div className="flex-1 bg-gray-900 flex items-center justify-center p-8">
            <div className="relative">
              <div className="w-96 h-56 bg-black rounded-lg overflow-hidden border border-gray-700">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <motion.button
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-1" />
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Video Controls */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-secondary">
                    {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}
                  </span>
                  <div className="flex-1 bg-gray-700 rounded-full h-2 relative">
                    <div 
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-secondary">
                    {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="h-48 border-t border-gray-800 bg-gray-900 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Timeline</h3>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                  <Layers className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Timeline Tracks */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-secondary w-16">Video</span>
                <div className="flex-1 h-8 bg-gray-800 rounded border border-gray-700 relative">
                  <div className="absolute inset-1 bg-gradient-to-r from-primary/50 to-primary/20 rounded"></div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-secondary w-16">Audio</span>
                <div className="flex-1 h-8 bg-gray-800 rounded border border-gray-700 relative">
                  <div className="absolute inset-1 bg-gradient-to-r from-blue-500/50 to-blue-500/20 rounded w-3/4"></div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-secondary w-16">Text</span>
                <div className="flex-1 h-8 bg-gray-800 rounded border border-gray-700"></div>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Properties */}
        <aside className="w-80 border-l border-gray-800 bg-gray-900 p-4">
          <div className="space-y-6">
            {/* AI Prompt */}
            {mode === 'text-to-video' && (
              <div>
                <h3 className="font-semibold mb-3">AI Video Generation</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-2">Prompt</label>
                    <textarea
                      className="input textarea"
                      rows="4"
                      placeholder="Describe the video you want to create..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Style</label>
                    <select className="input">
                      <option>Professional</option>
                      <option>Cinematic</option>
                      <option>Animated</option>
                      <option>Documentary</option>
                    </select>
                  </div>
                  <button className="btn btn-primary w-full">
                    <Wand2 className="w-4 h-4 mr-2" />
                    Generate Video
                  </button>
                </div>
              </div>
            )}

            {/* Project Settings */}
            <div>
              <h3 className="font-semibold mb-3">Project Settings</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-2">Resolution</label>
                  <select className="input">
                    <option>1920x1080 (Full HD)</option>
                    <option>1280x720 (HD)</option>
                    <option>3840x2160 (4K)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Frame Rate</label>
                  <select className="input">
                    <option>30 fps</option>
                    <option>24 fps</option>
                    <option>60 fps</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Duration</label>
                  <input
                    type="number"
                    className="input"
                    placeholder="120"
                    min="1"
                    max="600"
                  />
                </div>
              </div>
            </div>

            {/* Media Library */}
            <div>
              <h3 className="font-semibold mb-3">Media Library</h3>
              <div className="space-y-2">
                <button className="btn btn-outline w-full">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Media
                </button>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="aspect-square bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
                      <Image className="w-6 h-6 text-gray-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default VideoEditor;