import { FC } from "react";
import { ChevronDown } from "lucide-react";
import buttons from "../../../../../../components/sales/MainContent/supplyForm/metadata/buttons.json";

const SupplyTable: FC = () => (
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
          <div>
            <h2 className="text-2xl font-bold pb-2">Approvisionnement</h2>
            <div className="flex items-center">
              <h2 className="text-sm">Approvisionnement actifs</h2>
              <ChevronDown className="ml-2 text-customIndigoFade h-4 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Barre de recherche et filtre */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md px-3 py-1"
          />
          <select className="border rounded-md px-3 py-1">
            <option>Newest</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto ">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">Selectionner</th>
              <th className="py-2 px-4 text-left">No Commande</th>
              <th className="py-2 px-4 text-left">Produit</th>
              <th className="py-2 px-4 text-left">Bon de livraison</th>
              <th className="py-2 px-4 text-left">Quantité livrée</th>
              <th className="py-2 px-4 text-left">Valorisation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="flex py-2 md:pr-14 justify-center">
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
            <tr className="border-b ">
              <td className="flex py-2 md:pr-14 justify-center">
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
              <td className="flex py-2 md:pr-14 justify-center">
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
        <p className="text-sm text-gray-500">
          Showing data 1 to 8 of 256K entries
        </p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-md">&lt;</button>
          <button className="px-3 py-1 border rounded-md bg-indigo-600 text-white">
            1
          </button>
          <button className="px-3 py-1 border rounded-md">2</button>
          <button className="px-3 py-1 border rounded-md">3</button>
          <button className="px-3 py-1 border rounded-md">4</button>
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1 border rounded-md">40</button>
          <button className="px-3 py-1 border rounded-md">&gt;</button>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="bg-white rounded-xl shadow-md p-4 mt-6 text-center text-sm sm:text-base">
      Copyright © 2024 Neema. Tous droits réservés
    </div>
  </div>
);

export default SupplyTable;
