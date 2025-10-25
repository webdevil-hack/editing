import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Import pages
import ModernHome from './pages/Home/ModernHome.tsx'
import ModernLogin from './pages/Login/ModernLogin.tsx'
import DashboardLayout from './components/Dashboard/DashboardLayout.tsx'
import Overview from './pages/Dashboard/Overview.tsx'
import Profile from './pages/Dashboard/Profile.tsx'
import ShotStack from './pages/Dashboard/APIs/ShotStack.tsx'
import CreatoMate from './pages/Dashboard/APIs/CreatoMate.tsx'
import Pandly from './pages/Dashboard/APIs/Pandly.tsx'
import Tavus from './pages/Dashboard/APIs/Tavus.tsx'
import PromptClip from './pages/Dashboard/APIs/PromptClip.tsx'
import LuckyEdit from './pages/Dashboard/APIs/LuckyEdit.tsx'
import LTXVideo from './pages/Dashboard/APIs/LTXVideo.tsx'
import Vant from './pages/Dashboard/APIs/Vant.tsx'

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
        element: <Overview />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "shotstack",
        element: <ShotStack />
      },
      {
        path: "creatomate",
        element: <CreatoMate />
      },
      {
        path: "pandly",
        element: <Pandly />
      },
      {
        path: "tavus",
        element: <Tavus />
      },
      {
        path: "promptclip",
        element: <PromptClip />
      },
      {
        path: "luckyedit",
        element: <LuckyEdit />
      },
      {
        path: "ltxvideo",
        element: <LTXVideo />
      },
      {
        path: "vant",
        element: <Vant />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
