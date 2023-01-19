import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Profile from "./pages/Profile";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>

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
