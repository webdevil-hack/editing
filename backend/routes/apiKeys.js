const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const User = require('../models/User');

// @route   GET /api/keys
// @desc    Get user's API keys
// @access  Private
router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('apiKeys');
    res.json({ apiKeys: user.apiKeys });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route   PUT /api/keys
// @desc    Update user's API keys
// @access  Private
router.put('/', authMiddleware, async (req, res) => {
  try {
    const { shotstack, creatomate, plainly, tavus } = req.body;
    const user = await User.findById(req.user._id);

    if (shotstack !== undefined) user.apiKeys.shotstack = shotstack;
    if (creatomate !== undefined) user.apiKeys.creatomate = creatomate;
    if (plainly !== undefined) user.apiKeys.plainly = plainly;
    if (tavus !== undefined) user.apiKeys.tavus = tavus;

    await user.save();

    res.json({ message: 'API keys updated successfully', apiKeys: user.apiKeys });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
