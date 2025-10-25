# Quick Vercel Deployment Checklist

## Pre-Deployment Setup (5 minutes)

### ✅ 1. GitHub Repository
- [ ] Push code to GitHub repository
- [ ] Ensure all files are committed
- [ ] Note repository URL

### ✅ 2. MongoDB Atlas Setup
- [ ] Create MongoDB Atlas account
- [ ] Create free cluster (M0 Sandbox)
- [ ] Create database user with read/write permissions
- [ ] Get connection string
- [ ] Add IP whitelist: `0.0.0.0/0` (for Vercel)

### ✅ 3. Environment Variables
- [ ] JWT_SECRET (generate random string)
- [ ] MONGODB_URI (from Atlas)
- [ ] CLIENT_ORIGIN (will be your Vercel URL)

## Vercel Deployment (10 minutes)

### ✅ 4. Vercel Account
- [ ] Create Vercel account
- [ ] Connect GitHub account

### ✅ 5. Import Project
- [ ] Click "New Project" in Vercel
- [ ] Import your GitHub repository
- [ ] Framework: Other
- [ ] Root Directory: (leave empty)

### ✅ 6. Configure Build Settings
- [ ] Build Command: `npm run build-all`
- [ ] Output Directory: `build`
- [ ] Install Command: `npm run install-all`

### ✅ 7. Set Environment Variables
Add these in Vercel project settings:
```
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-video-editor
JWT_SECRET=your-random-secret-here
CLIENT_ORIGIN=https://your-app-name.vercel.app
VITE_API_URL=https://your-app-name.vercel.app/api
```

### ✅ 8. Deploy
- [ ] Click "Deploy"
- [ ] Wait for build to complete
- [ ] Note your Vercel URL

## Post-Deployment Testing (5 minutes)

### ✅ 9. Test API
- [ ] Visit: `https://your-app.vercel.app/api/health`
- [ ] Should return JSON with status "ok"

### ✅ 10. Test Frontend
- [ ] Visit your Vercel URL
- [ ] Check if React app loads
- [ ] Test a few features
- [ ] Check browser console for errors

### ✅ 11. Update CORS (if needed)
- [ ] If API calls fail, update CORS in server code
- [ ] Add your Vercel domain to allowed origins

## Quick Fixes for Common Issues

### Build Fails
```bash
# Check Node version
node --version  # Should be 16+

# Install dependencies
npm run install-all

# Test build locally
npm run build-all
```

### API Not Working
1. Check environment variables in Vercel dashboard
2. Verify MongoDB connection string
3. Check Vercel function logs

### Frontend Not Loading
1. Check if build output directory is correct
2. Verify Vite configuration
3. Check browser console for errors

## Emergency Rollback
If deployment fails:
1. Go to Vercel dashboard
2. Click on your project
3. Go to "Deployments" tab
4. Click "Redeploy" on last working version

---

**Total Time: ~20 minutes**
**Cost: Free (using free tiers)**