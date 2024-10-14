import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { StatusFilterProps } from '../types/table/tableTypes';



const StatusFilter: React.FC<StatusFilterProps> = ({
  selectedStatus,
  statusOptions,
  onSelectStatus,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex items-center relative">
      <h2 className="text-sm">{selectedStatus}</h2>
      <ChevronDown
        className={`ml-2 text-customIndigoFade h-4 cursor-pointer transition-transform duration-200 ${
          isDropdownOpen ? "transform rotate-180" : ""
        }`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      />
      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg z-20 border border-gray-200">
          <div className="py-1">
            {statusOptions.map((status, index) => (
              <button
                key={index}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  selectedStatus === status
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700"
                }`}
                onClick={() => {
                  onSelectStatus(status);
                  setIsDropdownOpen(false);
                }}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusFilter;
