"use client";
import React, { useState, useEffect } from "react";
import StatCard from "@/components/dashboard/StatCard";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import ChartCard from "@/components/dashboard/ChartCard";
import Spinner from "@/components/dashboard/Spinner";

const stats = [
  {
    title: "Users",
    value: "1,250",
    gradient: "from-purple-100 to-blue-200",
    color: "text-purple-700",
  },
  {
    title: "Orders",
    value: "320",
    gradient: "from-blue-100 to-purple-200",
    color: "text-blue-700",
  },
  {
    title: "Revenue",
    value: "$8,400",
    gradient: "from-purple-100 to-blue-200",
    color: "text-purple-700",
  },
  {
    title: "Products",
    value: "150",
    gradient: "from-blue-100 to-purple-200",
    color: "text-blue-700",
  },
  {
    title: "Active Sessions",
    value: "85",
    gradient: "from-purple-100 to-blue-200",
    color: "text-purple-700",
  },
];

const activities = [
  { action: "New user registered: Jane Smith", time: "2 min ago" },
  { action: "Order #1234 placed by John Doe", time: "10 min ago" },
  { action: "Revenue updated: +$500", time: "1 hour ago" },
  { action: "Product #456 added: Smart Watch", time: "2 hours ago" },
  { action: "User Bob Johnson deactivated", time: "3 hours ago" },
];

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-purple-700">
          Dashboard
        </h1>
        <input
          type="text"
          placeholder="Search metrics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xs px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-8">
        {stats
          .filter((stat) =>
            stat.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              gradient={stat.gradient}
              color={stat.color}
            />
          ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ActivityFeed activities={activities} />
        <ChartCard
          title="User Growth"
          type="line"
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Users",
                data: [200, 400, 600, 800, 1000, 1250],
                borderColor: "#6B46C1",
                backgroundColor: "rgba(107, 70, 193, 0.2)",
              },
            ],
          }}
        />
      </div>
      <ChartCard
        title="Revenue by Category"
        type="pie"
        data={{
          labels: ["Electronics", "Accessories", "Clothing", "Other"],
          datasets: [
            {
              label: "Revenue ($)",
              data: [4000, 2500, 1500, 400],
              backgroundColor: ["#6B46C1", "#3182CE", "#38A169", "#D53F8C"],
            },
          ],
        }}
      />
    </div>
  );
}
