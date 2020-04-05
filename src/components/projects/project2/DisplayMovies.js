import React from "react";
import MovieCard from "./MovieCard";

export default function DisplayMovies(props) {
  const moviecards =
    props.length > 0 ? (
      props.movies.map(movie => (
        <li key={movie.imdbID}>
          <MovieCard movie={movie} />
        </li>
      ))
    ) : (
      <li key={props.movies.imdbID}>
        <MovieCard movie={props.movies} />
      </li>
    );

  return <ul>{moviecards}</ul>;
}
