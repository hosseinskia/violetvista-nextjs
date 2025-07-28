"use client";
import React, { useState, useEffect } from "react";
import ChartCard from "@/components/dashboard/ChartCard";
import Spinner from "@/components/dashboard/Spinner";

export default function Analytics() {
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState("6m");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const revenueData = {
    labels:
      timeRange === "6m"
        ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        : ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Revenue ($)",
        data:
          timeRange === "6m"
            ? [2000, 3000, 2500, 4000, 6000, 8400]
            : [1000, 1500, 1200, 2000],
        borderColor: "#6B46C1",
        backgroundColor: "rgba(107, 70, 193, 0.2)",
      },
    ],
  };

  const orderData = {
    labels:
      timeRange === "6m"
        ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        : ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Orders",
        data:
          timeRange === "6m" ? [50, 80, 60, 100, 120, 320] : [20, 30, 25, 40],
        borderColor: "#3182CE",
        backgroundColor: "rgba(49, 130, 206, 0.2)",
      },
    ],
  };

  const userActivityData = {
    labels: ["Active", "Inactive", "New"],
    datasets: [
      {
        label: "Users",
        data: [1000, 200, 50],
        backgroundColor: ["#6B46C1", "#3182CE", "#38A169"],
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-purple-700">
          Analytics
        </h1>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <option value="6m">Last 6 Months</option>
          <option value="1m">Last Month</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartCard title="Revenue Over Time" type="line" data={revenueData} />
        <ChartCard title="Order Volume" type="bar" data={orderData} />
      </div>
      <ChartCard title="User Activity" type="pie" data={userActivityData} />
    </div>
  );
}
