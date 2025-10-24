# AI Video Editor - Advanced Video Creation Platform

A comprehensive web application that enables users to create professional-quality videos using AI-powered tools and simple text prompts. Built with the MERN stack and featuring a cinematic black theme with 3D design elements.

## 🚀 Features

### Core Functionality
- **AI-Powered Video Generation**: Create videos from simple text prompts using advanced AI
- **Multiple API Integrations**: Support for Shotstack, Creatomate, Plainly Videos, and Tavus APIs
- **Open Source Tools**: Integration with PromptClip, Lucy Edit, LTXVideo, and Wan 2.1
- **Real-time Preview**: See changes instantly with live editing capabilities
- **3D Effects & Animations**: Stunning 3D design elements and cinematic effects
- **Multiple Export Formats**: Support for various video formats up to 4K resolution

### User Interface
- **Cinematic Black Theme**: Modern, professional design with dark aesthetics
- **Responsive Design**: Works seamlessly across all devices
- **Intuitive Dashboard**: Easy-to-use interface for managing projects
- **Real-time Collaboration**: Share projects and work with team members

### Pages & Sections
- **Homepage**: 8 comprehensive sections showcasing features and capabilities
- **About Us**: 8 detailed sections about the company and mission
- **Features**: 8 sections highlighting platform capabilities
- **Contact**: Complete contact information and support options
- **Authentication**: Secure login and signup with social options
- **Dashboard**: Full-featured project management and video creation interface

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing
- **Styled Components**: CSS-in-JS styling
- **Framer Motion**: Smooth animations and transitions
- **Three.js**: 3D graphics and effects
- **React Three Fiber**: React integration for Three.js
- **Axios**: HTTP client for API requests
- **React Hook Form**: Form handling and validation
- **React Hot Toast**: Notifications and alerts

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication
- **Bcryptjs**: Password hashing
- **Multer**: File upload handling
- **Helmet**: Security middleware
- **CORS**: Cross-origin resource sharing

### APIs & Tools Integrated
- **Shotstack API**: Video generation and editing
- **Creatomate API**: Template-based video creation
- **Plainly Videos API**: Automated video production
- **Tavus API**: Personalized video generation
- **PromptClip**: Open-source video generation tool
- **Lucy Edit**: AI-powered video editing by Daycart
- **LTXVideo**: Advanced video processing by Lightricks
- **Wan 2.1**: Video generation tool by Alibaba

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-video-editor
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/ai-video-editor
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   CLIENT_URL=http://localhost:3000

   # API Keys (Add your actual API keys here)
   SHOTSTACK_API_KEY=4bEY6gvxmoeZjQkriUdsc1mdz9lLXW7a9n5xqNyQ
   CREATOMATE_API_KEY=your-creatomate-api-key
   PLAINLY_API_KEY=your-plainly-api-key
   TAVUS_API_KEY=your-tavus-api-key
   ```

5. **Start MongoDB**
   Make sure MongoDB is running on your system.

6. **Run the application**
   ```bash
   # Development mode (runs both server and client)
   npm run dev

   # Or run separately:
   # Server only
   npm run server

   # Client only
   npm run client
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🔑 API Key Configuration

### Required API Keys

To use the full functionality of the platform, you'll need to obtain API keys from the following services:

#### 1. Shotstack API
- Visit: https://shotstack.io/
- Sign up for a free account
- Get your API key from the dashboard
- Add to `.env` file as `SHOTSTACK_API_KEY`

#### 2. Creatomate API
- Visit: https://creatomate.com/
- Create an account
- Generate an API key
- Add to `.env` file as `CREATOMATE_API_KEY`

#### 3. Plainly Videos API
- Visit: https://plainlyvideos.com/
- Sign up for an account
- Get your API key
- Add to `.env` file as `PLAINLY_API_KEY`

#### 4. Tavus API
- Visit: https://tavus.io/
- Create an account
- Generate an API key
- Add to `.env` file as `TAVUS_API_KEY`

### Open Source Tools
The following tools are integrated and don't require API keys:
- **PromptClip**: Open source GitHub repository
- **Lucy Edit**: By Daycart
- **LTXVideo**: By Lightricks
- **Wan 2.1**: By Alibaba

## 🎨 Customization

### Theme Customization
The application uses a cinematic black theme with customizable colors. You can modify the color scheme by updating the CSS variables in the main stylesheet.

### Adding New APIs
To integrate additional video generation APIs:

1. Add the API configuration to `server/services/videoProcessing.js`
2. Create a new processing function following the existing pattern
3. Add the API option to the dashboard interface
4. Update the frontend to handle the new API

### Styling
The application uses a combination of:
- Global CSS for base styles
- Component-specific CSS modules
- Styled Components for dynamic styling
- CSS custom properties for theming

## 📱 Usage

### Creating Your First Video

1. **Sign Up**: Create a new account or sign in
2. **Configure API Keys**: Add your API keys in the settings
3. **Create Project**: Click "Create New" in the dashboard
4. **Write Prompt**: Describe your video idea in natural language
5. **Select API**: Choose which service to use for generation
6. **Generate**: Click create and wait for processing
7. **Download**: Once complete, download your video

### Dashboard Features

- **Project Management**: View, edit, and delete your video projects
- **Template Library**: Choose from professional video templates
- **Analytics**: Track your video performance and usage statistics
- **Settings**: Manage API keys, account settings, and preferences

## 🔒 Security

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt for secure password storage
- **CORS Protection**: Configured for secure cross-origin requests
- **Helmet Security**: Additional security headers
- **Rate Limiting**: Protection against abuse
- **Input Validation**: Server-side validation for all inputs

## 🚀 Deployment

### Production Deployment

1. **Build the client**
   ```bash
   cd client
   npm run build
   cd ..
   ```

2. **Set production environment variables**
   ```env
   NODE_ENV=production
   MONGODB_URI=your-production-mongodb-uri
   JWT_SECRET=your-production-jwt-secret
   CLIENT_URL=your-production-frontend-url
   ```

3. **Deploy to your preferred platform**
   - Heroku
   - Vercel
   - AWS
   - DigitalOcean
   - Or any Node.js hosting service

### Docker Deployment

A `Dockerfile` can be created for containerized deployment:

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN cd client && npm install && npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: support@aivideoeditor.com
- Documentation: [Link to documentation]
- Issues: [GitHub Issues](https://github.com/your-repo/issues)

## 🙏 Acknowledgments

- Shotstack for video generation API
- Creatomate for template-based video creation
- Plainly Videos for automated video production
- Tavus for personalized video generation
- Open source contributors for PromptClip, Lucy Edit, LTXVideo, and Wan 2.1
- React and Node.js communities for excellent frameworks

## 📈 Roadmap

- [ ] Real-time collaboration features
- [ ] Advanced 3D model integration
- [ ] Voice-to-video generation
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Custom template creation
- [ ] Team management features
- [ ] API rate limiting and usage tracking

---

**Built with ❤️ by the AI Video Editor Team**