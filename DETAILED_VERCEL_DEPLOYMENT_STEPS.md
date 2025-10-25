# 🚀 Detailed Step-by-Step Vercel Deployment Guide

## 📋 Project Overview
Your AI Video Editor is a full-stack application with:
- **Frontend**: React + Vite (TypeScript) in `/client` directory
- **Backend**: Node.js + Express API in `/server` directory  
- **Database**: MongoDB (requires MongoDB Atlas)
- **APIs**: Shotstack, Tavus, Plainly, Creatomate integrations

---

## 🔧 Pre-Deployment Setup

### Step 1: Verify Project Structure
Ensure your project has this structure:
```
/workspace/
├── client/           # React frontend
├── server/           # Node.js backend
├── package.json      # Root package.json
├── vercel.json       # Vercel configuration
└── README.md
```

### Step 2: Build the Client
```bash
cd client
npm install
npm run build
```
This creates a `client/build` directory with your production frontend.

### Step 3: Test Server Locally
```bash
cd server
npm install
npm start
```
Verify the server runs without errors.

---

## 🌐 Vercel Account Setup

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub repositories

### Step 2: Install Vercel CLI (Optional)
```bash
npm install -g vercel
vercel login
```

---

## 📁 Repository Preparation

### Step 1: Push to GitHub
Ensure your code is pushed to GitHub:
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### Step 2: Verify Branch
Make sure you're deploying from the correct branch (usually `main` or `master`).

---

## 🚀 Vercel Deployment Process

### Step 1: Import Project
1. **Go to Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Click "New Project"**
3. **Import from GitHub**: Find your repository
4. **Click "Import"** next to your repository name

### Step 2: Configure Project Settings

#### Framework Preset
- **Framework**: Select "Other" (Vercel will auto-detect)

#### Root Directory  
- **Root Directory**: `./` (leave as root)

#### Build and Output Settings
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `client/build`
- **Install Command**: `npm run install-all`

#### Node.js Version
- **Node.js Version**: `18.x` (recommended)

### Step 3: Environment Variables Setup

Click **"Environment Variables"** and add these **one by one**:

#### Required Environment Variables:

**Database Configuration:**
```
Name: MONGODB_URI
Value: mongodb+srv://username:password@cluster.mongodb.net/ai-video-editor?retryWrites=true&w=majority
Environment: Production, Preview, Development
```

**JWT Security:**
```
Name: JWT_SECRET  
Value: your-super-secure-jwt-secret-key-2024
Environment: Production, Preview, Development
```

**API Keys:**
```
Name: SHOTSTACK_API_KEY
Value: your-shotstack-api-key
Environment: Production, Preview, Development

Name: TAVUS_API_KEY  
Value: your-tavus-api-key
Environment: Production, Preview, Development

Name: PLAINLY_API_KEY
Value: your-plainly-api-key  
Environment: Production, Preview, Development

Name: CREATOMATE_API_KEY
Value: your-creatomate-api-key
Environment: Production, Preview, Development
```

**CORS Configuration:**
```
Name: CLIENT_URL
Value: https://your-app-name.vercel.app
Environment: Production, Preview, Development

Name: NODE_ENV
Value: production
Environment: Production
```

### Step 4: Deploy
1. **Click "Deploy"**
2. **Wait for build** (usually 2-5 minutes)
3. **Monitor build logs** for any errors
4. **Get your live URL** when deployment completes

---

## 🗄️ MongoDB Atlas Setup

### Step 1: Create MongoDB Atlas Account
1. Go to [cloud.mongodb.com](https://cloud.mongodb.com)
2. Sign up for free account
3. Verify email address

### Step 2: Create Database Cluster
1. **Click "Build a Database"**
2. **Choose "M0 Sandbox"** (free tier)
3. **Select region** closest to your users
4. **Cluster name**: `ai-video-editor-cluster`
5. **Click "Create"**

### Step 3: Database User Setup
1. **Go to "Database Access"**
2. **Click "Add New Database User"**
3. **Authentication Method**: Password
4. **Username**: `ai-video-user`
5. **Password**: Generate secure password (save it!)
6. **Database User Privileges**: "Read and write to any database"
7. **Click "Add User"**

### Step 4: Network Access Configuration
1. **Go to "Network Access"**
2. **Click "Add IP Address"**
3. **Select "Allow Access from Anywhere"** (0.0.0.0/0)
4. **Comment**: "Vercel deployment access"
5. **Click "Confirm"**

### Step 5: Get Connection String
1. **Go to "Clusters"**
2. **Click "Connect"** on your cluster
3. **Choose "Connect your application"**
4. **Driver**: Node.js, Version: 4.1 or later
5. **Copy connection string**
6. **Replace `<password>`** with your database user password
7. **Replace `myFirstDatabase`** with `ai-video-editor`

**Example Connection String:**
```
mongodb+srv://ai-video-user:YOUR_PASSWORD@ai-video-editor-cluster.xxxxx.mongodb.net/ai-video-editor?retryWrites=true&w=majority
```

### Step 6: Update Vercel Environment Variable
1. **Go to Vercel Dashboard**
2. **Select your project**
3. **Settings → Environment Variables**
4. **Edit MONGODB_URI** with your connection string
5. **Click "Save"**
6. **Redeploy** your application

---

## 🧪 Post-Deployment Testing

### Step 1: Basic Functionality Test
1. **Visit your live URL**
2. **Test all pages load**:
   - Homepage
   - About Us  
   - Features
   - Contact Us
   - Login/Signup

### Step 2: Authentication Test
1. **Create new account**
2. **Login with credentials**
3. **Verify dashboard access**
4. **Test logout functionality**

### Step 3: API Integration Test
1. **Go to Dashboard**
2. **Test AI Tools section**
3. **Verify all 4 API integrations display**
4. **Test project creation**

### Step 4: Database Connection Test
1. **Create a test project**
2. **Verify it saves to database**
3. **Check project appears in dashboard**
4. **Test project deletion**

---

## 🔧 Troubleshooting Common Issues

### Issue 1: Build Fails
**Symptoms**: Deployment fails during build step
**Solutions**:
1. Check build logs in Vercel dashboard
2. Verify all dependencies in package.json
3. Test build locally: `npm run vercel-build`
4. Check Node.js version compatibility

### Issue 2: Environment Variables Not Working  
**Symptoms**: API calls failing, database connection errors
**Solutions**:
1. Verify all environment variables are set
2. Check variable names match exactly (case-sensitive)
3. Ensure variables are set for correct environment
4. Redeploy after adding variables

### Issue 3: Database Connection Failed
**Symptoms**: MongoDB connection errors in logs
**Solutions**:
1. Verify MongoDB Atlas cluster is running
2. Check network access allows 0.0.0.0/0
3. Verify connection string format
4. Check database user has correct permissions
5. Test connection string locally

### Issue 4: CORS Errors
**Symptoms**: Frontend can't connect to API
**Solutions**:
1. Verify `CLIENT_URL` matches your Vercel URL
2. Check server CORS configuration
3. Ensure both frontend and backend are deployed
4. Update CLIENT_URL after domain changes

### Issue 5: Static Files Not Loading
**Symptoms**: CSS/JS files return 404 errors
**Solutions**:
1. Verify build output directory is `client/build`
2. Check build completed successfully
3. Verify `vercel.json` configuration
4. Test build locally

---

## ⚡ Performance Optimization

### 1. Enable Vercel Analytics
1. **Vercel Dashboard → Your Project**
2. **Analytics tab**
3. **Enable Analytics**

### 2. Configure Caching Headers
Your `vercel.json` should include:
```json
{
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 3. Optimize Images
- Use WebP format
- Implement lazy loading
- Use appropriate image sizes

---

## 🌐 Custom Domain Setup (Optional)

### Step 1: Add Domain in Vercel
1. **Vercel Dashboard → Your Project**
2. **Settings → Domains**
3. **Add your domain**: `yourdomain.com`

### Step 2: Configure DNS
At your domain registrar:
1. **Add CNAME record**:
   - Name: `www`
   - Value: `cname.vercel-dns.com`
2. **Add A record**:
   - Name: `@`
   - Value: `76.76.19.61`

### Step 3: Update Environment Variables
1. **Update `CLIENT_URL`** to your custom domain
2. **Redeploy** application

---

## 📊 Monitoring Your Deployment

### Vercel Dashboard Monitoring
- **Deployments**: Track deployment history
- **Functions**: Monitor API performance  
- **Analytics**: View traffic and performance
- **Logs**: Real-time application logs

### MongoDB Atlas Monitoring
- **Metrics**: Database performance
- **Real-time**: Active connections
- **Profiler**: Query performance

---

## ✅ Deployment Success Checklist

### Pre-Deployment ✓
- [ ] Code pushed to GitHub
- [ ] Client builds successfully
- [ ] Server runs locally
- [ ] Environment variables prepared
- [ ] MongoDB Atlas configured

### During Deployment ✓  
- [ ] Repository imported to Vercel
- [ ] Build settings configured
- [ ] Environment variables added
- [ ] Build completes successfully
- [ ] No errors in build logs

### Post-Deployment ✓
- [ ] Website loads at Vercel URL
- [ ] All pages accessible
- [ ] Authentication works
- [ ] Dashboard functional
- [ ] API integrations working
- [ ] Database connected
- [ ] Projects can be created/saved

---

## 🎉 Your AI Video Editor is Live!

**Congratulations!** Your application is now deployed with:

- ✅ **React Frontend** with modern UI
- ✅ **Node.js API Backend** 
- ✅ **MongoDB Database** connected
- ✅ **4 AI API Integrations** working
- ✅ **Secure Authentication** system
- ✅ **Professional Dashboard**
- ✅ **High Performance** on Vercel

**Your live URL**: `https://your-project-name.vercel.app`

---

## 📞 Need Help?

If you encounter issues:

1. **Check Vercel build logs** for specific errors
2. **Verify environment variables** are correct
3. **Test MongoDB connection** separately  
4. **Review troubleshooting section** above
5. **Test locally** before deploying

**Happy deploying!** 🚀