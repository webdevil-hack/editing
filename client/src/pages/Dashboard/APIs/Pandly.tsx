import React, { useState } from 'react';
import { Scissors, Play, Download, Settings, Upload, Clock, Zap, Target } from 'lucide-react';

const Pandly = () => {
  const [formData, setFormData] = useState({
    videoUrl: '',
    trimStart: 0,
    trimEnd: 30,
    quality: 'high',
    format: 'mp4',
    autoTrim: false,
    smartCuts: true,
    stabilization: false,
    colorCorrection: true
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [processedVideo, setProcessedVideo] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleProcess = async () => {
    setIsProcessing(true);
    setTimeout(() => {
      setProcessedVideo({
        id: 'video_' + Date.now(),
        url: 'https://example.com/pandly-video.mp4',
        duration: formData.trimEnd - formData.trimStart,
        quality: formData.quality,
        status: 'completed'
      });
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-green-500 rounded-lg">
          <Scissors className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Pandly Videos API</h1>
          <p className="text-gray-400">Automated video editing and trimming</p>
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
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
            <h3 className="text-lg font-semibold text-white mb-4">Trim Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Start Time (seconds)</label>
                <input
                  type="number"
                  name="trimStart"
                  value={formData.trimStart}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">End Time (seconds)</label>
                <input
                  type="number"
                  name="trimEnd"
                  value={formData.trimEnd}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  min="1"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="autoTrim"
                  checked={formData.autoTrim}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-green-600 bg-gray-800 border-gray-700 rounded focus:ring-green-500"
                />
                <span className="text-white">Auto-detect best moments</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Processing Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Quality</label>
                <select
                  name="quality"
                  value={formData.quality}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="ultra">Ultra</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Format</label>
                <select
                  name="format"
                  value={formData.format}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="mp4">MP4</option>
                  <option value="mov">MOV</option>
                  <option value="avi">AVI</option>
                  <option value="webm">WebM</option>
                </select>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="smartCuts"
                  checked={formData.smartCuts}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-green-600 bg-gray-800 border-gray-700 rounded focus:ring-green-500"
                />
                <span className="text-white">Smart cuts and transitions</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="stabilization"
                  checked={formData.stabilization}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-green-600 bg-gray-800 border-gray-700 rounded focus:ring-green-500"
                />
                <span className="text-white">Video stabilization</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="colorCorrection"
                  checked={formData.colorCorrection}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-green-600 bg-gray-800 border-gray-700 rounded focus:ring-green-500"
                />
                <span className="text-white">Auto color correction</span>
              </label>
            </div>
          </div>

          <button
            onClick={handleProcess}
            disabled={isProcessing || !formData.videoUrl}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Processing Video...</span>
              </>
            ) : (
              <>
                <Scissors className="w-5 h-5" />
                <span>Process Video</span>
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
                  <Scissors className="w-12 h-12 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <p className="text-white font-medium">Video Processed Successfully!</p>
                  <p className="text-sm text-gray-400">Duration: {processedVideo.duration}s</p>
                  <p className="text-sm text-gray-400">Quality: {processedVideo.quality}</p>
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
                  <Scissors className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400">Processed video will appear here</p>
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
                <span className="text-gray-300">Videos Processed</span>
                <span className="text-white font-medium">2,847 / 10,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Last Used</span>
                <span className="text-white font-medium">3 hours ago</span>
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

export default Pandly;