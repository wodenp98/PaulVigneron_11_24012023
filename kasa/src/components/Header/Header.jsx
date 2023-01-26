import React from "react";
import LogoKasa from "../../assets/kasa.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img src={LogoKasa} alt="Logo Kasa" className="header-logo" />
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
