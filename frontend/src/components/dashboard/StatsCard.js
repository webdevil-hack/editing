import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({ 
  title, 
  value, 
  icon, 
  trend, 
  trendUp = true, 
  color = 'from-primary/20 to-primary/5',
  delay = 0 
}) => {
  return (
    <motion.div
      className="card group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -2 }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          
          {trend && (
            <div className={`flex items-center space-x-1 text-sm ${
              trendUp ? 'text-green-400' : 'text-red-400'
            }`}>
              {trendUp ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span className="font-medium">{trend}</span>
            </div>
          )}
        </div>

        <div className="mb-2">
          <motion.div 
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.2 }}
          >
            {value}
          </motion.div>
        </div>

        <div className="text-sm text-secondary font-medium">
          {title}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-lg transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default StatsCard;