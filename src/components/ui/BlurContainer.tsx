
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
        "glass-panel",
        hoverEffect && "hover:scale-[1.02] cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BlurContainer;
