// components/sales/MainContent/supply/table/SupplyTable.tsx
import { useState } from "react";
import StatusFilterPurchaseOrderTable from "./StatusFilterPurchaseOrderTable";
import SearchAndFilterPurchaseOrderTable from "./SearchAndFilterPurchaseOrderTable";
import PaginationPurchaseOrderTable from "./paginationPurchaseOrderTable";
import PurchaseTableButtons from "./PurchaseTableButtons";

const PurchaseOrderTable: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState("Approvisionnement actifs");
  const [selectedFilter, setSelectedFilter] = useState("Newest");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Buttons */}
      <PurchaseTableButtons />

      {/* Table Container */}
      <div className="bg-white rounded-3xl shadow-md p-3 sm:p-4 md:p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <div className="w-full lg:w-auto mb-4 lg:mb-0 pr-4">
            <div className="relative">
              <h2 className="text-xl sm:text-2xl font-bold pb-2">
                Bon de commande
              </h2>
          {/* Status and Filter Sections */}
          <StatusFilterPurchaseOrderTable selectedStatus={selectedStatus} handleStatusSelect={setSelectedStatus} />
        </div>
        </div>
          <SearchAndFilterPurchaseOrderTable selectedFilter={selectedFilter} handleFilterSelect={setSelectedFilter} />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 font-normal whitespace-nowrap">Selectionner</th>
                <th className="py-2 px-4 font-normal whitespace-nowrap">Date de creation</th>
                <th className="py-2 px-4 font-normal whitespace-nowrap">Matricule</th>
                <th className="py-2 px-4 font-normal whitespace-nowrap">Valorisation</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row, can be replaced with dynamic content */}
              <tr className="border-b">
                <td className="py-2 md:text-left md:pl-14 align-middle text-center">
                  <input type="radio" name="selection" className="rounded-full h-2.5 w-2.5 text-customTableText" />
                </td>
                <td className="py-4 px-4 text-customTableText whitespace-nowrap">2024/08/10 15:30</td>
                <td className="py-4 px-4 text-customTableText whitespace-nowrap">BC-0200001</td>
                <td className="py-4 px-4 text-customTableText whitespace-nowrap">250000000</td>
              </tr>
              {/* More rows */}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <PaginationPurchaseOrderTable />
      </div>
    </div>
  );
};

export default PurchaseOrderTable;