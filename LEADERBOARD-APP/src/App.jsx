import React, { useState, useEffect } from "react";

export default function App() {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("leaders") || "[]");
    setPlayers(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("leaders", JSON.stringify(players));
  }, [players]);

  const addPlayer = () => {
    if (!name || score === "") return;
    setPlayers((prev) =>
      [...prev, { name, score: Number(score) }].sort(
        (a, b) => b.score - a.score
      )
    );
    setName("");
    setScore("");
  };

  const reset = () => {
    setPlayers([]);
    localStorage.removeItem("leaders");
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl mb-4">🏆 Leaderboard</h1>

        <div className="flex gap-2 mb-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="flex-1 p-2 rounded border dark:bg-gray-800"
          />
          <input
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="Score"
            type="number"
            className="w-28 p-2 rounded border dark:bg-gray-800"
          />
          <button
            onClick={addPlayer}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
          {players.length === 0 ? (
            <p className="text-sm text-gray-500">No players yet</p>
          ) : (
            <ol className="space-y-2">
              {players.map((p, i) => (
                <li key={i} className="flex justify-between">
                  <span>
                    {i + 1}. {p.name}
                  </span>
                  <span className="font-mono">{p.score}</span>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={reset}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
