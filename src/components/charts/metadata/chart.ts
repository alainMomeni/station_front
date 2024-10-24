import { ChartOptions, ChartTypeRegistry } from 'chart.js';
import { CustomChartType } from '@components/types/dashboard/dashboard';

export const getDefaultOptions = (type: CustomChartType): ChartOptions<keyof ChartTypeRegistry> => {
  const baseOptions: ChartOptions<keyof ChartTypeRegistry> = {
    responsive: true,
    maintainAspectRatio: false,
  };

  switch (type) {
    case 'bar':
      return {
        ...baseOptions,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
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

    case 'line':
      return {
        ...baseOptions,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            },
            min: 0,
            max: 400,
            ticks: {
              stepSize: 100
            }
          },
        },
      };

    case 'doughnut':
      return {
        ...baseOptions,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        cutout: '75%',
      };

    case 'radar':
      return {
        ...baseOptions,
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
              stepSize: 20
            }
          }
        }
      };

    default:
      return baseOptions;
  }
};