import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { SearchAndFilterProps } from '../types/table/tableTypes';


const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  selectedFilter,
  filterOptions,
  onSelectFilter,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-full lg:w-auto">
      <div className="flex items-center bg-gray-100 rounded-md pl-3 pr-3 py-2 md:w-full w-full">
        <Search className="text-customLogoSearch w-5 h-5 sm:w-6 sm:h-6 mr-3 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-customTableText focus:outline-none w-full"
        />
      </div>
      <div className="relative w-full md:w-full">
        <div
          className="flex items-center bg-gray-100 rounded-md px-3 py-2 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-gray-500 whitespace-nowrap mr-2">Short by:</span>
          <p className="flex-1 font-semibold truncate">{selectedFilter}</p>
          <ChevronDown
            className={`ml-2 h-5 w-5 text-gray-500 transition-transform duration-200 ${
              isDropdownOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-1 w-full bg-white rounded-md shadow-lg z-10 border border-gray-200">
            <div className="py-1">
              {filterOptions.map((filter, index) => (
                <button
                  key={index}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    selectedFilter === filter
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700"
                  }`}
                  onClick={() => {
                    onSelectFilter(filter);
                    setIsDropdownOpen(false);
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilter;
