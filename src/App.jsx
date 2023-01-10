import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";
import { useEffect } from "react";

function App() {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
  );
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const getPokemons = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setPokemons(data?.results);
    setNext(data.next);
    setPrev(data.previous);
  };
  useEffect(() => {
    getPokemons();
  }, [url]);
  return (
    <div className="App">
      <h2>Pokémon !</h2>
      <div className="all_pokemons">
        {pokemons.map((pokemon) => {
          let img = String(pokemon.url).match(/\/(\d+)/)[1];
          return (
            <Card
              key={pokemon.url}
              name={pokemon.name}
              img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${img}.svg`}
            />
          );
        })}
        <div className="pages">
          {prev && (
            <button
              onClick={() => {
                setUrl(prev);
                setPage((i) => i-1);
              }}
            >
              Prev
            </button>
          )}
          <div>Page {page}</div>
          {next && (
            <button
              onClick={() => {
                setUrl(next);
                setPage((i) => i+1);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
