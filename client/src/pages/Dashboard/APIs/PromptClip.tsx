import React, { useState } from 'react';
import { Wand2, Play, Download, Type, Sparkles, Clock, Zap } from 'lucide-react';

const PromptClip = () => {
  const [formData, setFormData] = useState({
    prompt: '',
    duration: 10,
    style: 'realistic',
    quality: 'high',
    aspectRatio: '16:9',
    voiceover: false,
    music: false,
    subtitles: true
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState(null);

  const styles = [
    { id: 'realistic', name: 'Realistic', description: 'Photorealistic video' },
    { id: 'animated', name: 'Animated', description: 'Cartoon/animated style' },
    { id: 'artistic', name: 'Artistic', description: 'Creative artistic style' },
    { id: 'cinematic', name: 'Cinematic', description: 'Movie-like quality' },
    { id: 'abstract', name: 'Abstract', description: 'Abstract visual style' }
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
        url: 'https://example.com/promptclip-video.mp4',
        duration: formData.duration,
        style: formData.style,
        status: 'completed'
      });
      setIsGenerating(false);
    }, 5000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-pink-500 rounded-lg">
          <Wand2 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">PromptClip API</h1>
          <p className="text-gray-400">Text-to-video generation powered by AI</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Prompt Input */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Describe Your Video</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Video Prompt</label>
                <textarea
                  name="prompt"
                  value={formData.prompt}
                  onChange={handleInputChange}
                  placeholder="Describe the video you want to create in detail. Be specific about scenes, actions, characters, and style..."
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent h-32 resize-none"
                />
                <p className="text-xs text-gray-400 mt-1">The more detailed your prompt, the better the result will be.</p>
              </div>
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
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  min="5"
                  max="30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Style</label>
                <select
                  name="style"
                  value={formData.style}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {styles.map((style) => (
                    <option key={style.id} value={style.id}>{style.name} - {style.description}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Quality</label>
                <select
                  name="quality"
                  value={formData.quality}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="standard">Standard</option>
                  <option value="high">High</option>
                  <option value="ultra">Ultra</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Aspect Ratio</label>
                <select
                  name="aspectRatio"
                  value={formData.aspectRatio}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="16:9">16:9 (Widescreen)</option>
                  <option value="9:16">9:16 (Vertical)</option>
                  <option value="1:1">1:1 (Square)</option>
                  <option value="4:3">4:3 (Standard)</option>
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
                  name="voiceover"
                  checked={formData.voiceover}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-pink-600 bg-gray-800 border-gray-700 rounded focus:ring-pink-500"
                />
                <span className="text-white">Generate voiceover from text</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="music"
                  checked={formData.music}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-pink-600 bg-gray-800 border-gray-700 rounded focus:ring-pink-500"
                />
                <span className="text-white">Add background music</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="subtitles"
                  checked={formData.subtitles}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-pink-600 bg-gray-800 border-gray-700 rounded focus:ring-pink-500"
                />
                <span className="text-white">Add automatic subtitles</span>
              </label>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !formData.prompt}
            className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Generating Video...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
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
                  <Wand2 className="w-12 h-12 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <p className="text-white font-medium">Video Generated Successfully!</p>
                  <p className="text-sm text-gray-400">Duration: {generatedVideo.duration}s</p>
                  <p className="text-sm text-gray-400">Style: {generatedVideo.style}</p>
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
                  <Wand2 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400">AI-generated video will appear here</p>
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
                <span className="text-gray-300">Generations Used</span>
                <span className="text-white font-medium">156 / 500</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Last Used</span>
                <span className="text-white font-medium">1 hour ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Processing Time</span>
                <span className="text-white font-medium">45s avg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptClip;