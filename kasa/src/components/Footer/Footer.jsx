import LogoFooter from "../../assets/kasaFooter.png";

const Footer = () => {
  return (
    <footer>
      <h3 className="logo">
        <img src={LogoFooter} alt="Logo de l'entreprise Kasa" />
      </h3>

      <h3 className="footerCopyrights">© 2020 Kasa. All rights reserved</h3>
    </footer>
  );
};

export default Footer;
