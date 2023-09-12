import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./MovieCard.css";
import favourite from "../components/assets/Favorite.svg";

const MovieCard = ({
  movie_id,
  poster_path,
  release_date,
  title,
}) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie_id}`);
  };


  return (
    <div className="movie-card" onClick={handleClick}>
      <Link to={`/movie/${movie_id}`} >
        <img className="fav" src={favourite} alt="Favorite" />
        <img className="poster" src={imageUrl} alt="Movie Poster" />
        <h2 data-testid="movie-title">{title}</h2>
        <p data-testid="movie-release-date">{release_date}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
