
import React from 'react';
import { 
  CreditCard, 
  Home, 
  Plus, 
  PieChart, 
  Award, 
  Clock, 
  Check, 
  X, 
  AlertCircle, 
  ChevronRight, 
  Camera,
  Receipt,
  TrendingUp,
  User,
  DollarSign,
  Upload,
  Calendar,
  FileText,
  Target,
  ChevronUp,
  ChevronDown,
  Search,
  MoreHorizontal
} from 'lucide-react';

export const IconSize = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
};

interface IconProps {
  size?: number;
  className?: string;
}

export const HomeIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Home size={size} className={className} />
);

export const ExpenseIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Receipt size={size} className={className} />
);

export const RewardsIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Award size={size} className={className} />
);

export const AddIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Plus size={size} className={className} />
);

export const InsightsIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <PieChart size={size} className={className} />
);

export const StatusIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Clock size={size} className={className} />
);

export const CheckIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Check size={size} className={className} />
);

export const CloseIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <X size={size} className={className} />
);

export const AlertIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <AlertCircle size={size} className={className} />
);

export const ArrowRightIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <ChevronRight size={size} className={className} />
);

export const CameraIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Camera size={size} className={className} />
);

export const CreditCardIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <CreditCard size={size} className={className} />
);

export const TrendingUpIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <TrendingUp size={size} className={className} />
);

export const UserIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <User size={size} className={className} />
);

export const DollarIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <DollarSign size={size} className={className} />
);

export const UploadIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Upload size={size} className={className} />
);

export const CalendarIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Calendar size={size} className={className} />
);

export const FileIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <FileText size={size} className={className} />
);

export const TargetIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Target size={size} className={className} />
);

export const ChevronUpIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <ChevronUp size={size} className={className} />
);

export const ChevronDownIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <ChevronDown size={size} className={className} />
);

export const SearchIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Search size={size} className={className} />
);

export const MoreIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <MoreHorizontal size={size} className={className} />
);

// Animated AI icon component
export const AIAssistantIcon: React.FC<IconProps> = ({ size = IconSize.lg, className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-expensa-blue/20 rounded-full animate-pulse-slow" />
      <div className="relative z-10 bg-expensa-blue text-white p-1 rounded-full">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width={size} 
          height={size} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 2a7 7 0 0 1 7 7v1a4 4 0 0 1 0 8h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a2 2 0 1 0 0-4v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V7a5 5 0 0 0-10 0v9a3 3 0 0 0 3 3h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a5 5 0 0 1-5-5V9A7 7 0 0 1 12 2z"></path>
        </svg>
      </div>
    </div>
  );
};

// Custom logo component
export const ExpensaLogo: React.FC<IconProps> = ({ size = 32, className }) => {
  return (
    <div className={`text-expensa-blue font-bold flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-expensa-blue/20 rounded-lg animate-pulse-slow" />
        <div className="relative z-10 bg-expensa-blue text-white p-1.5 rounded-lg">
          <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M9 12h6M12 9v6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <span className="text-xl">Expensa</span>
    </div>
  );
};
