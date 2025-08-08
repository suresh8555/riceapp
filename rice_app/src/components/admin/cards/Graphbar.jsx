import React from 'react';
import {
  AreaChart, Area,
  BarChart, Bar,
  XAxis, YAxis,
  Tooltip, ResponsiveContainer
} from 'recharts';
import { FaDollarSign, FaShoppingBag, FaUserPlus } from 'react-icons/fa';

const data = [
  { day: 'Tue', revenue: 1200, orders: 38, customers: 25 },
  { day: 'Wed', revenue: 980, orders: 32, customers: 18 },
  { day: 'Thu', revenue: 950, orders: 30, customers: 17 },
  { day: 'Fri', revenue: 970, orders: 31, customers: 22 },
  { day: 'Sat', revenue: 1120, orders: 45, customers: 19 },
  { day: 'Sun', revenue: 1100, orders: 42, customers: 20 },
  { day: 'Mon', revenue: 1150, orders: 34, customers: 26 },
];

const ChartCard = ({ title, icon, amount, dataKey, chartType, chartColor }) => {
  return (
    <div className="col-md-4 col-sm-12 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="d-flex align-items-center gap-2">
              {icon}
              <span className="fw-semibold">{title}</span>
            </div>
            <span className="fw-bold text-success">{amount} <small>▲</small></span>
          </div>
          <div style={{ width: '100%', height: 150 }}>
            <ResponsiveContainer>
              {chartType === 'area' ? (
                <AreaChart data={data}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey={dataKey}
                    stroke={chartColor}
                    fill={chartColor}
                    fillOpacity={0.3}
                  />
                </AreaChart>
              ) : (
                <BarChart data={data}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip />
                  <Bar dataKey={dataKey} fill={chartColor} radius={[4, 4, 0, 0]} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const Graphbar = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <ChartCard
          title="Daily Revenue"
          icon={<FaDollarSign className="text-warning" />}
          amount="$80.00"
          dataKey="revenue"
          chartType="area"
          chartColor="#007bff"
        />
        <ChartCard
          title="Daily Orders"
          icon={<FaShoppingBag className="text-danger" />}
          amount="150"
          dataKey="orders"
          chartType="bar"
          chartColor="#17a2b8"
        />
        <ChartCard
          title="New Customers"
          icon={<FaUserPlus className="text-success" />}
          amount="11,000.00%"
          dataKey="customers"
          chartType="bar"
          chartColor="#28a745"
        />
      </div>
    </div>
  );
};

export default Graphbar;
