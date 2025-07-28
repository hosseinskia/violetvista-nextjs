"use client";
import React, { useState, useEffect } from "react";
import DataTable from "@/components/dashboard/DataTable";
import Link from "next/link";
import Spinner from "@/components/dashboard/Spinner";

const orders = [
  {
    id: "1234",
    customer: "John Doe",
    date: "2025-07-28",
    total: "$150.00",
    status: "Completed",
    items: 3,
  },
  {
    id: "1235",
    customer: "Jane Smith",
    date: "2025-07-27",
    total: "$89.99",
    status: "Pending",
    items: 1,
  },
  {
    id: "1236",
    customer: "Bob Johnson",
    date: "2025-07-26",
    total: "$249.50",
    status: "Shipped",
    items: 2,
  },
  {
    id: "1237",
    customer: "Alice Brown",
    date: "2025-07-25",
    total: "$199.99",
    status: "Pending",
    items: 4,
  },
];

const columns = [
  { header: "Order ID", accessor: "id" },
  { header: "Customer", accessor: "customer" },
  { header: "Date", accessor: "date" },
  { header: "Total", accessor: "total" },
  { header: "Items", accessor: "items" },
  { header: "Status", accessor: "status" },
  {
    header: "Actions",
    accessor: "id",
    render: (id: string) => (
      <div className="flex gap-2">
        <Link
          href={`/dashboard/orders/${id}`}
          className="text-purple-600 hover:underline"
        >
          View
        </Link>
        <button className="text-blue-600 hover:underline">Edit</button>
        <button className="text-red-600 hover:underline">Cancel</button>
      </div>
    ),
  },
];

export default function Orders() {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const filteredOrders = orders.filter(
    (order) =>
      (order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.id.includes(search)) &&
      (statusFilter === "all" || order.status.toLowerCase() === statusFilter)
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-purple-700">
          Orders
        </h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="all">All Statuses</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
          </select>
        </div>
      </div>
      <DataTable data={filteredOrders} columns={columns} />
    </div>
  );
}
