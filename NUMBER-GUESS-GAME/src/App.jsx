import React, { useState } from "react";

export default function App() {
  const [secret, setSecret] = useState(
    () => Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [msg, setMsg] = useState("Guess a number between 1 and 100");
  const [attempts, setAttempts] = useState(0);

  const check = (e) => {
    e.preventDefault();
    const g = Number(guess);
    if (!g || g < 1 || g > 100) {
      setMsg("Enter a valid number 1-100");
      return;
    }
    setAttempts((a) => a + 1);
    if (g === secret) {
      setMsg(`Correct! It was ${secret}. Attempts: ${attempts + 1}`);
    } else if (g < secret) setMsg("Too low!");
    else setMsg("Too high!");
  };

  const reset = () => {
    setSecret(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMsg("Guess a number between 1 and 100");
    setAttempts(0);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h1 className="text-2xl mb-2">🔢 Number Guessing Game</h1>
        <p className="mb-4 text-sm text-gray-500">{msg}</p>

        <form onSubmit={check} className="flex gap-2 mb-4">
          <input
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            type="number"
            min="1"
            max="100"
            className="flex-1 p-2 rounded border dark:bg-gray-700"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Guess
          </button>
        </form>

        <div className="flex justify-between">
          <p>Attempts: {attempts}</p>
          <button
            onClick={reset}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
