"use client";
import React, { useState, useEffect } from "react";
import ChartCard from "@/components/dashboard/ChartCard";
import Spinner from "@/components/dashboard/Spinner";

export default function Reports() {
  const [isLoading, setIsLoading] = useState(true);
  const [reportType, setReportType] = useState("users");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const reportData = {
    users: {
      labels: ["Active", "Inactive", "New"],
      datasets: [
        {
          label: "Users",
          data: [1000, 200, 50],
          backgroundColor: ["#6B46C1", "#3182CE", "#38A169"],
        },
      ],
    },
    orders: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Orders",
          data: [50, 80, 60, 100, 120, 320],
          borderColor: "#3182CE",
          backgroundColor: "rgba(49, 130, 206, 0.2)",
        },
      ],
    },
    revenue: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Revenue ($)",
          data: [2000, 3000, 2500, 4000, 6000, 8400],
          borderColor: "#6B46C1",
          backgroundColor: "rgba(107, 70, 193, 0.2)",
        },
      ],
    },
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-purple-700">
          Reports
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Export Report
        </button>
      </div>
      <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg p-6 shadow mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-purple-700 mb-4">
          Generate Report
        </h2>
        <form className="space-y-4">
          <div>
            <label
              className="block text-gray-600 mb-1 text-sm sm:text-base"
              htmlFor="report-type"
            >
              Report Type
            </label>
            <select
              id="report-type"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="users">User Activity</option>
              <option value="orders">Order Summary</option>
              <option value="revenue">Revenue Breakdown</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition text-sm sm:text-base"
          >
            Generate
          </button>
        </form>
      </div>
      <ChartCard
        title={`${
          reportType.charAt(0).toUpperCase() + reportType.slice(1)
        } Report Preview`}
        type={reportType === "users" ? "pie" : "bar"}
        data={reportData[reportType as keyof typeof reportData]}
      />
    </div>
  );
}
