import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ id, title, img }) => {
  return (
    <Link key={`${id}`} to={`/lodging/${id}`} className="card">
      <h3 className="title">{title}</h3>
      <div className="gradient"></div>
      <img src={img} alt={title} className="image" />
    </Link>
  );
};

export default Cards;
