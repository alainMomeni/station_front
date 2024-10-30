// src/components/TableForm.tsx

import React from 'react';
import { FaSave, FaArrowLeft } from 'react-icons/fa';
import { TableConfig } from '@components/types/tableRadio/tableRadio'; // Adjust the path as necessary

type Props = {
  config: TableConfig;
};

const TableForm: React.FC<Props> = ({ config }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{config.title}</h2>
        <div className="flex space-x-2">
          {config.actions.map((action) => (
            <button
              key={action.type}
              className="flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              {action.icon === 'save' && <FaSave className="mr-2" />}
              {action.icon === 'back' && <FaArrowLeft className="mr-2" />}
              {action.label}
            </button>
          ))}
        </div>
      </div>

      <table className="w-full table-auto">
        <thead>
          <tr className="text-left border-b">
            {config.columns.map((column) => (
              <th key={column.key} className="px-4 py-2 font-medium">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {config.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              {config.columns.map((column) => (
                <td key={column.key} className="px-4 py-2">
                  {typeof row[column.key] === 'boolean' ? (
                    <span
                      className={`w-4 h-4 inline-block rounded-full ${
                        row[column.key] ? 'bg-purple-500' : 'bg-gray-200'
                      }`}
                    ></span>
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableForm;
