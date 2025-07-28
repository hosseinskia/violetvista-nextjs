"use client";
import React, { useState, useEffect } from "react";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import Spinner from "@/components/dashboard/Spinner";

const notifications = [
  {
    action: "System maintenance scheduled for 2025-07-29",
    time: "1 hour ago",
    type: "system",
  },
  {
    action: "New user feedback received from Jane Smith",
    time: "3 hours ago",
    type: "feedback",
  },
  {
    action: "Order #1237 delayed due to shipping issues",
    time: "5 hours ago",
    type: "order",
  },
  {
    action: "Product #459 stock low (30 units)",
    time: "1 day ago",
    type: "product",
  },
  {
    action: "User Alice Brown upgraded to Editor",
    time: "2 days ago",
    type: "user",
  },
];

export default function Notifications() {
  const [isLoading, setIsLoading] = useState(true);
  const [typeFilter, setTypeFilter] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const filteredNotifications = notifications.filter(
    (notification) => typeFilter === "all" || notification.type === typeFilter
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-purple-700">
          Notifications
        </h1>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <option value="all">All Types</option>
          <option value="system">System</option>
          <option value="feedback">Feedback</option>
          <option value="order">Order</option>
          <option value="product">Product</option>
          <option value="user">User</option>
        </select>
      </div>
      <ActivityFeed
        activities={filteredNotifications.map((n) => ({
          action: n.action,
          time: n.time,
        }))}
      />
    </div>
  );
}
