import React from "react";

interface Column {
  header: string;
  accessor: string;
  render?: (value: any) => JSX.Element;
}

interface DataTableProps {
  data: any[];
  columns: Column[];
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg p-6 shadow overflow-x-auto">
      <table className="w-full text-sm sm:text-base">
        <thead>
          <tr className="border-b border-gray-200">
            {columns.map((column) => (
              <th key={column.header} className="text-left py-3 px-4 font-semibold text-purple-700">
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
                  {column.render ? column.render(row[column.accessor]) : row[column.accessor]}
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