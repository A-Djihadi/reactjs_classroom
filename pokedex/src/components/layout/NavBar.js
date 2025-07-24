import React, { Component } from "react";
import styled from "styled-components";

export default class NavBar extends Component {
  render() {
    const { logo } = this.props;
    return (
      <nav className="navbar-content">
        {logo ? (
        <img src={logo} alt="Logo" className="navbar-logo" />
        ) : (
        <span className="navbar-title">Pokedex</span>
        )}
      </nav>
    );
  }
}
