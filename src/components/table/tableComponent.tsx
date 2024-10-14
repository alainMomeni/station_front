import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableConfig, TableRow } from "@components/types/table/tableTypes";
import TableButtons from './TableButtons';
import StatusFilter from './StatusFilter';
import SearchAndFilter from './SearchAndFilter';
import TableData from './TableData';
import Pagination from './Pagination';
import DeleteDialog from "./DeleteDialog";

const TableComponent: React.FC<{ config: TableConfig }> = ({ config }) => {
  const [selectedStatus, setSelectedStatus] = useState(config.defaultStatus);
  const [selectedFilter, setSelectedFilter] = useState(config.defaultFilter);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState<TableRow[]>([]);
  const navigate = useNavigate();

  const handleButtonClick = (buttonText: string) => {
    switch (buttonText) {
      case "Ajouter":
        navigate(config.addRoute);
        break;
      case "Supprimer":
        if (selectedRows.length > 0) {
          setIsDeleteDialogOpen(true);
        }
        break;
      case "Modifier":
        if (selectedRows.length === 1) {
          // Utiliser directement la route d'édition spécifiée dans la configuration
          navigate(config.editRoute);
        }
        break;
      default:
        break;
    }
  };

  const handleRowSelection = (row: TableRow) => {
    setSelectedRows(prev =>
      prev.some(r => r === row)
        ? prev.filter(r => r !== row)
        : [row]
    );
  };

  const handleDelete = () => {
    // Implement delete logic here
    console.log("Deleting selected rows:", selectedRows);
    setIsDeleteDialogOpen(false);
    setSelectedRows([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <TableButtons buttons={config.buttons} handleButtonClick={handleButtonClick} />
      <div className="bg-white rounded-3xl shadow-md p-3 sm:p-4 md:p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          <div className="w-full lg:w-auto mb-4 lg:mb-0 pr-4">
            <h1 className="text-xl sm:text-2xl font-bold mb-4">{config.title}</h1>
            <StatusFilter
              selectedStatus={selectedStatus}
              statusOptions={config.statusOptions}
              onSelectStatus={setSelectedStatus}
            />
          </div>
          <SearchAndFilter
            selectedFilter={selectedFilter}
            filterOptions={config.filterOptions}
            onSelectFilter={setSelectedFilter}
          />
        </div>
        <TableData
          columns={config.columns}
          data={config.data}
          onRowSelect={handleRowSelection}
          selectedRows={selectedRows}
        />
        <Pagination />
      </div>
      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default TableComponent;