import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGenericCrud } from '@/components/statement/function/hook/useGenericCrud';
import { TableConfig, TableRow } from "@components/types/table/tableTypes";
import TableButtons from "./TableButtons";
import StatusFilter from "./StatusFilter";
import SearchAndFilter from "./SearchAndFilter";
import TableData from "./TableData";
import Pagination from "./Pagination";
import DeleteDialog from "./DeleteDialog";
import { iconComponents } from '@components/table/iconMapping';
import { useAuth } from '@components/statement/auth/useAuth';

interface TableComponentProps {
  config: TableConfig;
}

const TableComponent: React.FC<TableComponentProps> = ({ config }) => {
  const navigate = useNavigate();
  const [data, setData] = useState<TableRow[]>([]);
  const [selectedRows, setSelectedRows] = useState<TableRow[]>([]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const auth = useAuth();

  const {
    loading,
    error,
    handleFetch,
    handleDelete
  } = useGenericCrud(config.dataKey);

  useEffect(() => {
    const fetchData = async () => {
      if (auth.isAuthenticated) {
        const result = await handleFetch();
        if (result) {
          setData(result);
        }
      } else {
        navigate('/login');
      }
    };
    fetchData();
  }, [handleFetch, auth.isAuthenticated, navigate]);

  const handleButtonClick = async (buttonText: string) => {
    switch (buttonText) {
      case "Ajouter":
        navigate(config.addRoute);
        break;
      case "Modifier":
        if (selectedRows.length === 1) {
          navigate(`${config.editRoute}/${selectedRows[0].id}`);
        }
        break;
      case "Supprimer":
        if (selectedRows.length > 0) {
          setIsDeleteDialogOpen(true);
        }
        break;
    }
  };

  const handleDeleteConfirm = async () => {
    for (const row of selectedRows) {
      await handleDelete(row.id as string);
    }
    setIsDeleteDialogOpen(false);
    setSelectedRows([]);
    handleFetch(); // Rafraîchir les données
  };

  const buttonsWithIcons = config.buttons.map(button => ({
    ...button,
    icon: iconComponents[button.text as keyof typeof iconComponents],
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<TableButtons 
  buttons={buttonsWithIcons} 
  handleButtonClick={handleButtonClick} 
  disabled={loading} // Désactive les boutons pendant le chargement
/>
      <div className="bg-white rounded-3xl shadow-md p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          <div className="w-full lg:w-auto mb-4 lg:mb-0">
            <h1 className="text-2xl font-bold mb-4">{config.title}</h1>
            <StatusFilter
              selectedStatus={config.defaultStatus}
              statusOptions={config.statusOptions}
              onSelectStatus={() => {}}
            />
          </div>
          <SearchAndFilter
            selectedFilter={config.defaultFilter}
            filterOptions={config.filterOptions}
            onSelectFilter={() => {}}
          />
        </div>

        {loading ? (
          <div className="text-center py-4">Chargement...</div>
        ) : error ? (
          <div className="text-center py-4 text-red-500">{error}</div>
        ) : (
          <TableData
            columns={config.columns}
            data={data}
            onRowSelect={(row) => {
              setSelectedRows(prev => 
                prev.includes(row) 
                  ? prev.filter(r => r !== row)
                  : [...prev, row]
              );
            }}
            selectedRows={selectedRows}
          />
        )}
        <Pagination />
      </div>

      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default TableComponent;
