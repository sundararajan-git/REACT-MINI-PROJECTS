import { useState } from "react";
import "./App.css";
import { IoIosColorPalette } from "react-icons/io";

const App = () => {
  const [color, setColor] = useState("#8200db");

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    alert(`${color} copied to clipboard!`);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 p-6">
      <div className="flex items-center mb-8 gap-4">
        <IoIosColorPalette className="text-4xl text-purple-600" />
        <h1 className="text-4xl font-medium text-center">Color Picker</h1>
      </div>
      <input
        className="w-36 h-20 cursor-pointer dark:border-gray-700 mb-6 transition hover:scale-105"
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <div
        className="w-36 h-36 rounded-xl shadow-md border border-gray-300 dark:border-gray-700 mb-4 transition-all duration-500"
        style={{ backgroundColor: color }}
      ></div>

      <p
        className="mb-6 text-lg font-mono px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 
        text-gray-800 dark:text-gray-200 shadow-inner"
      >
        {color}
      </p>

      <button
        className="px-6 py-2 bg-purple-600 hover:bg-purple-700 
        text-white rounded-lg shadow-md transition-transform duration-300 
        active:scale-95"
        onClick={handleCopy}
      >
        Copy HEX
      </button>
    </div>
  );
};

export default App;
