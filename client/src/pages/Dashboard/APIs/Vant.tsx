import React, { useState } from 'react';
import { Play, Play as PlayIcon, Download, Settings, Upload, Zap, Target, Brain, Sparkles } from 'lucide-react';

const Vant = () => {
  const [formData, setFormData] = useState({
    videoUrl: '',
    automationType: 'smart',
    aiModel: 'vant-2.1',
    processingMode: 'balanced',
    intelligence: 'high',
    features: [],
    optimization: 'quality',
    realTime: false,
    batchMode: false,
    customPrompts: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [processedVideo, setProcessedVideo] = useState(null);

  const automationTypes = [
    { id: 'smart', name: 'Smart Automation', description: 'AI-powered intelligent processing' },
    { id: 'content', name: 'Content Analysis', description: 'Advanced content understanding' },
    { id: 'editing', name: 'Auto Editing', description: 'Automated video editing' },
    { id: 'enhancement', name: 'Enhancement', description: 'AI video enhancement' },
    { id: 'generation', name: 'Generation', description: 'AI video generation' },
    { id: 'custom', name: 'Custom Workflow', description: 'Custom AI processing pipeline' }
  ];

  const features = [
    { id: 'object', name: 'Object Detection', description: 'AI object recognition and tracking' },
    { id: 'scene', name: 'Scene Analysis', description: 'Intelligent scene understanding' },
    { id: 'emotion', name: 'Emotion Recognition', description: 'Facial emotion analysis' },
    { id: 'motion', name: 'Motion Analysis', description: 'Advanced motion tracking' },
    { id: 'audio', name: 'Audio Processing', description: 'AI audio enhancement' },
    { id: 'translation', name: 'Auto Translation', description: 'Multi-language support' },
    { id: 'subtitles', name: 'Auto Subtitles', description: 'Automatic subtitle generation' },
    { id: 'thumbnails', name: 'Smart Thumbnails', description: 'AI-generated thumbnails' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFeatureToggle = (featureId) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const handleProcess = async () => {
    setIsProcessing(true);
    setTimeout(() => {
      setProcessedVideo({
        id: 'video_' + Date.now(),
        url: 'https://example.com/vant-video.mp4',
        automationType: formData.automationType,
        aiModel: formData.aiModel,
        features: formData.features,
        status: 'completed'
      });
      setIsProcessing(false);
    }, 6000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-cyan-500 rounded-lg">
          <PlayIcon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Vant 2.1 API</h1>
          <p className="text-gray-400">Next-gen video AI and automation</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Video Input</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Video URL</label>
                <input
                  type="url"
                  name="videoUrl"
                  value={formData.videoUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/video.mp4"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white hover:bg-gray-700 transition-colors">
                  <Upload className="w-4 h-4" />
                  <span>Upload File</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white hover:bg-gray-700 transition-colors">
                  <Target className="w-4 h-4" />
                  <span>From Library</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Automation Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {automationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    formData.automationType === type.id
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, automationType: type.id }))}
                >
                  <h4 className="font-medium text-white">{type.name}</h4>
                  <p className="text-sm text-gray-400">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">AI Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">AI Model</label>
                <select
                  name="aiModel"
                  value={formData.aiModel}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="vant-2.1">Vant 2.1 (Latest)</option>
                  <option value="vant-2.0">Vant 2.0 (Stable)</option>
                  <option value="vant-1.5">Vant 1.5 (Legacy)</option>
                  <option value="custom">Custom Model</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Processing Mode</label>
                <select
                  name="processingMode"
                  value={formData.processingMode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="fast">Fast (Lower Quality)</option>
                  <option value="balanced">Balanced (Recommended)</option>
                  <option value="quality">High Quality</option>
                  <option value="ultra">Ultra Quality</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Intelligence Level</label>
                <select
                  name="intelligence"
                  value={formData.intelligence}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="high">High</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Optimization</label>
                <select
                  name="optimization"
                  value={formData.optimization}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="speed">Speed</option>
                  <option value="quality">Quality</option>
                  <option value="balanced">Balanced</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">AI Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    formData.features.includes(feature.id)
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => handleFeatureToggle(feature.id)}
                >
                  <h4 className="font-medium text-white text-sm">{feature.name}</h4>
                  <p className="text-xs text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Advanced Options</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Custom AI Prompts</label>
                <textarea
                  name="customPrompts"
                  value={formData.customPrompts}
                  onChange={handleInputChange}
                  placeholder="Enter custom AI instructions for video processing..."
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent h-24 resize-none"
                />
              </div>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="realTime"
                    checked={formData.realTime}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-cyan-600 bg-gray-800 border-gray-700 rounded focus:ring-cyan-500"
                  />
                  <span className="text-white">Real-time Processing</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="batchMode"
                    checked={formData.batchMode}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-cyan-600 bg-gray-800 border-gray-700 rounded focus:ring-cyan-500"
                  />
                  <span className="text-white">Batch Processing Mode</span>
                </label>
              </div>
            </div>
          </div>

          <button
            onClick={handleProcess}
            disabled={isProcessing || !formData.videoUrl}
            className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>AI Processing...</span>
              </>
            ) : (
              <>
                <Brain className="w-5 h-5" />
                <span>Start AI Processing</span>
              </>
            )}
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
            {processedVideo ? (
              <div className="space-y-4">
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <PlayIcon className="w-12 h-12 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <p className="text-white font-medium">AI Processing Complete!</p>
                  <p className="text-sm text-gray-400">Type: {processedVideo.automationType}</p>
                  <p className="text-sm text-gray-400">Model: {processedVideo.aiModel}</p>
                  <p className="text-sm text-gray-400">Features: {processedVideo.features.length}</p>
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
                  <Brain className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400">AI processed video will appear here</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">API Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Connection</span>
                <span className="text-green-400 font-medium">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">AI Processes</span>
                <span className="text-white font-medium">4,521 / 20,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Last Used</span>
                <span className="text-white font-medium">30 minutes ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Processing Time</span>
                <span className="text-white font-medium">4.1s avg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vant;