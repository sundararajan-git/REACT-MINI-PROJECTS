import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
      <h1 className="text-3xl mb-4 text-purple-600 font-medium">
        {darkMode ? "🌙 Dark Mode" : "🌞 Light Mode"}
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-6 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg transition-colors duration-300 cursor-pointer"
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default App;
