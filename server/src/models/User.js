const mongoose = require('mongoose');

const providerKeySchema = new mongoose.Schema(
  {
    provider: { type: String, required: true },
    keyEnc: { type: String, required: true },
    label: { type: String },
    lastValidatedAt: { type: Date },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    name: { type: String },
    apiKeys: { type: [providerKeySchema], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
