#!/bin/bash

echo "🚀 Building for Vercel deployment..."

# Install all dependencies
echo "📦 Installing dependencies..."
npm run install-all

# Build the client
echo "🔨 Building client..."
cd client
npm run build

# Check if build was successful
if [ ! -f "build/index.html" ]; then
    echo "❌ Build failed - index.html not found"
    exit 1
fi

echo "✅ Build successful!"
echo "📁 Build contents:"
ls -la build/

cd ..

echo "🎯 Ready for Vercel deployment!"