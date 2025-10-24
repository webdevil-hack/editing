import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import HeroSection from '../components/sections/HeroSection';
import FeaturesOverview from '../components/sections/FeaturesOverview';
import HowItWorks from '../components/sections/HowItWorks';
import VideoShowcase from '../components/sections/VideoShowcase';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import Stats from '../components/sections/Stats';
import CTA from '../components/sections/CTA';
import './HomePage.css';

const HomePage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="homepage">
      <HeroSection />
      <FeaturesOverview />
      <HowItWorks />
      <VideoShowcase />
      <Testimonials />
      <Pricing />
      <Stats />
      <CTA />
    </div>
  );
};

export default HomePage;