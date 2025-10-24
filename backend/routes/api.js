const express = require('express');
const axios = require('axios');
const { auth } = require('../middleware/auth');
const Video = require('../models/Video');

const router = express.Router();

// Shotstack API integration
router.post('/shotstack/render', auth, async (req, res) => {
  try {
    const { videoId, timeline } = req.body;
    const apiKey = req.user.apiKeys.shotstack;

    if (!apiKey) {
      return res.status(400).json({ message: 'Shotstack API key not configured' });
    }

    const video = await Video.findOne({
      _id: videoId,
      user: req.user._id
    });

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Shotstack API call
    const response = await axios.post('https://api.shotstack.io/stage/render', {
      timeline,
      output: {
        format: video.settings.format,
        resolution: video.settings.resolution,
        fps: video.settings.fps,
        quality: video.settings.quality
      }
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    // Update video with job ID
    video.processing.jobId = response.data.response.id;
    video.status = 'processing';
    video.processing.startedAt = new Date();
    await video.save();

    res.json({
      message: 'Render started successfully',
      jobId: response.data.response.id,
      video
    });

  } catch (error) {
    console.error('Shotstack render error:', error);
    res.status(500).json({ 
      message: 'Shotstack API error',
      error: error.response?.data || error.message 
    });
  }
});

// Check Shotstack render status
router.get('/shotstack/status/:jobId', auth, async (req, res) => {
  try {
    const { jobId } = req.params;
    const apiKey = req.user.apiKeys.shotstack;

    if (!apiKey) {
      return res.status(400).json({ message: 'Shotstack API key not configured' });
    }

    const response = await axios.get(`https://api.shotstack.io/stage/render/${jobId}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    const renderData = response.data.response;

    // Update video status
    const video = await Video.findOne({ 'processing.jobId': jobId });
    if (video) {
      video.processing.progress = renderData.status === 'done' ? 100 : 
                                 renderData.status === 'rendering' ? 50 : 25;
      
      if (renderData.status === 'done') {
        video.status = 'completed';
        video.processing.completedAt = new Date();
        video.output.url = renderData.url;
      } else if (renderData.status === 'failed') {
        video.status = 'failed';
      }

      await video.save();
    }

    res.json(renderData);

  } catch (error) {
    console.error('Shotstack status error:', error);
    res.status(500).json({ 
      message: 'Shotstack API error',
      error: error.response?.data || error.message 
    });
  }
});

// Creatomate API integration
router.post('/creatomate/render', auth, async (req, res) => {
  try {
    const { videoId, templateId, modifications } = req.body;
    const apiKey = req.user.apiKeys.creatomate;

    if (!apiKey) {
      return res.status(400).json({ message: 'Creatomate API key not configured' });
    }

    const video = await Video.findOne({
      _id: videoId,
      user: req.user._id
    });

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Creatomate API call
    const response = await axios.post('https://api.creatomate.com/v1/renders', {
      template_id: templateId,
      modifications,
      output_format: video.settings.format,
      width: parseInt(video.settings.resolution.split('x')[0]),
      height: parseInt(video.settings.resolution.split('x')[1]),
      frame_rate: video.settings.fps
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    // Update video with job ID
    video.processing.jobId = response.data.id;
    video.status = 'processing';
    video.processing.startedAt = new Date();
    await video.save();

    res.json({
      message: 'Render started successfully',
      jobId: response.data.id,
      video
    });

  } catch (error) {
    console.error('Creatomate render error:', error);
    res.status(500).json({ 
      message: 'Creatomate API error',
      error: error.response?.data || error.message 
    });
  }
});

// Plainly Videos API integration
router.post('/plainly/render', auth, async (req, res) => {
  try {
    const { videoId, templateId, parameters } = req.body;
    const apiKey = req.user.apiKeys.plainly;

    if (!apiKey) {
      return res.status(400).json({ message: 'Plainly API key not configured' });
    }

    const video = await Video.findOne({
      _id: videoId,
      user: req.user._id
    });

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Plainly API call
    const response = await axios.post('https://api.plainlyvideos.com/api/v1/renders', {
      template: templateId,
      parameters,
      webhook_url: `${process.env.CLIENT_URL}/api/webhooks/plainly`
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    // Update video with job ID
    video.processing.jobId = response.data.id;
    video.status = 'processing';
    video.processing.startedAt = new Date();
    await video.save();

    res.json({
      message: 'Render started successfully',
      jobId: response.data.id,
      video
    });

  } catch (error) {
    console.error('Plainly render error:', error);
    res.status(500).json({ 
      message: 'Plainly API error',
      error: error.response?.data || error.message 
    });
  }
});

// Tavus API integration
router.post('/tavus/generate', auth, async (req, res) => {
  try {
    const { videoId, script, voice_id, background_url } = req.body;
    const apiKey = req.user.apiKeys.tavus;

    if (!apiKey) {
      return res.status(400).json({ message: 'Tavus API key not configured' });
    }

    const video = await Video.findOne({
      _id: videoId,
      user: req.user._id
    });

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Tavus API call
    const response = await axios.post('https://tavusapi.com/v2/videos', {
      script,
      voice_id,
      background_url,
      webhook_url: `${process.env.CLIENT_URL}/api/webhooks/tavus`
    }, {
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json'
      }
    });

    // Update video with job ID
    video.processing.jobId = response.data.video_id;
    video.status = 'processing';
    video.processing.startedAt = new Date();
    await video.save();

    res.json({
      message: 'Video generation started successfully',
      jobId: response.data.video_id,
      video
    });

  } catch (error) {
    console.error('Tavus generate error:', error);
    res.status(500).json({ 
      message: 'Tavus API error',
      error: error.response?.data || error.message 
    });
  }
});

// Test API connection
router.post('/test-connection', auth, async (req, res) => {
  try {
    const { service } = req.body;
    const apiKey = req.user.apiKeys[service];

    if (!apiKey) {
      return res.status(400).json({ message: `${service} API key not configured` });
    }

    let testResult = { connected: false, message: '' };

    switch (service) {
      case 'shotstack':
        try {
          const response = await axios.get('https://api.shotstack.io/stage/assets', {
            headers: { 'Authorization': `Bearer ${apiKey}` }
          });
          testResult = { connected: true, message: 'Successfully connected to Shotstack' };
        } catch (error) {
          testResult = { connected: false, message: 'Failed to connect to Shotstack' };
        }
        break;

      case 'creatomate':
        try {
          const response = await axios.get('https://api.creatomate.com/v1/templates', {
            headers: { 'Authorization': `Bearer ${apiKey}` }
          });
          testResult = { connected: true, message: 'Successfully connected to Creatomate' };
        } catch (error) {
          testResult = { connected: false, message: 'Failed to connect to Creatomate' };
        }
        break;

      case 'plainly':
        try {
          const response = await axios.get('https://api.plainlyvideos.com/api/v1/templates', {
            headers: { 'Authorization': `Bearer ${apiKey}` }
          });
          testResult = { connected: true, message: 'Successfully connected to Plainly' };
        } catch (error) {
          testResult = { connected: false, message: 'Failed to connect to Plainly' };
        }
        break;

      case 'tavus':
        try {
          const response = await axios.get('https://tavusapi.com/v2/personas', {
            headers: { 'x-api-key': apiKey }
          });
          testResult = { connected: true, message: 'Successfully connected to Tavus' };
        } catch (error) {
          testResult = { connected: false, message: 'Failed to connect to Tavus' };
        }
        break;

      default:
        testResult = { connected: false, message: 'Unknown service' };
    }

    res.json(testResult);

  } catch (error) {
    console.error('Test connection error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;