import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  className = '',
  delay = 0 
}) => {
  return (
    <motion.div 
      className={`card text-center group cursor-pointer ${className}`}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Icon container */}
      <div className="relative mb-6">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 w-16 h-16 mx-auto bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-secondary leading-relaxed">
        {description}
      </p>

      {/* Bottom border effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
    </motion.div>
  );
};

export default FeatureCard;