import { ChartOptions } from 'chart.js'; // Ajout de l'import
import { CustomChartType } from '@components/types/dashboard/dashboard';

export const getDefaultOptions = (type: CustomChartType): ChartOptions<CustomChartType> => {
  const commonOptions: ChartOptions<CustomChartType> = {
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
      } as ChartOptions<'doughnut'>;

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
      } as ChartOptions<'radar'>;

    default:
      return commonOptions;
  }
};