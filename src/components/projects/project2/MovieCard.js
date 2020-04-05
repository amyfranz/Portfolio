import React from "react";

export default function MovieCard(props) {
  return (
    <div className="MovieCard">
      <div className="movie-heading">
        <h2 className="title">{`${props.movie.Title} - ${props.movie.Year}`}</h2>
        <h3 className="ratings">{props.movie.imdbRating} stars</h3>
      </div>
      <div className="movie-content">
        <div className="movie-poster">
          <img
            src={props.movie.Poster}
            className="poster"
            alt={`${props.movie.title} poster`}
          />
        </div>
        <div className="movie-info">
          <p className="plot"><b>Plot:</b> {props.movie.Plot}</p>
          <p className="directors"><b>Director:</b> {props.movie.Director}</p>
          <p className="actors"><b>Actors:</b> {props.movie.Actors}</p>
        </div>
      </div>
    </div>
  );
}
