
import React, { useState, useEffect } from 'react';
import BlurContainer from '@/components/ui/BlurContainer';
import { AIAssistantIcon, CheckIcon, FileIcon, CreditCardIcon, ExpenseIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface AIAssistantProps {
  userName?: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ userName = 'Arvind' }) => {
  const navigate = useNavigate();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentDialog, setCurrentDialog] = useState<string | null>(null);
  
  const messages = [
    `Welcome back, ${userName}! Need help with an expense?`,
    `You have 3 pending expenses from this week. Let's log them now!`,
    `Your meal expense from yesterday is missing a receipt. Upload now?`,
    `Planning a trip? Enable smart tracking to auto-log expenses.`
  ];

  const dialogContent = {
    "expense": {
      title: "Pending Expenses",
      description: "We've detected the following expenses that need your attention:",
      content: (
        <div className="mt-4 space-y-3">
          <div className="flex items-center p-3 rounded-lg bg-white border border-expensa-gray-medium/30">
            <CreditCardIcon className="text-expensa-blue mr-3" />
            <div className="flex-1">
              <h4 className="font-medium">Coffee Shop</h4>
              <p className="text-sm text-expensa-gray-dark">$24.50 • May 22, 2023</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-xs bg-expensa-blue text-white px-2 py-1 rounded-md">
                Log Now
              </button>
            </div>
          </div>
          
          <div className="flex items-center p-3 rounded-lg bg-white border border-expensa-gray-medium/30">
            <CreditCardIcon className="text-expensa-blue mr-3" />
            <div className="flex-1">
              <h4 className="font-medium">Uber Ride</h4>
              <p className="text-sm text-expensa-gray-dark">$18.75 • May 21, 2023</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-xs bg-expensa-blue text-white px-2 py-1 rounded-md">
                Log Now
              </button>
            </div>
          </div>
          
          <div className="flex items-center p-3 rounded-lg bg-white border border-expensa-gray-medium/30">
            <CreditCardIcon className="text-expensa-blue mr-3" />
            <div className="flex-1">
              <h4 className="font-medium">Office Supplies</h4>
              <p className="text-sm text-expensa-gray-dark">$45.65 • May 20, 2023</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-xs bg-expensa-blue text-white px-2 py-1 rounded-md">
                Log Now
              </button>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between">
            <button 
              className="text-sm text-expensa-gray-dark"
              onClick={() => setIsDialogOpen(false)}
            >
              Remind me later
            </button>
            <button 
              className="text-sm font-medium text-expensa-blue"
              onClick={() => {
                setIsDialogOpen(false);
                navigate('/add-expense');
              }}
            >
              View All Expenses
            </button>
          </div>
        </div>
      )
    },
    "receipt": {
      title: "Missing Receipt",
      description: "We found an expense that needs a receipt:",
      content: (
        <div className="mt-4 space-y-3">
          <div className="flex items-center p-3 rounded-lg bg-white border border-expensa-gray-medium/30">
            <ExpenseIcon className="text-expensa-warning mr-3" />
            <div className="flex-1">
              <h4 className="font-medium">Lunch Meeting</h4>
              <p className="text-sm text-expensa-gray-dark">$32.50 • Yesterday</p>
              <p className="text-xs text-expensa-error mt-1">Missing receipt</p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                className="text-xs bg-expensa-warning text-white px-2 py-1 rounded-md"
                onClick={() => {
                  setIsDialogOpen(false);
                  navigate('/add-expense');
                }}
              >
                Upload Receipt
              </button>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button 
              className="text-sm text-expensa-gray-dark mr-3"
              onClick={() => setIsDialogOpen(false)}
            >
              Dismiss
            </button>
            <button 
              className="text-sm font-medium text-expensa-blue"
              onClick={() => {
                setIsDialogOpen(false);
                navigate('/expenses');
              }}
            >
              View All Expenses
            </button>
          </div>
        </div>
      )
    },
    "tracking": {
      title: "Smart Tracking",
      description: "Automatically capture expenses during your trips",
      content: (
        <div className="mt-4 space-y-4">
          <p className="text-sm text-expensa-gray-dark">
            When enabled, we'll automatically detect expenses related to your business trips by:
          </p>
          
          <div className="space-y-2">
            <div className="flex items-start">
              <CheckIcon size={16} className="text-expensa-success mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-sm">Monitoring your corporate card for transactions during trip dates</p>
            </div>
            <div className="flex items-start">
              <CheckIcon size={16} className="text-expensa-success mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-sm">Categorizing expenses automatically based on merchant data</p>
            </div>
            <div className="flex items-start">
              <CheckIcon size={16} className="text-expensa-success mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-sm">Sending timely reminders to collect receipts</p>
            </div>
          </div>
          
          <div className="pt-2 flex justify-between">
            <button 
              className="text-sm text-expensa-gray-dark"
              onClick={() => setIsDialogOpen(false)}
            >
              Not Now
            </button>
            <button 
              className="text-sm font-medium bg-expensa-blue text-white px-3 py-1.5 rounded-md"
              onClick={() => {
                setIsDialogOpen(false);
              }}
            >
              Enable Smart Tracking
            </button>
          </div>
        </div>
      )
    }
  };

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

  const handleShowMe = () => {
    if (currentMessageIndex === 0) {
      setCurrentDialog("expense");
    } else if (currentMessageIndex === 1) {
      setCurrentDialog("expense");
    } else if (currentMessageIndex === 2) {
      setCurrentDialog("receipt");
    } else if (currentMessageIndex === 3) {
      setCurrentDialog("tracking");
    }
    
    setIsDialogOpen(true);
  };
  
  const handleDismiss = () => {
    // Show next message immediately when dismissed
    setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <>
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
                <button 
                  onClick={handleShowMe}
                  className="bg-expensa-blue text-white py-1.5 px-3 rounded-lg text-sm font-medium shadow-button hover:shadow-button-hover transition-all duration-300 hover:bg-expensa-blue-dark"
                >
                  Show me
                </button>
                
                <button 
                  onClick={handleDismiss}
                  className="py-1.5 px-3 rounded-lg text-sm font-medium text-expensa-gray-dark hover:bg-expensa-gray/50 transition-all duration-300"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </BlurContainer>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white">
          {currentDialog && (
            <>
              <DialogTitle>{dialogContent[currentDialog].title}</DialogTitle>
              <DialogDescription>
                {dialogContent[currentDialog].description}
              </DialogDescription>
              {dialogContent[currentDialog].content}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AIAssistant;
