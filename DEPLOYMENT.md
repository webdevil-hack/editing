# 🚀 Vercel Deployment Guide for AI Video Editor

## 📋 **Pre-Deployment Checklist**

### ✅ **1. Environment Variables Setup**

#### **Server Environment Variables (Vercel Dashboard)**
Go to your Vercel project settings → Environment Variables and add:

```bash
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-video-editor?retryWrites=true&w=majority

# JWT Secret
JWT_SECRET=your-super-secure-jwt-secret-key-for-production

# API Keys
SHOTSTACK_API_KEY=4bEY6gvxmoeZjQkriUdsc1mdz9lLXW7a9n5xqNyQ
TAVUS_API_KEY=e39b1deee39e472589365b02f01002f3
PLAINLY_API_KEY=fV34uiorV7nIQDCwoNtqEdbVx8AwVfsN
CREATOMATE_API_KEY=0c924f2a645a4c5a92beff2e4b228feb783d24983315182b1c6bf1a618ff9f5699dcbdd7b0aa4e08d3965390821122ec

# CORS
CLIENT_URL=https://your-app-name.vercel.app

# Node Environment
NODE_ENV=production
```

#### **Client Environment Variables**
Create `client/.env.production`:

```bash
REACT_APP_API_URL=https://your-app-name.vercel.app/api
REACT_APP_NODE_ENV=production
```

### ✅ **2. MongoDB Atlas Setup**

1. **Create MongoDB Atlas Account**: https://cloud.mongodb.com
2. **Create Cluster**: Choose free tier (M0)
3. **Create Database**: Name it `ai-video-editor`
4. **Create User**: 
   - Username: `ai-video-user`
   - Password: Generate secure password
5. **Whitelist IP**: Add `0.0.0.0/0` for Vercel access
6. **Get Connection String**: Copy and update `MONGODB_URI`

### ✅ **3. Project Structure Verification**

Ensure your project has this structure:
```
ai-video-editor/
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env.production
├── server/
│   ├── index.js
│   ├── package.json
│   ├── routes/
│   ├── models/
│   ├── services/
│   └── middleware/
├── vercel.json
├── package.json
└── .env.production
```

## 🚀 **Deployment Steps**

### **Step 1: Prepare Repository**

1. **Initialize Git** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit - AI Video Editor"
```

2. **Push to GitHub**:
```bash
git remote add origin https://github.com/yourusername/ai-video-editor.git
git push -u origin main
```

### **Step 2: Deploy to Vercel**

1. **Go to Vercel**: https://vercel.com
2. **Import Project**: Connect your GitHub repository
3. **Configure Project**:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (root)
   - **Build Command**: `npm run build-all`
   - **Output Directory**: `client/build`
   - **Install Command**: `npm run install-all`

4. **Add Environment Variables** (as listed above)
5. **Deploy**: Click "Deploy"

### **Step 3: Configure Vercel Functions**

1. **Go to Functions Tab** in Vercel dashboard
2. **Verify Server Function**: Should show `server/index.js`
3. **Check Runtime**: Node.js 18.x
4. **Set Timeout**: 30 seconds (for video processing)

### **Step 4: Update Client API URL**

After deployment, update the client environment variable:
```bash
REACT_APP_API_URL=https://your-actual-app-name.vercel.app/api
```

## 🔧 **Post-Deployment Configuration**

### **1. Test All Endpoints**

#### **Health Check**
```bash
curl https://your-app-name.vercel.app/api/health
```

#### **Test API Endpoints**
```bash
# Test video processing
curl -X POST https://your-app-name.vercel.app/api/video/process \
  -H "Content-Type: application/json" \
  -d '{"projectId": "test", "apiKey": "test", "service": "shotstack"}'
```

### **2. Verify Frontend**

1. **Visit**: `https://your-app-name.vercel.app`
2. **Test Navigation**: All pages should load
3. **Test Authentication**: Login/Signup should work
4. **Test Dashboard**: All features should be accessible
5. **Test API Integration**: Create projects and process videos

### **3. Database Verification**

1. **Check MongoDB Atlas**: Verify collections are created
2. **Test User Registration**: Create test user
3. **Test Project Creation**: Create test project
4. **Verify Data Persistence**: Refresh and check data

## 🛠️ **Troubleshooting**

### **Common Issues & Solutions**

#### **1. Build Failures**
```bash
# Check build logs in Vercel dashboard
# Common fixes:
npm install --legacy-peer-deps
# or
npm install --force
```

#### **2. API Connection Issues**
- Verify environment variables are set
- Check CORS configuration
- Ensure MongoDB connection string is correct

#### **3. Frontend Not Loading**
- Check if build completed successfully
- Verify output directory is `client/build`
- Check for JavaScript errors in browser console

#### **4. Database Connection Issues**
- Verify MongoDB Atlas IP whitelist
- Check connection string format
- Ensure database user has proper permissions

### **Debug Commands**

#### **Local Testing**
```bash
# Test server locally
cd server && npm start

# Test client locally
cd client && npm start

# Test full stack
npm run dev
```

#### **Check Logs**
```bash
# Vercel logs
vercel logs

# Check specific function
vercel logs --function=server/index.js
```

## 📊 **Performance Optimization**

### **1. Build Optimization**
- Client build is optimized for production
- Server uses Vercel's edge functions
- Static assets are cached by Vercel CDN

### **2. API Optimization**
- Rate limiting implemented
- Error handling for all endpoints
- Timeout handling for video processing

### **3. Database Optimization**
- Indexed fields for faster queries
- Connection pooling
- Efficient data models

## 🔒 **Security Considerations**

### **1. Environment Variables**
- All sensitive data in environment variables
- No hardcoded API keys
- JWT secret is secure

### **2. CORS Configuration**
- Properly configured for production domain
- Credentials enabled for authentication

### **3. API Security**
- Input validation on all endpoints
- Error messages don't expose sensitive data
- Rate limiting to prevent abuse

## 📈 **Monitoring & Analytics**

### **1. Vercel Analytics**
- Built-in performance monitoring
- Real-time error tracking
- Function execution metrics

### **2. Custom Monitoring**
- API response time tracking
- Error rate monitoring
- User activity logging

## 🎯 **Success Criteria**

### **✅ Deployment Checklist**
- [ ] Application loads without errors
- [ ] All pages are accessible
- [ ] Authentication works (login/signup)
- [ ] Dashboard loads with all features
- [ ] API endpoints respond correctly
- [ ] Database operations work
- [ ] Video processing APIs are integrated
- [ ] All tools and APIs are displayed
- [ ] Dark cinematic theme is applied
- [ ] Mobile responsiveness works

### **✅ Functionality Checklist**
- [ ] User registration and login
- [ ] Project creation and management
- [ ] API key configuration
- [ ] Video processing with all services
- [ ] Dashboard analytics
- [ ] Settings management
- [ ] Error handling and user feedback

## 🚀 **Go Live!**

Once all checks pass, your AI Video Editor is ready for production use! 

**Live URL**: `https://your-app-name.vercel.app`

**Admin Access**: Use the dashboard to manage users and monitor usage.

**API Documentation**: Available at `https://your-app-name.vercel.app/api/health`

---

## 📞 **Support**

If you encounter any issues during deployment:

1. Check Vercel deployment logs
2. Verify all environment variables
3. Test API endpoints individually
4. Check MongoDB Atlas connection
5. Review browser console for frontend errors

**Happy Deploying! 🎉**