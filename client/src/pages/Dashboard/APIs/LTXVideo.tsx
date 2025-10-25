import React, { useState } from 'react';
import { Film, Play, Download, Settings, Upload, Zap, Target, Palette } from 'lucide-react';

const LTXVideo = () => {
  const [formData, setFormData] = useState({
    videoUrl: '',
    processingType: 'enhancement',
    resolution: '4k',
    frameRate: '60fps',
    bitrate: 'high',
    effects: [],
    colorSpace: 'rec2020',
    hdr: true,
    noiseReduction: true,
    sharpening: 'medium',
    stabilization: 'auto'
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [processedVideo, setProcessedVideo] = useState(null);

  const processingTypes = [
    { id: 'enhancement', name: 'Enhancement', description: 'AI-powered video enhancement' },
    { id: 'upscaling', name: 'Upscaling', description: 'Increase resolution with AI' },
    { id: 'denoising', name: 'Denoising', description: 'Remove noise and artifacts' },
    { id: 'stabilization', name: 'Stabilization', description: 'Advanced video stabilization' },
    { id: 'color', name: 'Color Grading', description: 'Professional color correction' },
    { id: 'motion', name: 'Motion Analysis', description: 'Advanced motion processing' }
  ];

  const effects = [
    { id: 'hdr', name: 'HDR Enhancement', description: 'High dynamic range processing' },
    { id: 'tone', name: 'Tone Mapping', description: 'Advanced tone mapping' },
    { id: 'contrast', name: 'Contrast Boost', description: 'Intelligent contrast enhancement' },
    { id: 'saturation', name: 'Saturation Control', description: 'Precise color saturation' },
    { id: 'sharpness', name: 'Sharpness', description: 'AI-powered sharpening' },
    { id: 'grain', name: 'Film Grain', description: 'Add cinematic film grain' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEffectToggle = (effectId) => {
    setFormData(prev => ({
      ...prev,
      effects: prev.effects.includes(effectId)
        ? prev.effects.filter(id => id !== effectId)
        : [...prev.effects, effectId]
    }));
  };

  const handleProcess = async () => {
    setIsProcessing(true);
    setTimeout(() => {
      setProcessedVideo({
        id: 'video_' + Date.now(),
        url: 'https://example.com/ltx-video.mp4',
        processingType: formData.processingType,
        resolution: formData.resolution,
        effects: formData.effects,
        status: 'completed'
      });
      setIsProcessing(false);
    }, 5000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-red-500 rounded-lg">
          <Film className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">LTX Video API</h1>
          <p className="text-gray-400">Advanced video processing and effects</p>
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
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
            <h3 className="text-lg font-semibold text-white mb-4">Processing Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {processingTypes.map((type) => (
                <div
                  key={type.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    formData.processingType === type.id
                      ? 'border-red-500 bg-red-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, processingType: type.id }))}
                >
                  <h4 className="font-medium text-white">{type.name}</h4>
                  <p className="text-sm text-gray-400">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Video Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Resolution</label>
                <select
                  name="resolution"
                  value={formData.resolution}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="1080p">1080p Full HD</option>
                  <option value="4k">4K Ultra HD</option>
                  <option value="8k">8K Ultra HD</option>
                  <option value="custom">Custom Resolution</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Frame Rate</label>
                <select
                  name="frameRate"
                  value={formData.frameRate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="24fps">24fps (Cinematic)</option>
                  <option value="30fps">30fps (Standard)</option>
                  <option value="60fps">60fps (Smooth)</option>
                  <option value="120fps">120fps (Ultra Smooth)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Bitrate</label>
                <select
                  name="bitrate"
                  value={formData.bitrate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="low">Low (1-2 Mbps)</option>
                  <option value="medium">Medium (3-5 Mbps)</option>
                  <option value="high">High (6-10 Mbps)</option>
                  <option value="ultra">Ultra (10+ Mbps)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Color Space</label>
                <select
                  name="colorSpace"
                  value={formData.colorSpace}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="rec709">Rec. 709 (Standard)</option>
                  <option value="rec2020">Rec. 2020 (Wide Gamut)</option>
                  <option value="dci-p3">DCI-P3 (Cinema)</option>
                  <option value="adobe-rgb">Adobe RGB</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Advanced Effects</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {effects.map((effect) => (
                <div
                  key={effect.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    formData.effects.includes(effect.id)
                      ? 'border-red-500 bg-red-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => handleEffectToggle(effect.id)}
                >
                  <h4 className="font-medium text-white text-sm">{effect.name}</h4>
                  <p className="text-xs text-gray-400">{effect.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Processing Options</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sharpening</label>
                  <select
                    name="sharpening"
                    value={formData.sharpening}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="none">None</option>
                    <option value="light">Light</option>
                    <option value="medium">Medium</option>
                    <option value="strong">Strong</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Stabilization</label>
                  <select
                    name="stabilization"
                    value={formData.stabilization}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="none">None</option>
                    <option value="light">Light</option>
                    <option value="auto">Auto</option>
                    <option value="strong">Strong</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="hdr"
                    checked={formData.hdr}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-red-600 bg-gray-800 border-gray-700 rounded focus:ring-red-500"
                  />
                  <span className="text-white">HDR Processing</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="noiseReduction"
                    checked={formData.noiseReduction}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-red-600 bg-gray-800 border-gray-700 rounded focus:ring-red-500"
                  />
                  <span className="text-white">AI Noise Reduction</span>
                </label>
              </div>
            </div>
          </div>

          <button
            onClick={handleProcess}
            disabled={isProcessing || !formData.videoUrl}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Processing Video...</span>
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
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
                  <Film className="w-12 h-12 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <p className="text-white font-medium">Video Processed Successfully!</p>
                  <p className="text-sm text-gray-400">Type: {processedVideo.processingType}</p>
                  <p className="text-sm text-gray-400">Resolution: {processedVideo.resolution}</p>
                  <p className="text-sm text-gray-400">Effects: {processedVideo.effects.length}</p>
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
                  <Film className="w-12 h-12 text-gray-400 mx-auto mb-2" />
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
                <span className="text-white font-medium">3,247 / 15,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Last Used</span>
                <span className="text-white font-medium">6 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Processing Time</span>
                <span className="text-white font-medium">3.2s avg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LTXVideo;