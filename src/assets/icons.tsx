
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
  MoreHorizontal,
  Gift,
  Sparkles,
  BrainCircuit,
  Filter,
  AlertTriangle,
  Lock,
  Star,
  Bell
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

export const ClockIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Clock size={size} className={className} />
);

export const GiftIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Gift size={size} className={className} />
);

export const AIAssistantIcon: React.FC<IconProps> = ({ size = IconSize.lg, className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-expensa-blue/20 rounded-full animate-pulse-slow" />
      <div className="relative z-10 bg-expensa-blue text-white p-1 rounded-full">
        <BrainCircuit size={size} />
      </div>
    </div>
  );
};

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
              d="M19 5h-4.5V3.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9.5-1.5h5V5h-5V3.5zm4.75 13h-5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0-3h-5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.5c.41 0 .75.34.75.75s-.34.75-.75.75z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <span className="text-xl">Expensa</span>
    </div>
  );
};

export const FilterIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Filter size={size} className={className} />
);

export const WarningIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <AlertTriangle size={size} className={className} />
);

export const LockIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Lock size={size} className={className} />
);

export const StarIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Star size={size} className={className} />
);

export const BellIcon: React.FC<IconProps> = ({ size = IconSize.md, className }) => (
  <Bell size={size} className={className} />
);
