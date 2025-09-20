import { useState, useEffect, useRef } from "react";
import "./App.css";
import { MdTimer } from "react-icons/md";

export default function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const timerRef = useRef(null);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(isBreak ? 5 * 60 : 25 * 60);
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsBreak(!isBreak);
            return isBreak ? 25 * 60 : 5 * 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, isBreak]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 p-6">
      <div className="flex items-center gap-3 mb-8">
        <MdTimer className="text-3xl text-purple-600" />
        <h1 className="text-3xl font-bold">Pomodoro Timer</h1>
      </div>

      <div className="text-6xl font-mono mb-6">{formatTime(timeLeft)}</div>
      <p className="mb-6 text-xl">{isBreak ? "Break Time!" : "Focus Time!"}</p>

      <div className="flex gap-4">
        <button
          onClick={toggleTimer}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
