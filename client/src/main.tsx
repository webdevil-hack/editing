import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

// Import pages
import ModernHome from './pages/Home/ModernHome'
import ModernLogin from './pages/Login/ModernLogin'
import Dashboard from './pages/Dashboard/Dashboard'

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
    element: <Dashboard />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
