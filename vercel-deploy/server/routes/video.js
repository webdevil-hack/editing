const express = require('express');
const Project = require('../models/Project');
const auth = require('../middleware/auth');
const { 
  processWithShotstack, 
  processWithCreatomate, 
  processWithPlainly, 
  processWithTavus,
  processWithPromptClip,
  processWithLucy,
  processWithLTX,
  processWithWan
} = require('../services/videoProcessing');

const router = express.Router();

// Create new video project
router.post('/create', auth, async (req, res) => {
  try {
    const { name, description, prompt, apiUsed, settings } = req.body;

    const project = new Project({
      name,
      description,
      prompt,
      apiUsed,
      settings: settings || {},
      owner: req.userId
    });

    await project.save();
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Process video with selected API/tool
router.post('/process/:projectId', auth, async (req, res) => {
  try {
    const { projectId } = req.params;
    const { apiKey } = req.body;

    const project = await Project.findOne({ _id: projectId, owner: req.userId });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Update project status
    project.status = 'processing';
    await project.save();

    // Process based on selected API/tool
    let result;
    switch (project.apiUsed) {
      case 'shotstack':
        result = await processWithShotstack(project, apiKey);
        break;
      case 'creatomate':
        result = await processWithCreatomate(project, apiKey);
        break;
      case 'plainly':
        result = await processWithPlainly(project, apiKey);
        break;
      case 'tavus':
        result = await processWithTavus(project, apiKey);
        break;
      case 'promptclip':
        result = await processWithPromptClip(project);
        break;
      case 'lucy':
        result = await processWithLucy(project);
        break;
      case 'ltx':
        result = await processWithLTX(project);
        break;
      case 'wan':
        result = await processWithWan(project);
        break;
      default:
        return res.status(400).json({ message: 'Invalid API/tool selected' });
    }

    // Update project with result
    project.processingData = result;
    await project.save();

    res.json({ message: 'Video processing started', project });
  } catch (error) {
    console.error('Process video error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's projects
router.get('/projects', auth, async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const query = { owner: req.userId };
    
    if (status) {
      query.status = status;
    }

    const projects = await Project.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Project.countDocuments(query);

    res.json({
      projects,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single project
router.get('/project/:projectId', auth, async (req, res) => {
  try {
    const project = await Project.findOne({ 
      _id: req.params.projectId, 
      owner: req.userId 
    });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update project
router.put('/project/:projectId', auth, async (req, res) => {
  try {
    const { name, description, settings } = req.body;
    
    const project = await Project.findOneAndUpdate(
      { _id: req.params.projectId, owner: req.userId },
      { name, description, settings },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project updated successfully', project });
  } catch (error) {
    console.error('Update project error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete project
router.delete('/project/:projectId', auth, async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ 
      _id: req.params.projectId, 
      owner: req.userId 
    });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get public projects
router.get('/public', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const projects = await Project.find({ isPublic: true })
      .populate('owner', 'username firstName lastName')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Project.countDocuments({ isPublic: true });

    res.json({
      projects,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get public projects error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;