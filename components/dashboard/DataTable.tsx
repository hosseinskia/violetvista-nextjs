import React, { JSX } from "react";

export interface Column<T, K extends keyof T = keyof T> {
  header: string;
  accessor: K;
  render?: (value: T[K]) => JSX.Element;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
}

const DataTable = <T extends object>({ data, columns }: DataTableProps<T>) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg p-6 shadow overflow-x-auto">
      <table className="w-full text-sm sm:text-base">
        <thead>
          <tr className="border-b border-gray-200">
            {columns.map((column) => (
              <th
                key={column.header}
                className="text-left py-3 px-4 font-semibold text-purple-700"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-200">
              {columns.map((column) => (
                <td key={column.header} className="py-3 px-4 text-gray-700">
                  {column.render
                    ? column.render(row[column.accessor])
                    : String(row[column.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;