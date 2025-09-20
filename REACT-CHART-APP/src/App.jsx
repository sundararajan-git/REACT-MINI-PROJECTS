import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import "./App.css";
import { FaChartSimple } from "react-icons/fa6";

export default function App() {
  const [data] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 8, 14, 20, 16],
        backgroundColor: "#9810fa",
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Sales" },
    },
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex items-center justify-center gap-3 mb-6 w-full">
        <FaChartSimple className="text-3xl text-purple-600" />
        <h1 className="text-3xl font-semibold">React Chart (Chart.js)</h1>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow w-full max-w-[50%]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
