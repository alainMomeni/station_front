import React from 'react';
import { Column, TableRow, TableDataProps } from "../types/table/tableTypes";

interface ExtendedTableDataProps extends TableDataProps {
  onRowSelect: (row: TableRow) => void;
  selectedRows: TableRow[];
}

const TableData: React.FC<ExtendedTableDataProps> = ({ columns, data, onRowSelect, selectedRows }) => (
  <div className="overflow-x-auto">
    <table className="w-full min-w-max text-left">
      <thead>
        <tr className="border-b">
          {columns.map((column: Column, index: number) => (
            <th key={index} className="py-2 px-4 font-bold">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: TableRow, rowIndex: number) => (
          <tr key={rowIndex} className="border-b">
            {columns.map((column: Column, colIndex: number) => (
              <td
                key={colIndex}
                className={`py-4 px-4 text-customTableText ${column.key === "select" ? "pl-12" : ""}`}
              >
                {column.key === "select" ? (
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row)}
                    onChange={() => onRowSelect(row)}
                    className="h-5 w-5"
                  />
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

export default TableData;
