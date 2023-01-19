import React from "react";
import { useMemo } from "react";
import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PokeDetails from "../components/PokeDetails";
import "../Pokemon.css";
const Pokemon = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let url = "https://pokeapi.co/api/v2/pokemon/" + id;
  const [data, setData] = useState();
  const getPokemonDetails = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };
  const memoTest = useMemo(() => getPokemonDetails(url), [url]);
  useEffect(() => {
    memoTest;
  }, [id]);

  return (
    <>
      <div style={{ marginTop: "30px", justifySelf: "center" }}>
        {id > 1 && (
          <Link to={"/pokemon/" + (parseInt(id) - 1)}>
            <button>previous pokemon</button>
          </Link>
        )}
        <Link to={"/pokemon/" + (parseInt(id) + 1)}>
          <button>next pokemon</button>
        </Link>
      </div>
      {data && (
        <PokeDetails
          data={data}
          img={data.sprites.other["official-artwork"].front_default}
          types={data.types}
          abilities={data.abilities}
            
        />
      )}
    </>
  );
};

export default Pokemon;
