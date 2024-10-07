// components/sales/MainContent/supply/table/SupplyTable.tsx
import { useState } from "react";
import StatusFilter from "@/components/sales/MainContent/supply/table/StatusFilter";
import SearchAndFilter from "@/components/sales/MainContent/supply/table/SearchAndFilter";
import PaginationSupplyTable from "@/components/sales/MainContent/supply/table/Pagination";
import SupplyTableButtons from "@/components/sales/MainContent/supply/table/SupplyTableButtons";

const SupplyTable: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState("Approvisionnement actifs");
  const [selectedFilter, setSelectedFilter] = useState("Newest");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Buttons */}
      <SupplyTableButtons />

      {/* Table Container */}
      <div className="bg-white rounded-3xl shadow-md p-3 sm:p-4 md:p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <div className="w-full lg:w-auto mb-4 lg:mb-0 pr-4">
            <div className="relative">
              <h2 className="text-xl sm:text-2xl font-bold pb-2">
                Approvisionnement
              </h2>
          {/* Status and Filter Sections */}
          <StatusFilter selectedStatus={selectedStatus} handleStatusSelect={setSelectedStatus} />
        </div>
        </div>
          <SearchAndFilter selectedFilter={selectedFilter} handleFilterSelect={setSelectedFilter} />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 font-normal whitespace-nowrap">Selectionner</th>
                <th className="py-2 px-4 font-normal whitespace-nowrap">No Commande</th>
                <th className="py-2 px-4 font-normal whitespace-nowrap">Produit</th>
                <th className="py-2 px-4 font-normal whitespace-nowrap">Bon de livraison</th>
                <th className="py-2 px-4 font-normal whitespace-nowrap">Quantité livrée</th>
                <th className="py-2 px-4 font-normal whitespace-nowrap">Valorisation</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row, can be replaced with dynamic content */}
              <tr className="border-b">
                <td className="py-2 md:pr-14 align-middle text-center">
                  <input type="radio" name="selection" className="rounded-full h-2.5 w-2.5 text-customTableText" />
                </td>
                <td className="py-4 px-4 text-customTableText whitespace-nowrap">C-0200001</td>
                <td className="py-4 px-4 text-customTableText whitespace-nowrap">DEOMAX 15L</td>
                <td className="py-4 px-4 text-customTableText whitespace-nowrap">BC-0000001</td>
                <td className="py-4 px-4 text-customTableText whitespace-nowrap">25</td>
                <td className="py-4 px-4 text-customTableText whitespace-nowrap">250000000</td>
              </tr>
              {/* More rows */}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <PaginationSupplyTable />
      </div>
    </div>
  );
};

export default SupplyTable;
