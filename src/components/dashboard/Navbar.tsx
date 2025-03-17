
import React from 'react';
import { Bell, Search, Settings, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={cn("w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10", className)}>
      <div className="flex items-center">
        <button className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors lg:hidden">
          <Menu size={20} />
        </button>
        <h1 className="text-xl font-semibold bg-gradient-to-r from-dashboard-blue to-dashboard-indigo bg-clip-text text-transparent">Analytics Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-9 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm w-40 lg:w-64"
          />
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-dashboard-red rounded-full"></span>
        </button>
        
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Settings size={20} />
        </button>
        
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-dashboard-purple to-dashboard-indigo flex items-center justify-center text-white font-medium text-sm">
          JD
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
