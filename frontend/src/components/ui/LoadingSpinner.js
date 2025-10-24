import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const LoadingSpinner = ({ 
  size = 'medium', 
  text = 'Loading...', 
  fullScreen = true 
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const textSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  const Spinner = () => (
    <div className="relative">
      {/* Outer ring */}
      <motion.div
        className={`${sizeClasses[size]} border-2 border-gray-700 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Inner ring */}
      <motion.div
        className={`absolute inset-0 ${sizeClasses[size]} border-2 border-transparent border-t-primary rounded-full`}
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Zap className={`${size === 'small' ? 'w-3 h-3' : size === 'medium' ? 'w-5 h-5' : 'w-7 h-7'} text-primary`} />
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Spinner />
          {text && (
            <motion.p
              className={`mt-4 text-white ${textSizes[size]}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {text}
            </motion.p>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Spinner />
      {text && (
        <p className={`mt-2 text-secondary ${textSizes[size]}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;