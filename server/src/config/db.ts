import mongoose from 'mongoose';

export async function connectToDatabase(mongoUri: string): Promise<void> {
  if (!mongoUri) throw new Error('Missing MONGO_URI');
  mongoose.set('strictQuery', true);
  await mongoose.connect(mongoUri, { autoIndex: true });
  console.log('MongoDB connected');
}
