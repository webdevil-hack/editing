import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingCard = ({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  popular = false,
  buttonText = 'Get Started',
  buttonLink = '/signup'
}) => {
  return (
    <motion.div 
      className={`card relative h-full ${
        popular 
          ? 'border-primary shadow-glow scale-105' 
          : 'border-gray-700 hover:border-gray-600'
      }`}
      whileHover={{ y: popular ? 0 : -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-primary text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Most Popular
          </div>
        </div>
      )}

      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-secondary text-sm mb-4">{description}</p>
          
          <div className="mb-4">
            <span className="text-4xl font-bold text-primary">${price}</span>
            <span className="text-secondary">/{period}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex-1 mb-8">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <Link 
            to={buttonLink}
            className={`btn w-full ${
              popular 
                ? 'btn-primary' 
                : 'btn-outline'
            }`}
          >
            {buttonText}
          </Link>
        </div>
      </div>

      {/* Background glow for popular plan */}
      {popular && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg pointer-events-none" />
      )}
    </motion.div>
  );
};

export default PricingCard;