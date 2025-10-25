#!/bin/bash

# Build script for Vercel deployment
echo "🚀 Starting build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install server dependencies
echo "📦 Installing server dependencies..."
cd server && npm install && cd ..

# Install client dependencies
echo "📦 Installing client dependencies..."
cd client && npm install && cd ..

# Build client
echo "🏗️ Building client..."
cd client && npm run build && cd ..

echo "✅ Build completed successfully!"
echo "📁 Build output: client/build/"