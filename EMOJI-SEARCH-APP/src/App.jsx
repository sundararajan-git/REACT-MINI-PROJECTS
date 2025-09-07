import { useState } from "react";

const emojis = [
  { symbol: "😀", name: "grinning face" },
  { symbol: "😂", name: "face with tears of joy" },
  { symbol: "😍", name: "smiling face with heart-eyes" },
  { symbol: "😎", name: "smiling face with sunglasses" },
  { symbol: "👍", name: "thumbs up" },
  { symbol: "🙏", name: "folded hands" },
  { symbol: "🔥", name: "fire" },
  { symbol: "🌟", name: "glowing star" },
  { symbol: "💯", name: "hundred points" },
  { symbol: "🎉", name: "party popper" },
];

const App = () => {
  const [search, setSearch] = useState("");

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopy = (symbol) => {
    navigator.clipboard.writeText(symbol);
    alert(`${symbol} copied to clipboard!`);
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 p-6">
      <h1 className="text-4xl text-center mb-6">Emoji Search App</h1>
      <input
        type="text"
        placeholder="Search emoji..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      />

      <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
        {filteredEmojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() => handleCopy(emoji.symbol)}
            className="p-4 text-3xl rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {emoji.symbol}
            <p className="text-xs mt-1">{emoji.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
