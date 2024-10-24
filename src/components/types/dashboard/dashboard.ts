import { 
  ChartData, 
  ChartOptions,
  ChartTypeRegistry
} from 'chart.js';

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

// Type générique pour les datasets selon le type de graphique
export interface CustomDataset<T extends CustomChartType> {
  label: string;
  data: number[];
  backgroundColor?: string | string[];
  borderColor?: string;
  tension?: number;
  borderWidth?: number;
  pointRadius?: number;
  pointBackgroundColor?: string;
  fill?: boolean;
  barThickness?: number;
}

// Type générique pour les données du graphique
export interface CustomChartData<T extends CustomChartType> {
  labels: string[];
  datasets: CustomDataset<T>[];
}

// Configuration générique pour chaque type de graphique
export interface ChartConfig<T extends CustomChartType = CustomChartType> {
  type: T;
  title: string;
  metric: Metric;
  chartData: CustomChartData<T>;
  options?: ChartOptions<keyof ChartTypeRegistry>;
  footer?: string;
  className?: string;
}

export interface DashboardConfig {
  title: string;
  charts: ChartConfig[];
}

// Helpers pour les options spécifiques à chaque type de graphique
export type ChartOptionsWithType<T extends CustomChartType> = ChartOptions<keyof ChartTypeRegistry>;