import React from 'react';
import type { DashboardConfig } from '@components/types/dashboard/dashboard';
import ChartCard from '@components/charts/chart';

interface DashboardProps {
  config: DashboardConfig;
}

const Dashboard: React.FC<DashboardProps> = ({ config }) => {
  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <h1 className="text-2xl font-bold">{config.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {config.charts.map((chartConfig, index) => (
          <ChartCard key={index} config={chartConfig} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;