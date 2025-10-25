const express = require('express');
const { auth, adminAuth } = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

// Get user stats
router.get('/stats', auth, async (req, res) => {
  try {
    const user = req.user;
    
    const stats = {
      videosCreated: user.usage.videosCreated,
      storageUsed: user.usage.storageUsed,
      apiCallsThisMonth: user.usage.apiCallsThisMonth,
      subscription: user.subscription,
      memberSince: user.createdAt
    };

    res.json(stats);
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update preferences
router.put('/preferences', auth, async (req, res) => {
  try {
    const { theme, notifications, autoSave } = req.body;
    const user = req.user;

    if (theme) user.preferences.theme = theme;
    if (notifications !== undefined) user.preferences.notifications = notifications;
    if (autoSave !== undefined) user.preferences.autoSave = autoSave;

    await user.save();

    res.json({
      message: 'Preferences updated successfully',
      preferences: user.preferences
    });
  } catch (error) {
    console.error('Update preferences error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all users (admin only)
router.get('/all', adminAuth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const users = await User.find()
      .select('-password -apiKeys')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await User.countDocuments();

    res.json({
      users,
      pagination: {
        current: page,
        total: Math.ceil(total / limit),
        count: users.length,
        totalUsers: total
      }
    });
  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;