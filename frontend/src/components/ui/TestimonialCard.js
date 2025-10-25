import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ 
  name, 
  role, 
  company, 
  content, 
  avatar, 
  rating = 5 
}) => {
  return (
    <motion.div 
      className="card h-full relative overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Quote icon */}
        <div className="mb-4">
          <Quote className="w-8 h-8 text-primary/30" />
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-white mb-6 leading-relaxed">
          "{content}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-black font-semibold mr-4">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-semibold text-white">{name}</div>
            <div className="text-sm text-secondary">
              {role} {company && `at ${company}`}
            </div>
          </div>
        </div>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 border border-transparent hover:border-primary/30 rounded-lg transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default TestimonialCard;