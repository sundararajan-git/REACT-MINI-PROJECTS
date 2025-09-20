import { useState, useEffect } from "react";
import "./App.css";
import { GoClockFill } from "react-icons/go";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <GoClockFill className="text-2xl text-gray-900" />
        <h2 className="text-purple-600 font-semibold text-2xl">
          Digital Clock
        </h2>
      </div>
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl  text-center">
        <h1 className="text-6xl font-mono tracking-widest drop-shadow-lg">
          {time
            .toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })
            .toUpperCase()}
        </h1>
      </div>
    </div>
  );
};

export default App;
