
import React, { useState, useEffect } from 'react';
import BlurContainer from '@/components/ui/BlurContainer';
import { RewardsIcon, CheckIcon, TargetIcon, TrendingUpIcon, ChevronUpIcon, ChevronDownIcon, GiftIcon, ArrowRightIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const RewardsProgress: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [animateProgress, setAnimateProgress] = useState(false);
  const [openRewardDialog, setOpenRewardDialog] = useState(false);
  const [selectedReward, setSelectedReward] = useState<any>(null);
  
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
      reward: '$15 coffee shop gift card',
      description: 'Submit 20 expenses that require no corrections',
    }
  ];
  
  const rewards = [
    {
      id: 'reward1',
      points: 500,
      reward: '$5 Coffee Shop Gift Card',
      claimed: true,
      description: 'Get a $5 gift card to your favorite coffee shop. Valid for 6 months from date of issue.',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'reward2',
      points: 1000,
      reward: '$10 Amazon Gift Card',
      claimed: true,
      description: 'Receive a $10 digital Amazon gift card delivered to your email. No expiration date.',
      image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'reward3',
      points: 2000,
      reward: '$20 Restaurant Gift Card',
      claimed: false,
      current: true,
      description: 'Choose from a selection of popular restaurant chains for your $20 gift card. Valid for one year.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'reward4',
      points: 3000,
      reward: 'Half-Day Time Off',
      claimed: false,
      description: 'Redeem for 4 hours of paid time off, subject to manager approval. Must be used within 3 months.',
      image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];
  
  const toggleExpanded = (id: string) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };
  
  const openRewardDetails = (reward: any) => {
    setSelectedReward(reward);
    setOpenRewardDialog(true);
  };
  
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-expensa-black mb-2 animate-slide-down">
        Rewards Program
      </h2>
      <p className="text-expensa-gray-dark mb-6 animate-slide-down">
        Track your achievements and unlock exclusive rewards
      </p>
      
      <BlurContainer className="p-5 mb-6 animate-slide-up solid-panel">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-expensa-warning to-orange-400 rounded-xl flex items-center justify-center text-white">
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
                "h-full bg-gradient-to-r from-expensa-warning to-orange-400 rounded-full transition-all duration-2000 ease-out",
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
          {rewards.map((reward) => (
            <div 
              key={reward.id}
              className={cn(
                "py-2 px-3 rounded-lg text-sm flex items-center gap-2 cursor-pointer transition-all",
                reward.claimed ? "bg-expensa-gray text-expensa-gray-dark" : 
                reward.current ? "bg-expensa-warning/20 text-expensa-warning border border-expensa-warning" :
                "bg-white border border-expensa-gray-medium text-expensa-gray-dark hover:border-expensa-blue"
              )}
              onClick={() => openRewardDetails(reward)}
            >
              {reward.claimed && <CheckIcon size={14} />}
              {reward.current && <TargetIcon size={14} />}
              <span>{reward.points} pts: {reward.reward}</span>
            </div>
          ))}
        </div>
      </BlurContainer>
      
      <div className="space-y-4 animate-slide-up delay-150">
        <h3 className="font-semibold text-expensa-black">Active Challenges</h3>
        
        {streaks.map((streak) => (
          <BlurContainer 
            key={streak.id} 
            className={cn(
              "overflow-hidden transition-all duration-300 solid-panel", 
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
                        className={cn(
                          "h-full rounded-full",
                          streak.completed ? "bg-expensa-success" : "bg-expensa-warning"
                        )}
                        style={{ width: `${(streak.current / streak.target) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className={cn(
                    "font-medium whitespace-nowrap flex items-center",
                    streak.completed ? "text-expensa-success" : "text-expensa-warning"
                  )}>
                    <GiftIcon size={14} className="mr-1" />
                    {streak.reward}
                  </div>
                </div>
              </div>
            )}
          </BlurContainer>
        ))}
      </div>
      
      <Dialog open={openRewardDialog} onOpenChange={setOpenRewardDialog}>
        <DialogContent className="bg-white max-w-md p-0 overflow-hidden">
          {selectedReward && (
            <>
              <div className="relative h-40 bg-gradient-to-r from-blue-400 to-indigo-500">
                {selectedReward.image && (
                  <img 
                    src={selectedReward.image} 
                    alt={selectedReward.reward}
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <GiftIcon size={24} className="text-expensa-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{selectedReward.reward}</h3>
                    <p className="text-white text-sm">{selectedReward.points} points</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="font-semibold text-expensa-black mb-2">Reward Details</h4>
                <p className="text-sm text-expensa-gray-dark mb-4">
                  {selectedReward.description}
                </p>
                
                {selectedReward.claimed ? (
                  <div className="bg-expensa-gray/30 p-3 rounded-lg text-center">
                    <p className="text-expensa-gray-dark text-sm font-medium">
                      <CheckIcon size={16} className="inline-block mr-1 text-expensa-success" />
                      You've already claimed this reward
                    </p>
                  </div>
                ) : selectedReward.current ? (
                  <div className="space-y-2">
                    <p className="text-sm text-expensa-gray-dark">
                      You need <span className="font-semibold text-expensa-warning">{targetPoints - userPoints}</span> more points to unlock this reward
                    </p>
                    <button className="w-full bg-expensa-blue/10 text-expensa-blue rounded-lg py-2 font-medium text-sm">
                      Not available yet
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-sm text-expensa-gray-dark">
                      You need <span className="font-semibold text-expensa-warning">{selectedReward.points - userPoints}</span> more points to unlock this reward
                    </p>
                    <button className="w-full bg-expensa-blue/10 text-expensa-blue rounded-lg py-2 font-medium text-sm">
                      Keep earning points
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RewardsProgress;
