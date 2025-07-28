"use client";
import React, { useState, useEffect } from "react";
import DataTable, { Column } from "./DataTable";
import Spinner from "./Spinner";

interface GenericTableProps<T> {
  title: string;
  data: T[];
  columns: Column<T>[];
  searchPlaceholder: string;
  filterKey: keyof T;
  filterOptions: { value: string; label: string }[];
  searchKeys: (keyof T)[];
}

const GenericTable = <T extends object>({
  title,
  data,
  columns,
  searchPlaceholder,
  filterKey,
  filterOptions,
  searchKeys,
}: GenericTableProps<T>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const filteredData = data.filter((item) =>
    searchKeys.some((key) =>
      String(item[key]).toLowerCase().includes(search.toLowerCase())
    ) && (filter === "all" || String(item[filterKey]).toLowerCase() === filter)
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-purple-700">
          {title}
        </h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <DataTable data={filteredData} columns={columns} />
    </div>
  );
};

export default GenericTable;
