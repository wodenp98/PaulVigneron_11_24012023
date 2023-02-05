import { useState } from "react";
import ChevronDown from "../../assets/chevronDown.png";
import ChevronUp from "../../assets/chevronUp.png";

const Dropdown = ({ title, text }) => {
  const [dropdownIsClosed, setDropdownIsClosed] = useState(true);

  return (
    <div className="dropdown">
      <div
        className="dropdownHeader"
        onClick={() => setDropdownIsClosed(!dropdownIsClosed)}
      >
        <h3>{title}</h3>
        {dropdownIsClosed ? (
          <img src={ChevronDown} alt="chevron" className="chevron" />
        ) : (
          <img src={ChevronUp} alt="chevron" className="chevron" />
        )}
      </div>
      {!dropdownIsClosed && (
        <div className="dropdownText">
          {typeof text === "string" ? (
            <p> {text}</p>
          ) : (
            text.map((item, index) => <li key={index}>{item}</li>)
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
