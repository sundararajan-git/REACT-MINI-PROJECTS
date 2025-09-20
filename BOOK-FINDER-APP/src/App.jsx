import { useState } from "react";
import { FaBookReader } from "react-icons/fa";
import "./App.css";

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
      <div className="flex items-center gap-4 ">
        <FaBookReader className="text-3xl text-purple-600 dark:text-purple-400" />
        <h1 className="text-3xl font-semibold text-center">Book Finder</h1>
      </div>

      <div className="flex gap-2 mb-8 max-w-xl mx-auto">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search books..."
          className="flex-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                 dark:bg-gray-800 dark:placeholder-gray-400 focus:ring-2 
                 focus:ring-purple-500 focus:outline-none"
        />
        <button
          onClick={search}
          className="px-5 py-2 bg-purple-600 hover:bg-purple-700 
                 text-white font-medium rounded-md transition cursor-pointer"
        >
          Search
        </button>
      </div>

      {loading && (
        <p className="text-center text-gray-500 dark:text-gray-400 animate-pulse m-6">
          Loading books...
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.map((item) => {
          const info = item.volumeInfo;
          return (
            <div
              key={item.id}
              className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg 
                     transition flex flex-col"
            >
              <img
                src={info.imageLinks?.thumbnail || ""}
                alt={info.title}
                className="w-full h-48 object-contain mb-3 rounded"
              />
              <h3 className="font-medium text-lg line-clamp-2">{info.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {(info.authors || []).join(", ")}
              </p>
              <a
                href={info.previewLink}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-block text-sm font-medium text-purple-600 dark:text-purple-400 
                       hover:underline"
              >
                Preview →
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
