import React, { useState } from "react";
import Card from "./Card"; // previously BlogCard
import "./Blogs.css"; // unified styles for blog/design/etc.

const blogData = Array.from({ length: 18 }, (_, index) => ({
  id: index + 1,
  title: `Blog Post ${index + 1}`,
  description:
    "This is a short summary of the blog post. It highlights key points of the article to draw readers in.",
  image: `https://picsum.photos/300/200?random=${index + 1}`,
}));

function Blogs() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleExpand = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleCollapse = () => {
    setVisibleCount(6);
  };

  return (
    <section className="section" id="blogs-post">
      <header className="section-header">
        <h2>Blogs</h2>
        <a href="/all-blogs" className="view-all-btn">View All</a>
      </header>

      <div className="list">
        {blogData.slice(0, visibleCount).map((blog) => (
          <Card
            key={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </div>

      {blogData.length > 6 && (
        <div className="toggle-buttons">
          {visibleCount < blogData.length ? (
            <button onClick={handleExpand} className="expand-btn">Show More</button>
          ) : (
            <button onClick={handleCollapse} className="expand-btn">Show Less</button>
          )}
        </div>
      )}
    </section>
  );
}

export default Blogs;
