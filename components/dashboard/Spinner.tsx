import React from "react";

const Spinner: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center h-64"
      role="status"
      aria-label="Loading"
    >
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-purple-200 rounded-full animate-spin border-t-purple-700"></div>
        <div className="absolute inset-2 border-4 border-blue-200 rounded-full animate-spin animate-reverse border-t-blue-700"></div>
      </div>
      <span className="ml-4 text-purple-700 text-lg font-semibold">
        Loading...
      </span>
    </div>
  );
};

export default Spinner;