import React, { useState } from 'react';
import { Video, Play, Download, Settings, Upload, Scissors, Palette, Clock } from 'lucide-react';

const ShotStack = () => {
  const [formData, setFormData] = useState({
    template: 'basic',
    duration: 30,
    resolution: '1080p',
    format: 'mp4',
    quality: 'high',
    prompt: '',
    style: 'cinematic',
    music: false,
    voiceover: false
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState(null);

  const templates = [
    { id: 'basic', name: 'Basic Video', description: 'Simple video creation' },
    { id: 'cinematic', name: 'Cinematic', description: 'Movie-style video' },
    { id: 'social', name: 'Social Media', description: 'Optimized for social platforms' },
    { id: 'presentation', name: 'Presentation', description: 'Business presentation style' },
    { id: 'tutorial', name: 'Tutorial', description: 'Educational content style' }
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
        url: 'https://example.com/video.mp4',
        duration: formData.duration,
        resolution: formData.resolution,
        status: 'completed'
      });
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-blue-500 rounded-lg">
          <Video className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">ShotStack API</h1>
          <p className="text-gray-400">Professional video editing and rendering</p>
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
                      ? 'border-blue-500 bg-blue-500/10'
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
                <label className="block text-sm font-medium text-gray-300 mb-2">Duration (seconds)</label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="5"
                  max="300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Resolution</label>
                <select
                  name="resolution"
                  value={formData.resolution}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="720p">720p HD</option>
                  <option value="1080p">1080p Full HD</option>
                  <option value="4k">4K Ultra HD</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Format</label>
                <select
                  name="format"
                  value={formData.format}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="mp4">MP4</option>
                  <option value="mov">MOV</option>
                  <option value="avi">AVI</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Quality</label>
                <select
                  name="quality"
                  value={formData.quality}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="ultra">Ultra</option>
                </select>
              </div>
            </div>
          </div>

          {/* Content Input */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Content</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Video Prompt</label>
                <textarea
                  name="prompt"
                  value={formData.prompt}
                  onChange={handleInputChange}
                  placeholder="Describe the video you want to create..."
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Style</label>
                <select
                  name="style"
                  value={formData.style}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="cinematic">Cinematic</option>
                  <option value="documentary">Documentary</option>
                  <option value="commercial">Commercial</option>
                  <option value="artistic">Artistic</option>
                  <option value="minimalist">Minimalist</option>
                </select>
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
                  className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
                />
                <span className="text-white">Add background music</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="voiceover"
                  checked={formData.voiceover}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
                />
                <span className="text-white">Add voiceover</span>
              </label>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !formData.prompt}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Generating Video...</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                <span>Generate Video</span>
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
                  <Video className="w-12 h-12 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <p className="text-white font-medium">Video Generated Successfully!</p>
                  <p className="text-sm text-gray-400">Duration: {generatedVideo.duration}s</p>
                  <p className="text-sm text-gray-400">Resolution: {generatedVideo.resolution}</p>
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
                  <Video className="w-12 h-12 text-gray-400 mx-auto mb-2" />
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
                <span className="text-gray-300">Credits Used</span>
                <span className="text-white font-medium">1,247 / 10,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Last Used</span>
                <span className="text-white font-medium">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Response Time</span>
                <span className="text-white font-medium">1.2s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShotStack;