import React from "react";
import "./Card.css";

function Card({ title, image, description, link }) {
  return (
    <div className="card">
      <a href={link || "#"} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="card-image" />
      </a>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="card-description-container">
          {description && <p className="card-description">{description}</p>}
          {link && (
            <div className="card-actions">
              <a href={link} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
