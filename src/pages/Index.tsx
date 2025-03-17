
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
  Calendar,
  ChevronLeft,
  ChevronRight,
  Home,
  LayoutDashboard,
  Settings,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  BarChart as BarChartIcon,
} from 'lucide-react';

const Index = () => {
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
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 border-r border-gray-200 h-[calc(100vh-4rem)] sticky top-16 bg-white">
          <div className="p-4">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-dashboard-blue to-dashboard-indigo flex items-center justify-center text-white font-medium">
                D
              </div>
              <h2 className="font-medium">Dashboard</h2>
            </div>
            
            <nav>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-gray-100 text-gray-900 font-medium">
                    <Home size={18} />
                    <span>Overview</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                    <LayoutDashboard size={18} />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                    <BarChartIcon size={18} />
                    <span>Analytics</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                    <LineChartIcon size={18} />
                    <span>Reports</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                    <PieChartIcon size={18} />
                    <span>Statistics</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                    <Settings size={18} />
                    <span>Settings</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Dashboard header */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
              <p className="text-gray-500 text-sm mt-1">Analytics and reporting for your business</p>
            </div>
            
            <div className="flex space-x-3">
              <div className="flex items-center space-x-2 bg-white rounded-lg border border-gray-200 px-3 py-1.5 shadow-sm">
                <Calendar size={16} className="text-gray-500" />
                <span className="text-sm">Last 30 days</span>
                <button className="text-gray-500">
                  <ChevronDown size={16} />
                </button>
              </div>
              
              <div className="flex rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <button className="px-3 py-1.5 bg-white border-r border-gray-200 hover:bg-gray-50">
                  <ChevronLeft size={16} />
                </button>
                <button className="px-3 py-1.5 bg-white hover:bg-gray-50">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
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

// Needed to add this component since it's referenced above
const ChevronDown = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default Index;
