import React from "react";
import "./DetailsMain.css";

const DetailsMain = ({
  movie_title,
  release_date,
  runtime,
  overview,
  poster_path,
}) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <section className="details-main">
      <div className="vid-thumbnail">
        <img src={imageUrl} alt="video thumbnail"></img>
      </div>
      <div className="head">
        <div className="title">
          <h2>
            Title: <span data-testid="movie-title">{movie_title}</span>
          </h2>
        </div>
        <div className="date">
          <h2>
            Release date (UTC):
            <span data-testid="movie-release-date"> {release_date}</span>
          </h2>
        </div>
        <div className="runtime">
          <h2>
            Runtime: <span data-testid="movie-runtime">{runtime} minutes</span>
          </h2>
        </div>
      </div>
      <div className="overview">
        <h2>Overview</h2>
        <br></br>
        <p data-testid="movie-overview">{overview}</p>
      </div>
    </section>
  );
};

export default DetailsMain;
