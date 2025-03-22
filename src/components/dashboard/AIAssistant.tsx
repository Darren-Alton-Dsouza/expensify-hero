
import React, { useState, useEffect } from 'react';
import BlurContainer from '@/components/ui/BlurContainer';
import { AIAssistantIcon, CheckIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';

interface AIAssistantProps {
  userName?: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ userName = 'Alex' }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  
  const messages = [
    `Welcome back, ${userName}! Need help with an expense?`,
    `You have 3 pending expenses from this week. Let's log them now!`,
    `Your meal expense from yesterday is missing a receipt. Upload now?`,
    `Planning a trip? Enable smart tracking to auto-log expenses.`
  ];

  useEffect(() => {
    // Entrance animation delay
    const showTimer = setTimeout(() => setVisible(true), 300);
    
    // Cycle through messages
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    
    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, [messages.length]);

  return (
    <div 
      className={cn(
        "transition-all duration-1000 ease-in-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <BlurContainer className="p-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1">
          <div className="h-full bg-expensa-blue/30 rounded-full animate-progress" />
        </div>
        
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <AIAssistantIcon />
          </div>
          
          <div className="flex-1">
            <div className="font-medium text-base text-balance text-expensa-black">
              {messages[currentMessageIndex]}
            </div>
            
            <div className="mt-3 flex items-center gap-2">
              <button className="bg-expensa-blue text-white py-1.5 px-3 rounded-lg text-sm font-medium shadow-button hover:shadow-button-hover transition-all duration-300 hover:bg-expensa-blue-dark">
                Show me
              </button>
              
              <button className="py-1.5 px-3 rounded-lg text-sm font-medium text-expensa-gray-dark hover:bg-expensa-gray/50 transition-all duration-300">
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </BlurContainer>
    </div>
  );
};

export default AIAssistant;
