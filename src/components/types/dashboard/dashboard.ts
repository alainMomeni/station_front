import { 
    ChartOptions
  } from 'chart.js';
  
  export type ChartType = 'bar' | 'line' | 'doughnut' | 'radar';
  
  type ChartOptionsType<T extends ChartType> = T extends 'bar' 
    ? ChartOptions<'bar'> 
    : T extends 'line' 
    ? ChartOptions<'line'>
    : T extends 'doughnut'
    ? ChartOptions<'doughnut'>
    : T extends 'radar'
    ? ChartOptions<'radar'>
    : never;
  
  export interface ChartDataset {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
    tension?: number;
    borderWidth?: number;
    pointRadius?: number;
    fill?: boolean;
    barThickness?: number;
  }
  
  export interface ChartConfig<T extends ChartType = ChartType> {
    type: T;
    title: string;
    metric: {
      value: string | number;
      trend: {
        value: number;
        isPositive: boolean;
        text: string;
      };
    };
    chartData: {
      labels: string[];
      datasets: ChartDataset[];
    };
    options?: ChartOptionsType<T>;
    footer?: string;
  }
  
  export interface DashboardConfig {
    title: string;
    charts: ChartConfig[];
  }