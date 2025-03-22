
import React, { useState } from 'react';
import BlurContainer from '@/components/ui/BlurContainer';
import { CheckIcon, CloseIcon, StatusIcon, MoreIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';

const StatusTracking: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const tabOptions = [
    { id: 'all', label: 'All Expenses' },
    { id: 'approved', label: 'Approved' },
    { id: 'pending', label: 'Pending' },
    { id: 'rejected', label: 'Rejected' }
  ];
  
  const expenses = [
    {
      id: 'exp001',
      merchant: 'Office Supplies Co.',
      date: 'May 18, 2023',
      amount: '$124.50',
      status: 'approved',
      timeframe: 'Approved in 2 hours',
      icon: CheckIcon,
      iconColor: 'text-expensa-success',
      bgColor: 'bg-expensa-success/10',
    },
    {
      id: 'exp002',
      merchant: 'Business Lunch',
      date: 'May 15, 2023',
      amount: '$78.25',
      status: 'pending',
      timeframe: 'Estimated: 24 hours',
      icon: StatusIcon,
      iconColor: 'text-expensa-warning',
      bgColor: 'bg-expensa-warning/10',
    },
    {
      id: 'exp003',
      merchant: 'Taxi Ride',
      date: 'May 10, 2023',
      amount: '$35.00',
      status: 'rejected',
      timeframe: 'Missing receipt',
      icon: CloseIcon,
      iconColor: 'text-expensa-error',
      bgColor: 'bg-expensa-error/10',
    },
    {
      id: 'exp004',
      merchant: 'Hotel Stay',
      date: 'May 5, 2023',
      amount: '$450.00',
      status: 'approved',
      timeframe: 'Approved in 5 hours',
      icon: CheckIcon,
      iconColor: 'text-expensa-success',
      bgColor: 'bg-expensa-success/10',
    }
  ];
  
  const filteredExpenses = activeTab === 'all' 
    ? expenses 
    : expenses.filter(exp => exp.status === activeTab);
  
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-expensa-black mb-2 animate-slide-down">
        Track Expenses
      </h2>
      <p className="text-expensa-gray-dark mb-6 animate-slide-down">
        Monitor the status of your submitted expenses
      </p>
      
      <div className="mb-6 flex overflow-x-auto scrollbar-hide space-x-2 pb-2 animate-slide-up">
        {tabOptions.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300",
              activeTab === tab.id
                ? "bg-expensa-blue text-white shadow-button"
                : "bg-white border border-expensa-gray-medium text-expensa-gray-dark hover:bg-expensa-gray"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="space-y-4 animate-slide-up delay-150">
        {filteredExpenses.length === 0 ? (
          <BlurContainer className="p-8 text-center">
            <p className="text-expensa-gray-dark">No expenses found in this category.</p>
          </BlurContainer>
        ) : (
          filteredExpenses.map(expense => {
            const Icon = expense.icon;
            
            return (
              <BlurContainer 
                key={expense.id} 
                className="p-4 hover:scale-[1.01] cursor-pointer transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    expense.bgColor
                  )}>
                    <Icon size={20} className={expense.iconColor} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-expensa-black">
                      {expense.merchant}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-expensa-gray-dark">
                      <span>{expense.date}</span>
                      <span>{expense.amount}</span>
                      <span className={cn(
                        "text-xs font-medium",
                        expense.status === 'approved' ? "text-expensa-success" : 
                        expense.status === 'pending' ? "text-expensa-warning" : 
                        "text-expensa-error"
                      )}>
                        {expense.timeframe}
                      </span>
                    </div>
                  </div>
                  
                  <button className="p-1.5 rounded-full hover:bg-expensa-gray transition-all duration-300">
                    <MoreIcon className="text-expensa-gray-dark" />
                  </button>
                </div>
              </BlurContainer>
            );
          })
        )}
      </div>
    </div>
  );
};

export default StatusTracking;
