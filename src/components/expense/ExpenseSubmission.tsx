
import React, { useState } from 'react';
import BlurContainer from '@/components/ui/BlurContainer';
import { UploadIcon, CameraIcon, CreditCardIcon, CheckIcon, ArrowRightIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';

const ExpenseSubmission: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const options = [
    {
      id: 'upload',
      title: 'Upload Receipt',
      description: 'Scan or upload an existing receipt',
      icon: UploadIcon,
    },
    {
      id: 'camera',
      title: 'Take Photo',
      description: 'Capture a new receipt with your camera',
      icon: CameraIcon,
    },
    {
      id: 'card',
      title: 'Corporate Card',
      description: 'Select from detected card transactions',
      icon: CreditCardIcon,
      badge: '3 new'
    }
  ];
  
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-expensa-black mb-2 animate-slide-down">
        Submit Expense
      </h2>
      <p className="text-expensa-gray-dark mb-6 animate-slide-down">
        Select how you'd like to add your expense
      </p>
      
      <div className="space-y-4 animate-slide-up">
        {options.map((option) => {
          const Icon = option.icon;
          
          return (
            <BlurContainer 
              key={option.id}
              className={cn(
                "p-4 transition-all duration-300",
                selectedOption === option.id ? "ring-2 ring-expensa-blue" : ""
              )}
              hoverEffect
              onClick={() => setSelectedOption(option.id)}
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 relative",
                  selectedOption === option.id ? "bg-expensa-blue" : "bg-expensa-gray"
                )}>
                  <Icon size={24} />
                  
                  {option.badge && (
                    <div className="absolute -top-2 -right-2 bg-expensa-error text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                      {option.badge}
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium text-expensa-black">{option.title}</h3>
                  <p className="text-sm text-expensa-gray-dark">{option.description}</p>
                </div>
                
                <div className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                  selectedOption === option.id 
                    ? "border-expensa-blue bg-expensa-blue text-white" 
                    : "border-expensa-gray-medium"
                )}>
                  {selectedOption === option.id && <CheckIcon size={14} />}
                </div>
              </div>
            </BlurContainer>
          );
        })}
      </div>
      
      <button 
        disabled={!selectedOption} 
        className={cn(
          "w-full mt-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 animate-fade-in",
          selectedOption 
            ? "bg-expensa-blue text-white hover:bg-expensa-blue-dark shadow-button hover:shadow-button-hover" 
            : "bg-expensa-gray cursor-not-allowed text-expensa-gray-dark"
        )}
      >
        Continue <ArrowRightIcon size={18} />
      </button>
    </div>
  );
};

export default ExpenseSubmission;
