const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Project = require('../models/Project');
const videoService = require('../services/videoService');

// @route   POST /api/video/create
// @desc    Create a new video project
// @access  Private
router.post('/create', authMiddleware, async (req, res) => {
  try {
    const { title, description, prompt, tool, inputData } = req.body;

    const project = new Project({
      user: req.user._id,
      title,
      description,
      prompt,
      tool,
      inputData,
      status: 'pending'
    });

    await project.save();

    // Start processing in background
    videoService.processVideo(project._id, tool, prompt, inputData, req.user);

    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    console.error('Create video error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/video/projects
// @desc    Get all user projects
// @access  Private
router.get('/projects', authMiddleware, async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json({ projects });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   GET /api/video/project/:id
// @desc    Get a single project
// @access  Private
router.get('/project/:id', authMiddleware, async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id, user: req.user._id });
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ project });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   DELETE /api/video/project/:id
// @desc    Delete a project
// @access  Private
router.delete('/project/:id', authMiddleware, async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
