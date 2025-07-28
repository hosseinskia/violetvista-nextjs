"use client";
import React, { JSX } from "react";
import GenericTable from "@/components/dashboard/GenericTable";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: string;
  stock: number;
  category: string;
  sku: string;
}

const products: Product[] = [
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

export default function Products() {
  return (
    <GenericTable
      title="Products"
      data={products}
      columns={[
        { header: "Product ID", accessor: "id" },
        { header: "Name", accessor: "name" },
        { header: "Price", accessor: "price" },
        { header: "Stock", accessor: "stock" },
        { header: "Category", accessor: "category" },
        { header: "SKU", accessor: "sku" },
        {
          header: "Actions",
          accessor: "id",
          render: ((value: string) => (
            <div className="flex gap-2">
              <Link
                href={`/dashboard/products/${value}`}
                className="text-purple-600 hover:underline"
              >
                View
              </Link>
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Delete</button>
            </div>
          )) as (value: string | number) => JSX.Element,
        },
      ]}
      searchPlaceholder="Search products..."
      filterKey="category"
      filterOptions={[
        { value: "all", label: "All Categories" },
        { value: "electronics", label: "Electronics" },
        { value: "accessories", label: "Accessories" },
      ]}
      searchKeys={["name", "sku"]}
    />
  );
}
