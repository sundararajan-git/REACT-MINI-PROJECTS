import React, { useState } from "react";

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
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl mb-4">🔎 Searchable Filter List</h1>

      <div className="flex gap-2 mb-4 max-w-lg">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search..."
          className="flex-1 p-2 rounded border dark:bg-gray-800"
        />
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="p-2 rounded border dark:bg-gray-800"
        >
          {cats.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl">
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-500">No results</p>
        ) : (
          filtered.map((it) => (
            <div
              key={it.id}
              className="p-3 bg-white dark:bg-gray-800 rounded shadow"
            >
              <div className="flex justify-between">
                <span className="font-medium">{it.title}</span>
                <span className="text-sm text-gray-500">{it.category}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
