
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlurContainer from '@/components/ui/BlurContainer';
import { ExpenseIcon, StatusIcon, RewardsIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';

const QuickActions: React.FC = () => {
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const actions = [
    {
      icon: ExpenseIcon,
      label: 'Submit Expense',
      description: 'New expense report',
      path: '/add-expense',
      color: 'bg-expensa-blue',
      notification: null
    },
    {
      icon: StatusIcon,
      label: 'Track Reimbursements',
      description: 'View status updates',
      path: '/expenses',
      color: 'bg-expensa-success',
      notification: 3
    },
    {
      icon: RewardsIcon,
      label: 'View Rewards',
      description: 'Check your progress',
      path: '/rewards',
      color: 'bg-expensa-warning',
      notification: null
    },
  ];

  return (
    <div className="my-6">
      <h2 className={cn(
        "text-lg font-semibold mb-4 text-expensa-black transition-all duration-700",
        animateIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      )}>
        Quick Actions
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          
          return (
            <div 
              key={action.label}
              className={cn(
                "transition-all duration-700 delay-300",
                animateIn 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8",
                `delay-[${300 + (index * 100)}ms]`
              )}
            >
              <Link to={action.path}>
                <BlurContainer 
                  className="flex items-center p-4 gap-4 h-full" 
                  hoverEffect
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0",
                    action.color
                  )}>
                    <Icon size={24} />
                    
                    {action.notification && (
                      <div className="absolute -top-1 -right-1 bg-expensa-error text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {action.notification}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-expensa-black">
                      {action.label}
                    </h3>
                    <p className="text-sm text-expensa-gray-dark">
                      {action.description}
                    </p>
                  </div>
                </BlurContainer>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
