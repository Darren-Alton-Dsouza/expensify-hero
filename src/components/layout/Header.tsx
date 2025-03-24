
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X, ChevronDown, BarChart2, User, Bell, HelpCircle, LogOut } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const handleProfileAction = (action: string) => {
    switch(action) {
      case 'profile':
        navigate('/profile-settings');
        break;
      case 'notifications':
        navigate('/notification-preferences');
        break;
      case 'help':
        navigate('/help-support');
        break;
      case 'logout':
        // Show logout confirmation or perform logout
        console.log('User logged out');
        navigate('/');
        break;
      default:
        break;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-20">
      <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-xl font-bold text-expensa-blue">Expensa</h1>
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-expensa-gray-dark hover:text-expensa-blue transition-colors">
              Dashboard
            </Link>
            <Link to="/expenses" className="text-expensa-gray-dark hover:text-expensa-blue transition-colors">
              Expenses
            </Link>
            <Link to="/add-expense" className="text-expensa-gray-dark hover:text-expensa-blue transition-colors">
              Add Expense
            </Link>
            <Link to="/insights" className="text-expensa-gray-dark hover:text-expensa-blue transition-colors">
              Insights
            </Link>
            <Link to="/rewards" className="text-expensa-gray-dark hover:text-expensa-blue transition-colors">
              Rewards
            </Link>
          </nav>
        )}
        
        {/* Profile Menu */}
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="p-1 rounded-full">
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarFallback className="bg-expensa-blue text-white">
                    AS
                  </AvatarFallback>
                </Avatar>
              </Button>
            </PopoverTrigger>
            
            <PopoverContent className="p-2 w-48 mr-4">
              <div className="space-y-1">
                <button
                  onClick={() => handleProfileAction('profile')}
                  className="w-full flex items-center gap-2 p-2 text-sm rounded-md text-left hover:bg-expensa-gray/20 transition-colors"
                >
                  <User size={16} className="text-expensa-blue" />
                  Profile Settings
                </button>
                
                <button
                  onClick={() => handleProfileAction('notifications')}
                  className="w-full flex items-center gap-2 p-2 text-sm rounded-md text-left hover:bg-expensa-gray/20 transition-colors"
                >
                  <Bell size={16} className="text-expensa-blue" />
                  Notifications
                </button>
                
                <button
                  onClick={() => handleProfileAction('help')}
                  className="w-full flex items-center gap-2 p-2 text-sm rounded-md text-left hover:bg-expensa-gray/20 transition-colors"
                >
                  <HelpCircle size={16} className="text-expensa-blue" />
                  Help & Support
                </button>
                
                <div className="border-t border-expensa-gray-medium/20 my-1 pt-1"></div>
                
                <button
                  onClick={() => handleProfileAction('logout')}
                  className="w-full flex items-center gap-2 p-2 text-sm rounded-md text-left hover:bg-red-50 text-red-600 transition-colors"
                >
                  <LogOut size={16} />
                  Sign Out
                </button>
              </div>
            </PopoverContent>
          </Popover>
          
          {/* Mobile menu toggle */}
          {isMobile && (
            <button 
              className="p-2 rounded-md text-expensa-gray-dark"
              onClick={(e) => {e.stopPropagation(); setIsMenuOpen(!isMenuOpen)}}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </div>
      
      {/* Mobile dropdown menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white border-t border-expensa-gray/20 absolute w-full shadow-md animate-in slide-in-from-top-5 duration-200">
          <div className="p-4 space-y-3">
            <Link 
              to="/" 
              className="block p-2 rounded-md hover:bg-expensa-gray/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/expenses" 
              className="block p-2 rounded-md hover:bg-expensa-gray/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Expenses
            </Link>
            <Link 
              to="/add-expense" 
              className="block p-2 rounded-md hover:bg-expensa-gray/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Add Expense
            </Link>
            <Link 
              to="/insights" 
              className="block p-2 rounded-md hover:bg-expensa-gray/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </Link>
            <Link 
              to="/rewards" 
              className="block p-2 rounded-md hover:bg-expensa-gray/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Rewards
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
