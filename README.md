# AI VideoLab - AI-Powered Video Editing Platform

A comprehensive, full-stack MERN application that enables users to create professional videos using AI-powered tools and simple text prompts. Features a beautiful black/cinematic theme with 3D design elements.

## 🎯 Features

### Web Pages
- **Homepage**: 8 sections including Hero, Features, How It Works, Tools, Pricing, Testimonials, Stats, and CTA
- **About Us**: 8 sections covering Mission, Vision, Values, Story, Team, Milestones, Impact, and Join CTA
- **Features**: 8 sections showcasing capabilities, integrations, workflow, and use cases
- **Contact Us**: Professional contact form with office information
- **Login/Signup**: Secure authentication with JWT

### Dashboard
Complete video creation and management dashboard with:
- Dashboard home with project statistics
- My Projects section
- 8 integrated AI tools:
  - **Shotstack API** - Professional video rendering
  - **Creatomate** - Template-based video creation
  - **Plainly Videos** - Automated video production
  - **Tavus AI** - AI avatar videos
  - **PromptClip** - Open-source prompt-to-video
  - **Lucy Edit** - Advanced AI editing (by Daycart)
  - **LTXVideo** - Next-gen processing (by Lightricks)
  - **Wan 2.1** - AI enhancement (by Alibaba)
- API key management
- User profile settings

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router v6
- Tailwind CSS (cinematic black theme)
- Framer Motion (animations)
- Three.js & React Three Fiber (3D effects)
- Axios (API calls)
- React Toastify (notifications)
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs (password hashing)
- CORS enabled

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-video-editor
JWT_SECRET=your_secure_jwt_secret_key_here
```

5. Start the backend server:
```bash
npm run dev
# or
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## 🚀 Usage

### First Time Setup

1. **Start MongoDB** (if running locally):
```bash
mongod
```

2. **Start Backend** (in backend directory):
```bash
npm run dev
```

3. **Start Frontend** (in frontend directory):
```bash
npm start
```

4. **Create an Account**:
   - Navigate to `http://localhost:3000/signup`
   - Register with your email and password
   - You'll be automatically logged in

5. **Configure API Keys**:
   - Go to Dashboard → API Keys
   - Add your API keys for the services you want to use:
     - Shotstack: Get from [shotstack.io](https://shotstack.io)
     - Creatomate: Get from [creatomate.com](https://creatomate.com)
     - Plainly: Get from [plainlyvideos.com](https://plainlyvideos.com)
     - Tavus: Get from [tavus.io](https://tavus.io)

6. **Create Your First Video**:
   - Choose a tool from the dashboard
   - Enter a descriptive prompt
   - Submit and wait for processing
   - Check "My Projects" for results

## 🎨 Design Features

### Black/Cinematic Theme
- Dark backgrounds (#0a0a0a, #111111)
- Vibrant accent colors (purple, pink, cyan)
- Glass morphism effects
- Smooth animations and transitions
- 3D floating elements

### UI/UX Highlights
- Responsive design (mobile, tablet, desktop)
- Smooth page transitions
- Loading states and error handling
- Toast notifications
- Interactive hover effects
- Gradient buttons and cards

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### User
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### API Keys
- `GET /api/keys` - Get user's API keys
- `PUT /api/keys` - Update API keys

### Videos
- `POST /api/video/create` - Create new video project
- `GET /api/video/projects` - Get all user projects
- `GET /api/video/project/:id` - Get single project
- `DELETE /api/video/project/:id` - Delete project

## 📁 Project Structure

```
/workspace
├── backend/
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── Project.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── user.js
│   │   ├── apiKeys.js
│   │   └── video.js
│   ├── services/
│   │   └── videoService.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   │   ├── tools/
│   │   │   │   │   ├── ShotstackTool.js
│   │   │   │   │   ├── CreatomateTool.js
│   │   │   │   │   ├── PlainlyTool.js
│   │   │   │   │   ├── TavusTool.js
│   │   │   │   │   ├── PromptClipTool.js
│   │   │   │   │   ├── LucyEditTool.js
│   │   │   │   │   ├── LTXVideoTool.js
│   │   │   │   │   └── Wan21Tool.js
│   │   │   │   ├── DashboardHome.js
│   │   │   │   ├── Projects.js
│   │   │   │   ├── ApiKeysSettings.js
│   │   │   │   └── Profile.js
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── PrivateRoute.js
│   │   │   └── 3DBackground.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── AboutPage.js
│   │   │   ├── FeaturesPage.js
│   │   │   ├── ContactPage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── SignupPage.js
│   │   │   └── Dashboard.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
└── README.md
```

## 🔐 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Protected API routes
- Secure API key storage
- CORS enabled
- Input validation

## 🌟 Key Features by Section

### Dashboard Tools

Each tool has its own dedicated interface with:
- Custom input forms
- Real-time validation
- Loading states
- Info sidebars with tips
- Color-coded branding
- Unique functionality

### Video Processing

- Background processing (non-blocking)
- Status tracking (pending, processing, completed, failed)
- Project history
- Download capabilities
- Thumbnail previews

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for all device sizes
- Touch-friendly interfaces
- Optimized animations
- Collapsible sidebar on mobile

## 🎯 Future Enhancements

- Real-time video preview
- Collaborative editing
- Video templates library
- Advanced analytics
- Social media integration
- Webhook support
- Batch processing
- Video timeline editor

## 🤝 Contributing

This is a demonstration project. For production use:
1. Add comprehensive error handling
2. Implement rate limiting
3. Add input sanitization
4. Set up proper logging
5. Configure production builds
6. Add automated testing
7. Implement CI/CD pipeline

## 📄 License

MIT License - feel free to use this project for learning and development.

## 💡 Tips

- **API Keys**: Most services offer free tiers - start there
- **MongoDB**: Use MongoDB Atlas for cloud hosting
- **Environment**: Never commit `.env` files
- **Testing**: Test each tool integration separately
- **Performance**: Videos process in the background
- **Errors**: Check browser console and server logs

## 🆘 Troubleshooting

### Backend won't start
- Check if MongoDB is running
- Verify PORT is not in use
- Check `.env` configuration

### Frontend build errors
- Clear node_modules and reinstall
- Check Node.js version compatibility
- Verify all dependencies are installed

### API calls failing
- Ensure backend is running
- Check CORS configuration
- Verify JWT token in localStorage
- Check network tab in browser dev tools

## 📞 Support

For issues or questions:
- Check the documentation
- Review error messages
- Check API endpoints
- Verify authentication

---

Built with ❤️ using the MERN stack and modern web technologies.
