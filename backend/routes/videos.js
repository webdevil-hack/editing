const express = require('express');
const { body, validationResult } = require('express-validator');
const { auth } = require('../middleware/auth');
const Video = require('../models/Video');
const User = require('../models/User');

const router = express.Router();

// Create new video project
router.post('/', auth, [
  body('title')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Title is required and must be less than 100 characters'),
  body('prompt')
    .trim()
    .isLength({ min: 1, max: 2000 })
    .withMessage('Prompt is required and must be less than 2000 characters'),
  body('tool')
    .isIn(['shotstack', 'creatomate', 'plainly', 'tavus', 'promptclip', 'lucy-edit', 'ltx-video', 'wan'])
    .withMessage('Invalid tool selected')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { title, description, prompt, tool, settings } = req.body;

    const video = new Video({
      title,
      description,
      prompt,
      tool,
      user: req.user._id,
      settings: {
        ...settings,
        resolution: settings?.resolution || '1920x1080',
        fps: settings?.fps || 30,
        format: settings?.format || 'mp4',
        quality: settings?.quality || 'high'
      }
    });

    await video.save();

    // Update user stats
    await User.findByIdAndUpdate(req.user._id, {
      $inc: { 'usage.videosCreated': 1 }
    });

    res.status(201).json({
      message: 'Video project created successfully',
      video
    });

  } catch (error) {
    console.error('Create video error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's videos
router.get('/', auth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const status = req.query.status;
    const tool = req.query.tool;

    let filter = { user: req.user._id };
    if (status) filter.status = status;
    if (tool) filter.tool = tool;

    const videos = await Video.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('user', 'username firstName lastName');

    const total = await Video.countDocuments(filter);

    res.json({
      videos,
      pagination: {
        current: page,
        total: Math.ceil(total / limit),
        count: videos.length,
        totalVideos: total
      }
    });

  } catch (error) {
    console.error('Get videos error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single video
router.get('/:id', auth, async (req, res) => {
  try {
    const video = await Video.findOne({
      _id: req.params.id,
      user: req.user._id
    }).populate('user', 'username firstName lastName');

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    res.json(video);

  } catch (error) {
    console.error('Get video error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update video
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, description, prompt, settings, status } = req.body;

    const video = await Video.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Update fields
    if (title) video.title = title;
    if (description !== undefined) video.description = description;
    if (prompt) video.prompt = prompt;
    if (settings) video.settings = { ...video.settings, ...settings };
    if (status) video.status = status;

    await video.save();

    res.json({
      message: 'Video updated successfully',
      video
    });

  } catch (error) {
    console.error('Update video error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete video
router.delete('/:id', auth, async (req, res) => {
  try {
    const video = await Video.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    await Video.findByIdAndDelete(req.params.id);

    res.json({ message: 'Video deleted successfully' });

  } catch (error) {
    console.error('Delete video error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update video progress
router.put('/:id/progress', auth, async (req, res) => {
  try {
    const { progress, log, status } = req.body;

    const video = await Video.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    if (progress !== undefined) video.processing.progress = progress;
    if (log) video.processing.logs.push(`${new Date().toISOString()}: ${log}`);
    if (status) video.status = status;

    if (status === 'processing' && !video.processing.startedAt) {
      video.processing.startedAt = new Date();
    }

    if (status === 'completed' && !video.processing.completedAt) {
      video.processing.completedAt = new Date();
      video.processing.progress = 100;
    }

    await video.save();

    res.json({
      message: 'Progress updated successfully',
      video
    });

  } catch (error) {
    console.error('Update progress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;