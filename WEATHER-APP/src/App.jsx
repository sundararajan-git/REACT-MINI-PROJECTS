import { useState } from "react";
import {
  FaTemperatureHigh,
  FaCloud,
  FaSun,
  FaSmog,
  FaCloudRain,
  FaSnowflake,
  FaWind,
} from "react-icons/fa";
import "./App.css";
import { FaRegGrinBeamSweat } from "react-icons/fa";

const App = () => {
  const key = import.meta.env.VITE_WEATHER_API_KEY;
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const date = new Date();

  const searchHandle = async () => {
    if (!search.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}`
      );
      const jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        setError(jsonResponse.message);
        setWeather(null);
      } else {
        setWeather({
          name: jsonResponse.name,
          temp: (jsonResponse.main.temp - 273.15).toFixed(1),
          main: jsonResponse.weather[0].main,
          description: jsonResponse.weather[0].description,
        });
        setError(null);
      }
    } catch (err) {
      setError("Failed to fetch weather.");
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clouds":
        return <FaCloud className="text-purple-600 text-4xl" />;
      case "Clear":
        return <FaSun className="text-yellow-500 text-4xl" />;
      case "Haze":
        return <FaSmog className="text-gray-500 text-4xl" />;
      case "Rain":
        return <FaCloudRain className="text-blue-500 text-4xl" />;
      case "Snow":
        return <FaSnowflake className="text-blue-300 text-4xl" />;
      case "Wind":
        return <FaWind className="text-green-500 text-4xl" />;
      default:
        return <FaCloud className="text-gray-400 text-4xl" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="flex items-center justify-center  gap-4">
        <FaRegGrinBeamSweat className="text-3xl text-purple-600" />
        <h1 className="text-3xl font-bold">Weather App</h1>
      </div>

      <div className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter your location..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button
          type="button"
          onClick={searchHandle}
          className="px-4 py-2 bg-purple-600 cursor-pointer hover:bg-purple-700 text-white font-medium rounded-lg transition"
        >
          Search
        </button>
      </div>

      <div className="w-full max-w-md mt-4">
        {isLoading ? (
          <p className="text-purple-600 font-medium animate-pulse">
            Loading...
          </p>
        ) : error ? (
          <p className="text-red-500 font-medium">{error}</p>
        ) : weather ? (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
            {getWeatherIcon(weather.main)}
            <p className="text-xl font-semibold">{weather.name}</p>
            <p className="flex items-center gap-2 text-lg">
              <FaTemperatureHigh className="text-purple-600" />
              {weather.temp}°C
            </p>
            <p className="capitalize">{weather.description}</p>
            <p className="text-sm text-gray-500">{date.toLocaleDateString()}</p>
          </div>
        ) : (
          <p className="text-gray-500">Enter a city to see the weather 🌍</p>
        )}
      </div>
    </div>
  );
};

export default App;
