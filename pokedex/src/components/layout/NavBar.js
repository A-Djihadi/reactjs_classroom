import React, { Component } from "react";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: props.src,
    };
  }
  render() {
    const { logo } = this.state;
    console.log("NavBar logo:", logo);
    return (
      <nav className="navbar-content">
        <div className="navbar-header">
          <img src={logo} alt="Pokedex Logo" className="navbar-logo" href="./" />
          <a href="./" className="navbar-title">Pokedex</a>
        </div>
      </nav>
    );
  }
}
