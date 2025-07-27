import React, { Component } from "react";
import { HashRouter as Router, Route,Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import pokeball from "./pokeball512.png";
import "./App.css";
import Dashboard from "./components/layout/Dashboard";
import PokemonWrapper from "./components/pokemon/PokemonWrapper";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar src={pokeball} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pokemon/:pokemonIndex" element={<PokemonWrapper />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
