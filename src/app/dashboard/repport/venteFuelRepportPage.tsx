import React from 'react';
import Dashboard from '@components/charts/dashboard';
import { dashboardData } from '@components/charts/metadata/dashboardData';
import '@components/charts/metadata/config';

const VenteFuelReportPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Dashboard config={dashboardData.venteFuel} />
    </div>
  );
};

export default VenteFuelReportPage;