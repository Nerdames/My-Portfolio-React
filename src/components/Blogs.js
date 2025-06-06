import React, { useEffect, useState } from "react";
import Card from "./Card";
import client, { urlFor } from "../lib/sanity";
import { Link } from "react-router-dom";
import "./Blogs.css";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "blog"]{
      _id,
      title,
      description,
      mainImage
    }`;

    client
      .fetch(query)
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Sanity fetch error:", error);
        setLoading(false);
      });
  }, []);

  const handleExpand = () => setVisibleCount((prev) => prev + 6);
  const handleCollapse = () => setVisibleCount(6);

  if (loading) return <p>Loading blogs...</p>;

  return (
    <section className="section" id="blogs-post">
      <header className="section-header">
        <h2>Blogs</h2>
        <Link to="/all-blogs" className="view-all-btn">View All</Link>
      </header>

      <div className="list">
        {blogs.length > 0 ? (
          blogs.slice(0, visibleCount).map((blog) => (
            <Card
              key={blog._id}
              title={blog.title}
              description={blog.description}
              image={urlFor(blog.mainImage).url()}
            />
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>

      {blogs.length > 6 && (
        <div className="toggle-buttons">
          {visibleCount < blogs.length ? (
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
