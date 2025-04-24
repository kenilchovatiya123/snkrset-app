// src/component/dashboard/graphs/OrdersPieChart.jsx
import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Completed', value: 600 },
  { name: 'Pending', value: 200 },
  { name: 'Cancelled', value: 100 },
];

const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

const OrdersPieChart = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full">
      <h2 className="text-lg font-semibold mb-4">Order Status</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersPieChart;
