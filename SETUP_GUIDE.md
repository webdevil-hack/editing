# AI VideoLab - Complete Setup Guide

## 🎬 Quick Start (5 Minutes)

### Step 1: Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### Step 2: Configure Environment

Create `backend/.env` file:
```bash
cd backend
cp .env.example .env
```

Edit `backend/.env` and set:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-video-editor
JWT_SECRET=supersecretkey123changethis
```

### Step 3: Start MongoDB

**Option A - Local MongoDB:**
```bash
mongod
```

**Option B - MongoDB Atlas (Cloud):**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster
4. Get connection string
5. Update `MONGODB_URI` in `.env`

### Step 4: Launch Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
✅ Backend running on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```
✅ Frontend running on http://localhost:3000

### Step 5: Create Account & Configure

1. Open http://localhost:3000
2. Click "Get Started" or "Sign Up"
3. Register with email & password
4. Login to dashboard
5. Navigate to "API Keys" section
6. Add your API keys (see below)

---

## 🔑 Getting API Keys

### Free Tier API Keys

#### 1. Shotstack (Free Trial)
- Website: https://shotstack.io
- Sign up for free account
- Go to Dashboard → API Keys
- Copy your API key
- Paste in AI VideoLab dashboard

#### 2. Creatomate (Free Trial)
- Website: https://creatomate.com
- Create free account
- Navigate to Settings → API
- Copy API key
- Paste in AI VideoLab dashboard

#### 3. Plainly Videos (Free Trial)
- Website: https://plainlyvideos.com
- Sign up for account
- Access API section
- Generate API key
- Paste in AI VideoLab dashboard

#### 4. Tavus (Free Credits)
- Website: https://tavus.io
- Create account
- Go to API settings
- Get API key
- Paste in AI VideoLab dashboard

### Open Source Tools
- PromptClip, Lucy Edit, LTXVideo, and Wan 2.1 are simulated
- No API keys needed for these tools
- They will work immediately

---

## 🎨 Using the Platform

### Creating Your First Video

1. **Choose a Tool**
   - Navigate to Dashboard
   - Select any AI tool (Shotstack, Creatomate, etc.)

2. **Fill the Form**
   - Project Title: "My First AI Video"
   - Description: Brief description
   - Prompt: "Create a cinematic video with..."
   - Additional options based on tool

3. **Submit & Wait**
   - Click "Create Video"
   - Processing happens in background
   - Status updates automatically

4. **View Results**
   - Go to "My Projects"
   - See all your videos
   - Download or view completed videos

### Example Prompts

**For Cinematic Videos:**
```
Create a cinematic video showing a sunset over mountains 
with dramatic music and slow motion effects
```

**For Social Media:**
```
Create a 15-second engaging video for Instagram with 
bright colors and upbeat music about healthy eating
```

**For Business:**
```
Create a professional explainer video showcasing our 
product features with modern graphics and voiceover
```

---

## 🛠️ Troubleshooting

### Backend Issues

**Problem: "Cannot connect to MongoDB"**
```bash
# Solution 1: Start local MongoDB
mongod

# Solution 2: Check if port is in use
lsof -i :27017

# Solution 3: Use MongoDB Atlas cloud
# Update MONGODB_URI in .env with Atlas connection string
```

**Problem: "Port 5000 already in use"**
```bash
# Find process using port
lsof -i :5000

# Kill the process (replace PID with actual number)
kill -9 PID

# Or change PORT in .env
PORT=5001
```

**Problem: "JWT token error"**
```bash
# Solution: Update JWT_SECRET in .env
JWT_SECRET=yoursecurerandomstring123
```

### Frontend Issues

**Problem: "Module not found"**
```bash
# Solution: Reinstall dependencies
cd frontend
rm -rf node_modules package-lock.json
npm install
```

**Problem: "Cannot connect to backend"**
- Check if backend is running on http://localhost:5000
- Verify CORS is enabled in backend
- Check browser console for errors

**Problem: "Build errors with Tailwind"**
```bash
# Solution: Reinstall Tailwind
npm install -D tailwindcss postcss autoprefixer
```

### API Integration Issues

**Problem: "API key invalid"**
- Double-check the API key is correct
- Ensure no extra spaces
- Verify key hasn't expired
- Check service status page

**Problem: "Video not processing"**
- Check backend logs for errors
- Verify API key is saved
- Ensure API service is online
- Check MongoDB connection

---

## 📊 Project Structure

```
/workspace
├── backend/              # Node.js/Express backend
│   ├── controllers/      # Request handlers
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── middleware/      # Auth middleware
│   └── server.js        # Entry point
├── frontend/            # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── context/     # React context
│   │   └── App.js       # Main app
│   └── public/          # Static files
└── README.md            # Documentation
```

---

## 🚀 Production Deployment

### Backend Deployment (Heroku Example)

1. Install Heroku CLI
2. Login to Heroku:
```bash
heroku login
```

3. Create app:
```bash
cd backend
heroku create ai-videolab-api
```

4. Set environment variables:
```bash
heroku config:set MONGODB_URI=your_atlas_connection_string
heroku config:set JWT_SECRET=your_secret_key
```

5. Deploy:
```bash
git push heroku main
```

### Frontend Deployment (Vercel Example)

1. Install Vercel CLI
2. Login:
```bash
vercel login
```

3. Deploy:
```bash
cd frontend
vercel
```

4. Update API URLs in frontend code to point to production backend

---

## 🔒 Security Best Practices

1. **Never commit `.env` files**
2. **Use strong JWT secrets** (32+ characters)
3. **Use HTTPS in production**
4. **Implement rate limiting**
5. **Validate all inputs**
6. **Keep dependencies updated**
7. **Use environment-specific configs**

---

## 📱 Testing Different Features

### Test Authentication
1. Register new account
2. Login
3. Access protected routes
4. Logout and verify redirect

### Test Video Creation
1. Go to any tool
2. Fill form with test data
3. Submit
4. Check "My Projects"
5. Verify status updates

### Test API Keys
1. Go to API Keys page
2. Add test keys
3. Save
4. Create video with that service
5. Check if it uses the key

---

## 💻 Development Tips

### Hot Reload Setup
- Backend uses `nodemon` for auto-restart
- Frontend has built-in hot reload
- Changes reflect immediately

### Debugging
```bash
# Backend logs
cd backend
npm run dev
# Watch console for errors

# Frontend logs
# Open browser DevTools (F12)
# Check Console and Network tabs
```

### Database Inspection
```bash
# Connect to MongoDB
mongo

# Use database
use ai-video-editor

# View users
db.users.find()

# View projects
db.projects.find()
```

---

## 📈 Performance Optimization

### Backend
- Use MongoDB indexes
- Implement caching
- Optimize queries
- Use compression

### Frontend
- Code splitting
- Lazy loading
- Image optimization
- Minimize bundle size

---

## 🎯 Next Steps

After setup, you can:

1. **Customize Branding**
   - Update logo and colors
   - Modify theme in `tailwind.config.js`

2. **Add More Features**
   - Video templates
   - Collaborative editing
   - Advanced analytics

3. **Integrate More APIs**
   - Add new video services
   - Connect social media
   - Add payment processing

4. **Improve UX**
   - Add onboarding tutorial
   - Implement keyboard shortcuts
   - Add dark mode toggle

---

## 📞 Getting Help

### Resources
- MongoDB Docs: https://docs.mongodb.com
- React Docs: https://react.dev
- Express Docs: https://expressjs.com
- Tailwind Docs: https://tailwindcss.com

### Common Commands

```bash
# Install all dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Check for updates
npm outdated

# Update packages
npm update
```

---

## ✅ Checklist

Before going live, ensure:

- [ ] MongoDB is connected
- [ ] Environment variables are set
- [ ] API keys are configured
- [ ] All dependencies installed
- [ ] Backend starts without errors
- [ ] Frontend compiles successfully
- [ ] Can create account
- [ ] Can login
- [ ] Can create video project
- [ ] Projects save to database
- [ ] Can update profile
- [ ] Can manage API keys

---

## 🎉 Congratulations!

Your AI VideoLab platform is now ready to use! Start creating amazing AI-powered videos.

For advanced configurations and deployment options, check the main README.md file.

Happy video creating! 🎬✨
