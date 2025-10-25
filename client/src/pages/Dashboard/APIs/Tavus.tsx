import React, { useState } from 'react';
import { Camera, Play, Download, User, Upload, Settings, Zap, Sparkles } from 'lucide-react';

const Tavus = () => {
  const [formData, setFormData] = useState({
    avatarType: 'realistic',
    gender: 'neutral',
    age: 'adult',
    ethnicity: 'diverse',
    voice: 'natural',
    language: 'en-US',
    emotion: 'neutral',
    gesture: 'none',
    background: 'transparent',
    quality: 'high'
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAvatar, setGeneratedAvatar] = useState(null);

  const avatarTypes = [
    { id: 'realistic', name: 'Realistic', description: 'Photorealistic human avatar' },
    { id: 'cartoon', name: 'Cartoon', description: 'Animated cartoon style' },
    { id: 'anime', name: 'Anime', description: 'Anime/manga style' },
    { id: '3d', name: '3D Model', description: '3D rendered avatar' },
    { id: 'custom', name: 'Custom', description: 'Upload your own model' }
  ];

  const emotions = [
    { id: 'neutral', name: 'Neutral', description: 'Calm and professional' },
    { id: 'happy', name: 'Happy', description: 'Cheerful and upbeat' },
    { id: 'serious', name: 'Serious', description: 'Professional and focused' },
    { id: 'excited', name: 'Excited', description: 'Energetic and enthusiastic' },
    { id: 'calm', name: 'Calm', description: 'Relaxed and soothing' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedAvatar({
        id: 'avatar_' + Date.now(),
        url: 'https://example.com/tavus-avatar.mp4',
        type: formData.avatarType,
        emotion: formData.emotion,
        status: 'completed'
      });
      setIsGenerating(false);
    }, 4000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-orange-500 rounded-lg">
          <Camera className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Tavus API</h1>
          <p className="text-gray-400">AI avatar and video generation</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Avatar Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {avatarTypes.map((type) => (
                <div
                  key={type.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    formData.avatarType === type.id
                      ? 'border-orange-500 bg-orange-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, avatarType: type.id }))}
                >
                  <h4 className="font-medium text-white">{type.name}</h4>
                  <p className="text-sm text-gray-400">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Avatar Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="neutral">Neutral</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Age</label>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="child">Child</option>
                  <option value="teen">Teen</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Ethnicity</label>
                <select
                  name="ethnicity"
                  value={formData.ethnicity}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="diverse">Diverse</option>
                  <option value="caucasian">Caucasian</option>
                  <option value="african">African</option>
                  <option value="asian">Asian</option>
                  <option value="hispanic">Hispanic</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Quality</label>
                <select
                  name="quality"
                  value={formData.quality}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="standard">Standard</option>
                  <option value="high">High</option>
                  <option value="ultra">Ultra</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Voice & Expression</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Voice Type</label>
                <select
                  name="voice"
                  value={formData.voice}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="natural">Natural</option>
                  <option value="professional">Professional</option>
                  <option value="friendly">Friendly</option>
                  <option value="authoritative">Authoritative</option>
                  <option value="casual">Casual</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="en-US">English (US)</option>
                  <option value="en-GB">English (UK)</option>
                  <option value="es-ES">Spanish</option>
                  <option value="fr-FR">French</option>
                  <option value="de-DE">German</option>
                  <option value="zh-CN">Chinese</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Emotion</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {emotions.map((emotion) => (
                  <div
                    key={emotion.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      formData.emotion === emotion.id
                        ? 'border-orange-500 bg-orange-500/10'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, emotion: emotion.id }))}
                  >
                    <h4 className="font-medium text-white text-sm">{emotion.name}</h4>
                    <p className="text-xs text-gray-400">{emotion.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Background & Gestures</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Background</label>
                <select
                  name="background"
                  value={formData.background}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="transparent">Transparent</option>
                  <option value="office">Office</option>
                  <option value="studio">Studio</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="custom">Custom Upload</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Gestures</label>
                <select
                  name="gesture"
                  value={formData.gesture}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="none">None</option>
                  <option value="nodding">Nodding</option>
                  <option value="pointing">Pointing</option>
                  <option value="handshake">Handshake</option>
                  <option value="thumbsup">Thumbs Up</option>
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Generating Avatar...</span>
              </>
            ) : (
              <>
                <Camera className="w-5 h-5" />
                <span>Generate Avatar</span>
              </>
            )}
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
            {generatedAvatar ? (
              <div className="space-y-4">
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <Camera className="w-12 h-12 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <p className="text-white font-medium">Avatar Generated Successfully!</p>
                  <p className="text-sm text-gray-400">Type: {generatedAvatar.type}</p>
                  <p className="text-sm text-gray-400">Emotion: {generatedAvatar.emotion}</p>
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
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400">AI avatar will appear here</p>
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
                <span className="text-gray-300">Avatars Created</span>
                <span className="text-white font-medium">189 / 1,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Last Used</span>
                <span className="text-white font-medium">5 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Generation Time</span>
                <span className="text-white font-medium">2.3s avg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tavus;