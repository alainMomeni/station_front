import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Dashboard from '@components/charts/dashboard';
import { dashboardData } from '@components/charts/metadata/dashboardData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const VenteFuelReportPage: React.FC = () => {
  return (
    <Dashboard config={dashboardData.venteFuel} />
  );
};

export default VenteFuelReportPage;