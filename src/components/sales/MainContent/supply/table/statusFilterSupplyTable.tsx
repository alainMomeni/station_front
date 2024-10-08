// components/sales/MainContent/supply/table/StatusFilter.tsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { StatusFilterProps } from "@/components/types/sales/supply/supplyTable/StatusFilterProps";


const StatusFilterSupplyTable: React.FC<StatusFilterProps> = ({ selectedStatus, handleStatusSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="flex items-center relative">
      <h2 className="text-sm">{selectedStatus}</h2>
      <ChevronDown className={`ml-2 text-customIndigoFade h-4 cursor-pointer transition-transform duration-200 ${isDropdownOpen ? "transform rotate-180" : ""}`} onClick={toggleDropdown} />

      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg z-20 border border-gray-200">
          <div className="py-1">
            <button className={`block w-full text-left px-4 py-2 text-sm ${selectedStatus === "Approvisionnement actifs" ? "bg-gray-100 text-gray-900" : "text-gray-700"}`} onClick={() => handleStatusSelect("Approvisionnement actifs")}>Approvisionnement actifs</button>
            <button className={`block w-full text-left px-4 py-2 text-sm ${selectedStatus === "Approvisionnement inactifs" ? "bg-gray-100 text-gray-900" : "text-gray-700"}`} onClick={() => handleStatusSelect("Approvisionnement inactifs")}>Approvisionnement inactifs</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusFilterSupplyTable;
