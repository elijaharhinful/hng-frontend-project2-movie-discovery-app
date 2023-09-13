import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios";
import "./FeaturedMovie.css";
import right from "../components/assets/right.svg";

const FeaturedMovie = () => {
  const [featuredMovie, setFeaturedMovie] = useState([]);
  useEffect(() => {
    const fetchFeaturedMovie = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://api.themoviedb.org/3/movie/top_rated",
          headers: {
            accept: "application/json",
            Authorization: process.env.TMDB_ACCESS_TOKEN || "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDI4MmMxM2M4N2U2NGE5YWJlMWZmMzAyYWI0MmNiOCIsInN1YiI6IjY0ZmYzMjRkZWIxNGZhMDEwMGU2ZGNiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yEAwo_uOAJCkwa_qqlMRJv_N6yv6Vj_0POYxBFONgmM",
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
          <Link to="/" className="see-more">
            <span className="text">See more </span> 
            <span>
              <img src={right} alt="chevron-right"></img>
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
          <p className="loading">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedMovie;
