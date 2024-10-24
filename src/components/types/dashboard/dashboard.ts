import { ChartOptions as ChartJSOptions } from 'chart.js';

export type CustomChartType = 'bar' | 'line' | 'doughnut' | 'radar';

export interface MetricTrend {
  value: number;
  isPositive: boolean;
  text: string;
}

export interface Metric {
  value: string | number;
  trend: MetricTrend;
}

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

export interface CustomChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartConfig {
  type: CustomChartType;
  title: string;
  metric: Metric;
  chartData: CustomChartData;
  options?: ChartJSOptions<CustomChartType>;
  footer?: string;
}

export interface DashboardConfig {
  title: string;
  charts: ChartConfig[];
}