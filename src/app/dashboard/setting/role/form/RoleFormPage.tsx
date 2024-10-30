// src/pages/RolesPage.tsx

import React from 'react';
import TableForm from '@components/tableRadio/TableRadioComponent';
import tableConfig from '@components/tableRadio/metadata/tableRadioConfig.json'; // Adjust the path as needed

const RoleFormPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <TableForm config={tableConfig.rolesTable} />
    </div>
  );
};

export default RoleFormPage;
