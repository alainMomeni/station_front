import { ChartOptions } from 'chart.js';
import { ChartType } from '@components/types/dashboard/dashboard';

export const getDefaultOptions = (type: ChartType): ChartOptions<ChartType> => {
  const commonOptions: Partial<ChartOptions<ChartType>> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  switch (type) {
    case 'bar':
      return {
        ...commonOptions,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      };

    case 'line':
      return {
        ...commonOptions,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      };

    case 'doughnut':
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        cutout: '75%',
      };

    case 'radar':
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20,
            },
          },
        },
      };

    default:
      return commonOptions as ChartOptions<ChartType>;
  }
};