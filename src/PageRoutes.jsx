import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Pokemon from "./pages/Pokemon"
import Profile from "./pages/Profile"
import Home from "./pages/Home";
export default function PageRoutes() {
    return(
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<Pokemon/>} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    )
}