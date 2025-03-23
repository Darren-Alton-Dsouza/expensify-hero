
import React from 'react';
import { cn } from '@/lib/utils';

interface BlurContainerProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
  variant?: 'blur' | 'solid';
}

const BlurContainer: React.FC<BlurContainerProps> = ({ 
  children, 
  className, 
  hoverEffect = false,
  onClick,
  variant = 'solid' // Change default to solid for better visibility
}) => {
  return (
    <div 
      className={cn(
        variant === 'blur' 
          ? "backdrop-blur-md bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg border border-white/20 transition-all duration-300"
          : "bg-white rounded-xl shadow-lg border border-white/20 transition-all duration-300",
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
