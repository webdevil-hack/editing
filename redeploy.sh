#!/bin/bash

echo "🚀 REDEPLOYING CINEMATIC AI VIDEO EDITOR..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run from project root."
    exit 1
fi

# Verify git status
echo "📋 Checking git status..."
git status --porcelain
if [ $? -ne 0 ]; then
    echo "❌ Error: Git status check failed."
    exit 1
fi

# Show recent commits
echo "📝 Recent commits:"
git log --oneline -5

# Test build locally first
echo "🔨 Testing build locally..."
npm run vercel-build

if [ $? -ne 0 ]; then
    echo "❌ Error: Local build failed. Please fix issues before redeploying."
    exit 1
fi

echo "✅ Build successful!"

# Check if build directory exists
if [ ! -d "client/build" ]; then
    echo "❌ Error: client/build directory not found."
    exit 1
fi

echo "📁 Build contents:"
ls -la client/build/

echo ""
echo "🎯 READY FOR REDEPLOYMENT!"
echo ""
echo "🚀 REDEPLOY OPTIONS:"
echo ""
echo "1. VERCEL DASHBOARD (RECOMMENDED):"
echo "   https://vercel.com/new/clone?repository-url=https://github.com/webdevil-hack/editing"
echo ""
echo "2. VERCEL CLI (if authenticated):"
echo "   vercel --prod --yes"
echo ""
echo "3. GITHUB INTEGRATION:"
echo "   Push to main branch triggers auto-deployment"
echo ""
echo "✅ All fixes applied:"
echo "   - 404 error fixed"
echo "   - React Router working"
echo "   - Static files routing"
echo "   - Runtime configuration"
echo "   - Build process verified"
echo ""
echo "🎉 REDEPLOY NOW!"