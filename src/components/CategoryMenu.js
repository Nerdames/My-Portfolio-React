import React from "react";
import "./Designs.css"; // or create a new CategoryMenu.css if needed

function CategoryMenu({ categories, activeCategory, onChange }) {
  return (
    <nav className="design-menu">
      {categories.map((category) => (
        <button
          key={category}
          className={`menu-item ${activeCategory === category ? "active" : ""}`}
          onClick={() => onChange(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </nav>
  );
}

export default CategoryMenu;
