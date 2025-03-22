
import React, { useState, useEffect } from 'react';
import BlurContainer from '@/components/ui/BlurContainer';
import { RewardsIcon, CheckIcon, TargetIcon, TrendingUpIcon, ChevronUpIcon, ChevronDownIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';

const RewardsProgress: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [animateProgress, setAnimateProgress] = useState(false);
  
  useEffect(() => {
    // Add a slight delay before starting the progress animation
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const userPoints = 1250;
  const targetPoints = 2000;
  const progressPercentage = (userPoints / targetPoints) * 100;
  
  const streaks = [
    {
      id: 'submission',
      title: 'Submission Streak',
      current: 5,
      target: 7,
      reward: '100 bonus points',
      description: 'Submit expenses within 24 hours of purchase 7 days in a row',
    },
    {
      id: 'approval',
      title: 'Fast Approval',
      current: 10,
      target: 10,
      reward: '$10 gift card',
      description: 'Approve 10 expense reports within 24 hours',
      completed: true
    },
    {
      id: 'accuracy',
      title: 'Perfect Accuracy',
      current: 15,
      target: 20,
      reward: 'Extra 5% reimbursement',
      description: 'Submit 20 expenses that require no corrections',
    }
  ];
  
  const rewards = [
    {
      points: 500,
      reward: '$5 Lunch Credit',
      claimed: true
    },
    {
      points: 1000,
      reward: '$10 Gift Card',
      claimed: true
    },
    {
      points: 2000,
      reward: '$20 Gift Card',
      claimed: false,
      current: true
    },
    {
      points: 3000,
      reward: 'Extra Day Off',
      claimed: false
    }
  ];
  
  const toggleExpanded = (id: string) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };
  
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-expensa-black mb-2 animate-slide-down">
        Rewards Progress
      </h2>
      <p className="text-expensa-gray-dark mb-6 animate-slide-down">
        Track your points and unlock rewards
      </p>
      
      <BlurContainer className="p-5 mb-6 animate-slide-up">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-expensa-warning rounded-xl flex items-center justify-center text-white">
            <RewardsIcon size={24} />
          </div>
          
          <div>
            <h3 className="font-medium text-expensa-black">Current Progress</h3>
            <div className="text-sm text-expensa-gray-dark">
              Keep going to unlock your next reward!
            </div>
          </div>
        </div>
        
        <div className="space-y-1 mb-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-expensa-black">{userPoints} points</span>
            <span className="text-expensa-gray-dark">{targetPoints} points</span>
          </div>
          
          <div className="w-full h-3 bg-expensa-gray rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full bg-expensa-warning rounded-full transition-all duration-2000 ease-out",
                animateProgress ? "" : "w-0"
              )}
              style={{ width: animateProgress ? `${progressPercentage}%` : '0%' }}
            />
          </div>
          
          <div className="text-xs flex items-center mt-1 text-expensa-warning">
            <TrendingUpIcon size={12} className="mr-1" />
            {targetPoints - userPoints} points needed for next reward
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-4">
          {rewards.map((reward, index) => (
            <div 
              key={index}
              className={cn(
                "py-2 px-3 rounded-lg text-sm flex items-center gap-2",
                reward.claimed ? "bg-expensa-gray text-expensa-gray-dark" : 
                reward.current ? "bg-expensa-warning/20 text-expensa-warning border border-expensa-warning" :
                "bg-white border border-expensa-gray-medium text-expensa-gray-dark"
              )}
            >
              {reward.claimed && <CheckIcon size={14} />}
              {reward.current && <TargetIcon size={14} />}
              <span>{reward.points} pts: {reward.reward}</span>
            </div>
          ))}
        </div>
      </BlurContainer>
      
      <div className="space-y-4 animate-slide-up delay-150">
        <h3 className="font-semibold text-expensa-black">Active Streaks</h3>
        
        {streaks.map((streak) => (
          <BlurContainer 
            key={streak.id} 
            className={cn(
              "overflow-hidden transition-all duration-300", 
              expanded === streak.id ? "pb-4" : ""
            )}
          >
            <div 
              className="p-4 flex items-center justify-between cursor-pointer"
              onClick={() => toggleExpanded(streak.id)}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center",
                  streak.completed ? "bg-expensa-success/10" : "bg-expensa-warning/10"
                )}>
                  {streak.completed ? (
                    <CheckIcon size={20} className="text-expensa-success" />
                  ) : (
                    <TargetIcon size={20} className="text-expensa-warning" />
                  )}
                </div>
                
                <div>
                  <h4 className="font-medium text-expensa-black">
                    {streak.title}
                  </h4>
                  <div className="text-sm">
                    <span className={streak.completed ? "text-expensa-success" : "text-expensa-warning"}>
                      {streak.current}/{streak.target} completed
                    </span>
                    {!streak.completed && (
                      <span className="text-expensa-gray-dark ml-2">
                        • {streak.target - streak.current} remaining
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                {expanded === streak.id ? (
                  <ChevronUpIcon className="text-expensa-gray-dark" />
                ) : (
                  <ChevronDownIcon className="text-expensa-gray-dark" />
                )}
              </div>
            </div>
            
            {expanded === streak.id && (
              <div className="px-4 pt-1 pb-2 text-sm text-expensa-gray-dark border-t border-expensa-gray-medium/20 mt-1">
                <p className="mb-2">{streak.description}</p>
                <div className="flex justify-between items-center">
                  <div className="w-full mr-4">
                    <div className="w-full h-1.5 bg-expensa-gray rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-expensa-warning rounded-full"
                        style={{ width: `${(streak.current / streak.target) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="font-medium text-expensa-warning whitespace-nowrap">
                    {streak.reward}
                  </div>
                </div>
              </div>
            )}
          </BlurContainer>
        ))}
      </div>
    </div>
  );
};

export default RewardsProgress;
