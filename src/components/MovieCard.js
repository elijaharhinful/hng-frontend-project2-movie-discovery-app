import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";
import favourite from "../components/assets/Favorite.svg";

const MovieCard = ({ movie_id, poster_path, release_date, title }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="movie-card" data-testid="movie-card">
      <Link to={`/movie/${movie_id}`} className="card-link">
        <img className="fav" src={favourite} alt="Favorite" />
        <img
          data-testid="movie-poster"
          className="poster"
          src={imageUrl}
          alt="Movie Poster"
        />
        <h2 data-testid="movie-title">{title}</h2>
        <p data-testid="movie-release-date">{release_date}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
