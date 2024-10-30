// src/components/types/dashboard/dashboard.ts
import type { 
  ChartData, 
  ChartOptions,
  CoreChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  DatasetChartOptions,
  ScaleChartOptions,
  ChartTypeRegistry,
} from 'chart.js';

export type ChartType = 'bar' | 'line' | 'doughnut' | 'radar';

export interface MetricTrend {
  value: number;
  isPositive: boolean;
  text: string;
}

export interface Metric {
  value: string | number;
  trend: MetricTrend;
}

export type ChartTypeToRegistry<T extends ChartType> = T extends 'bar' 
  ? 'bar' 
  : T extends 'line' 
  ? 'line'
  : T extends 'doughnut'
  ? 'doughnut'
  : T extends 'radar'
  ? 'radar'
  : never;

export type ChartDataType<T extends ChartType> = ChartData<ChartTypeToRegistry<T>>;

// Redéfinition de ChartOptionsType pour accepter des options partielles des configurations Core, Plugin, etc.
export type ChartOptionsType<T extends ChartType> = Partial<CoreChartOptions<ChartTypeToRegistry<T>> & 
  ElementChartOptions<ChartTypeToRegistry<T>> & 
  PluginChartOptions<ChartTypeToRegistry<T>> & 
  DatasetChartOptions<ChartTypeToRegistry<T>> & 
  ScaleChartOptions<ChartTypeToRegistry<T>> & 
  ChartTypeRegistry[ChartTypeToRegistry<T>]["chartOptions"]
>;

export interface BaseChartConfig<T extends ChartType> {
  type: T;
  title: string;
  metric: Metric;
  chartData: ChartDataType<T>;
  options?: ChartOptionsType<T>;
  footer?: string;
  className?: string;
}

export type ChartConfig = 
  | BaseChartConfig<'bar'>
  | BaseChartConfig<'line'>
  | BaseChartConfig<'doughnut'>
  | BaseChartConfig<'radar'>;

export interface DashboardConfig {
  title: string;
  charts: ChartConfig[];
}
