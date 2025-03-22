
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/utils/animations';
import { ExpensaLogo, UserIcon, SearchIcon, ChevronDownIcon } from '@/assets/icons';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Header: React.FC = () => {
  const scrolled = useScrollAnimation(10);
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 py-4",
        scrolled ? "backdrop-blur-glass bg-white/75 shadow-sm" : "bg-transparent",
        animateIn ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="transition-transform duration-300 hover:scale-105"
        >
          <ExpensaLogo />
        </Link>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-white/80 shadow-button hover:shadow-button-hover transition-all duration-300">
            <SearchIcon className="text-expensa-gray-dark" />
          </button>
          
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center space-x-2 p-1.5 rounded-full bg-white/80 shadow-button hover:shadow-button-hover transition-all duration-300">
                <Avatar className="h-8 w-8 border border-expensa-gray-medium">
                  <AvatarFallback className="bg-expensa-blue text-white text-sm">AS</AvatarFallback>
                </Avatar>
                <ChevronDownIcon className="text-expensa-gray-dark h-4 w-4" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <div className="p-4 border-b border-expensa-gray-medium/20">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border border-expensa-gray-medium">
                    <AvatarFallback className="bg-expensa-blue text-white">AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-expensa-black">Arvind Shaarma</h4>
                    <p className="text-sm text-expensa-gray-dark">Senior Networking Engineer</p>
                    <p className="text-xs text-expensa-gray-dark mt-0.5">Age: 32</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="rounded-md hover:bg-expensa-gray transition-colors p-2 cursor-pointer">
                  <p className="text-sm font-medium">Profile Settings</p>
                </div>
                <div className="rounded-md hover:bg-expensa-gray transition-colors p-2 cursor-pointer">
                  <p className="text-sm font-medium">Notification Preferences</p>
                </div>
                <div className="rounded-md hover:bg-expensa-gray transition-colors p-2 cursor-pointer">
                  <p className="text-sm font-medium">Help & Support</p>
                </div>
                <div className="rounded-md hover:bg-expensa-gray transition-colors p-2 cursor-pointer">
                  <p className="text-sm font-medium text-expensa-error">Sign Out</p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
