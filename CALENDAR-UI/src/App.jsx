import { useState } from "react";
import "./App.css";
import { IoChevronBack } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";

function getMonthDays(year, month) {
  const date = new Date(year, month, 1);
  const days = [];
  const startDay = date.getDay();
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
    <div className="min-h-screen flex flex-col items-center justify-center w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="mb-8 flex items-center space-x-3">
        <LuCalendarDays className="text-2xl text-purple-600" />
        <h2 className="text-2xl font-medium">Calendar</h2>
      </div>
      <div className="max-w-md w-full  bg-white dark:bg-gray-800 p-8 rounded-md shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={prev}
            className="px-3 py-1.5 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <IoChevronBack />
          </button>
          <div className="text-center">
            <div className="text-lg font-semibold">
              {monthName} {view.year}
            </div>
            {/* <div className="text-sm text-gray-500 dark:text-gray-400">
              Click a date to select
            </div> */}
          </div>
          <button
            onClick={next}
            className="px-3 py-1.5 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <IoChevronBack className="rotate-180" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-sm">
          {days.map((d, i) => {
            const isToday = d && d.toDateString() === new Date().toDateString();

            return (
              <div
                key={i}
                onClick={() => d && selectDate(d)}
                className={`p-2 rounded transition 
              ${
                d
                  ? `cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-700 
                     ${
                       isToday
                         ? "bg-purple-500 text-white font-semibold"
                         : "bg-gray-50 dark:bg-gray-700"
                     }`
                  : ""
              }`}
              >
                {d ? d.getDate() : ""}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
