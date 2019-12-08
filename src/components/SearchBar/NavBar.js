import React from "react";

import logo from "./death.png";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <ul className="NavBar__list">
        <li className="NavBar__logo">
          <img src={logo} alt="logo" />
          <h1 className="NavBar__site_name">Horror teaser</h1>
        </li>
        <li className="NavBar__search_items">
          <input
            className="NavBar__search"
            placeholder="Search for..."
            type="search"
          />
          <input
            className="Navbar__searchButton"
            value="&#9762;"
            type="submit"
          ></input>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
