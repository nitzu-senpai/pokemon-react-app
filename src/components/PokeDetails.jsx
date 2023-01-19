import { useContext } from "react";
import FavouriteContext from "../contexts/UserContext";
export default function PokeDetails({data,img,types,abilities,func}) {
const [favlist, setFavList] = useContext(FavouriteContext);

  return (
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
            <div style={{ fontSize: "28px" }}>🥰 Added in Favourites !</div>
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
  );
}
