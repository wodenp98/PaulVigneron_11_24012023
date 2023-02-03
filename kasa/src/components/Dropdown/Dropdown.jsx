import { useState } from "react";
import ChevronDown from "../../assets/chevronDown.png";
import ChevronUp from "../../assets/chevronUp.png";

const Dropdown = ({ title, text }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="dropdown">
      <div className="dropdownHeader" onClick={() => setCollapsed(!collapsed)}>
        <h3>{title}</h3>
        {collapsed ? (
          <img src={ChevronDown} alt="chevron" className="chevron" />
        ) : (
          <img src={ChevronUp} alt="chevron" className="chevron" />
        )}
      </div>
      <div>
        {typeof text === "string"
          ? !collapsed && <p className="dropdownText"> {text}</p>
          : !collapsed &&
            text.map((item, index) => (
              <p className="dropdownText" key={index}>
                {item}
              </p>
            ))}
      </div>
    </div>
  );
};

export default Dropdown;
