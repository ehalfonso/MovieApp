import React from "react";

const API_KEY = "872d2517";
export const searchMovies = async ({ search }) => {
  if (search === "") return null;
  console.log(search);
  try {
    const resp = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const data = await resp.json();
    //mapeo de la lista recibida, para romper con el contrato de la api
    const movies = data.Search;
    console.log(movies);
    return movies?.map((movie) => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      };
    });
  } catch (error) {
    throw new Error("Error searching movies");
  }
};
