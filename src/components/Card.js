// components/Card.js
import React from "react";
import "./Card.css";

function Card({ title, image, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default Card;
