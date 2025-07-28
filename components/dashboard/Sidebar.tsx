"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Users", path: "/dashboard/users" },
  { name: "Orders", path: "/dashboard/orders" },
  { name: "Products", path: "/dashboard/products" },
  { name: "Analytics", path: "/dashboard/analytics" },
  { name: "Settings", path: "/dashboard/settings" },
  { name: "Reports", path: "/dashboard/reports" },
  { name: "Notifications", path: "/dashboard/notifications" },
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0 sm:static sm:w-64`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-purple-700">VioletVista</h2>
        <button
          className="sm:hidden text-purple-700"
          onClick={toggleSidebar}
          aria-label="Close sidebar"
        >
          ✕
        </button>
      </div>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`block p-2 rounded-lg text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition ${
                  pathname === item.path ? "bg-purple-100 text-purple-700" : ""
                }`}
                onClick={() => isOpen && toggleSidebar()}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;