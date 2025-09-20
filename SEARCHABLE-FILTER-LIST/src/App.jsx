import { useState } from "react";
import "./App.css";
import { IoSearch } from "react-icons/io5";

const items = [
  { id: 1, title: "Apple iPhone 15", category: "Electronics" },
  { id: 2, title: "Banana", category: "Grocery" },
  { id: 3, title: "MacBook Pro", category: "Electronics" },
  { id: 4, title: "Bread", category: "Grocery" },
  { id: 5, title: "Running Shoes", category: "Fashion" },
];

export default function App() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const cats = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const filtered = items.filter(
    (i) =>
      (cat === "All" || i.category === cat) &&
      i.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center gap-8 p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex items-center justify-center gap-3 mb-6">
        <IoSearch className="text-4xl text-purple-500" />
        <h1 className="text-3xl font-bold tracking-wide">
          Searchable Filter List
        </h1>
      </div>

      <div className="flex gap-3 mb-6 w-full max-w-xl">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
        />
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
        >
          {cats.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-500 italic">No results found</p>
        ) : (
          filtered.map((it) => (
            <div
              key={it.id}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-center">
                <span className="text-md">{it.title}</span>
                <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                  {it.category}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
