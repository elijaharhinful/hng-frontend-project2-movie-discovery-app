import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios";
import "./FeaturedMovie.css";
import right from "../components/assets/right.svg";

const FeaturedMovie = () => {
  const [featuredMovie, setFeaturedMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchFeaturedMovie = async () => {
      try {
        console.log(process.env.REACT_APP_TMDB_ACCESS_TOKEN);
        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_ACCESS_TOKEN,
          }
        };
        const response = await axios.request(options);
        setFeaturedMovie(response.data.results.slice(0, 10));
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch featured movies. Please try again later.");
        setLoading(false);
        console.error(error);
      }
    };

    fetchFeaturedMovie();
  }, []);

  return (
    <div className="featured-movies">
      <div className="head">
        <div className="featured-movie">
          <h3>Featured Movie</h3>
        </div>
        <div className="see-more">
          <Link to="/" className="see-more">
            <span className="text">See more </span>
            <span>
              <img src={right} alt="chevron-right"></img>
            </span>
          </Link>
        </div>
      </div>
      <div className="grid-cards">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          featuredMovie.map((movie) => (
            <MovieCard
              key={movie.id}
              movie_id={movie.id}
              title={movie.title}
              release_date={movie.release_date ? new Date(movie.release_date).toISOString() : ""}
              poster_path={movie.poster_path}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedMovie;
