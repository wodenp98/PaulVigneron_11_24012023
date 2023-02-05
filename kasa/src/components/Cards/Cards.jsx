import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ id, title, img }) => {
  return (
    <Link key={`${id}`} to={`/lodging/${id}`} className="card">
      <div
        className="imgLodging"
        style={{
          background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),url(${img})`,
          backgroundSize: "cover",
        }}
      >
        <h3 className="title">{title}</h3>
      </div>
    </Link>
  );
};

export default Cards;
