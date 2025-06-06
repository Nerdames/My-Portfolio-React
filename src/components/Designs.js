import React, { useEffect, useState } from "react";
import Card from "./Card";
import CategoryMenu from "./CategoryMenu";
import client, { urlFor } from "../lib/sanity";

const categories = ["figma", "web", "mockups"];

function Designs() {
  const [activeCategory, setActiveCategory] = useState("figma");
  const [designs, setDesigns] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const query = `*[_type == "design" && category == $category] | order(publishedAt desc) {
      _id,
      title,
      description,
      mainImage
    }`;

    client
      .fetch(query, { category: activeCategory })
      .then((data) => {
        setDesigns(data);
        setVisibleCount(6);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setLoading(false);
      });
  }, [activeCategory]);

  const handleExpand = () => setVisibleCount((prev) => prev + 6);
  const handleCollapse = () => setVisibleCount(6);

  if (loading) return <p>Loading designs...</p>;

  return (
    <section className="section" id="designs-post">
      <header className="section-header">
        <h2>Designs</h2>
        {/* Optionally add: <Link to="/all-designs">View All</Link> */}
      </header>

      <CategoryMenu
        categories={categories}
        activeCategory={activeCategory}
        onChange={(cat) => setActiveCategory(cat)}
      />

      <div className="design-list">
        {designs.length > 0 ? (
          designs.slice(0, visibleCount).map((design) => (
            <Card
              key={design._id}
              title={design.title}
              description={design.description}
              image={urlFor(design.mainImage).url()}
            />
          ))
        ) : (
          <p>No designs available.</p>
        )}
      </div>

      {designs.length > 6 && (
        <div className="toggle-buttons">
          {visibleCount < designs.length ? (
            <button onClick={handleExpand} className="expand-btn">Show More</button>
          ) : (
            <button onClick={handleCollapse} className="expand-btn">Show Less</button>
          )}
        </div>
      )}
    </section>
  );
}

export default Designs;
