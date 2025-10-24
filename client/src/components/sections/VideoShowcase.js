import React from 'react';
import { Play, Heart, Share2, Download } from 'lucide-react';
import './VideoShowcase.css';

const VideoShowcase = () => {
  const videos = [
    {
      id: 1,
      title: 'Cinematic Landscape',
      description: 'A breathtaking mountain landscape with dramatic lighting and smooth camera movements.',
      thumbnail: '/api/placeholder/400/200',
      duration: '0:30',
      likes: 124,
      views: 2500
    },
    {
      id: 2,
      title: 'Product Showcase',
      description: 'Professional product presentation with 3D effects and dynamic transitions.',
      thumbnail: '/api/placeholder/400/200',
      duration: '0:45',
      likes: 89,
      views: 1800
    },
    {
      id: 3,
      title: 'Abstract Art',
      description: 'Colorful abstract animation with fluid motion graphics and particle effects.',
      thumbnail: '/api/placeholder/400/200',
      duration: '1:00',
      likes: 156,
      views: 3200
    },
    {
      id: 4,
      title: 'Corporate Intro',
      description: 'Clean and professional corporate introduction with modern typography.',
      thumbnail: '/api/placeholder/400/200',
      duration: '0:20',
      likes: 67,
      views: 1200
    },
    {
      id: 5,
      title: 'Music Visualizer',
      description: 'Dynamic music visualization with synchronized audio-reactive graphics.',
      thumbnail: '/api/placeholder/400/200',
      duration: '2:15',
      likes: 203,
      views: 4500
    },
    {
      id: 6,
      title: 'Travel Montage',
      description: 'Beautiful travel compilation with cinematic transitions and color grading.',
      thumbnail: '/api/placeholder/400/200',
      duration: '1:30',
      likes: 178,
      views: 2800
    }
  ];

  return (
    <section className="video-showcase">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            See What Our AI Can
            <span className="gradient-text"> Create</span>
          </h2>
          <p className="section-description">
            Explore amazing videos created by our users using just text prompts.
          </p>
        </div>

        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">
                <div className="play-button">
                  <Play size={24} />
                </div>
                <div className="video-duration">{video.duration}</div>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <div className="video-stats">
                  <div className="stat">
                    <Heart size={16} />
                    <span>{video.likes}</span>
                  </div>
                  <div className="stat">
                    <Play size={16} />
                    <span>{video.views}</span>
                  </div>
                </div>
                <div className="video-actions">
                  <button className="action-btn">
                    <Share2 size={16} />
                  </button>
                  <button className="action-btn">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;