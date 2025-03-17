
import React from 'react';
import { ArrowDown, ArrowUp, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  iconColor,
  iconBgColor,
  className,
}) => {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;
  
  return (
    <div className={cn(
      "bg-white rounded-xl p-5 border border-gray-100 shadow-sm transition-all duration-300 stat-card",
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
          
          {change !== undefined && (
            <div className="flex items-center mt-2">
              {isPositive ? (
                <ArrowUp size={14} className="text-green-500 mr-1" />
              ) : isNegative ? (
                <ArrowDown size={14} className="text-red-500 mr-1" />
              ) : null}
              
              <span className={cn(
                "text-xs font-medium",
                isPositive ? "text-green-500" : isNegative ? "text-red-500" : "text-gray-500"
              )}>
                {isPositive && "+"}
                {change}%
              </span>
              
              <span className="text-xs text-gray-400 ml-1">vs last period</span>
            </div>
          )}
        </div>
        
        <div className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center",
          iconBgColor
        )}>
          <Icon size={20} className={iconColor} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
