const mongoose = require('mongoose');

async function connectDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('MONGODB_URI not set. The server will run but DB-backed features will fail.');
    throw new Error('MONGODB_URI missing');
  }
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri, { dbName: process.env.MONGODB_DB || 'ai_video_editor' });
  console.log('MongoDB connected');
}

module.exports = { connectDb };
