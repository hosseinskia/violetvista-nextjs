"use client";
import React, { useState, useEffect } from "react";
import DataTable, { Column } from "@/components/dashboard/DataTable";
import Link from "next/link";
import Spinner from "@/components/dashboard/Spinner";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  registered: string;
}

const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    registered: "2025-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
    registered: "2025-02-10",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "Inactive",
    registered: "2025-03-05",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Editor",
    status: "Active",
    registered: "2025-04-20",
  },
];

const columns: Column<User>[] = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Role", accessor: "role" },
  { header: "Status", accessor: "status" },
  { header: "Registered", accessor: "registered" },
  {
    header: "Actions",
    accessor: "id",
    render: (value: string) => (
      <div className="flex gap-2">
        <Link
          href={`/dashboard/users/${value}`}
          className="text-purple-600 hover:underline"
        >
          View
        </Link>
        <button className="text-blue-600 hover:underline">Edit</button>
        <button className="text-red-600 hover:underline">Delete</button>
      </div>
    ),
  },
];

export default function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())) &&
      (roleFilter === "all" || user.role.toLowerCase() === roleFilter)
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-purple-700">
          Users
        </h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="editor">Editor</option>
          </select>
        </div>
      </div>
      <DataTable data={filteredUsers} columns={columns} />
    </div>
  );
}