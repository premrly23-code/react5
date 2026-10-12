import React from "react";
import "./card.css";

const Card = ({ img, title, desc }) => {
  return (
    <div className="card">

      <img src={img} alt={title} />

      <div className="card-content">

        <span className="card-tag">RECIPE</span>

        <h3>{title}</h3>

        <p>{desc}</p>

        <small>Read more →</small>

      </div>

    </div>
  );
};

export default Card;