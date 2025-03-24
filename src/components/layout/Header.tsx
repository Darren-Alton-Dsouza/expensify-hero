
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useIsMobile } from '@/hooks/use-mobile';
import { User, Bell, HelpCircle, LogOut } from 'lucide-react';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const handleProfileClick = () => {
    navigate('/profile-settings');
  };
  
  const handleNotificationsClick = () => {
    navigate('/notification-preferences');
  };
  
  const handleHelpClick = () => {
    navigate('/help-support');
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="h-16 px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-expensa-blue flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>
            <span className="font-semibold text-lg hidden sm:block">Expensa</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={handleNotificationsClick}
            className="rounded-full text-expensa-gray-dark hover:text-expensa-blue"
          >
            <Bell size={18} />
          </Button>
          
          <Button
            size="icon"
            variant="ghost"
            onClick={handleHelpClick}
            className="rounded-full text-expensa-gray-dark hover:text-expensa-blue"
          >
            <HelpCircle size={18} />
          </Button>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-expensa-gray/10"
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-expensa-blue text-white">
                    AS
                  </AvatarFallback>
                </Avatar>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-56 mr-4" align="end">
              <div className="p-3 border-b border-expensa-gray/10">
                <div className="font-medium">Arvind Sharma</div>
                <div className="text-xs text-expensa-gray-dark">arvind.sharma@example.com</div>
              </div>
              <div className="p-1">
                <button
                  className="w-full flex items-center gap-2 p-2 text-sm hover:bg-expensa-gray/10 rounded-md text-left"
                  onClick={handleProfileClick}
                >
                  <User size={16} />
                  <span>Profile Settings</span>
                </button>
                <button
                  className="w-full flex items-center gap-2 p-2 text-sm hover:bg-expensa-gray/10 rounded-md text-left"
                  onClick={handleHelpClick}
                >
                  <HelpCircle size={16} />
                  <span>Help & Support</span>
                </button>
                <button
                  className="w-full flex items-center gap-2 p-2 text-sm hover:bg-expensa-gray/10 rounded-md text-left text-red-500"
                >
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
