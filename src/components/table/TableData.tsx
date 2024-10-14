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
              <span className="whitespace-nowrap overflow-hidden text-ellipsis block">
                {column.header}
              </span>
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
                className={`py-4 px-4 text-customTableText whitespace-nowrap overflow-hidden text-ellipsis ${
                  column.key === "select" ? "pl-14" : ""
                }`}
              >
                {column.key === "select" ? (
                  <input
                    type="radio"
                    name="selection"
                    className="rounded-full h-2.5 w-2.5 text-customTableText"
                    checked={selectedRows.includes(row)}
                    onChange={() => onRowSelect(row)}
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