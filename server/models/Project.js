const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  prompt: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'processing', 'completed', 'failed'],
    default: 'draft'
  },
  videoUrl: {
    type: String,
    default: ''
  },
  thumbnail: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 0
  },
  resolution: {
    type: String,
    default: '1080p'
  },
  settings: {
    style: { type: String, default: 'cinematic' },
    aspectRatio: { type: String, default: '16:9' },
    frameRate: { type: Number, default: 30 },
    quality: { type: String, default: 'high' }
  },
  apiUsed: {
    type: String,
    enum: ['shotstack', 'creatomate', 'plainly', 'tavus', 'promptclip', 'lucy', 'ltx', 'wan'],
    required: true
  },
  processingData: {
    jobId: String,
    status: String,
    progress: Number,
    error: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isPublic: {
    type: Boolean,
    default: false
  },
  tags: [String],
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for better query performance
projectSchema.index({ owner: 1, createdAt: -1 });
projectSchema.index({ status: 1 });
projectSchema.index({ isPublic: 1, createdAt: -1 });

module.exports = mongoose.model('Project', projectSchema);