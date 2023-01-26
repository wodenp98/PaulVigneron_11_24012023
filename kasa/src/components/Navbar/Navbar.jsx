import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink>Accueil</NavLink>
      <NavLink>A propos</NavLink>
    </nav>
  );
};

export default Navbar;
