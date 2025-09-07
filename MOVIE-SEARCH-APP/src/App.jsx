import { useState } from "react";

const App = () => {
  const API_KEY = import.meta.env.VITE_OMDB_MOVIE_API;
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  const searchMovie = async () => {
    if (!query) return;
    setError("");
    setMovie(null);

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        setMovie(data);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError("Something went wrong. Try again!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎬 Movie Search App</h1>

      <input
        type="text"
        value={query}
        placeholder="Enter movie name..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovie}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {movie && (
        <div style={{ marginTop: "20px" }}>
          <h2>
            {movie.Title} ({movie.Year})
          </h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
