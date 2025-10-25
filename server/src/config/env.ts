import dotenv from 'dotenv';
dotenv.config();

function requireEnv(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: Number(requireEnv('PORT', '4000')),
  MONGO_URI: requireEnv('MONGO_URI', 'mongodb://127.0.0.1:27017/video_app'),
  JWT_SECRET: requireEnv('JWT_SECRET', 'dev-secret-change-me'),
  CORS_ORIGIN: requireEnv('CORS_ORIGIN', 'http://localhost:5173'),
};
