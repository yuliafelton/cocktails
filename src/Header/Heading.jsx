import React from "react";
import "./Heading.css";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <div className="App-header">
      <Link style={headerStyle} to="/">
        <header className="logo">FIND YOUR COCKTAIL</header>
      </Link>
      <h3 className="App-h3">
        Don't know what cocktail to make out of whatever you can find in your
        fridge?
      </h3>
    </div>
  );
}

const headerStyle = {
  textDecoration: "none",
};

export default Heading;
