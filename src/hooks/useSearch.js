import { useEffect, useRef, useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);
  const updateSearch = (value) => {
    setSearch(value);
  };
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === " ") {
      setError("NO se puede buscar una pelicula vacia");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con un numero");
      return;
    }
    if (search.length < 3) {
      setError("No se puede buscar una pelicula con menos de 3 caracteres");
      return;
    }
  }, [search]);

  return {
    search,
    error,
    updateSearch,
  };
};
