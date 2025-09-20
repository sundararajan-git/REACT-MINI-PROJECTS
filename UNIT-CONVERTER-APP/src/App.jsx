import { useState } from "react";
import "./App.css";
import { MdAcUnit } from "react-icons/md";

const conversions = {
  Length: {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    inch: 0.0254,
    foot: 0.3048,
  },
  Weight: { kilogram: 1, gram: 0.001, pound: 0.453592, ounce: 0.0283495 },
  Temperature: { Celsius: "C", Fahrenheit: "F", Kelvin: "K" },
};

export default function App() {
  const [type, setType] = useState("Length");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("kilometer");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const convert = () => {
    if (!value) return;
    if (type === "Temperature") {
      let val = parseFloat(value);
      let res = 0;
      if (fromUnit === "Celsius") {
        res = toUnit === "Fahrenheit" ? (val * 9) / 5 + 32 : val + 273.15;
      } else if (fromUnit === "Fahrenheit") {
        res =
          toUnit === "Celsius"
            ? ((val - 32) * 5) / 9
            : ((val - 32) * 5) / 9 + 273.15;
      } else {
        res =
          toUnit === "Celsius"
            ? val - 273.15
            : toUnit === "Fahrenheit"
            ? ((val - 273.15) * 9) / 5 + 32
            : val;
      }
      setResult(res.toFixed(2));
    } else {
      const base = value * conversions[type][fromUnit];
      const conv = base / conversions[type][toUnit];
      setResult(conv.toFixed(4));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="flex items-center justify-center gap-4 mb-6">
        <MdAcUnit className="text-3xl  text-purple-600" />
        <h1 className="text-3xl font-semibold">Unit Converter</h1>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-3 rounded border dark:bg-gray-900 dark:text-gray-100"
        >
          {Object.keys(conversions).map((t, i) => (
            <option key={i}>{t}</option>
          ))}
        </select>

        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value"
          className="p-3 rounded border dark:bg-gray-900 dark:text-gray-100"
        />

        <div className="flex gap-2">
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="flex-1 p-3 rounded border dark:bg-gray-900 dark:text-gray-100"
          >
            {type === "Temperature"
              ? ["Celsius", "Fahrenheit", "Kelvin"]
              : Object.keys(conversions[type]).map((u) => (
                  <option key={u}>{u}</option>
                ))}
          </select>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="flex-1 p-3 rounded border dark:bg-gray-900 dark:text-gray-100"
          >
            {type === "Temperature"
              ? ["Celsius", "Fahrenheit", "Kelvin"]
              : Object.keys(conversions[type]).map((u) => (
                  <option key={u}>{u}</option>
                ))}
          </select>
        </div>

        <button
          onClick={convert}
          className="px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-600 cursor-pointer transition-colors"
        >
          Convert
        </button>
        {result && (
          <p className="mt-2 text-xl font-mono">
            Result: {result} {toUnit}
          </p>
        )}
      </div>
    </div>
  );
}
