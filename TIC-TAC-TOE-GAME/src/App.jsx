import React, { useState } from "react";

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(i) {
    if (board[i] || winner) return;
    const nb = board.slice();
    nb[i] = xTurn ? "X" : "O";
    setBoard(nb);
    setXTurn(!xTurn);
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setXTurn(true);
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center">
      <h1 className="text-3xl mb-4">🎮 Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-20 h-20 bg-white dark:bg-gray-800 flex items-center justify-center text-2xl font-bold rounded"
          >
            {cell}
          </button>
        ))}
      </div>

      <p className="mt-4">
        {winner ? `Winner: ${winner}` : `Next: ${xTurn ? "X" : "O"}`}
      </p>

      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Reset
      </button>
    </div>
  );
}

function calculateWinner(b) {
  for (let [a, c, d] of lines) {
    if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a];
  }
  return null;
}
