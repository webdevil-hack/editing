import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// Protected Pages
import Dashboard from './pages/Dashboard';
import VideoEditor from './pages/VideoEditor';
import ProjectsPage from './pages/ProjectsPage';
import SettingsPage from './pages/SettingsPage';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Styles
import './App.css';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <Navbar />
      
      <main className="main-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Auth Routes */}
          <Route 
            path="/login" 
            element={user ? <Navigate to="/dashboard" /> : <LoginPage />} 
          />
          <Route 
            path="/signup" 
            element={user ? <Navigate to="/dashboard" /> : <SignupPage />} 
          />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/editor" element={
            <ProtectedRoute>
              <VideoEditor />
            </ProtectedRoute>
          } />
          
          <Route path="/editor/:id" element={
            <ProtectedRoute>
              <VideoEditor />
            </ProtectedRoute>
          } />
          
          <Route path="/projects" element={
            <ProtectedRoute>
              <ProjectsPage />
            </ProtectedRoute>
          } />
          
          <Route path="/settings" element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          } />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      
      {/* Only show footer on public pages */}
      {!user && <Footer />}
    </div>
  );
}

export default App;