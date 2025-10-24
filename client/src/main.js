import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles.css';
import RootLayout from './routes/RootLayout';
import Home from './routes/Home';
import About from './routes/About';
import Features from './routes/Features';
import Contact from './routes/Contact';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Dashboard from './routes/Dashboard';
const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(RootLayout, {}),
        children: [
            { index: true, element: _jsx(Home, {}) },
            { path: 'about', element: _jsx(About, {}) },
            { path: 'features', element: _jsx(Features, {}) },
            { path: 'contact', element: _jsx(Contact, {}) },
            { path: 'login', element: _jsx(Login, {}) },
            { path: 'signup', element: _jsx(Signup, {}) },
            { path: 'dashboard', element: _jsx(Dashboard, {}) },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
