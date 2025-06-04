import React from "react";
import "./Blogs.css";

function SeeMoreButton({ isExpanded, onClick }) {
  return (
    <div className="see-more">
      <button className="see-more-btn" onClick={onClick}>
        {isExpanded ? "Show Less ▲" : "See More ▼"}
      </button>
    </div>
  );
}

export default SeeMoreButton;
