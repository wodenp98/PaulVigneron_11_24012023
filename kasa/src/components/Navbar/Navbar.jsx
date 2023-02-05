import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link
        className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        to="/"
      >
        Accueil
      </Link>
      <Link
        className={
          location.pathname === "/about" ? "nav-link active" : "nav-link"
        }
        to="/about"
      >
        A propos
      </Link>
    </nav>
  );
};

export default Navbar;
