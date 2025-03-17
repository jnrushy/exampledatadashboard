
import React from 'react';
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Sample data
const sampleData = [
  { name: 'Week 1', revenue: 4000, expenses: 2400 },
  { name: 'Week 2', revenue: 3000, expenses: 1398 },
  { name: 'Week 3', revenue: 2000, expenses: 1800 },
  { name: 'Week 4', revenue: 2780, expenses: 2008 },
  { name: 'Week 5', revenue: 1890, expenses: 1800 },
  { name: 'Week 6', revenue: 2390, expenses: 2300 },
  { name: 'Week 7', revenue: 3490, expenses: 2500 },
];

const AreaChart = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart data={sampleData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false}
            tick={{ fill: '#888888', fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#888888', fontSize: 12 }}
            dx={-10}
            width={40}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '8px',
              border: 'none',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
            itemStyle={{ fontSize: '12px', padding: '2px 0' }}
          />
          <Area 
            type="monotone" 
            dataKey="revenue" 
            stroke="#0EA5E9" 
            fillOpacity={1} 
            fill="url(#colorRevenue)"
            strokeWidth={2}
            animationDuration={1500}
            animationEasing="ease-out"
          />
          <Area 
            type="monotone" 
            dataKey="expenses" 
            stroke="#8B5CF6" 
            fillOpacity={1} 
            fill="url(#colorExpenses)"
            strokeWidth={2}
            animationDuration={1500}
            animationEasing="ease-out"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;
