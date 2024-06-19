import React, { useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export const useMovies = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = async () => {
    if (previousSearch.current === search) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    movies,
    loading,
    getMovies,
  };
};
