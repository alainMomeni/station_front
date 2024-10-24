import React from 'react';
import { Bar, Line, Doughnut, Radar } from 'react-chartjs-2';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { ChartOptions } from 'chart.js'; // Ajout de l'import
import type { ChartConfig } from '@components/types/dashboard/dashboard';
import { getDefaultOptions } from '@components/charts/metadata/chart';

interface ChartCardProps {
  config: ChartConfig;
}

const ChartCard: React.FC<ChartCardProps> = ({ config }) => {
  const options = config.options || getDefaultOptions(config.type);

  const renderChart = () => {
    switch (config.type) {
      case 'bar':
        return <Bar data={config.chartData} options={options as ChartOptions<'bar'>} />;
      case 'line':
        return <Line data={config.chartData} options={options as ChartOptions<'line'>} />;
      case 'doughnut':
        return <Doughnut data={config.chartData} options={options as ChartOptions<'doughnut'>} />;
      case 'radar':
        return <Radar data={config.chartData} options={options as ChartOptions<'radar'>} />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="flex flex-row items-center justify-between pb-4">
          <h3 className="text-lg font-medium">{config.title}</h3>
          <div className="flex flex-col items-end">
            <div className="text-2xl font-bold">
              {config.metric.value}
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              {config.metric.trend.isPositive ? (
                <ArrowUp className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-500" />
              )}
              <span>
                {config.metric.trend.value}% {config.metric.trend.text}
              </span>
            </div>
          </div>
        </div>
        <div className="h-[300px]">
          {renderChart()}
        </div>
        {config.footer && (
          <div className="pt-4 text-sm text-muted-foreground">
            {config.footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChartCard;