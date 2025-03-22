
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ExpenseIcon, AddIcon, InsightsIcon, RewardsIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';

const FooterNav: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { icon: HomeIcon, label: 'Home', path: '/' },
    { icon: ExpenseIcon, label: 'Expenses', path: '/expenses' },
    { icon: AddIcon, label: 'Add', path: '/add-expense', highlight: true },
    { icon: InsightsIcon, label: 'Insights', path: '/insights' },
    { icon: RewardsIcon, label: 'Rewards', path: '/rewards' },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-glass bg-white/75 border-t border-expensa-gray-medium/20 px-4 py-2 sm:px-6 animate-slide-up">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = item.path === pathname;
            const IconComponent = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center py-1 px-2 rounded-lg transition-all duration-300",
                  isActive 
                    ? "text-expensa-blue" 
                    : "text-expensa-gray-dark hover:text-expensa-black"
                )}
              >
                {item.highlight ? (
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-expensa-blue/20 rounded-full animate-pulse-slow" />
                    <div className="h-12 w-12 bg-expensa-blue rounded-full flex items-center justify-center shadow-lg transform -translate-y-5 transition-transform duration-300 hover:scale-110">
                      <IconComponent size={24} className="text-white" />
                    </div>
                  </div>
                ) : (
                  <IconComponent 
                    size={22} 
                    className={cn(
                      "transition-transform duration-300",
                      isActive ? "scale-110" : "scale-100"
                    )} 
                  />
                )}
                <span className={cn(
                  "text-xs mt-1 font-medium",
                  item.highlight && "sr-only"
                )}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
};

export default FooterNav;
