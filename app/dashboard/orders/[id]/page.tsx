import React from "react";
import { notFound } from "next/navigation";
import DetailsWrapper from "@/components/dashboard/DetailsWrapper";

const orderData: { [key: string]: { id: string; customer: string; date: string; total: string; status: string; items: { name: string; quantity: number; price: string }[]; shippingAddress: string; paymentMethod: string } } = {
  "1234": {
    id: "1234",
    customer: "John Doe",
    date: "2025-07-28",
    total: "$150.00",
    status: "Completed",
    items: [
      { name: "Product A", quantity: 2, price: "$50.00" },
      { name: "Product B", quantity: 1, price: "$50.00" },
    ],
    shippingAddress: "123 Main St, City, Country",
    paymentMethod: "Credit Card",
  },
  "1235": {
    id: "1235",
    customer: "Jane Smith",
    date: "2025-07-27",
    total: "$89.99",
    status: "Pending",
    items: [{ name: "Product C", quantity: 1, price: "$89.99" }],
    shippingAddress: "456 Oak Ave, City, Country",
    paymentMethod: "PayPal",
  },
  "1236": {
    id: "1236",
    customer: "Bob Johnson",
    date: "2025-07-26",
    total: "$249.50",
    status: "Shipped",
    items: [{ name: "Product D", quantity: 3, price: "$83.17" }],
    shippingAddress: "789 Pine Rd, City, Country",
    paymentMethod: "Credit Card",
  },
  "1237": {
    id: "1237",
    customer: "Alice Brown",
    date: "2025-07-25",
    total: "$199.99",
    status: "Pending",
    items: [
      { name: "Product E", quantity: 2, price: "$75.00" },
      { name: "Product F", quantity: 1, price: "$49.99" },
    ],
    shippingAddress: "101 Elm St, City, Country",
    paymentMethod: "Bank Transfer",
  },
};

export default async function OrderDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = orderData[id];

  if (!order) {
    notFound();
  }

  return (
    <DetailsWrapper>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-purple-700">
            Order #{order.id}
          </h1>
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Update Status
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              Cancel Order
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg p-6 shadow">
          <h2 className="text-lg sm:text-xl font-bold text-purple-700 mb-4">
            Order Details
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Customer:</strong> {order.customer}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Date:</strong> {order.date}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Total:</strong> {order.total}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Status:</strong> {order.status}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Shipping Address:</strong> {order.shippingAddress}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Payment Method:</strong> {order.paymentMethod}
          </p>
          <h3 className="text-lg font-semibold text-purple-600 mb-2">Items</h3>
          <ul className="divide-y divide-gray-200">
            {order.items.map((item, index) => (
              <li key={index} className="py-2 flex justify-between">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DetailsWrapper>
  );
}