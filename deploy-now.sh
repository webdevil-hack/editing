#!/bin/bash

echo "🚀 DEPLOYING CINEMATIC AI VIDEO EDITOR NOW!"

# Force build and deploy
echo "📦 Installing dependencies..."
npm run install-all

echo "🔨 Building client..."
cd client && npm run build && cd ..

echo "✅ Build complete! Deploying to Vercel..."

# Try multiple deployment methods
echo "Method 1: Direct Vercel deploy..."
vercel --prod --yes --token=$VERCEL_TOKEN 2>/dev/null || {
    echo "Method 2: Using Vercel without token..."
    vercel --prod --yes 2>/dev/null || {
        echo "Method 3: Creating deployment package..."
        
        # Create a deployment-ready package
        mkdir -p vercel-deploy
        cp -r client/build vercel-deploy/
        cp vercel.json vercel-deploy/
        cp package.json vercel-deploy/
        cp -r server vercel-deploy/
        
        echo "📦 Deployment package created in vercel-deploy/"
        echo "🎯 Ready for manual deployment!"
        echo ""
        echo "DEPLOYMENT INSTRUCTIONS:"
        echo "1. Go to https://vercel.com"
        echo "2. Click 'New Project'"
        echo "3. Import: webdevil-hack/editing"
        echo "4. Build Command: npm run vercel-build"
        echo "5. Output Directory: client/build"
        echo "6. Click Deploy!"
        echo ""
        echo "ENVIRONMENT VARIABLES:"
        echo "NODE_ENV=production"
        echo "SHOTSTACK_API_KEY=4bEY6gvxmoeZjQkriUdsc1mdz9lLXW7a9n5xqNyQ"
        echo "TAVUS_API_KEY=e39b1deee39e472589365b02f01002f3"
        echo "PLAINLY_API_KEY=fV34uiorV7nIQDCwoNtqEdbVx8AwVfsN"
        echo "CREATOMATE_API_KEY=0c924f2a645a4c5a92beff2e4b228feb783d24983315182b1c6bf1a618ff9f5699dcbdd7b0aa4e08d3965390821122ec"
    }
}

echo "🎉 DEPLOYMENT ATTEMPT COMPLETE!"