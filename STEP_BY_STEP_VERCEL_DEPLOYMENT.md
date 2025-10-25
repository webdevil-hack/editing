# 🚀 Complete Step-by-Step Vercel Deployment Guide

## 📋 Overview

This guide will walk you through deploying your **AI Video Editor** full-stack application to Vercel. The application consists of:
- **Frontend**: React + Vite + TypeScript
- **Backend**: Node.js + Express API
- **Database**: MongoDB Atlas (cloud)

**Estimated Time**: 20-30 minutes

---

## 🎯 Prerequisites Checklist

Before starting, ensure you have:
- [ ] GitHub account with your code pushed
- [ ] Vercel account (sign up at [vercel.com](https://vercel.com))
- [ ] MongoDB Atlas account (or will create one - free tier available)
- [ ] All API keys ready (Shotstack, Tavus, Creatomate, Plainly)

---

## 📦 PART 1: Pre-Deployment Preparation

### Step 1.1: Verify Your Project Structure

Ensure your repository has these files:

```
/workspace/
├── vercel.json                 ✅ (Root configuration)
├── package.json                ✅ (Root package file)
├── client/                     ✅ (Frontend React app)
│   ├── package.json
│   ├── vite.config.ts
│   └── src/
├── server/                     ✅ (Backend Express API)
│   ├── package.json
│   ├── index.js
│   └── src/
└── README.md
```

### Step 1.2: Test Build Locally (Optional but Recommended)

```bash
# Install all dependencies
npm run install-all

# Build the client
cd client && npm run build

# Verify build folder exists
ls -la build/
```

**Expected Output**: You should see a `build` folder with `index.html`, `assets/`, etc.

### Step 1.3: Commit and Push to GitHub

```bash
# Check status
git status

# Add any uncommitted changes
git add .

# Commit
git commit -m "Prepare for Vercel deployment"

# Push to main branch
git push origin main
```

---

## 🗄️ PART 2: Set Up MongoDB Atlas (Database)

### Step 2.1: Create MongoDB Atlas Account

1. Go to **[cloud.mongodb.com](https://cloud.mongodb.com)**
2. Click **"Try Free"** or **"Sign In"**
3. Sign up with Google/GitHub or create an account
4. Verify your email address

### Step 2.2: Create a Free Cluster

1. Click **"Build a Database"** or **"+ Create"**
2. Choose **"M0 FREE"** tier
3. Select **Cloud Provider**: AWS (recommended)
4. Choose **Region**: Pick closest to your users (e.g., US East, Europe West)
5. **Cluster Name**: `ai-video-editor` (or keep default)
6. Click **"Create Deployment"**

**⏱️ Wait Time**: 3-5 minutes for cluster to be created

### Step 2.3: Create Database User

After cluster creation, you'll see a security quickstart:

1. **Authentication Method**: Username and Password
2. **Username**: `ai-video-admin` (or your choice)
3. **Password**: Click **"Autogenerate Secure Password"** 
   - **⚠️ COPY THIS PASSWORD - You'll need it later!**
4. Click **"Create User"**

### Step 2.4: Set Network Access

1. **Add IP Address**: Select **"My Local Environment"**
2. **IP Access List**: Choose **"Allow Access from Anywhere"**
   - IP Address: `0.0.0.0/0` (this allows Vercel to connect)
3. Click **"Add Entry"**
4. Click **"Finish and Close"**

### Step 2.5: Get Your Connection String

1. Click **"Connect"** on your cluster
2. Choose **"Connect your application"**
3. **Driver**: Node.js
4. **Version**: 5.5 or later
5. **Copy the connection string** - it looks like:
   ```
   mongodb+srv://ai-video-admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### Step 2.6: Format Your Connection String

Replace `<password>` with your actual password and add database name:

**Before**:
```
mongodb+srv://ai-video-admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

**After** (example):
```
mongodb+srv://ai-video-admin:YourActualPassword123@cluster0.abc123.mongodb.net/ai-video-editor?retryWrites=true&w=majority
```

**Important Notes**:
- Replace `<password>` with your copied password
- Add `/ai-video-editor` before the `?` to specify the database name
- If your password contains special characters (`@`, `:`, `/`, etc.), you must URL-encode them

**📝 Save this connection string - you'll need it in Step 3!**

---

## 🚀 PART 3: Deploy to Vercel

### Step 3.1: Sign In to Vercel

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### Step 3.2: Import Your Project

1. From Vercel Dashboard, click **"Add New..."** → **"Project"**
2. Find your repository: `webdevil-hack/editing` (or your repo name)
3. Click **"Import"**

### Step 3.3: Configure Project Settings

Vercel will show a configuration screen. Set these values:

#### **Framework Preset**
- Select: **"Other"** or **"Vite"** (Vercel may auto-detect)

#### **Root Directory**
- Keep as: **`./`** (root of repository)
- Do NOT change this

#### **Build & Development Settings**

Click **"Override"** next to Build Command and set:

| Setting | Value |
|---------|-------|
| **Build Command** | `npm run build-all` |
| **Output Directory** | `client/build` |
| **Install Command** | `npm run install-all` |

#### **Node.js Version**
- Expand **"Advanced"** section (if available)
- Set Node.js version: **18.x** (recommended)

### Step 3.4: Configure Environment Variables

This is the **most critical step**. Click **"Environment Variables"** section.

Add each variable one by one:

#### **1. MongoDB Database Connection**
```
Name: MONGODB_URI
Value: mongodb+srv://ai-video-admin:YourPassword@cluster0.xxxxx.mongodb.net/ai-video-editor?retryWrites=true&w=majority
Environment: Production, Preview, Development (check all three)
```
⚠️ **Use YOUR actual connection string from Step 2.6**

#### **2. JWT Secret (Authentication)**
```
Name: JWT_SECRET
Value: your-super-secure-random-string-min-32-chars-production-2024
Environment: Production, Preview, Development
```
💡 **Generate a secure random string**: Use [randomkeygen.com](https://randomkeygen.com/) or run:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

#### **3. Client URL (CORS Configuration)**
```
Name: CLIENT_URL
Value: https://your-app-name.vercel.app
Environment: Production, Preview, Development
```
⚠️ **You'll update this after deployment with your actual Vercel URL**

#### **4. Alternative Client URL (if needed)**
```
Name: CLIENT_ORIGIN
Value: https://your-app-name.vercel.app
Environment: Production, Preview, Development
```

#### **5. Node Environment**
```
Name: NODE_ENV
Value: production
Environment: Production only
```

#### **6. Shotstack API Key**
```
Name: SHOTSTACK_API_KEY
Value: 4bEY6gvxmoeZjQkriUdsc1mdz9lLXW7a9n5xqNyQ
Environment: Production, Preview, Development
```

#### **7. Tavus API Key**
```
Name: TAVUS_API_KEY
Value: e39b1deee39e472589365b02f01002f3
Environment: Production, Preview, Development
```

#### **8. Plainly Videos API Key**
```
Name: PLAINLY_API_KEY
Value: fV34uiorV7nIQDCwoNtqEdbVx8AwVfsN
Environment: Production, Preview, Development
```

#### **9. Creatomate API Key**
```
Name: CREATOMATE_API_KEY
Value: 0c924f2a645a4c5a92beff2e4b228feb783d24983315182b1c6bf1a618ff9f5699dcbdd7b0aa4e08d3965390821122ec
Environment: Production, Preview, Development
```

**📸 Screenshot Your Variables**: Take a screenshot for your records!

### Step 3.5: Deploy!

1. Review all settings one more time
2. Click the big **"Deploy"** button
3. Watch the build logs in real-time

**⏱️ Build Time**: Approximately 2-5 minutes

#### **What Happens During Build:**
1. ✅ Vercel clones your repository
2. ✅ Installs all dependencies (`npm run install-all`)
3. ✅ Builds the client (`npm run build-all`)
4. ✅ Configures serverless functions for API
5. ✅ Deploys static files and API routes

### Step 3.6: Deployment Success! 🎉

Once complete, you'll see:
- ✅ **Congratulations! Your deployment is ready.**
- Your live URL: `https://your-project-name-abc123.vercel.app`

**Click "Visit"** to open your deployed application!

---

## 🔄 PART 4: Post-Deployment Configuration

### Step 4.1: Update Client URL Environment Variable

Now that you have your actual Vercel URL, update the CORS configuration:

1. In Vercel Dashboard, go to your project
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in sidebar
4. Find **`CLIENT_URL`** and **`CLIENT_ORIGIN`**
5. Click the **"⋮"** menu → **"Edit"**
6. Update value to your actual URL: `https://your-project-name-abc123.vercel.app`
7. Click **"Save"**
8. Repeat for both variables

### Step 4.2: Redeploy with Updated Variables

1. Go to **"Deployments"** tab
2. Click **"⋮"** next to latest deployment
3. Select **"Redeploy"**
4. Click **"Redeploy"** to confirm

**⏱️ Wait**: 1-2 minutes for redeployment

---

## ✅ PART 5: Testing Your Deployment

### Step 5.1: Test Homepage

1. Visit your Vercel URL
2. Verify these sections load:
   - Hero Section
   - Features
   - How It Works
   - API Integrations
   - Footer

### Step 5.2: Test Navigation

Click through all pages:
- [ ] **Home** - All 8 sections visible
- [ ] **About Us** - Company information loads
- [ ] **Features** - All features displayed
- [ ] **Contact** - Contact form visible
- [ ] **Login** - Login form appears
- [ ] **Sign Up** - Registration form works

### Step 5.3: Test Authentication

1. **Create an account**:
   - Go to Sign Up page
   - Fill in: Name, Email, Password
   - Click "Sign Up"
   - ✅ Should redirect to dashboard

2. **Log out and log in**:
   - Click Logout
   - Go to Login page
   - Enter credentials
   - ✅ Should successfully log in

### Step 5.4: Test Dashboard

After logging in:
- [ ] Dashboard loads
- [ ] "My Projects" section visible
- [ ] "AI Tools" section shows APIs
- [ ] Can create a new project
- [ ] Settings page accessible

### Step 5.5: Test API Connection

1. Open browser console (F12)
2. Go to Dashboard
3. Try creating a project
4. Check console for errors
   - ✅ No CORS errors
   - ✅ API calls succeed
   - ✅ Data saves to MongoDB

### Step 5.6: Verify Database Connection

1. Go back to MongoDB Atlas
2. Click **"Browse Collections"**
3. You should see database: `ai-video-editor`
4. Collections should have data:
   - `users` - Your test account
   - `projects` - Any created projects

---

## 🔧 PART 6: Troubleshooting Common Issues

### Issue 1: Build Failed ❌

**Error Message**: `Build failed with exit code 1`

**Solutions**:
1. Check build logs for specific error
2. Common causes:
   - Missing dependencies in package.json
   - TypeScript errors
   - Environment variables not set

**Fix**:
```bash
# Locally test build
cd client
npm run build

# Fix any errors shown
# Then commit and push
git add .
git commit -m "Fix build errors"
git push origin main
```

### Issue 2: 404 Not Found on Routes

**Error**: Page refreshes result in 404

**Cause**: Missing SPA routing configuration

**Fix**: Already configured in your `vercel.json`, but verify:
```json
{
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Issue 3: API Calls Failing

**Error**: `Failed to fetch` or CORS errors

**Solutions**:
1. **Check environment variables**:
   - Go to Settings → Environment Variables
   - Verify `CLIENT_URL` matches your domain
   - Verify all API keys are set

2. **Check API routes**:
   - All API routes should start with `/api/*`
   - Example: `https://yoursite.vercel.app/api/health`

3. **Test health endpoint**:
   - Visit: `https://yoursite.vercel.app/api/health`
   - Should return: `{"status":"ok"}`

### Issue 4: Database Connection Failed

**Error**: `MongooseError: Connection failed`

**Solutions**:
1. **Verify connection string**:
   - Check for typos in username/password
   - Ensure password special characters are URL-encoded
   - Verify database name is included: `/ai-video-editor?`

2. **Check MongoDB Atlas**:
   - Cluster is running (not paused)
   - IP whitelist includes `0.0.0.0/0`
   - Database user exists and has permissions

3. **Test connection string locally**:
```bash
# Install MongoDB shell
npm install -g mongodb

# Test connection
mongosh "your-connection-string-here"
```

### Issue 5: Environment Variables Not Working

**Error**: `undefined` values for env variables

**Solutions**:
1. **Re-check variable names**:
   - Must match exactly (case-sensitive)
   - No extra spaces
   - No quotes around values

2. **Redeploy after adding variables**:
   - Variables only apply to new deployments
   - Go to Deployments → Redeploy

3. **Check variable scope**:
   - Ensure set for "Production" environment
   - If testing preview, also set for "Preview"

### Issue 6: Blank Page / White Screen

**Error**: Page loads but shows nothing

**Solutions**:
1. **Check browser console** (F12):
   - Look for JavaScript errors
   - Check for failed API calls

2. **Verify build output**:
   - Check Vercel logs: Build completed successfully?
   - Output directory correct: `client/build`?

3. **Check index.html**:
   - Visit: `view-source:https://yoursite.vercel.app`
   - Should see React app HTML

---

## ⚡ PART 7: Performance Optimization

### Step 7.1: Enable Vercel Analytics (Optional)

1. In Vercel Dashboard, go to your project
2. Click **"Analytics"** tab
3. Click **"Enable Analytics"**
4. Track:
   - Page views
   - Load times
   - User traffic

### Step 7.2: Configure Caching

Your `vercel.json` should include caching headers:

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
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

### Step 7.3: Monitor Performance

1. **Lighthouse Score**:
   - Open Chrome DevTools (F12)
   - Go to "Lighthouse" tab
   - Run audit
   - Target: 90+ performance score

2. **Web Vitals**:
   - Use Vercel Analytics
   - Monitor:
     - LCP (Largest Contentful Paint) < 2.5s
     - FID (First Input Delay) < 100ms
     - CLS (Cumulative Layout Shift) < 0.1

---

## 🌐 PART 8: Custom Domain Setup (Optional)

### Step 8.1: Purchase Domain

If you don't have a domain:
1. Buy from: Namecheap, GoDaddy, Google Domains, etc.
2. Example: `myaivideoeditor.com`

### Step 8.2: Add Domain in Vercel

1. In Vercel Dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Click **"Add"**
4. Enter your domain: `myaivideoeditor.com`
5. Click **"Add"**

### Step 8.3: Configure DNS

Vercel will show you DNS records to add. Two options:

#### **Option A: Nameservers (Recommended)**
1. Copy Vercel nameservers
2. Go to your domain registrar
3. Replace nameservers with Vercel's
4. Wait 24-48 hours for propagation

#### **Option B: DNS Records**
1. Add these records at your domain registrar:

**For root domain** (`myaivideoeditor.com`):
```
Type: A
Name: @
Value: 76.76.19.61
TTL: 3600
```

**For www subdomain** (`www.myaivideoeditor.com`):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Step 8.4: Update Environment Variables

1. Go to Settings → Environment Variables
2. Update `CLIENT_URL` to your custom domain:
   ```
   CLIENT_URL=https://myaivideoeditor.com
   ```
3. Save and redeploy

### Step 8.5: Verify Domain

1. Wait 5-10 minutes
2. Visit your custom domain
3. Vercel automatically provides SSL certificate (HTTPS)
4. ✅ Your site should load securely!

---

## 📊 PART 9: Monitoring and Maintenance

### Daily Checks
- [ ] Website loads correctly
- [ ] Authentication works
- [ ] API integrations functional

### Weekly Tasks
- [ ] Check Vercel deployment logs
- [ ] Review MongoDB Atlas metrics
- [ ] Monitor API usage/quotas
- [ ] Review error logs

### Monthly Tasks
- [ ] Update dependencies:
  ```bash
  npm outdated
  npm update
  ```
- [ ] Review security advisories
- [ ] Backup MongoDB database
- [ ] Check API key expiration dates

### Monitoring Tools

**1. Vercel Dashboard**
- Deployments: All deployment history
- Logs: Real-time function logs
- Analytics: Traffic and performance
- Usage: Bandwidth and function invocations

**2. MongoDB Atlas Dashboard**
- Performance: Query performance metrics
- Monitoring: Real-time operations
- Alerts: Set up email alerts
- Backup: Automated backups (paid tier)

**3. API Monitoring**
- Shotstack: Check dashboard for usage
- Tavus: Monitor API quota
- Creatomate: Review credit usage
- Plainly: Check video count limits

---

## 🎯 Quick Reference Card

### Essential URLs
- **Vercel Dashboard**: https://vercel.com/dashboard
- **MongoDB Atlas**: https://cloud.mongodb.com
- **Your Site**: https://[your-project].vercel.app

### Essential Commands
```bash
# Deploy from CLI
npm install -g vercel
vercel --prod

# Check logs
vercel logs [deployment-url]

# Pull environment variables
vercel env pull

# Test build locally
npm run build-all
```

### Environment Variables Needed
✅ MONGODB_URI
✅ JWT_SECRET
✅ CLIENT_URL
✅ CLIENT_ORIGIN
✅ NODE_ENV
✅ SHOTSTACK_API_KEY
✅ TAVUS_API_KEY
✅ PLAINLY_API_KEY
✅ CREATOMATE_API_KEY

---

## ✨ Success Checklist

### Initial Deployment ✅
- [ ] MongoDB Atlas cluster created
- [ ] Database user created
- [ ] Network access configured (0.0.0.0/0)
- [ ] Connection string obtained
- [ ] Vercel account created
- [ ] Repository imported to Vercel
- [ ] Build settings configured
- [ ] All environment variables set
- [ ] Initial deployment successful

### Post-Deployment ✅
- [ ] CLIENT_URL updated with actual Vercel URL
- [ ] Redeployed with updated variables
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Sign up functionality works
- [ ] Login functionality works
- [ ] Dashboard accessible
- [ ] API endpoints responding
- [ ] Database connection verified
- [ ] No console errors

### Production Ready ✅
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active (automatic)
- [ ] Analytics enabled
- [ ] Performance optimized
- [ ] Monitoring set up
- [ ] Backup strategy in place
- [ ] Documentation updated

---

## 🎉 Congratulations!

Your **AI Video Editor** is now live on Vercel! 🚀

### What You've Accomplished:
✅ Deployed a full-stack React + Node.js application
✅ Configured MongoDB Atlas cloud database
✅ Set up secure authentication with JWT
✅ Integrated multiple AI video APIs
✅ Configured CORS and environment variables
✅ Deployed with automatic SSL/HTTPS
✅ Set up monitoring and analytics

### Next Steps:
1. Share your live URL with users
2. Monitor performance and usage
3. Gather user feedback
4. Iterate and improve features
5. Scale as needed (Vercel scales automatically!)

---

## 🆘 Need Help?

### Support Resources

**Vercel Documentation**
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support
- Community: https://github.com/vercel/vercel/discussions

**MongoDB Atlas**
- Docs: https://docs.atlas.mongodb.com
- Support: https://support.mongodb.com
- Community: https://community.mongodb.com

**Your Project**
- Check deployment logs in Vercel Dashboard
- Review MongoDB Atlas monitoring
- Inspect browser console for errors
- Check Network tab for failed requests

### Common Error Resolution

1. **Build Error**: Check package.json dependencies
2. **Runtime Error**: Check environment variables
3. **Database Error**: Verify connection string
4. **CORS Error**: Update CLIENT_URL
5. **404 Error**: Check vercel.json routes

---

## 📝 Changelog

### Version 1.0 (Current Deployment)
- ✅ React + Vite frontend
- ✅ Node.js + Express backend
- ✅ MongoDB Atlas database
- ✅ JWT authentication
- ✅ 4 AI video API integrations
- ✅ Dashboard with project management
- ✅ Responsive dark theme design

---

**🎬 Your AI Video Editor is ready to create amazing videos!**

**Live URL**: https://[your-project-name].vercel.app

**Happy Creating!** ✨🎥🚀
