import React from "react";
import "../styles/Navbar.css";

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg">
      <div className="col">Memory Game</div>
      <div className="col">Click an Image to Begin!</div>
      <div className="col">Score: 0 | Top Score: 0</div>
    </nav>
  </div>
);

export default Navbar;
