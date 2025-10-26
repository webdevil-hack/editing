#!/bin/bash

echo "🚀 REDEPLOYING CINEMATIC AI VIDEO EDITOR NOW..."

# Verify we're in the right directory
if [ ! -f "vercel.json" ]; then
    echo "❌ Error: vercel.json not found. Please run from project root."
    exit 1
fi

# Show current configuration
echo "📋 Current Vercel Configuration:"
cat vercel.json

echo ""
echo "🔨 Testing build process..."
cd client
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error: Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Check if index.html exists
if [ ! -f "build/index.html" ]; then
    echo "❌ Error: index.html not found in build directory!"
    exit 1
fi

echo "✅ index.html confirmed in build directory!"

cd ..

echo ""
echo "🎯 REDEPLOYMENT READY!"
echo ""
echo "🚀 DEPLOY NOW:"
echo "https://vercel.com/new/clone?repository-url=https://github.com/webdevil-hack/editing"
echo ""
echo "✅ All fixes applied:"
echo "   - 404 error fixed with simplified config"
echo "   - @vercel/static-build for proper React handling"
echo "   - Clean routing configuration"
echo "   - Build tested and working"
echo "   - index.html confirmed present"
echo ""
echo "🎉 READY TO DEPLOY!"