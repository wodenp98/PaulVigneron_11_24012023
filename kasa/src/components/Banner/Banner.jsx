import React from "react";

const Banner = ({ text }) => {
  return (
    <div>
      <div className="homeTitle">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Banner;
