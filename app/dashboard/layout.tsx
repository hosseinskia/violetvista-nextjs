"use client";
import React, { useState, Suspense } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Spinner from "@/components/dashboard/Spinner";
import ErrorBoundary from "@/components/dashboard/ErrorBoundary";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex min-h-[100dvh] bg-gradient-to-br from-blue-100 to-purple-200">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
        <button
          className="sm:hidden bg-purple-700 text-white p-2 rounded-lg mb-4"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? "Close" : "Menu"}
        </button>
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-6xl mx-auto">
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              {children}
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
}