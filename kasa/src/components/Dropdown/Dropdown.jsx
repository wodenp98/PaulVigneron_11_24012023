import ChevronDown from "../../assets/chevronDown.png";

const Dropdown = ({ title }) => {
  return (
    <div className="dropdown">
      <div className="dropdownHeader">
        <h3>{title}</h3>
        <img src={ChevronDown} alt="chevron" className="chevron" />
      </div>
    </div>
  );
};

export default Dropdown;
