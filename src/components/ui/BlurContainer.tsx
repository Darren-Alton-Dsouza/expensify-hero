
import React from 'react';
import { cn } from '@/lib/utils';

interface BlurContainerProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

const BlurContainer: React.FC<BlurContainerProps> = ({ 
  children, 
  className, 
  hoverEffect = false,
  onClick
}) => {
  return (
    <div 
      className={cn(
        "backdrop-blur-md bg-white/70 dark:bg-gray-800/50 rounded-xl shadow-lg border border-white/20 transition-all duration-300",
        hoverEffect && "hover:scale-[1.02] cursor-pointer hover:shadow-xl",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BlurContainer;
