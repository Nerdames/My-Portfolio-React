import React, { useState } from "react";
import Card from "./Card";
import "./Designs.css";

const designData = {
  figma: Array.from({ length: 18 }, (_, index) => ({
    id: index + 1,
    title: `Figma Design ${index + 1}`,
    description:
      "This is a short summary of the design project. It highlights key features to showcase the design.",
    image: `https://picsum.photos/300/250?random=figma${index + 1}`,
  })),
  web: Array.from({ length: 18 }, (_, index) => ({
    id: index + 1,
    title: `Web Design ${index + 1}`,
    description:
      "This is a short summary of the design project. It highlights key features to showcase the design.",
    image: `https://picsum.photos/300/250?random=web${index + 1}`,
  })),
  mockups: Array.from({ length: 18 }, (_, index) => ({
    id: index + 1,
    title: `Mockup Design ${index + 1}`,
    description:
      "This is a short summary of the design project. It highlights key features to showcase the design.",
    image: `https://picsum.photos/300/250?random=mockup${index + 1}`,
  })),
};

function Designs() {
  const [activeCategory, setActiveCategory] = useState("figma");
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter designs based on active category
  const filteredDesigns = designData[activeCategory];

  const handleExpand = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleCollapse = () => {
    setVisibleCount(6);
  };

  return (
    <section className="section" id="designs-post">
      <header className="section-header">
        <h2>Designs</h2>
        <a href="/all-designs" className="view-all-btn">
          View All
        </a>
      </header>

      {/* Menu below header */}
      <nav className="design-menu">
        {["figma", "web", "mockups"].map((category) => (
          <button
            key={category}
            className={`menu-item ${activeCategory === category ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(category);
              setVisibleCount(6); // reset visible count on category change
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} 
          </button>
        ))}
      </nav>

      {/* Design cards */}
      <div className="design-list">
        {filteredDesigns.slice(0, visibleCount).map((design) => (
          <Card
            key={design.id}
            title={design.title}
            description={design.description}
            image={design.image}
          />
        ))}
      </div>

      {/* Toggle show more/less buttons */}
      {filteredDesigns.length > 6 && (
        <div className="toggle-buttons">
          {visibleCount < filteredDesigns.length ? (
            <button onClick={handleExpand} className="expand-btn">
              Show More
            </button>
          ) : (
            <button onClick={handleCollapse} className="expand-btn">
              Show Less
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default Designs;
