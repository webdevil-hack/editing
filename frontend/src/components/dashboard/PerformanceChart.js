import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3 } from 'lucide-react';

const PerformanceChart = () => {
  // Mock data for the chart
  const data = [
    { day: 'Mon', videos: 3, views: 120 },
    { day: 'Tue', videos: 5, views: 250 },
    { day: 'Wed', videos: 2, views: 80 },
    { day: 'Thu', videos: 8, views: 420 },
    { day: 'Fri', videos: 6, views: 380 },
    { day: 'Sat', videos: 4, views: 200 },
    { day: 'Sun', videos: 7, views: 450 }
  ];

  const maxVideos = Math.max(...data.map(d => d.videos));
  const maxViews = Math.max(...data.map(d => d.views));

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold mb-1">Performance Overview</h3>
          <p className="text-secondary text-sm">Last 7 days</p>
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Chart */}
      <div className="space-y-4 mb-6">
        {/* Videos Created */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-secondary">Videos Created</span>
            <span className="text-sm font-medium">35 total</span>
          </div>
          <div className="flex items-end space-x-2 h-16">
            {data.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <motion.div
                  className="w-full bg-gradient-to-t from-primary to-primary/50 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${(item.videos / maxVideos) * 100}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
                <span className="text-xs text-secondary mt-1">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Views */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-secondary">Total Views</span>
            <span className="text-sm font-medium">1.9K total</span>
          </div>
          <div className="flex items-end space-x-2 h-12">
            {data.map((item, index) => (
              <div key={index} className="flex-1">
                <motion.div
                  className="w-full bg-gradient-to-t from-blue-500/50 to-blue-500/20 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${(item.views / maxViews) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-gray-900/50 rounded-lg">
          <div className="flex items-center justify-center mb-1">
            <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
            <span className="text-green-400 text-sm font-medium">+24%</span>
          </div>
          <div className="text-xs text-secondary">vs last week</div>
        </div>
        <div className="text-center p-3 bg-gray-900/50 rounded-lg">
          <div className="text-primary font-semibold">5.4</div>
          <div className="text-xs text-secondary">avg per day</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;