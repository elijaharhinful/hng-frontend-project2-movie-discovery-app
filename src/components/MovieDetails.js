import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidenav from "../components/Sidenav";
import DetailsMain from "../components/DetailsMain";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const options = {
          method: 'GET',
          url: `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_ACCESS_TOKEN,
          }
        };

        const response = await axios.request(options);
        setMovieDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch movie details. Please try again later.");
        setLoading(false);
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  
  return (
    <div className="movie-details">
      <Sidenav />
      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : movieDetails ? (
        <DetailsMain
          movie_title={movieDetails.title}
          release_date={movieDetails.release_date ? new Date(movieDetails.release_date).toISOString() : ""}
          runtime={movieDetails.runtime}
          overview={movieDetails.overview}
          poster_path={movieDetails.poster_path}
        />
      ) : null}
    </div>
  );
};

export default MovieDetails;
