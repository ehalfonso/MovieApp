import { Movies } from "./components";
import { useMovies, useSearch } from "./hooks";

import "./App.css";

function App() {
  const { search, error, updateSearch } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search });

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  const handleChance = (e) => {
    const newQuery = e.target.value;
    if (newQuery.startsWith(" ")) return;
    updateSearch(e.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            value={search}
            name="search"
            placeholder="Avengers,Strat Wars..."
            onChange={handleChance}
          />

          <button type="submit">Shearch</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
/**
 * Cuando se utiliza un formularios,no controlado
 * 
 * const handleSubmit = (e) => {
    e.preventDefault();
    //para leer mas de un input y tener todos los valores en un objeto
    //EJEMPLO SI TENEMOS 15 INPUT YA NO TENEMOS QUE LEERLOS UNO A UNO, SOLO DESTRUCTURAMOS EL OBJETO.
    const fields = Object.fromEntries(new FormData(e.target));
    console.log(fields);

    /* para obtener un solo campo de un formulario
      const field=new FormData(e.target);
      const query=field.get('search');//se pasa por parametro el nombre del campo que se desea buscar 
      console.log(query);
      
  };
 */
