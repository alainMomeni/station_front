// components/sales/MainContent/supply/table/Pagination.tsx
import { FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationSupplyTable: React.FC = () => (
  <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
    <p className="text-sm text-customTableText mb-4 sm:mb-0">Showing data 1 to 8 of 256K entries</p>
    <div className="flex items-center space-x-2 flex-wrap">
      <button className="px-2 lg:px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white transition bg-gray-100">
        <ChevronLeft className="h-2 w-2" />
      </button>
      <button className="px-3 py-1 rounded-md bg-indigo-600 text-white hidden lg:block">1</button>
      <button className="px-3 py-1 rounded-md bg-gray-100 hover:bg-indigo-600 hover:text-white transition hidden lg:block">2</button>
      <button className="px-3 py-1 rounded-md bg-gray-100 hover:bg-indigo-600 hover:text-white transition hidden lg:block">3</button>
      <button className="px-3 py-1 rounded-md bg-gray-100 hover:bg-indigo-600 hover:text-white transition hidden lg:block">...</button>
      <button className="px-3 py-1 rounded-md bg-gray-100 hover:bg-indigo-600 hover:text-white transition hidden lg:block">99</button>
      <button className="px-2 lg:px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white transition bg-gray-100">
        <ChevronRight className="h-2 w-2" />
      </button>
    </div>
  </div>
);

export default PaginationSupplyTable;
