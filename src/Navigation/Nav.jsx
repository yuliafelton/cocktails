import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="nav-links, links-style">
        <Link className="nav-style" to="/ingredients">
          <h4>Find by ingredients</h4>
        </Link>
        <Link className="nav-style" to="/cocktails">
          <h4>Find by cocktail name</h4>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
