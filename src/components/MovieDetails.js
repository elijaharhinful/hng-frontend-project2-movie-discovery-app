import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidenav from "../components/Sidenav";
import DetailsMain from "../components/DetailsMain";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const options = {
          method: "GET",
          url: `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          headers: {
            accept: "application/json",
            Authorization:
              process.env.TMDB_ACCESS_TOKEN },
        };
        const response = await axios.request(options);
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  // Convert release_date to standard UTC format
  const releaseDate = new Date(movieDetails.release_date);
  const releaseDateUTC = releaseDate.toISOString();
  
  return (
    <div className="movie-details">
      <Sidenav />
      <DetailsMain
        movie_title={movieDetails.title}
        release_date={releaseDateUTC}
        runtime={movieDetails.runtime}
        overview={movieDetails.overview}
        poster_path={movieDetails.poster_path}
      />
    </div>
  );
};

export default MovieDetails;
