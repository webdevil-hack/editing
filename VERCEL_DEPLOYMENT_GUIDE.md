# Complete Vercel Deployment Guide for AI Video Editor

## Project Overview
Your AI Video Editor project consists of:
- **Frontend**: React + Vite + TypeScript (in `/client` directory)
- **Backend**: Node.js + Express (in `/server` directory)
- **Database**: MongoDB (external service required)

## Prerequisites
- [Vercel account](https://vercel.com) (free tier available)
- [MongoDB Atlas account](https://www.mongodb.com/atlas) (free tier available)
- [GitHub account](https://github.com) (for code repository)
- Node.js 16+ installed locally

## Step 1: Prepare Your Repository

### 1.1 Push to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 1.2 Clean Up Project Structure
Your project has multiple backend directories. We'll use the `/server` directory as it's the most complete.

## Step 2: Configure Vercel for Full-Stack Deployment

### 2.1 Create Root Vercel Configuration
Create `/vercel.json` in your project root:

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
      "dest": "/client/build/index.html"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### 2.2 Create Client Build Configuration
Create `/client/vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "vite"
}
```

### 2.3 Update Client Package.json
Add build script to `/client/package.json`:

```json
{
  "scripts": {
    "build": "vite build",
    "vercel-build": "vite build"
  }
}
```

## Step 3: Set Up MongoDB Atlas

### 3.1 Create MongoDB Atlas Cluster
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up/Login
3. Create a new project
4. Create a free cluster (M0 Sandbox)
5. Choose a region close to your users

### 3.2 Configure Database Access
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Create a user with read/write permissions
4. Note down the username and password

### 3.3 Get Connection String
1. Go to "Clusters" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string (replace `<password>` with your user password)

## Step 4: Configure Environment Variables

### 4.1 Create Environment Files

Create `/server/.env`:
```env
NODE_ENV=production
PORT=4000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-video-editor?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-here
CLIENT_ORIGIN=https://your-app-name.vercel.app
```

Create `/client/.env`:
```env
VITE_API_URL=https://your-app-name.vercel.app/api
VITE_APP_NAME=AI Video Editor
```

### 4.2 Add Environment Files to .gitignore
Create/update `.gitignore`:
```
node_modules/
.env
.env.local
.env.production
build/
dist/
*.log
.DS_Store
```

## Step 5: Deploy to Vercel

### 5.1 Connect Repository to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect your project structure

### 5.2 Configure Build Settings
In Vercel dashboard:
- **Framework Preset**: Other
- **Root Directory**: Leave empty (root)
- **Build Command**: `npm run build-all`
- **Output Directory**: `build`

### 5.3 Set Environment Variables in Vercel
In your Vercel project settings, add these environment variables:

**For Production:**
```
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-video-editor
JWT_SECRET=your-super-secret-jwt-key-here
CLIENT_ORIGIN=https://your-app-name.vercel.app
VITE_API_URL=https://your-app-name.vercel.app/api
```

### 5.4 Deploy
1. Click "Deploy" in Vercel
2. Wait for the build to complete
3. Your app will be available at `https://your-app-name.vercel.app`

## Step 6: Configure API Routes

### 6.1 Update Server Configuration
Ensure your server handles Vercel's serverless environment:

```javascript
// In server/src/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const { connectDb } = require('./lib/db');
const authRoutes = require('./routes/auth');
const providerRoutes = require('./routes/providers');
const jobRoutes = require('./routes/jobs');
const toolRoutes = require('./routes/tools');
const contactRoutes = require('./routes/contact');

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'ai-video-editor-server', 
    time: new Date().toISOString() 
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/tools', toolRoutes);
app.use('/api/contact', contactRoutes);

// For Vercel serverless
module.exports = app;

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000;
  connectDb()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });
    })
    .catch((err) => {
      console.error('DB connection error:', err?.message || err);
      app.listen(PORT, () => {
        console.log(`Server running (DB not connected) on http://localhost:${PORT}`);
      });
    });
}
```

## Step 7: Update Frontend API Calls

### 7.1 Update API Base URL
In your client code, update API calls to use the Vercel URL:

```javascript
// In client/src/services/api.js or similar
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

### 7.2 Update CORS Settings
Ensure your server allows the Vercel domain:

```javascript
// In server/src/index.js
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
app.use(cors({ 
  origin: [CLIENT_ORIGIN, 'https://your-app-name.vercel.app'],
  credentials: true 
}));
```

## Step 8: Test Your Deployment

### 8.1 Health Check
Visit: `https://your-app-name.vercel.app/api/health`

Should return:
```json
{
  "status": "ok",
  "service": "ai-video-editor-server",
  "time": "2024-01-01T00:00:00.000Z"
}
```

### 8.2 Test Frontend
1. Visit your Vercel URL
2. Check if the React app loads
3. Test API calls from the frontend
4. Check browser console for errors

### 8.3 Test API Endpoints
```bash
# Test health endpoint
curl https://your-app-name.vercel.app/api/health

# Test other endpoints
curl https://your-app-name.vercel.app/api/auth/register
```

## Step 9: Configure Custom Domain (Optional)

### 9.1 Add Custom Domain
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### 9.2 Update Environment Variables
Update `CLIENT_ORIGIN` and `VITE_API_URL` with your custom domain.

## Step 10: Monitor and Debug

### 10.1 Vercel Analytics
- Enable Vercel Analytics in project settings
- Monitor performance and errors

### 10.2 Function Logs
- Check Vercel function logs for server errors
- Monitor API response times

### 10.3 Database Monitoring
- Monitor MongoDB Atlas for connection issues
- Check database performance metrics

## Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check Node.js version (should be 16+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **API Not Working**
   - Verify environment variables are set
   - Check CORS configuration
   - Ensure MongoDB connection string is correct

3. **Frontend Not Loading**
   - Check if build output directory is correct
   - Verify Vite configuration
   - Check for JavaScript errors in browser console

4. **Database Connection Issues**
   - Verify MongoDB Atlas IP whitelist (add 0.0.0.0/0 for Vercel)
   - Check connection string format
   - Verify database user permissions

### Debug Commands:
```bash
# Test locally
npm run dev

# Build and test
npm run build
npm start

# Check Vercel CLI
npx vercel --version
npx vercel dev
```

## Security Considerations

1. **Environment Variables**: Never commit `.env` files
2. **JWT Secrets**: Use strong, random secrets
3. **CORS**: Only allow necessary origins
4. **Rate Limiting**: Implement API rate limiting
5. **Database**: Use strong passwords and enable authentication

## Performance Optimization

1. **Image Optimization**: Use Vercel's image optimization
2. **Caching**: Implement proper caching headers
3. **CDN**: Vercel automatically provides global CDN
4. **Database Indexing**: Optimize MongoDB queries

## Cost Considerations

- **Vercel Free Tier**: 100GB bandwidth, 100 serverless function executions
- **MongoDB Atlas Free Tier**: 512MB storage, shared clusters
- **Upgrade**: Consider paid tiers for production use

## Next Steps

1. Set up monitoring and alerting
2. Implement CI/CD pipeline
3. Add automated testing
4. Set up staging environment
5. Implement backup strategies

---

**Need Help?**
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [React + Vite Documentation](https://vitejs.dev/guide/)