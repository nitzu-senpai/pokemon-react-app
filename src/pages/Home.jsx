import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Card from "../components/Card";

const Home = () => {
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
    <>
    {
      <div className="all_pokemons">
        {pokemons.map((pokemon) => {
          let id = String(pokemon.url).match(/\/(\d+)/)[1];
          return (
            <Card
              id={id}
              key={pokemon.url}
              name={pokemon.name}
              img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
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
     }
    </>
  )
}

export default Home