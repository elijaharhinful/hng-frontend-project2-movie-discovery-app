import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios";
import "../components/FeaturedMovie.css";
import play from "../components/assets/Play.svg";

const FeaturedMovie = () => {
  const [featuredMovie, setFeaturedMovie] = useState([]);
  useEffect(() => {
    const fetchFeaturedMovie = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
          headers: {
            accept: "application/json",
            Authorization: "Bearer "+ process.env.TMDB_ACCESS_TOKEN
          },
        };
        const response = await axios.request(options);
        setFeaturedMovie(response.data.results.slice(0, 10));
      } catch (error) {
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
          <Link to="/">
            See more
            <span>
              <img src={play} alt="chevron-right"></img>
            </span>
          </Link>
        </div>
      </div>
      <div className="grid-cards">
        {featuredMovie ? (
          featuredMovie.map((movie) => (
            <MovieCard
              key={movie.id}
              movie_id={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              // runtime={movie.runtime}
              // overview={movie.overview}
              poster_path={movie.poster_path}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedMovie;
