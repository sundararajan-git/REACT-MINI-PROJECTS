import React, { useState, useEffect } from "react";

const icons = ["🍎", "🍌", "🍇", "🍓", "🍑", "🍍"]; // pairs
const createDeck = () => {
  const deck = [...icons, ...icons].map((v, i) => ({
    id: i + "" + v,
    val: v,
    flipped: false,
    matched: false,
  }));
  return shuffle(deck);
};
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

export default function App() {
  const [deck, setDeck] = useState(createDeck());
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    if (first && second) {
      setLock(true);
      if (first.val === second.val) {
        setDeck((d) =>
          d.map((card) =>
            card.val === first.val ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => {
          setDeck((d) =>
            d.map((card) =>
              card.id === first.id || card.id === second.id
                ? { ...card, flipped: false }
                : card
            )
          );
          resetTurn();
        }, 800);
      }
    }
  }, [second]);

  const flip = (card) => {
    if (lock || card.flipped || card.matched) return;
    setDeck((d) =>
      d.map((c) => (c.id === card.id ? { ...c, flipped: true } : c))
    );
    if (!first) setFirst(card);
    else setSecond(card);
  };

  const resetTurn = () => {
    setFirst(null);
    setSecond(null);
    setLock(false);
  };

  const resetGame = () => {
    setDeck(createDeck());
    setFirst(null);
    setSecond(null);
    setLock(false);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl mb-4">🧩 Memory Match</h1>
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        {deck.map((card) => (
          <button
            key={card.id}
            onClick={() => flip(card)}
            className={`w-20 h-20 flex items-center justify-center rounded text-2xl ${
              card.flipped || card.matched
                ? "bg-white dark:bg-gray-800"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
          >
            {card.flipped || card.matched ? card.val : " "}
          </button>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        <button
          onClick={resetGame}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
