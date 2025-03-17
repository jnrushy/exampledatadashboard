
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/dashboard/Navbar';
import StatCard from '@/components/dashboard/StatCard';
import ChartCard from '@/components/dashboard/ChartCard';
import LineChart from '@/components/dashboard/LineChart';
import AreaChart from '@/components/dashboard/AreaChart';
import BarChart from '@/components/dashboard/BarChart';
import PieChart from '@/components/dashboard/PieChart';
import { 
  Users, 
  DollarSign, 
  ShoppingCart, 
  BarChart3,
  Settings,
} from 'lucide-react';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />
      
      <div className="flex">
        {/* Main content */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Dashboard header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
            <p className="text-gray-500 text-sm mt-1">Analytics and reporting for your business</p>
          </div>
          
          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Total Visitors" 
              value="12,547" 
              change={12.4}
              icon={Users}
              iconColor="text-white"
              iconBgColor="bg-dashboard-blue/80"
              className="animate-slide-up [animation-delay:0ms]"
            />
            <StatCard 
              title="Total Revenue" 
              value="$48,260" 
              change={-3.2}
              icon={DollarSign}
              iconColor="text-white"
              iconBgColor="bg-dashboard-green/80"
              className="animate-slide-up [animation-delay:100ms]"
            />
            <StatCard 
              title="Total Orders" 
              value="1,437" 
              change={8.5}
              icon={ShoppingCart}
              iconColor="text-white"
              iconBgColor="bg-dashboard-purple/80"
              className="animate-slide-up [animation-delay:200ms]"
            />
            <StatCard 
              title="Conversion Rate" 
              value="3.2%" 
              change={1.1}
              icon={BarChart3}
              iconColor="text-white"
              iconBgColor="bg-dashboard-orange/80"
              className="animate-slide-up [animation-delay:300ms]"
            />
          </div>
          
          {/* Charts row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ChartCard 
              title="Visitor Trends" 
              subtitle="Daily visitors and conversions"
              className="animate-slide-up [animation-delay:400ms]"
              height="h-[350px]"
            >
              <LineChart />
            </ChartCard>
            
            <ChartCard 
              title="Revenue & Expenses" 
              subtitle="Weekly financial performance"
              className="animate-slide-up [animation-delay:500ms]"
              height="h-[350px]"
            >
              <AreaChart />
            </ChartCard>
          </div>
          
          {/* Charts row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard 
              title="Top Countries" 
              subtitle="User distribution by country"
              className="animate-slide-up [animation-delay:600ms]"
              height="h-[350px]"
            >
              <BarChart />
            </ChartCard>
            
            <ChartCard 
              title="Device Distribution" 
              subtitle="Users by device category"
              className="animate-slide-up [animation-delay:700ms]"
              height="h-[350px]"
            >
              <PieChart />
            </ChartCard>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
