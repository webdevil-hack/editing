#!/bin/bash

echo "🚀 Deploying to new Vercel project..."

# Build the client
echo "📦 Building client..."
cd client
npm run build
cd ..

# Copy build to public
echo "📁 Copying build files..."
cp -r client/build/* public/

# Add and commit changes
echo "💾 Committing changes..."
git add .
git commit -m "Build for new Vercel deployment"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin new-vercel-deployment

echo "✅ Ready for Vercel deployment!"
echo "🌐 Go to https://vercel.com/new"
echo "📂 Connect GitHub repository: webdevil-hack/editing"
echo "🌿 Select branch: new-vercel-deployment"
echo "📁 Root directory: / (leave empty)"
echo "⚙️ Build settings:"
echo "   - Build Command: npm run build (in client folder)"
echo "   - Output Directory: public"
echo "   - Install Command: npm install (in client folder)"
