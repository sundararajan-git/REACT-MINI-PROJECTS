import React, { useState } from "react";

function getMonthDays(year, month) {
  const date = new Date(year, month, 1);
  const days = [];
  const startDay = date.getDay(); // 0..6
  // add blanks
  for (let i = 0; i < startDay; i++) days.push(null);
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export default function App() {
  const today = new Date();
  const [view, setView] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const prev = () => {
    let m = view.month - 1,
      y = view.year;
    if (m < 0) {
      m = 11;
      y--;
    }
    setView({ year: y, month: m });
  };
  const next = () => {
    let m = view.month + 1,
      y = view.year;
    if (m > 11) {
      m = 0;
      y++;
    }
    setView({ year: y, month: m });
  };

  const days = getMonthDays(view.year, view.month);
  const monthName = new Date(view.year, view.month).toLocaleString("default", {
    month: "long",
  });

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={prev}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          >
            Prev
          </button>
          <div>
            <div className="text-lg font-bold text-center">
              {monthName} {view.year}
            </div>
            <div className="text-sm text-center text-gray-500">
              Click a date to select
            </div>
          </div>
          <button
            onClick={next}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          >
            Next
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="font-medium">
              {d}
            </div>
          ))}
          {days.map((d, i) => (
            <div
              key={i}
              className={`p-2 ${
                d
                  ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  : ""
              }`}
            >
              {d ? d.getDate() : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
