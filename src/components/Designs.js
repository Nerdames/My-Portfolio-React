import React, { useEffect, useState } from "react";
import client from "../contentful"; // adjust path as needed
import Card from "./Card";
import "./Blogs.css"; // Use Blogs.css for styles

function Designs() {
  const [designs, setDesigns] = useState([]);
  const [activeCategory, setActiveCategory] = useState("figma");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    client
      .getEntries({ content_type: "design" }) // replace with your actual content type ID
      .then((response) => {
        const items = response.items.map((item) => {
          const { title, description, image, category, link } = item.fields;
          return {
            id: item.sys.id,
            title,
            description:
              description?.content?.[0]?.content?.[0]?.value || "", // Rich text fallback
            image: image?.fields?.file?.url
              ? `https:${image.fields.file.url}`
              : "",
            category,
            link: link || "#",
          };
        });
        setDesigns(items);
      })
      .catch(console.error);
  }, []);

  const filteredDesigns = designs.filter(
    (design) => design.category === activeCategory
  );

  const handleExpand = () => setVisibleCount((prev) => prev + 6);
  const handleCollapse = () => setVisibleCount(6);

  return (
    <section className="section" id="designs-post"> {/* Use designs-post ID for styling */}
      <header className="section-header">
        <h2>Designs</h2>
        <a href="/all-designs" className="view-all-btn">
          View All
        </a>
      </header>

      <nav className="design-menu">
        {["figma", "web", "mockups"].map((category) => (
          <button
            key={category}
            className={`menu-item ${activeCategory === category ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(category);
              setVisibleCount(6);
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </nav>

      <div className="list"> {/* Use `.list` container as per Blogs.css */}
        {filteredDesigns.slice(0, visibleCount).map((design) => (
          <Card
            key={design.id}
            title={design.title}
            description={design.description}
            image={design.image}
            link={design.link}
          />
        ))}
      </div>

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
