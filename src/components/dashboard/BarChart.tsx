
import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

// Sample data
const sampleData = [
  { name: 'USA', value: 400 },
  { name: 'UK', value: 300 },
  { name: 'Canada', value: 200 },
  { name: 'Germany', value: 278 },
  { name: 'France', value: 189 },
  { name: 'Japan', value: 239 },
];

const BarChart = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={sampleData} margin={{ top: 20, right: 20, left: 10, bottom: 10 }}>
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
            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '8px',
              border: 'none',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
            itemStyle={{ fontSize: '12px', padding: '2px 0' }}
          />
          <Bar 
            dataKey="value" 
            fill="#0EA5E9"
            radius={[4, 4, 0, 0]}
            animationDuration={1500}
            animationEasing="ease-out"
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
