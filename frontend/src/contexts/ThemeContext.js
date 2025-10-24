import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [animations, setAnimations] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Check for saved animation preference
    const savedAnimations = localStorage.getItem('animations');
    if (savedAnimations !== null) {
      setAnimations(JSON.parse(savedAnimations));
    }

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Apply animation preference
    document.documentElement.style.setProperty(
      '--animation-duration',
      animations && !reducedMotion ? '0.3s' : '0s'
    );
    localStorage.setItem('animations', JSON.stringify(animations));
  }, [animations, reducedMotion]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleAnimations = () => {
    setAnimations(prev => !prev);
  };

  const colors = {
    dark: {
      primary: '#00ff88',
      primaryDark: '#00cc6a',
      secondary: '#1a1a1a',
      background: '#000000',
      surface: '#1a1a1a',
      text: '#ffffff',
      textSecondary: '#888888',
      textMuted: '#666666',
      border: '#333333',
      borderLight: '#444444',
      success: '#22c55e',
      warning: '#fbbf24',
      error: '#ef4444',
      info: '#3b82f6'
    },
    light: {
      primary: '#00cc6a',
      primaryDark: '#00a855',
      secondary: '#f5f5f5',
      background: '#ffffff',
      surface: '#f9f9f9',
      text: '#000000',
      textSecondary: '#666666',
      textMuted: '#888888',
      border: '#e5e5e5',
      borderLight: '#d4d4d4',
      success: '#16a34a',
      warning: '#d97706',
      error: '#dc2626',
      info: '#2563eb'
    }
  };

  const gradients = {
    primary: `linear-gradient(135deg, ${colors[theme].primary} 0%, ${colors[theme].primaryDark} 100%)`,
    dark: theme === 'dark' 
      ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
    text: `linear-gradient(135deg, ${colors[theme].primary} 0%, ${colors[theme].text} 100%)`,
    glow: `0 0 20px ${colors[theme].primary}33`
  };

  const shadows = {
    sm: theme === 'dark' 
      ? '0 1px 2px 0 rgba(0, 0, 0, 0.3)'
      : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: theme === 'dark'
      ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: theme === 'dark'
      ? '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)'
      : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: theme === 'dark'
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
      : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: `0 0 20px ${colors[theme].primary}4D`
  };

  const breakpoints = {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  };

  const spacing = {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '5rem'
  };

  const typography = {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    },
    fontWeight: {
      thin: '100',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    lineHeight: {
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    }
  };

  const value = {
    theme,
    animations,
    reducedMotion,
    colors: colors[theme],
    gradients,
    shadows,
    breakpoints,
    spacing,
    typography,
    toggleTheme,
    toggleAnimations,
    setTheme,
    setAnimations
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};