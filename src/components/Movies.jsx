import React from "react";
import { ListMovies } from "./ListMovies";
import { NoItem } from "./NoItem";

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListMovies movies={movies} /> : <NoItem />;
};
