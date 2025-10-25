# 🚀 Vercel Deployment Checklist

## ✅ Pre-Deployment (Do First)

### 1. Build & Test Locally
```bash
# Install dependencies
npm run install-all

# Build client
cd client && npm run build && cd ..

# Test server
cd server && npm start
```

### 2. Verify Configuration
```bash
# Run verification script
node verify-deployment.js
```

### 3. Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

---

## 🌐 Vercel Setup (Do Second)

### 1. Import Project
- Go to [vercel.com/dashboard](https://vercel.com/dashboard)
- Click "New Project"
- Import your GitHub repository

### 2. Configure Build Settings
- **Framework**: Other
- **Root Directory**: `./`
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `client/build`
- **Install Command**: `npm run install-all`

### 3. Set Environment Variables
**Required Variables:**
```
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/ai-video-editor
JWT_SECRET=your-super-secure-jwt-secret-2024
CLIENT_ORIGIN=https://your-app.vercel.app
SHOTSTACK_API_KEY=your-shotstack-key
TAVUS_API_KEY=your-tavus-key
PLAINLY_API_KEY=your-plainly-key
CREATOMATE_API_KEY=your-creatomate-key
NODE_ENV=production
```

### 4. Deploy
- Click "Deploy"
- Wait for build completion
- Get your live URL

---

## 🗄️ MongoDB Atlas Setup (Do Third)

### 1. Create Database
- Go to [cloud.mongodb.com](https://cloud.mongodb.com)
- Create free M0 cluster
- Name: `ai-video-editor-cluster`

### 2. Setup Access
- **Database User**: Create user with read/write access
- **Network Access**: Allow access from anywhere (0.0.0.0/0)
- **Get Connection String**: Copy and update MONGODB_URI in Vercel

---

## 🧪 Post-Deployment Testing

### Test These Features:
- [ ] Homepage loads
- [ ] Authentication (signup/login)
- [ ] Dashboard access
- [ ] Project creation
- [ ] API integrations work
- [ ] Database saves data

---

## 🔧 Common Issues & Fixes

### Build Fails
- Check build logs in Vercel
- Verify Node.js version (use 18.x)
- Test build locally first

### Environment Variables Not Working
- Verify all variables are set
- Check variable names (case-sensitive)
- Redeploy after adding variables

### Database Connection Fails
- Verify MongoDB Atlas cluster is running
- Check network access allows 0.0.0.0/0
- Test connection string format

### CORS Errors
- Update CLIENT_ORIGIN to match Vercel URL
- Redeploy after URL changes

---

## 🎉 Success!

When everything works:
- ✅ Website loads at Vercel URL
- ✅ All pages accessible
- ✅ Authentication working
- ✅ Dashboard functional
- ✅ Database connected
- ✅ APIs responding

**Your AI Video Editor is live!** 🚀

---

## 📞 Quick Help

**Stuck?** Run the verification script:
```bash
node verify-deployment.js
```

**Still need help?** Check the detailed guide:
- `DETAILED_VERCEL_DEPLOYMENT_STEPS.md`
- `COMPLETE_VERCEL_DEPLOYMENT_GUIDE.md`