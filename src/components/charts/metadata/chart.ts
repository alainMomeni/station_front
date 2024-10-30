// src/components/charts/metadata/chart.ts
import { ChartOptionsType, ChartType } from '@components/types/dashboard/dashboard';

export const getDefaultOptions = <T extends ChartType>(type: T): ChartOptionsType<T> => {
  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
  } as ChartOptionsType<T>;

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
      } as ChartOptionsType<'bar'>;

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
      } as ChartOptionsType<'line'>;

    case 'doughnut':
      return {
        ...baseOptions,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        cutout: '75%',
      } as ChartOptionsType<'doughnut'>;

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
              stepSize: 20,
            },
          },
        },
      } as ChartOptionsType<'radar'>;

    default:
      return baseOptions;
  }
};
