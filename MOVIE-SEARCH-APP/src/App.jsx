import { useState } from "react";
import "./App.css";
import { FaSearch, FaStar } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { MdLocalMovies } from "react-icons/md";

const App = () => {
  const API_KEY = import.meta.env.VITE_OMDB_MOVIE_API;
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchMovie = async () => {
    if (!query) return setError("Please enter a movie name!");
    setError("");
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`
      );
      const data = await res.json();
      if (data.Response === "True") {
        setMovie(data);
      } else {
        setMovie(null);
        setError(data.Error);
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-white">
      <div className="max-w-xl mx-auto p-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <MdLocalMovies className="text-3xl" />
          <h1 className="text-3xl font-medium text-purple-600">
            Movie Search App
          </h1>
        </div>

        <div className="flex items-center justify-center gap-2 mb-4">
          <input
            type="text"
            value={query}
            placeholder="Enter movie name..."
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={searchMovie}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2 cursor-pointer"
          >
            {loading ? <ImSpinner2 className="animate-spin" /> : <FaSearch />}
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {movie && !loading && (
          <div className="mt-6 p-4 border border-gray-200 rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-semibold mb-2">
              {movie.Title}{" "}
              <span className="text-gray-500">({movie.Year})</span>
            </h2>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="mx-auto mb-4 w-48 rounded-md"
            />
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p>
              <strong>Plot:</strong> {movie.Plot}
            </p>
            <p className="flex items-center justify-center mt-2 gap-2">
              <strong>IMDB Rating:</strong>{" "}
              <FaStar className="text-yellow-400" /> {movie.imdbRating}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default App;
