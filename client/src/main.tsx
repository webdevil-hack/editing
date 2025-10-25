import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Import pages
import ModernHome from './pages/Home/ModernHome.tsx'
import ModernLogin from './pages/Login/ModernLogin.tsx'
import DashboardLayout from './components/Dashboard/DashboardLayout.tsx'
import Dashboard from './pages/Dashboard/Dashboard.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ModernHome />
  },
  {
    path: "/login",
    element: <ModernLogin />
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
