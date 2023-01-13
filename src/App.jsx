import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Profile from "./pages/Profile";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavouriteContext } from "./contexts/UserContext";
function App() {
 const[favList]=useContext(FavouriteContext)
 console.log(favList);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <h2>Pokémon !</h2>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <div>
          Favourite Pokémons = {favList.size}
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
