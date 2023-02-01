import React from "react";

const Banner = ({ title, imgBg }) => {
  return (
    <div>
      <div className={`homeTitle ${imgBg}`}>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Banner;
