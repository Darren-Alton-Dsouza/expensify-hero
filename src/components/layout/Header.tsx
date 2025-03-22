
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/utils/animations';
import { ExpensaLogo, UserIcon, SearchIcon } from '@/assets/icons';
import { Link } from 'react-router-dom';

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
          
          <button className="p-2 rounded-full bg-white/80 shadow-button hover:shadow-button-hover transition-all duration-300">
            <UserIcon className="text-expensa-gray-dark" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
