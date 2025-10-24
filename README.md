# AI Video Editor - Advanced Video Creation Platform

A comprehensive AI-powered video editing web application built with the MERN stack, featuring integration with multiple AI video generation services including Shotstack, Creatomate, Plainly Videos, Tavus, and more.

## 🚀 Features

### Core Features
- **AI-Powered Video Generation**: Create videos from text prompts using advanced AI
- **Multiple AI Tool Integration**: Shotstack, Creatomate, Plainly Videos, Tavus, PromptClip, Lucy Edit, LTXVideo, and Wan 2.1
- **Professional Video Editor**: Timeline-based editing with effects, transitions, and audio tools
- **Real-time Collaboration**: Work with team members on video projects
- **Cloud Rendering**: Distributed processing for fast video generation
- **Multi-format Export**: Support for various video formats and resolutions up to 4K

### User Interface
- **Cinematic Black Theme**: Professional dark theme with 3D design elements
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth transitions and micro-interactions using Framer Motion
- **3D Visual Effects**: Enhanced UI with particle backgrounds and animated elements

### Pages & Sections
1. **Homepage**: 8 sections including hero, stats, features, AI tools, how it works, testimonials, pricing, and CTA
2. **About Us**: 8 sections covering story, mission/vision/values, team, stats, timeline, culture, and join us
3. **Features**: 8 sections detailing core AI features, integrated tools, video editing, advanced features, platform, collaboration, and security
4. **Contact**: Multiple contact methods, office locations, FAQ, and support resources
5. **Authentication**: Login/signup with JWT authentication and social login options
6. **Dashboard**: Comprehensive dashboard with project management, analytics, and quick actions
7. **Video Editor**: Professional video editing interface with AI tool integration
8. **Projects**: Project management with filtering, sorting, and multiple view modes
9. **Settings**: User profile, API key management, notifications, security, and billing

## 🛠 Tech Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing
- **Framer Motion**: Advanced animations and transitions
- **Three.js**: 3D graphics and visual effects
- **Styled Components**: CSS-in-JS styling
- **Axios**: HTTP client for API requests
- **React Hook Form**: Form handling and validation
- **React Hot Toast**: Toast notifications
- **Lucide React**: Modern icon library

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Token authentication
- **bcryptjs**: Password hashing
- **Multer**: File upload handling
- **Helmet**: Security middleware
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: API rate limiting

### Development Tools
- **Concurrently**: Run multiple commands
- **Nodemon**: Development server auto-restart
- **ESLint**: Code linting
- **Prettier**: Code formatting

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-video-editor.git
cd ai-video-editor
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Return to root directory
cd ..
```

### 3. Environment Setup

Create environment files for both frontend and backend:

#### Backend Environment (.env)
```bash
cd backend
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000

# Database
MONGODB_URI=mongodb://localhost:27017/ai-video-editor

# JWT
JWT_SECRET=your_super_secure_jwt_secret_key_here
JWT_EXPIRE=7d

# API Keys (Optional - users can add these in the dashboard)
SHOTSTACK_API_KEY=
CREATOMATE_API_KEY=
PLAINLY_API_KEY=
TAVUS_API_KEY=

# File Upload
MAX_FILE_SIZE=100mb
UPLOAD_PATH=./uploads

# Email Configuration (Optional)
EMAIL_SERVICE=gmail
EMAIL_USER=
EMAIL_PASS=
```

#### Frontend Environment (Optional)
```bash
cd frontend
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env
```

### 4. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. The application will automatically create the database and collections

#### Option B: MongoDB Atlas (Recommended)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in your `.env` file

### 5. Start the Application

From the root directory:

```bash
# Start both frontend and backend concurrently
npm run dev
```

Or start them separately:

```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

### 6. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 🔧 Configuration

### API Keys Setup

The application integrates with multiple AI video services. Users can add their API keys through the dashboard settings, but you can also pre-configure them:

1. **Shotstack**: Get your API key from [Shotstack](https://shotstack.io)
2. **Creatomate**: Get your API key from [Creatomate](https://creatomate.com)
3. **Plainly Videos**: Get your API key from [Plainly Videos](https://plainlyvideos.com)
4. **Tavus**: Get your API key from [Tavus](https://tavus.io)

### Database Configuration

The application uses MongoDB with the following collections:
- `users`: User accounts and profiles
- `videos`: Video projects and metadata
- `sessions`: User sessions (if using session storage)

## 🏗 Project Structure

```
ai-video-editor/
├── frontend/                 # React frontend application
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── auth/        # Authentication components
│   │   │   ├── dashboard/   # Dashboard components
│   │   │   ├── effects/     # Visual effects components
│   │   │   ├── layout/      # Layout components
│   │   │   └── ui/          # UI components
│   │   ├── contexts/        # React contexts
│   │   ├── pages/           # Page components
│   │   ├── utils/           # Utility functions
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│   └── package.json
├── backend/                 # Express.js backend
│   ├── middleware/          # Custom middleware
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   ├── server.js            # Server entry point
│   └── package.json
├── package.json             # Root package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: #00ff88 (Bright green)
- **Background**: #000000 (Pure black)
- **Surface**: #1a1a1a (Dark gray)
- **Text Primary**: #ffffff (White)
- **Text Secondary**: #888888 (Light gray)
- **Border**: #333333 (Medium gray)

### Typography
- **Primary Font**: Inter (Sans-serif)
- **Monospace Font**: JetBrains Mono
- **Heading Sizes**: XL (4rem), LG (3rem), MD (2rem), SM (1.5rem)

### Components
- **Cards**: Rounded corners, subtle borders, hover effects
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Forms**: Consistent styling with validation states
- **Animations**: Smooth transitions using Framer Motion

## 🔌 API Integration

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `PUT /api/auth/api-keys` - Update API keys

### Video Management Endpoints
- `GET /api/videos` - Get user videos
- `POST /api/videos` - Create new video project
- `GET /api/videos/:id` - Get specific video
- `PUT /api/videos/:id` - Update video
- `DELETE /api/videos/:id` - Delete video

### AI Service Integration Endpoints
- `POST /api/integrations/shotstack/render` - Shotstack rendering
- `POST /api/integrations/creatomate/render` - Creatomate rendering
- `POST /api/integrations/plainly/render` - Plainly rendering
- `POST /api/integrations/tavus/generate` - Tavus generation
- `POST /api/integrations/test-connection` - Test API connections

## 🧪 Testing

### Running Tests
```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
npm test
```

### Test Coverage
- Unit tests for components
- Integration tests for API endpoints
- End-to-end tests for user workflows

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Deploy the `build` folder to your hosting service

### Backend Deployment (Heroku/Railway/DigitalOcean)
1. Set up environment variables on your hosting platform
2. Deploy the backend code
3. Ensure MongoDB connection is configured

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
CLIENT_URL=https://your-frontend-domain.com
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Getting Help
- **Documentation**: Check this README and inline code comments
- **Issues**: Open an issue on GitHub for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions and community support

### Common Issues

#### MongoDB Connection Error
```bash
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Ensure MongoDB is running locally or check your Atlas connection string.

#### Port Already in Use
```bash
Error: listen EADDRINUSE :::5000
```
**Solution**: Kill the process using the port or change the PORT in your .env file.

#### API Key Issues
**Solution**: Verify your API keys are correct and have the necessary permissions.

## 🔮 Roadmap

### Phase 1 (Current)
- ✅ Basic MERN stack setup
- ✅ Authentication system
- ✅ Dashboard and project management
- ✅ UI/UX with cinematic theme

### Phase 2 (In Progress)
- 🔄 Complete API integrations
- 🔄 Advanced video editor features
- 🔄 Real-time collaboration
- 🔄 File upload and management

### Phase 3 (Planned)
- 📅 Advanced AI features
- 📅 Team collaboration tools
- 📅 Analytics and reporting
- 📅 Mobile application

### Phase 4 (Future)
- 📅 Enterprise features
- 📅 White-label solutions
- 📅 Advanced security features
- 📅 API marketplace

## 📊 Performance

### Optimization Features
- Code splitting for faster loading
- Image optimization and lazy loading
- Efficient state management
- Caching strategies
- CDN integration ready

### Monitoring
- Performance metrics tracking
- Error logging and monitoring
- User analytics
- API performance monitoring

---

**Built with ❤️ for creators worldwide**

For more information, visit our [website](https://aivideoeditor.com) or contact us at [hello@aivideoeditor.com](mailto:hello@aivideoeditor.com).