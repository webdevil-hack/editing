#!/bin/bash

echo "🚀 Starting Vercel Deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run from project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm run install-all

# Build the client
echo "🔨 Building client..."
cd client && npm run build && cd ..

# Check if build was successful
if [ ! -d "client/build" ]; then
    echo "❌ Error: Build failed. client/build directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"
echo "🎯 Ready for Vercel deployment!"

# Try to deploy with Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod --yes --token=$VERCEL_TOKEN 2>/dev/null || {
    echo "⚠️  Vercel CLI deployment failed. Please use Vercel Dashboard method:"
    echo ""
    echo "1. Go to https://vercel.com"
    echo "2. Click 'New Project'"
    echo "3. Import your GitHub repository: webdevil-hack/editing"
    echo "4. Configure:"
    echo "   - Framework: Other"
    echo "   - Root Directory: ./"
    echo "   - Build Command: npm run vercel-build"
    echo "   - Output Directory: client/build"
    echo "   - Install Command: npm run install-all"
    echo ""
    echo "5. Add Environment Variables:"
    echo "   NODE_ENV=production"
    echo "   MONGODB_URI=your_mongodb_uri"
    echo "   JWT_SECRET=your_jwt_secret"
    echo "   SHOTSTACK_API_KEY=4bEY6gvxmoeZjQkriUdsc1mdz9lLXW7a9n5xqNyQ"
    echo "   TAVUS_API_KEY=e39b1deee39e472589365b02f01002f3"
    echo "   PLAINLY_API_KEY=fV34uiorV7nIQDCwoNtqEdbVx8AwVfsN"
    echo "   CREATOMATE_API_KEY=0c924f2a645a4c5a92beff2e4b228feb783d24983315182b1c6bf1a618ff9f5699dcbdd7b0aa4e08d3965390821122ec"
    echo ""
    echo "6. Click Deploy!"
}

echo "🎉 Deployment process completed!"