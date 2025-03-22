
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlurContainer from '@/components/ui/BlurContainer';
import { ArrowRightIcon, DollarIcon, TrendingUpIcon, TargetIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';

interface SnapshotCardProps {
  type: 'expense' | 'rewards';
  delay?: number;
}

const SnapshotCard: React.FC<SnapshotCardProps> = ({ type, delay = 0 }) => {
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 700 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Expense card data
  const expenseData = {
    title: 'Expense Summary',
    path: '/expenses',
    icon: DollarIcon,
    metrics: [
      {
        label: 'This Month',
        value: '$1,284.50',
        trend: '+12%',
        trendIcon: TrendingUpIcon,
        trendUp: true
      },
      {
        label: 'Pending',
        value: '$345.00',
        trend: '3 expenses',
        highlight: true
      }
    ]
  };

  // Rewards card data
  const rewardsData = {
    title: 'Rewards Progress',
    path: '/rewards',
    icon: TargetIcon,
    metrics: [
      {
        label: 'Current Points',
        value: '1,250',
        trend: '+125 this week',
        highlight: true
      },
      {
        label: 'Next Reward',
        value: '2,000',
        trend: '750 points needed',
        progress: 62.5
      }
    ]
  };

  const data = type === 'expense' ? expenseData : rewardsData;
  const Icon = data.icon;

  return (
    <div 
      className={cn(
        "transition-all duration-700",
        animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <BlurContainer className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center",
              type === 'expense' ? "bg-expensa-blue" : "bg-expensa-warning",
              "text-white"
            )}>
              <Icon size={18} />
            </div>
            <h3 className="font-semibold text-expensa-black">{data.title}</h3>
          </div>
          
          <Link 
            to={data.path} 
            className="text-expensa-blue hover:text-expensa-blue-dark text-sm font-medium flex items-center gap-1 transition-all duration-300 hover:gap-2"
          >
            View all <ArrowRightIcon size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {data.metrics.map((metric, index) => (
            <div key={index} className="space-y-1">
              <div className="text-expensa-gray-dark text-xs font-medium">
                {metric.label}
              </div>
              
              <div className={cn(
                "font-semibold text-lg",
                metric.highlight ? (type === 'expense' ? "text-expensa-blue" : "text-expensa-warning") : "text-expensa-black"
              )}>
                {metric.value}
              </div>
              
              <div className="text-xs flex items-center gap-1">
                {metric.trendIcon && <metric.trendIcon size={12} className={metric.trendUp ? "text-expensa-success" : "text-expensa-error"} />}
                <span className={metric.trendUp ? "text-expensa-success" : "text-expensa-gray-dark"}>
                  {metric.trend}
                </span>
              </div>
              
              {metric.progress !== undefined && (
                <div className="w-full h-1.5 bg-expensa-gray rounded-full mt-2 overflow-hidden">
                  <div 
                    className="h-full bg-expensa-warning rounded-full"
                    style={{ width: `${metric.progress}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </BlurContainer>
    </div>
  );
};

export default SnapshotCard;
