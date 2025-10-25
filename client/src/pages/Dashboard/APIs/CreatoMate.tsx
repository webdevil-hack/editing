import React, { useState } from 'react';
import { Palette, Play, Download, Image, Wand2, Layers, Sparkles, Clock } from 'lucide-react';

const CreatoMate = () => {
  const [formData, setFormData] = useState({
    template: 'social',
    aspectRatio: '16:9',
    duration: 15,
    style: 'modern',
    colors: ['#3B82F6', '#8B5CF6'],
    text: '',
    animation: 'fade',
    music: true,
    voiceover: false
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState(null);

  const templates = [
    { id: 'social', name: 'Social Media', description: 'Instagram, TikTok, YouTube Shorts' },
    { id: 'presentation', name: 'Presentation', description: 'Business and educational content' },
    { id: 'advertisement', name: 'Advertisement', description: 'Marketing and promotional videos' },
    { id: 'story', name: 'Story', description: 'Narrative and storytelling format' },
    { id: 'tutorial', name: 'Tutorial', description: 'How-to and educational content' }
  ];

  const aspectRatios = [
    { id: '16:9', name: '16:9', description: 'Widescreen' },
    { id: '9:16', name: '9:16', description: 'Vertical (Mobile)' },
    { id: '1:1', name: '1:1', description: 'Square' },
    { id: '4:3', name: '4:3', description: 'Standard' }
  ];

  const animations = [
    { id: 'fade', name: 'Fade', description: 'Smooth fade transitions' },
    { id: 'slide', name: 'Slide', description: 'Sliding animations' },
    { id: 'zoom', name: 'Zoom', description: 'Zoom in/out effects' },
    { id: 'flip', name: 'Flip', description: '3D flip animations' },
    { id: 'bounce', name: 'Bounce', description: 'Bouncy animations' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedVideo({
        id: 'video_' + Date.now(),
        url: 'https://example.com/creatomate-video.mp4',
        duration: formData.duration,
        aspectRatio: formData.aspectRatio,
        status: 'completed'
      });
      setIsGenerating(false);
    }, 4000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-purple-500 rounded-lg">
          <Palette className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">CreatoMate API</h1>
          <p className="text-gray-400">AI-powered video creation and templates</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Template Selection */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Choose Template</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    formData.template === template.id
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, template: template.id }))}
                >
                  <h4 className="font-medium text-white">{template.name}</h4>
                  <p className="text-sm text-gray-400">{template.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Settings */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Video Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Aspect Ratio</label>
                <select
                  name="aspectRatio"
                  value={formData.aspectRatio}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {aspectRatios.map((ratio) => (
                    <option key={ratio.id} value={ratio.id}>{ratio.name} - {ratio.description}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Duration (seconds)</label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="5"
                  max="60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Style</label>
                <select
                  name="style"
                  value={formData.style}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="modern">Modern</option>
                  <option value="classic">Classic</option>
                  <option value="minimalist">Minimalist</option>
                  <option value="vibrant">Vibrant</option>
                  <option value="elegant">Elegant</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Animation</label>
                <select
                  name="animation"
                  value={formData.animation}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {animations.map((anim) => (
                    <option key={anim.id} value={anim.id}>{anim.name} - {anim.description}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Content Input */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Content</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Text Content</label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleInputChange}
                  placeholder="Enter your text content here..."
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent h-24 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Color Scheme */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Color Scheme</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Primary Color</label>
                  <input
                    type="color"
                    value={formData.colors[0]}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      colors: [e.target.value, prev.colors[1]]
                    }))}
                    className="w-full h-10 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Secondary Color</label>
                  <input
                    type="color"
                    value={formData.colors[1]}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      colors: [prev.colors[0], e.target.value]
                    }))}
                    className="w-full h-10 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Options */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Additional Options</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="music"
                  checked={formData.music}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-700 rounded focus:ring-purple-500"
                />
                <span className="text-white">Add background music</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="voiceover"
                  checked={formData.voiceover}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-700 rounded focus:ring-purple-500"
                />
                <span className="text-white">Add voiceover</span>
              </label>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !formData.text}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Creating Video...</span>
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5" />
                <span>Create Video</span>
              </>
            )}
          </button>
        </div>

        {/* Preview Panel */}
        <div className="space-y-6">
          {/* Video Preview */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
            {generatedVideo ? (
              <div className="space-y-4">
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <Palette className="w-12 h-12 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <p className="text-white font-medium">Video Created Successfully!</p>
                  <p className="text-sm text-gray-400">Duration: {generatedVideo.duration}s</p>
                  <p className="text-sm text-gray-400">Aspect Ratio: {generatedVideo.aspectRatio}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Play</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Palette className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400">Video preview will appear here</p>
                </div>
              </div>
            )}
          </div>

          {/* API Status */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">API Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Connection</span>
                <span className="text-green-400 font-medium">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Templates Used</span>
                <span className="text-white font-medium">342 / 1,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Last Used</span>
                <span className="text-white font-medium">1 day ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Response Time</span>
                <span className="text-white font-medium">2.1s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatoMate;