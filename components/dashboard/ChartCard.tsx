import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PieController,
  ArcElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  PieController,
  ArcElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

interface ChartCardProps {
  title: string;
  type: "line" | "bar" | "pie";
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor?: string;
      backgroundColor?: string | string[];
    }[];
  };
}

const ChartCard: React.FC<ChartCardProps> = ({ title, type, data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: false },
    },
    scales: type !== "pie" ? {
      y: { beginAtZero: true },
    } : undefined,
  };

  const ChartComponent = type === "line" ? Line : type === "bar" ? Bar : Pie;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg p-6 shadow">
      <h2 className="text-lg sm:text-xl font-bold text-purple-700 mb-4">
        {title}
      </h2>
      <ChartComponent data={data} options={options} />
    </div>
  );
};

export default ChartCard;