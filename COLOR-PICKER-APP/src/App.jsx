import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#3498db");

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    alert(`${color} copied to clipboard!`);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 p-6">
      <h1 className="text-4xl mb-6">🎨 Color Picker App</h1>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-32 h-16 rounded-lg border-0 cursor-pointer mb-6"
      />

      <div
        className="w-32 h-32 rounded-lg mb-4 transition-all duration-300"
        style={{ backgroundColor: color }}
      ></div>

      <p className="mb-4 text-lg font-mono">{color}</p>

      <button
        onClick={handleCopy}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Copy HEX
      </button>
    </div>
  );
};

export default App;
