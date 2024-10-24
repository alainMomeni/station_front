import React from 'react';
import Dashboard from '@/components/charts/dashboard';
import dashboardData from '@/components/charts/metadata/dashboardData';

const VenteFuelRepportPage: React.FC = () => {
  return <Dashboard config={dashboardData.venteFuel} />;
};

export default VenteFuelRepportPage;