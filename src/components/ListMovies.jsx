import React from "react";
import { ItemMovies } from "./ItemMovies";

export const ListMovies = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id} className="movie">
          <ItemMovies movie={movie} />
        </li>
      ))}
    </ul>
  );
};
