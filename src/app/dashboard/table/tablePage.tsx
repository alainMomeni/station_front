import React from 'react';
import { useLocation } from "react-router-dom";
import tableConfig from '@components/table/metadata/table.json';
import TableComponent from '@/components/table/tableComponent';
import Footer from '@/components/footer';

const TablePage: React.FC = () => {
  const location = useLocation();

  console.log("Location Pathname:", location.pathname);

  // Map les chemins vers les clés de tableConfig.tables
  const configMap: Record<string, keyof typeof tableConfig.tables> = {
    "/produits": "produits",
    "/fiche-de-prix": "fiche-de-prix",
  };

  const tableKey = configMap[location.pathname];

  console.log("TableKey:", tableKey);

  if (!tableKey) {
    console.error("Erreur: La clé de table est indéfinie pour cette URL.");
    return <div>Aucune table configurée pour cette URL.</div>;
  }

  // Accéder à la configuration de la table
  const config = tableConfig.tables[tableKey];

  console.log("Table Config:", config);

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

export default TablePage;
