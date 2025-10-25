import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles.css';
import RootLayout from './routes/RootLayout';
import ModernHome from './pages/Home/ModernHome';
import About from './routes/About';
import Features from './routes/Features';
import Contact from './routes/Contact';
import ModernLogin from './pages/Login/ModernLogin';
import Signup from './routes/Signup';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import NewDashboard from './pages/Dashboard/NewDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <ModernHome /> },
      { path: 'about', element: <About /> },
      { path: 'features', element: <Features /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <ModernLogin /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <NewDashboard /> },
      { path: '*', element: <NewDashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
