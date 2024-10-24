import React from 'react';
import { Bar, Line, Doughnut, Radar } from 'react-chartjs-2';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { ChartConfig } from '@components/types/dashboard/dashboard';
import { getDefaultOptions } from '@components/charts/metadata/chart';

const ChartCard: React.FC<{ config: ChartConfig }> = ({ config }) => {
  const options = config.options || getDefaultOptions(config.type);
  
  const renderChart = () => {
    switch (config.type) {
      case 'bar':
        return <Bar data={config.chartData} options={options} />;
      case 'line':
        return <Line data={config.chartData} options={options} />;
      case 'doughnut':
        return (
          <div className="relative">
            <Doughnut data={config.chartData} options={options} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-sm font-medium">Performance</div>
              <div className="font-bold">{config.metric.value}</div>
            </div>
          </div>
        );
      case 'radar':
        return <Radar data={config.chartData} options={options} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold">{config.title}</h2>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold">{config.metric.value}</span>
            <span
              className={`text-sm flex items-center ${
                config.metric.trend.isPositive ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {config.metric.trend.isPositive ? (
                <ArrowUp className="w-4 h-4" />
              ) : (
                <ArrowDown className="w-4 h-4" />
              )}
              {config.metric.trend.value}% {config.metric.trend.text}
            </span>
          </div>
        </div>
        <select className="border rounded-md p-2">
          <option>Trier par : Jour</option>
        </select>
      </div>
      <div className="h-[200px]">{renderChart()}</div>
      {config.footer && (
        <div className="text-sm text-gray-500 mt-2">{config.footer}</div>
      )}
    </div>
  );
};

export default ChartCard;