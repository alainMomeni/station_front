import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TableConfig, TableRow } from "@components/types/table/tableTypes";
import TableButtons from './TableButtons';
import StatusFilter from './StatusFilter';
import SearchAndFilter from './SearchAndFilter';
import TableData from './TableData';
import Pagination from './Pagination';
import DeleteDialog from "./DeleteDialog";
import tableData from '@components/table/metadata/tableData.json';
import AddIcon from "@/assets/svg/ajouter";
import EditIcon from "@/assets/svg/modifier";
import DeleteIcon from "@/assets/svg/suprimer";
import DesactiverIcon from "@/assets/svg/desactiver";

const iconComponents = {
  "Ajouter": AddIcon,
  "Modifier": EditIcon,
  "Supprimer": DeleteIcon,
  "Desactiver": DesactiverIcon,
};

const TableComponent: React.FC<{ config: TableConfig }> = ({ config }) => {
  const [selectedStatus, setSelectedStatus] = useState(config.defaultStatus);
  const [selectedFilter, setSelectedFilter] = useState(config.defaultFilter);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState<TableRow[]>([]);
  const [data, setData] = useState<TableRow[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tableKey = config.dataKey.toLowerCase();
    const tableSpecificData = tableData[tableKey as keyof typeof tableData];
    if (Array.isArray(tableSpecificData)) {
      setData(tableSpecificData);
    } else {
      setData([]);
    }
  }, [config.dataKey]);

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
        : [...prev, row]
    );
  };

  const handleDelete = () => {
    console.log("Deleting selected rows:", selectedRows);
    setIsDeleteDialogOpen(false);
    setSelectedRows([]);
  };

  const buttonsWithIcons = config.buttons.map(button => ({
    ...button,
    icon: iconComponents[button.text as keyof typeof iconComponents]
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <TableButtons buttons={buttonsWithIcons} handleButtonClick={handleButtonClick} />
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
        {data.length > 0 ? (
          <>
            <TableData
              columns={config.columns}
              data={data}
              onRowSelect={handleRowSelection}
              selectedRows={selectedRows}
            />
          </>
        ) : (
          <div className="text-center py-4">Aucune donnée disponible</div>
        )}
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
