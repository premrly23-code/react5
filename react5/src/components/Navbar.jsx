import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">

      <h1>Calm Health</h1>

      <nav>
        <a href="#">Home</a>
        <a href="#">Recipes</a>
        <a href="#">Stories</a>
        <a href="#">About</a>
      </nav>

      <div className="icons">
        ♡ &nbsp; ◯ &nbsp; ☰
      </div>

    </header>
  );
};

export default Navbar;