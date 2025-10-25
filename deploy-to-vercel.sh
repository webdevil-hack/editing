#!/bin/bash

# AI Video Editor - Vercel Deployment Script
# Run this script to deploy your app to Vercel

echo "🚀 AI Video Editor - Vercel Deployment Script"
echo "=============================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel first:"
    vercel login
fi

echo "📁 Current directory: $(pwd)"
echo "📋 Git status:"
git status --short

echo ""
echo "🚀 Deploying to Vercel..."
echo "This will:"
echo "1. Build your application"
echo "2. Deploy to Vercel"
echo "3. Set up environment variables"
echo ""

# Deploy to Vercel
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Set up MongoDB Atlas"
echo "2. Configure environment variables in Vercel dashboard"
echo "3. Test your deployed application"
echo ""
echo "📖 See VERCEL_DEPLOYMENT_GUIDE.md for detailed instructions"
echo ""
echo "🎉 Happy Deploying!"