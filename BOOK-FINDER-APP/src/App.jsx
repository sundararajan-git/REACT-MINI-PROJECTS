import React, { useState } from "react";

export default function App() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    if (!q.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          q
        )}&maxResults=12`
      );
      const data = await res.json();
      setResults(data.items || []);
    } catch (err) {
      console.error(err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl mb-4">📚 Book Finder (Google Books)</h1>

      <div className="flex gap-2 mb-6 max-w-lg">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search books..."
          className="flex-1 p-2 rounded border dark:bg-gray-800"
        />
        <button
          onClick={search}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map((item) => {
          const info = item.volumeInfo;
          return (
            <div
              key={item.id}
              className="p-3 bg-white dark:bg-gray-800 rounded shadow"
            >
              <img
                src={info.imageLinks?.thumbnail || ""}
                alt={info.title}
                className="w-full h-40 object-contain mb-2"
              />
              <h3 className="font-medium">{info.title}</h3>
              <p className="text-sm text-gray-500">
                {(info.authors || []).join(", ")}
              </p>
              <a
                href={info.previewLink}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 text-sm mt-2 inline-block"
              >
                Preview
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
