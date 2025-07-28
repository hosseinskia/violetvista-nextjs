"use client";
import React, { JSX } from "react";
import GenericTable from "@/components/dashboard/GenericTable";
import Link from "next/link";

interface Order {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: string;
  items: number;
}

const orders: Order[] = [
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

export default function Orders() {
  return (
    <GenericTable
      title="Orders"
      data={orders}
      columns={[
        { header: "Order ID", accessor: "id" },
        { header: "Customer", accessor: "customer" },
        { header: "Date", accessor: "date" },
        { header: "Total", accessor: "total" },
        { header: "Items", accessor: "items" },
        { header: "Status", accessor: "status" },
        {
          header: "Actions",
          accessor: "id",
          render: ((value: string) => (
            <div className="flex gap-2">
              <Link
                href={`/dashboard/orders/${value}`}
                className="text-purple-600 hover:underline"
              >
                View
              </Link>
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Cancel</button>
            </div>
          )) as (value: string | number) => JSX.Element,
        },
      ]}
      searchPlaceholder="Search orders..."
      filterKey="status"
      filterOptions={[
        { value: "all", label: "All Statuses" },
        { value: "completed", label: "Completed" },
        { value: "pending", label: "Pending" },
        { value: "shipped", label: "Shipped" },
      ]}
      searchKeys={["customer", "id"]}
    />
  );
}
