import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ id, title, cover }) => {
  return (
    <Link key={id}>
      <h3>{title}</h3>
      <img src={cover} alt={title} />
    </Link>
  );
};

export default Cards;
