const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Video title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required'],
    maxlength: [2000, 'Prompt cannot exceed 2000 characters']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'processing', 'completed', 'failed'],
    default: 'draft'
  },
  tool: {
    type: String,
    enum: ['shotstack', 'creatomate', 'plainly', 'tavus', 'promptclip', 'lucy-edit', 'ltx-video', 'wan'],
    required: true
  },
  settings: {
    resolution: { type: String, default: '1920x1080' },
    fps: { type: Number, default: 30 },
    duration: { type: Number }, // in seconds
    format: { type: String, default: 'mp4' },
    quality: { type: String, enum: ['low', 'medium', 'high', 'ultra'], default: 'high' }
  },
  assets: [{
    type: { type: String, enum: ['image', 'video', 'audio', 'text'] },
    url: String,
    filename: String,
    size: Number, // in bytes
    duration: Number, // for video/audio
    position: {
      x: Number,
      y: Number,
      z: Number
    },
    timing: {
      start: Number,
      end: Number
    }
  }],
  output: {
    url: String,
    filename: String,
    size: Number,
    duration: Number,
    thumbnail: String
  },
  processing: {
    startedAt: Date,
    completedAt: Date,
    progress: { type: Number, default: 0 },
    logs: [String],
    jobId: String // External API job ID
  },
  metadata: {
    tags: [String],
    category: String,
    isPublic: { type: Boolean, default: false },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 }
  },
  analytics: {
    renderTime: Number, // in seconds
    apiCalls: Number,
    costEstimate: Number
  }
}, {
  timestamps: true
});

// Indexes for performance
videoSchema.index({ user: 1, createdAt: -1 });
videoSchema.index({ status: 1 });
videoSchema.index({ tool: 1 });
videoSchema.index({ 'metadata.tags': 1 });

// Virtual for formatted duration
videoSchema.virtual('formattedDuration').get(function() {
  if (!this.output.duration) return '0:00';
  const minutes = Math.floor(this.output.duration / 60);
  const seconds = Math.floor(this.output.duration % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
});

// Update progress method
videoSchema.methods.updateProgress = function(progress, log) {
  this.processing.progress = progress;
  if (log) {
    this.processing.logs.push(`${new Date().toISOString()}: ${log}`);
  }
  return this.save();
};

module.exports = mongoose.model('Video', videoSchema);