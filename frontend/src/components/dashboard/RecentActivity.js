import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Play,
  Download,
  Upload,
  Sparkles
} from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'video_completed',
      title: 'Product Launch Video completed',
      description: 'Shotstack rendering finished successfully',
      timestamp: '2 minutes ago',
      icon: <CheckCircle className="w-4 h-4" />,
      color: 'text-green-400',
      bgColor: 'bg-green-400/20'
    },
    {
      id: 2,
      type: 'video_processing',
      title: 'Social Media Campaign processing',
      description: 'Creatomate batch job in progress (65%)',
      timestamp: '5 minutes ago',
      icon: <Clock className="w-4 h-4" />,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/20'
    },
    {
      id: 3,
      type: 'video_created',
      title: 'New project created',
      description: 'Customer Testimonials with Tavus AI',
      timestamp: '15 minutes ago',
      icon: <Sparkles className="w-4 h-4" />,
      color: 'text-primary',
      bgColor: 'bg-primary/20'
    },
    {
      id: 4,
      type: 'video_downloaded',
      title: 'Video downloaded',
      description: 'Marketing_Video_Final.mp4 (1.2GB)',
      timestamp: '1 hour ago',
      icon: <Download className="w-4 h-4" />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20'
    },
    {
      id: 5,
      type: 'media_uploaded',
      title: 'Media files uploaded',
      description: '12 assets added to project library',
      timestamp: '2 hours ago',
      icon: <Upload className="w-4 h-4" />,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20'
    },
    {
      id: 6,
      type: 'video_error',
      title: 'Rendering failed',
      description: 'API quota exceeded - upgrade needed',
      timestamp: '3 hours ago',
      icon: <AlertCircle className="w-4 h-4" />,
      color: 'text-red-400',
      bgColor: 'bg-red-400/20'
    }
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold mb-1">Recent Activity</h3>
          <p className="text-secondary text-sm">Latest updates</p>
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
          <Activity className="w-5 h-5 text-primary" />
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            className="flex items-start space-x-3 group hover:bg-gray-900/50 rounded-lg p-2 -m-2 transition-colors duration-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {/* Icon */}
            <div className={`w-8 h-8 ${activity.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
              <span className={activity.color}>
                {activity.icon}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-white group-hover:text-primary transition-colors truncate">
                    {activity.title}
                  </h4>
                  <p className="text-xs text-secondary mt-0.5 truncate">
                    {activity.description}
                  </p>
                </div>
                <span className="text-xs text-secondary ml-2 flex-shrink-0">
                  {activity.timestamp}
                </span>
              </div>

              {/* Progress bar for processing items */}
              {activity.type === 'video_processing' && (
                <div className="mt-2">
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <motion.div
                      className="bg-gradient-to-r from-yellow-400 to-orange-400 h-1 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '65%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <button className="text-primary hover:text-primary/80 text-sm font-medium w-full text-center transition-colors">
          View All Activity
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;