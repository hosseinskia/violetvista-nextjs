import React from "react";

// Dashboard page with responsive grid layout and accessible data presentation
export default function Dashboard() {
  return (
    <div className="flex min-h-[100dvh] bg-gradient-to-br from-blue-100 to-purple-200 items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-4xl">
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-purple-700 mb-8">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="bg-gradient-to-tr from-purple-100 to-blue-200 rounded-lg p-6 shadow flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-semibold text-purple-700 mb-2">
              1,250
            </span>
            <span className="text-gray-600 text-sm sm:text-base">Users</span>
          </div>
          <div className="bg-gradient-to-tr from-blue-100 to-purple-200 rounded-lg p-6 shadow flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              320
            </span>
            <span className="text-gray-600 text-sm sm:text-base">Orders</span>
          </div>
          <div className="bg-gradient-to-tr from-purple-100 to-blue-200 rounded-lg p-6 shadow flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-semibold text-purple-700 mb-2">
              $8,400
            </span>
            <span className="text-gray-600 text-sm sm:text-base">Revenue</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg p-6 shadow">
          <h2 className="text-lg sm:text-xl font-bold text-purple-700 mb-4">
            Recent Activity
          </h2>
          <ul className="divide-y divide-gray-200" role="list">
            <li className="py-3 flex justify-between items-center">
              <span className="text-gray-700 text-sm sm:text-base">New user registered</span>
              <span className="text-xs text-gray-400">2 min ago</span>
            </li>
            <li className="py-3 flex justify-between items-center">
              <span className="text-gray-700 text-sm sm:text-base">Order #1234 placed</span>
              <span className="text-xs text-gray-400">10 min ago</span>
            </li>
            <li className="py-3 flex justify-between items-center">
              <span className="text-gray-700 text-sm sm:text-base">Revenue updated</span>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}