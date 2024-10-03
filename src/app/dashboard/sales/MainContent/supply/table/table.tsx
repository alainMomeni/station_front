import { FC, useState } from "react";
import { ChevronDown, Search, ChevronLeft, ChevronRight } from "lucide-react";
import buttons from "../../../../../../components/sales/MainContent/supply/table/metadata/buttons.json";

const SupplyTable: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(
    "Approvisionnement actifs"
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
    setIsDropdownOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Buttons */}
      <div className="bg-white rounded-xl shadow-md p-2 mb-6 overflow-x-auto">
        <div className="flex space-x-4 min-w-max flex-wrap">
          {buttons.buttons.map((button, index) => (
            <button
              key={index}
              className={`${
                index === 0 ? "md:pl-4 pl-2" : ""
              } py-2 flex items-center hover:text-customIndigoHover transition duration-300 whitespace-nowrap`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mr-4 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id={button.icon.id}>
                  {button.icon.paths.map((path, pathIndex) => (
                    <path
                      key={pathIndex}
                      id={path.id}
                      d={path.d}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ))}
                </g>
              </svg>
              {button.text}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-md p-4 sm:p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center justify-start w-full">
            <div className="relative">
              <h2 className="text-2xl font-bold pb-2">Approvisionnement</h2>
              <div className="flex items-center relative">
                <h2 className="text-sm">{selectedStatus}</h2>
                <ChevronDown
                  className={`ml-2 text-customIndigoFade h-4 cursor-pointer transition-transform duration-200 ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  onClick={toggleDropdown}
                />

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                    <div className="py-1">
                      <button
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          selectedStatus === "Approvisionnement actifs"
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700"
                        } hover:bg-gray-100`}
                        onClick={() =>
                          handleStatusSelect("Approvisionnement actifs")
                        }
                      >
                        Approvisionnement actifs
                      </button>
                      <button
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          selectedStatus === "Approvisionnement inactifs"
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700"
                        } hover:bg-gray-100`}
                        onClick={() =>
                          handleStatusSelect("Approvisionnement inactifs")
                        }
                      >
                        Approvisionnement inactifs
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Barre de recherche et filtre */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-md pl-3 pr-3 py-2">
              <Search className="text-customLogoSearch w-6 h-6 mr-3" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-customTableText focus:outline-none flex-1"
              />
            </div>
            <div className="flex items-center bg-gray-100 rounded-md px-1 py-1">
              <span className="pl-3 pr-2 text-gray-500 whitespace-nowrap">
                Short by :
              </span>
              <p className="flex-1 pr-1 py-1 bg-gray-100 appearance-none font-semibold">
                Newest
              </p>
              <ChevronDown className="ml-2 mr-3 h-5 w-5 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left font-normal">
                  Selectionner
                </th>
                <th className="py-2 px-4 text-left font-normal">No Commande</th>
                <th className="py-2 px-4 text-left font-normal">Produit</th>
                <th className="py-2 px-4 text-left font-normal">
                  Bon de livraison
                </th>
                <th className="py-2 px-4 text-left font-normal">
                  Quantité livrée
                </th>
                <th className="py-2 px-4 text-left font-normal">
                  Valorisation
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 md:pr-14 align-middle text-center">
                  <input
                    type="radio"
                    name="selection"
                    className="rounded-full h-2.5 w-2.5 text-customTableText"
                  />
                </td>
                <td className="py-4 px-4 text-customTableText">C-0200001</td>
                <td className="py-4 px-4 text-customTableText">DEOMAX 15L</td>
                <td className="py-4 px-4 text-customTableText">BC-0000001</td>
                <td className="py-4 px-4 text-customTableText">25</td>
                <td className="py-4 px-4 text-customTableText">250000000</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 md:pr-14 align-middle text-center">
                  <input
                    type="radio"
                    name="selection"
                    className="rounded-full h-2.5 w-2.5 text-customTableText"
                  />
                </td>
                <td className="py-4 px-4 text-customTableText">C-0200002</td>
                <td className="py-4 px-4 text-customTableText">DEOMAX 12L</td>
                <td className="py-4 px-4 text-customTableText">BC-0000002</td>
                <td className="py-4 px-4 text-customTableText">40</td>
                <td className="py-4 px-4 text-customTableText">400000000</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 md:pr-14 align-middle text-center">
                  <input
                    type="radio"
                    name="selection"
                    className="rounded-full h-2.5 w-2.5 text-customTableText"
                  />
                </td>
                <td className="py-4 px-4 text-customTableText">C-0200003</td>
                <td className="py-4 px-4 text-customTableText">DEOMAX 4L</td>
                <td className="py-4 px-4 text-customTableText">BC-0000003</td>
                <td className="py-4 px-4 text-customTableText">50</td>
                <td className="py-4 px-4 text-customTableText">500000000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pt-8 pb-2 flex justify-between items-center">
          <p className="text-sm text-customTableText">
            Showing data 1 to 8 of 256K entries
          </p>
          <div className="flex space-x-2">
            {/* Chevrons and pagination buttons */}
            <button className="px-3 py-1 rounded-md hover:bg-indigo-600 hover:text-white transition bg-gray-100">
              <ChevronLeft className="h-4 w-4 " />
            </button>
            <button className="px-3 py-1  rounded-md bg-indigo-600 text-white">
              1
            </button>
            <button className="px-3 py-1  rounded-md bg-gray-100 hover:bg-indigo-600 hover:text-white transition">
              2
            </button>
            <button className="px-3 py-1  rounded-md bg-gray-100 hover:bg-indigo-600 hover:text-white transition">
              3
            </button>
            <button className="px-3 py-1  rounded-md bg-gray-100 hover:bg-indigo-600 hover:text-white transition">
              ...
            </button>
            <button className="px-3 py-1  rounded-md bg-gray-100 hover:bg-indigo-600 hover:text-white transition">
              99
            </button>
            <button className="px-3 py-1  rounded-md bg-gray-100 hover:bg-indigo-600 hover:text-white transition">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyTable;
