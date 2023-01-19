import { useContext } from "react";
import { Link } from "react-router-dom";
import FavouriteContext  from "../contexts/UserContext";
export default function Header() {
    const[favList]=useContext(FavouriteContext)
    return (
    <div className="nav">
      <h2>Pokémon !</h2>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <div>Favourite Pokémons = {favList.size}</div>
    </div>
  );
}
