import React, { useState } from 'react';
import { Sparkles, Play, Download, Wand2, Upload, Settings, Zap, Target } from 'lucide-react';

const LuckyEdit = () => {
  const [formData, setFormData] = useState({
    videoUrl: '',
    editType: 'auto',
    style: 'modern',
    intensity: 'medium',
    effects: [],
    transitions: 'smooth',
    music: false,
    colorGrading: true,
    stabilization: true,
    autoCrop: false
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedVideo, setEditedVideo] = useState(null);

  const editTypes = [
    { id: 'auto', name: 'Auto Edit', description: 'AI-powered automatic editing' },
    { id: 'social', name: 'Social Media', description: 'Optimized for social platforms' },
    { id: 'cinematic', name: 'Cinematic', description: 'Movie-style editing' },
    { id: 'documentary', name: 'Documentary', description: 'Professional documentary style' },
    { id: 'commercial', name: 'Commercial', description: 'Marketing and advertising style' }
  ];

  const effects = [
    { id: 'slowmo', name: 'Slow Motion', description: 'Dramatic slow motion effects' },
    { id: 'timelapse', name: 'Time Lapse', description: 'Speed up footage' },
    { id: 'zoom', name: 'Zoom Effects', description: 'Dynamic zoom transitions' },
    { id: 'fade', name: 'Fade Transitions', description: 'Smooth fade effects' },
    { id: 'glitch', name: 'Glitch Effects', description: 'Modern glitch aesthetics' },
    { id: 'vintage', name: 'Vintage Look', description: 'Retro film effects' }
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

  const handleEdit = async () => {
    setIsEditing(true);
    setTimeout(() => {
      setEditedVideo({
        id: 'video_' + Date.now(),
        url: 'https://example.com/luckyedit-video.mp4',
        editType: formData.editType,
        effects: formData.effects,
        status: 'completed'
      });
      setIsEditing(false);
    }, 3500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-yellow-500 rounded-lg">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">LuckyEdit API</h1>
          <p className="text-gray-400">Smart video editing and effects</p>
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
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
            <h3 className="text-lg font-semibold text-white mb-4">Edit Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {editTypes.map((type) => (
                <div
                  key={type.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    formData.editType === type.id
                      ? 'border-yellow-500 bg-yellow-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, editType: type.id }))}
                >
                  <h4 className="font-medium text-white">{type.name}</h4>
                  <p className="text-sm text-gray-400">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Style & Intensity</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Style</label>
                <select
                  name="style"
                  value={formData.style}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="modern">Modern</option>
                  <option value="vintage">Vintage</option>
                  <option value="minimalist">Minimalist</option>
                  <option value="dramatic">Dramatic</option>
                  <option value="playful">Playful</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Intensity</label>
                <select
                  name="intensity"
                  value={formData.intensity}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="extreme">Extreme</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Effects</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {effects.map((effect) => (
                <div
                  key={effect.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    formData.effects.includes(effect.id)
                      ? 'border-yellow-500 bg-yellow-500/10'
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
            <h3 className="text-lg font-semibold text-white mb-4">Advanced Options</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Transitions</label>
                <select
                  name="transitions"
                  value={formData.transitions}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="smooth">Smooth</option>
                  <option value="sharp">Sharp</option>
                  <option value="creative">Creative</option>
                  <option value="none">None</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="music"
                    checked={formData.music}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-yellow-600 bg-gray-800 border-gray-700 rounded focus:ring-yellow-500"
                  />
                  <span className="text-white">Add background music</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="colorGrading"
                    checked={formData.colorGrading}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-yellow-600 bg-gray-800 border-gray-700 rounded focus:ring-yellow-500"
                  />
                  <span className="text-white">Auto color grading</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="stabilization"
                    checked={formData.stabilization}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-yellow-600 bg-gray-800 border-gray-700 rounded focus:ring-yellow-500"
                  />
                  <span className="text-white">Video stabilization</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="autoCrop"
                    checked={formData.autoCrop}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-yellow-600 bg-gray-800 border-gray-700 rounded focus:ring-yellow-500"
                  />
                  <span className="text-white">Auto crop and resize</span>
                </label>
              </div>
            </div>
          </div>

          <button
            onClick={handleEdit}
            disabled={isEditing || !formData.videoUrl}
            className="w-full bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            {isEditing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Editing Video...</span>
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5" />
                <span>Edit Video</span>
              </>
            )}
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
            {editedVideo ? (
              <div className="space-y-4">
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <p className="text-white font-medium">Video Edited Successfully!</p>
                  <p className="text-sm text-gray-400">Type: {editedVideo.editType}</p>
                  <p className="text-sm text-gray-400">Effects: {editedVideo.effects.length}</p>
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
                  <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400">Edited video will appear here</p>
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
                <span className="text-gray-300">Videos Edited</span>
                <span className="text-white font-medium">1,456 / 5,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Last Used</span>
                <span className="text-white font-medium">4 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Processing Time</span>
                <span className="text-white font-medium">1.8s avg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuckyEdit;