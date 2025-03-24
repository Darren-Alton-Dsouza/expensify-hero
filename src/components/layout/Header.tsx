
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/utils/animations';
import { ExpensaLogo, UserIcon, SearchIcon, ChevronDownIcon, ExpenseIcon } from '@/assets/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const scrolled = useScrollAnimation(10);
  const [animateIn, setAnimateIn] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const searchResults = [
    { id: 'exp1', title: 'Coffee Shop', amount: '$24.50', date: 'May 22, 2023', status: 'pending', path: '/review-expense' },
    { id: 'exp2', title: 'Uber Ride', amount: '$18.75', date: 'May 21, 2023', status: 'rejected', path: '/expenses' },
    { id: 'exp3', title: 'Office Supplies', amount: '$45.65', date: 'May 20, 2023', status: 'approved', path: '/expenses' }
  ];
  
  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearchResultClick = (result: typeof searchResults[0]) => {
    setSearchOpen(false);
    
    if (result.status === 'pending') {
      // For pending expenses, navigate to review page
      sessionStorage.setItem('selectedTransaction', JSON.stringify({
        merchant: result.title,
        date: result.date,
        amount: result.amount,
        category: 'Uncategorized'
      }));
      navigate('/review-expense');
    } else if (result.status === 'rejected') {
      // For rejected expenses, show rejection reason and resubmit option
      toast({
        title: "Expense Rejected",
        description: "This expense was rejected due to missing receipt. Would you like to resubmit?",
        action: (
          <button 
            onClick={() => navigate('/add-expense')} 
            className="bg-expensa-blue text-white px-4 py-1 rounded-md text-xs font-medium"
          >
            Resubmit
          </button>
        ),
        duration: 5000,
      });
      navigate('/expenses');
    } else if (result.status === 'approved') {
      // For approved expenses, show approval details
      toast({
        title: "Expense Approved",
        description: "Approved by Jane Smith on June 2, 2023. Reimbursement processed.",
        duration: 5000,
      });
      navigate('/expenses');
    }
  };

  const handleSignOut = () => {
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out",
      duration: 3000,
    });
    
    // In a real app, you would clear auth tokens, session storage, etc.
    // For this prototype, just navigate to the home page
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 py-4",
        scrolled ? "backdrop-blur-md bg-white/90 shadow-sm" : "bg-transparent",
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
          <button 
            className="p-2 rounded-full bg-white shadow-button hover:shadow-button-hover transition-all duration-300"
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon className="text-expensa-blue" />
          </button>
          
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center space-x-2 p-1.5 rounded-full bg-white shadow-button hover:shadow-button-hover transition-all duration-300">
                <Avatar className="h-8 w-8 border border-expensa-gray-medium">
                  <AvatarFallback className="bg-expensa-blue text-white text-sm">AS</AvatarFallback>
                </Avatar>
                <ChevronDownIcon className="text-expensa-gray-dark h-4 w-4" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0 bg-white solid-panel" align="end">
              <div className="p-4 border-b border-expensa-gray-medium/20">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border border-expensa-gray-medium">
                    <AvatarFallback className="bg-expensa-blue text-white">AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-expensa-black">Arvind Sharma</h4>
                    <p className="text-sm text-expensa-gray-dark">Senior Networking Engineer</p>
                    <p className="text-xs text-expensa-gray-dark mt-0.5">Age: 32</p>
                  </div>
                </div>
              </div>
              <div className="p-2 bg-white">
                <div className="rounded-md hover:bg-expensa-gray transition-colors p-2 cursor-pointer" onClick={() => {
                  navigate('/profile-settings');
                }}>
                  <p className="text-sm font-medium">Profile Settings</p>
                </div>
                <div className="rounded-md hover:bg-expensa-gray transition-colors p-2 cursor-pointer" onClick={() => {
                  navigate('/notification-preferences');
                }}>
                  <p className="text-sm font-medium">Notification Preferences</p>
                </div>
                <div className="rounded-md hover:bg-expensa-gray transition-colors p-2 cursor-pointer" onClick={() => {
                  navigate('/help-support');
                }}>
                  <p className="text-sm font-medium">Help & Support</p>
                </div>
                <div className="rounded-md hover:bg-expensa-gray transition-colors p-2 cursor-pointer" onClick={handleSignOut}>
                  <p className="text-sm font-medium text-expensa-error">Sign Out</p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="bg-white p-4 max-w-lg">
          <DialogTitle className="text-lg font-semibold mb-2">Search Expenses</DialogTitle>
          <div className="mt-2">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-2.5 text-expensa-gray-dark" size={16} />
              <Input
                ref={searchInputRef}
                placeholder="Search by vendor, amount, or date..."
                className="pl-9 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="mt-4 space-y-2 max-h-72 overflow-y-auto">
              {searchResults.map((result) => (
                <div 
                  key={result.id}
                  className="p-3 rounded-lg border border-expensa-gray-medium/20 cursor-pointer hover:bg-expensa-gray/20 transition-colors flex items-center transform hover:scale-[1.02] hover:shadow-md transition-all duration-300"
                  onClick={() => handleSearchResultClick(result)}
                >
                  <div className="w-8 h-8 rounded-full bg-expensa-blue/10 flex items-center justify-center mr-3">
                    <ExpenseIcon size={16} className="text-expensa-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{result.title}</h4>
                    <div className="flex items-center text-xs text-expensa-gray-dark">
                      <span>{result.amount}</span>
                      <span className="mx-1">•</span>
                      <span>{result.date}</span>
                    </div>
                  </div>
                  <div className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    result.status === 'approved' ? "bg-expensa-success/10 text-expensa-success" :
                    result.status === 'pending' ? "bg-expensa-warning/10 text-expensa-warning" :
                    "bg-expensa-error/10 text-expensa-error"
                  )}>
                    {result.status.charAt(0).toUpperCase() + result.status.slice(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
