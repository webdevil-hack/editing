# 🚀 Complete Vercel Deployment Guide - AI Video Editor

## 📋 **Table of Contents**
1. [Project Overview](#project-overview)
2. [Pre-Deployment Setup](#pre-deployment-setup)
3. [Step-by-Step Vercel Deployment](#step-by-step-vercel-deployment)
4. [Environment Variables Configuration](#environment-variables-configuration)
5. [MongoDB Atlas Setup](#mongodb-atlas-setup)
6. [Post-Deployment Testing](#post-deployment-testing)
7. [Troubleshooting](#troubleshooting)
8. [Performance Optimization](#performance-optimization)
9. [Custom Domain Setup](#custom-domain-setup)

---

## 🎯 **Project Overview**

Your AI Video Editor is a full-stack application with:
- **Frontend**: React + Vite + TypeScript (in `/client`)
- **Backend**: Node.js + Express (in `/server`)
- **Database**: MongoDB Atlas
- **APIs**: Shotstack, Creatomate, Plainly, Tavus
- **Features**: User authentication, video editing, AI tools, project management

---

## ✅ **Pre-Deployment Setup**

### **1. Verify Your Code is Ready**
```bash
# Ensure all changes are committed
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### **2. Check Required Files**
Your project should have these files:
```
✅ /vercel.json (root configuration)
✅ /server/vercel.json (server configuration)
✅ /package.json (root package.json)
✅ /client/package.json (frontend dependencies)
✅ /server/package.json (backend dependencies)
✅ /client/build/ (built frontend files)
```

### **3. Test Local Build**
```bash
# Test that everything builds correctly
npm run install-all
npm run build-all
```

---

## 🚀 **Step-by-Step Vercel Deployment**

### **Step 1: Create Vercel Account**
1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### **Step 2: Import Your Project**
1. In Vercel dashboard, click **"New Project"**
2. Click **"Import Git Repository"**
3. Find your repository: `webdevil-hack/editing`
4. Click **"Import"** next to your repository

### **Step 3: Configure Project Settings**

#### **Framework Preset:**
- Select: **"Other"** (Vercel will auto-detect)

#### **Root Directory:**
- Set to: **`./`** (root directory)

#### **Build and Output Settings:**
- **Build Command**: `npm run build-all`
- **Output Directory**: `client/build`
- **Install Command**: `npm run install-all`

#### **Advanced Settings:**
- **Node.js Version**: `18.x` (recommended)
- **Environment**: `Production`

### **Step 4: Configure Vercel.json**

Your root `vercel.json` should look like this:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/src/index.js",
      "use": "@vercel/node",
      "config": {
        "maxDuration": 30
      }
    },
    {
      "src": "client/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/src/index.js"
    },
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### **Step 5: Set Environment Variables**

In the Vercel dashboard, go to **"Environment Variables"** and add:

#### **Database Configuration:**
```bash
MONGODB_URI
Value: mongodb+srv://username:password@cluster.mongodb.net/ai-video-editor?retryWrites=true&w=majority
Environment: Production
```

#### **JWT Security:**
```bash
JWT_SECRET
Value: your-super-secure-jwt-secret-key-for-production-2024
Environment: Production
```

#### **API Keys:**
```bash
SHOTSTACK_API_KEY
Value: 4bEY6gvxmoeZjQkriUdsc1mdz9lLXW7a9n5xqNyQ
Environment: Production

TAVUS_API_KEY
Value: e39b1deee39e472589365b02f01002f3
Environment: Production

PLAINLY_API_KEY
Value: fV34uiorV7nIQDCwoNtqEdbVx8AwVfsN
Environment: Production

CREATOMATE_API_KEY
Value: 0c924f2a645a4c5a92beff2e4b228feb783d24983315182b1c6bf1a618ff9f5699dcbdd7b0aa4e08d3965390821122ec
Environment: Production
```

#### **CORS and Environment:**
```bash
CLIENT_URL
Value: https://your-app-name.vercel.app
Environment: Production

NODE_ENV
Value: production
Environment: Production
```

### **Step 6: Deploy!**
1. Click **"Deploy"**
2. Wait for build to complete (2-5 minutes)
3. Your app will be live at the provided URL

---

## 🗄️ **MongoDB Atlas Setup**

### **Step 1: Create MongoDB Atlas Account**
1. Go to [cloud.mongodb.com](https://cloud.mongodb.com)
2. Sign up for a free account
3. Verify your email address

### **Step 2: Create a Cluster**
1. Click **"Build a Database"**
2. Choose **"M0 Sandbox"** (free tier)
3. Select a region close to your users
4. Name your cluster: `ai-video-editor`
5. Click **"Create"**

### **Step 3: Set Up Database Access**
1. Go to **"Database Access"**
2. Click **"Add New Database User"**
3. **Username**: `ai-video-editor-user`
4. **Password**: Generate a secure password (save this!)
5. **Database User Privileges**: "Read and write to any database"
6. Click **"Add User"**

### **Step 4: Configure Network Access**
1. Go to **"Network Access"**
2. Click **"Add IP Address"**
3. Select **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Click **"Confirm"**

### **Step 5: Get Connection String**
1. Go to **"Clusters"**
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `<dbname>` with `ai-video-editor`

**Example Connection String:**
```
mongodb+srv://ai-video-editor-user:your-password@cluster0.xxxxx.mongodb.net/ai-video-editor?retryWrites=true&w=majority
```

### **Step 6: Update Vercel Environment Variable**
1. Go to Vercel Dashboard
2. Select your project
3. Go to **"Settings" → "Environment Variables"**
4. Update `MONGODB_URI` with your connection string

---

## 🧪 **Post-Deployment Testing**

### **Step 1: Test Basic Functionality**
1. Visit your live URL
2. Test all pages:
   - Homepage
   - About Us
   - Features
   - Contact Us
   - Login/Signup

### **Step 2: Test Authentication**
1. Create a new account
2. Login with credentials
3. Verify dashboard access

### **Step 3: Test Dashboard Features**
1. Create a new project
2. Test AI Tools section
3. Verify API integrations
4. Test project management

### **Step 4: Test API Integrations**
1. Go to Dashboard → AI Tools
2. Verify all tools/APIs are displayed
3. Test project creation with different APIs

---

## 🔧 **Troubleshooting**

### **Issue 1: Build Fails**
**Error**: Build command failed
**Solution**:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in package.json
3. Verify Node.js version compatibility
4. Check for TypeScript errors

### **Issue 2: Environment Variables Not Working**
**Error**: API calls failing
**Solution**:
1. Verify all environment variables are set
2. Check variable names match exactly
3. Ensure variables are set for "Production" environment
4. Redeploy after adding variables

### **Issue 3: Database Connection Failed**
**Error**: MongoDB connection error
**Solution**:
1. Verify MongoDB Atlas cluster is running
2. Check network access settings (0.0.0.0/0)
3. Verify connection string format
4. Check database user permissions

### **Issue 4: CORS Errors**
**Error**: CORS policy blocked
**Solution**:
1. Verify `CLIENT_URL` environment variable
2. Check server CORS configuration
3. Ensure frontend URL matches deployed URL

### **Issue 5: Static Files Not Loading**
**Error**: 404 for CSS/JS files
**Solution**:
1. Verify `outputDirectory` is set to `client/build`
2. Check build completed successfully
3. Verify file paths in build output

### **Issue 6: API Routes Not Working**
**Error**: 404 for /api/* routes
**Solution**:
1. Check vercel.json routing configuration
2. Verify server entry point path
3. Ensure server builds successfully

---

## ⚡ **Performance Optimization**

### **1. Enable Vercel Analytics**
1. Go to Vercel Dashboard
2. Select your project
3. Go to **"Analytics"** tab
4. Enable Vercel Analytics

### **2. Configure Caching**
Add to your `vercel.json`:
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

### **3. Optimize Images**
- Use WebP format for images
- Implement lazy loading
- Use appropriate image sizes

### **4. Enable Compression**
Vercel automatically enables gzip compression for your assets.

---

## 🌐 **Custom Domain Setup**

### **Step 1: Add Domain in Vercel**
1. Go to Vercel Dashboard
2. Select your project
3. Go to **"Settings" → "Domains"**
4. Add your domain: `yourdomain.com`

### **Step 2: Configure DNS**
1. Go to your domain registrar
2. Add CNAME record:
   - **Name**: `www`
   - **Value**: `cname.vercel-dns.com`
3. Add A record:
   - **Name**: `@`
   - **Value**: `76.76.19.61`

### **Step 3: Update Environment Variables**
1. Update `CLIENT_URL` to your custom domain
2. Redeploy your application

---

## 📊 **Monitoring and Maintenance**

### **1. Vercel Dashboard Monitoring**
- **Deployments**: Track all deployments
- **Analytics**: Monitor traffic and performance
- **Functions**: Monitor serverless function performance
- **Logs**: View real-time logs

### **2. MongoDB Atlas Monitoring**
- **Database Performance**: Monitor query performance
- **Storage Usage**: Track database size
- **Connection Monitoring**: Monitor active connections

### **3. Regular Maintenance**
- **Update dependencies** monthly
- **Monitor API usage** and limits
- **Backup database** regularly
- **Review error logs** weekly

---

## 🎉 **Deployment Success Checklist**

### **✅ Pre-Deployment:**
- [x] Code pushed to GitHub main branch
- [x] All environment variables prepared
- [x] MongoDB Atlas configured
- [x] Vercel account ready

### **✅ During Deployment:**
- [x] Repository imported successfully
- [x] Build configuration correct
- [x] Environment variables set
- [x] Build completed without errors

### **✅ Post-Deployment:**
- [x] Website loads correctly
- [x] All pages accessible
- [x] Authentication working
- [x] Dashboard functional
- [x] API integrations working
- [x] Database connected

---

## 🚀 **Your AI Video Editor is Live!**

**Congratulations!** Your AI Video Editor is now deployed and ready to use with:

- ✅ **Professional Frontend** with React + TypeScript
- ✅ **Robust Backend** with Node.js + Express
- ✅ **Secure Authentication** system
- ✅ **MongoDB Database** connected
- ✅ **Multiple API Integrations** working
- ✅ **High Performance** architecture
- ✅ **Scalable Infrastructure** on Vercel

**Start creating amazing videos with your deployed application!** 🎬✨

---

## 📞 **Need Help?**

If you encounter any issues during deployment:

1. **Check Vercel build logs** for specific errors
2. **Verify environment variables** are set correctly
3. **Test MongoDB Atlas connection** separately
4. **Review this guide** step by step
5. **Check the troubleshooting section** above

**Happy Deploying!** 🎊