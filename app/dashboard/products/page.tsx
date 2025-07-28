"use client";
import React, { useState, useEffect } from "react";
import DataTable from "@/components/dashboard/DataTable";
import Link from "next/link";
import Spinner from "@/components/dashboard/Spinner";

const products = [
  {
    id: "456",
    name: "Smart Phone",
    price: "$50.00",
    stock: 100,
    category: "Electronics",
    sku: "SP-456",
  },
  {
    id: "457",
    name: "Leather Wallet",
    price: "$50.00",
    stock: 50,
    category: "Accessories",
    sku: "LW-457",
  },
  {
    id: "458",
    name: "Wireless Headphones",
    price: "$89.99",
    stock: 75,
    category: "Electronics",
    sku: "WH-458",
  },
  {
    id: "459",
    name: "Smart Watch",
    price: "$199.99",
    stock: 30,
    category: "Electronics",
    sku: "SW-459",
  },
];

const columns = [
  { header: "Product ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Price", accessor: "price" },
  { header: "Stock", accessor: "stock" },
  { header: "Category", accessor: "category" },
  { header: "SKU", accessor: "sku" },
  {
    header: "Actions",
    accessor: "id",
    render: (id: string) => (
      <div className="flex gap-2">
        <Link
          href={`/dashboard/products/${id}`}
          className="text-purple-600 hover:underline"
        >
          View
        </Link>
        <button className="text-blue-600 hover:underline">Edit</button>
        <button className="text-red-600 hover:underline">Delete</button>
      </div>
    ),
  },
];

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const filteredProducts = products.filter(
    (product) =>
      (product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.sku.toLowerCase().includes(search.toLowerCase())) &&
      (categoryFilter === "all" ||
        product.category.toLowerCase() === categoryFilter)
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-purple-700">
          Products
        </h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
      </div>
      <DataTable data={filteredProducts} columns={columns} />
    </div>
  );
}
