import React from 'react';
import type { DashboardConfig } from '@components/types/dashboard/dashboard';
import ChartCard from '@components/charts/chart';

interface DashboardProps {
  config: DashboardConfig;
}

const Dashboard: React.FC<DashboardProps> = ({ config }) => {
  return (
    <div className="space-y-4 p-8">
      <h2 className="text-3xl font-bold">{config.title}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {config.charts.map((chartConfig, index) => (
          <ChartCard key={index} config={chartConfig} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;