import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDI4MmMxM2M4N2U2NGE5YWJlMWZmMzAyYWI0MmNiOCIsInN1YiI6IjY0ZmYzMjRkZWIxNGZhMDEwMGU2ZGNiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yEAwo_uOAJCkwa_qqlMRJv_N6yv6Vj_0POYxBFONgmM",
          },
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

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      {/* Render other movie details */}
    </div>
  );
};

export default MovieDetails;
