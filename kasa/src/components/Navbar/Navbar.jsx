import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">
        Accueil
      </Link>
      <Link className="nav-link" to="/about">
        A propos
      </Link>
    </nav>
  );
};

export default Navbar;
