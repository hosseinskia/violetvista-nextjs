import React from "react";
import { notFound } from "next/navigation";
import DetailsWrapper from "@/components/dashboard/DetailsWrapper";

const userData: { [key: string]: { id: string; name: string; email: string; role: string; status: string; lastLogin: string; registered: string; orders: number; totalSpent: string } } = {
  "1": { id: "1", name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", lastLogin: "2025-07-28 10:00 AM", registered: "2025-01-15", orders: 5, totalSpent: "$750.00" },
  "2": { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active", lastLogin: "2025-07-27 3:00 PM", registered: "2025-02-10", orders: 3, totalSpent: "$200.00" },
  "3": { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive", lastLogin: "2025-07-26 9:00 AM", registered: "2025-03-05", orders: 0, totalSpent: "$0.00" },
  "4": { id: "4", name: "Alice Brown", email: "alice@example.com", role: "Editor", status: "Active", lastLogin: "2025-07-28 11:00 AM", registered: "2025-04-20", orders: 2, totalSpent: "$300.00" },
};

export default async function UserDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = userData[id];

  if (!user) {
    notFound();
  }

  return (
    <DetailsWrapper>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-purple-700">
            User Details
          </h1>
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Edit User
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              Delete User
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg p-6 shadow">
          <h2 className="text-lg sm:text-xl font-bold text-purple-700 mb-4">
            {user.name}
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Role:</strong> {user.role}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Status:</strong> {user.status}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Last Login:</strong> {user.lastLogin}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Registered:</strong> {user.registered}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Orders Placed:</strong> {user.orders}
          </p>
          <p className="text-gray-700">
            <strong>Total Spent:</strong> {user.totalSpent}
          </p>
        </div>
      </div>
    </DetailsWrapper>
  );
}