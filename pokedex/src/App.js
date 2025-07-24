import React, { Component } from "react";
import { HashRouter as Router, Route,Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import "./App.css";
import Dashboard from "./components/layout/Dashboard";
import Pokemon from "./components/pokemon/Pokemon";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pokemon/:pokemonIndex" element={<Pokemon />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
