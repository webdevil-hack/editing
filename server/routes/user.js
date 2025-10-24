const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// Get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/profile', auth, async (req, res) => {
  try {
    const { firstName, lastName, username, avatar } = req.body;
    
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if username is already taken by another user
    if (username && username !== user.username) {
      const existingUser = await User.findOne({ username, _id: { $ne: req.userId } });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already taken' });
      }
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.username = username || user.username;
    user.avatar = avatar || user.avatar;

    await user.save();
    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user preferences
router.put('/preferences', auth, async (req, res) => {
  try {
    const { theme, language } = req.body;
    
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.preferences.theme = theme || user.preferences.theme;
    user.preferences.language = language || user.preferences.language;

    await user.save();
    res.json({ message: 'Preferences updated successfully', preferences: user.preferences });
  } catch (error) {
    console.error('Update preferences error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user statistics
router.get('/stats', auth, async (req, res) => {
  try {
    const Project = require('../models/Project');
    
    const totalProjects = await Project.countDocuments({ owner: req.userId });
    const completedProjects = await Project.countDocuments({ 
      owner: req.userId, 
      status: 'completed' 
    });
    const processingProjects = await Project.countDocuments({ 
      owner: req.userId, 
      status: 'processing' 
    });

    res.json({
      totalProjects,
      completedProjects,
      processingProjects,
      successRate: totalProjects > 0 ? (completedProjects / totalProjects * 100).toFixed(1) : 0
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;