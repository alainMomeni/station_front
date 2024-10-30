import React from 'react';
import tableConfig from '@components/table/metadata/table.json';
import TableComponent from '@/components/table/tableComponent';
import Footer from '@/components/footer';

const RoleTablePage: React.FC = () => {
  const config = tableConfig.tables.roles;

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <main className="flex-1 p-8 overflow-y-auto">
        <TableComponent config={config} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default RoleTablePage;