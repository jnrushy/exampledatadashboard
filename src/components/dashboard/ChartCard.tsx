
import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  height?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  subtitle,
  children,
  className,
  height = "h-[300px]"
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className={cn(
      "bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md",
      className
    )}>
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-900">{title}</h3>
            {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
            >
              <MoreHorizontal size={16} />
            </button>
            
            {isMenuOpen && (
              <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg border border-gray-100 z-10 animate-fade-in">
                <ul className="py-1 text-sm">
                  <li><button className="w-full text-left px-4 py-2 hover:bg-gray-50">Download CSV</button></li>
                  <li><button className="w-full text-left px-4 py-2 hover:bg-gray-50">Download PNG</button></li>
                  <li><button className="w-full text-left px-4 py-2 hover:bg-gray-50">View Full Report</button></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className={`px-2 py-4 ${height}`}>
        {children}
      </div>
    </div>
  );
};

export default ChartCard;
