import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  gradient: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, gradient, color }) => {
  return (
    <div className={`bg-gradient-to-tr ${gradient} rounded-lg p-6 shadow flex flex-col items-center`}>
      <span className={`text-xl sm:text-2xl font-semibold ${color} mb-2`}>{value}</span>
      <span className="text-gray-600 text-sm sm:text-base">{title}</span>
    </div>
  );
};

export default StatCard;