
import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

// Sample data
const sampleData = [
  { name: 'Jan', visitors: 4000, conversions: 2400 },
  { name: 'Feb', visitors: 3000, conversions: 1398 },
  { name: 'Mar', visitors: 2000, conversions: 9800 },
  { name: 'Apr', visitors: 2780, conversions: 3908 },
  { name: 'May', visitors: 1890, conversions: 4800 },
  { name: 'Jun', visitors: 2390, conversions: 3800 },
  { name: 'Jul', visitors: 3490, conversions: 4300 },
];

const LineChart = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={sampleData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
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
          <Legend 
            verticalAlign="top" 
            height={36} 
            iconType="circle" 
            iconSize={8}
            wrapperStyle={{ fontSize: '12px' }}
          />
          <Line 
            type="monotone" 
            dataKey="visitors" 
            stroke="#0EA5E9" 
            strokeWidth={2} 
            dot={{ r: 3, strokeWidth: 2 }}
            activeDot={{ r: 6 }}
            animationDuration={1500}
            animationEasing="ease-out"
          />
          <Line 
            type="monotone" 
            dataKey="conversions" 
            stroke="#8B5CF6" 
            strokeWidth={2} 
            dot={{ r: 3, strokeWidth: 2 }}
            activeDot={{ r: 6 }}
            animationDuration={1500}
            animationEasing="ease-out"
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
