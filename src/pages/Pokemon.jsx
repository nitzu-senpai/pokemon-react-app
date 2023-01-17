import React from "react";
import { useMemo } from "react";
import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import { FavouriteContext } from "../contexts/UserContext";
import "../Pokemon.css";
const Pokemon = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let url = "https://pokeapi.co/api/v2/pokemon/" + id;
  const [favlist, setFavList] = useContext(FavouriteContext);
  const [data, setData] = useState();
  const [img, setImg] = useState();
  const [abilities, setAbilities] = useState();
  const [types, setTypes] = useState();
  const getPokemonDetails = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    setTypes(data.types);
    setImg(data.sprites.other["official-artwork"].front_default);
    setAbilities(data.abilities);
    console.log([...favlist].filter((i) => i.id === data.id).length === 0);
  };
  const memoTest = useMemo(()=>getPokemonDetails(url),[url])
  useEffect(() => {
   memoTest
  }, [id]);

  return (
    <>
    <div style={{marginTop:"30px",justifySelf:"center"}}>
    {id>1&&<Link to={"/pokemon/"+(parseInt(id)-1)}><button>
        
        previous pokemon
     
    </button>
    </Link>
    }
    <Link to={"/pokemon/"+(parseInt(id)+1)}>
      <button>
    
          next pokemon
        
      </button>
      </Link>
     
      </div>
      {data && (
        <div className="pokemon-details">
          <img src={img} alt="" />
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                gridColumnEnd: "3",
                gridColumnStart: "1",
              }}
            >
              <h4 className="pokemon-name">{data.name}</h4>
              {[...favlist].filter((i) => i.id === data.id).length === 0 ? (
                <button
                  onClick={() => {
                    setFavList((prev) => new Set(prev).add(data));
                  }}
                >
                  Add to Favourites
                </button>
              ) : (
                <div style={{fontSize:"28px"}}>
                 🥰 Added in Favourites !
                </div>
              )}
            </div>
            <div style={{ position: "relative", left: "30px" }}>
              <h2>Type</h2>
              <div
                style={{
                  position: "relative",
                  left: "0px",
                  margin: "2px",
                  display: "flex",
                }}
              >
                {types.map((type) => {
                  let name = type.type.name;
                  return (
                    <div className="type">
                      {/* <div>{name}</div> */}
                      <div className={`icon ${name}`}>
                        <img
                          src={`https://duiker101.github.io/pokemon-type-svg-icons/icons/${name}.svg`}
                          alt={name}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{ position: "relative", left: "30px" }}>
              <h2>Abilities</h2>
              {abilities.map((item) => {
                return <li className="abilities">{item.ability.name}</li>;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pokemon;
