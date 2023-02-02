import React from "react";
import { Link } from "react-router-dom";
import LogoKasa from "../../assets/kasa.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to={"/"}>
          <img src={LogoKasa} alt="Logo Kasa" className="header-logo" />
        </Link>
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
