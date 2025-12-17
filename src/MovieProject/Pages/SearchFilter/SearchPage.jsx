import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchPage.scss";
import "../Popular/Popular.scss";
import MovieModal from "../../Components/Modal/MovieModal";
import { searchMovies } from "../../API/ApiLogic";
import useSearchMovies from "../../Custom Hook/useSearchMovies";

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const { movies, loading } = useSearchMovies(query, searchMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

  return (
    <div className="search-page">
      <h2>Search results for: "{query}"</h2>

      {loading && <p className="loading">Loading...</p>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <div
            className="card"
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
          >
            <img
              src={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${movie.poster_path}`
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={movie.title || movie.name}
            />
            <h3>{movie.title || movie.name}</h3>
          </div>
        ))}
      </div>

      <MovieModal
        selectedMovie={selectedMovie}
        closeModal={() => setSelectedMovie(null)}
      />
    </div>
  );
};

export default SearchPage;