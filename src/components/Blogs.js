// components/Blogs.js
import React, { useEffect, useState } from "react";
import client from "../contentful";
import Card from "./Card";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await client.getEntries({ content_type: "blog" });
        const formattedBlogs = response.items.map(({ sys, fields }) => ({
          id: sys.id,
          title: fields.title,
          description: fields.description,
          image: fields.image?.fields?.file?.url
            ? `https:${fields.image.fields.file.url}`
            : "https://via.placeholder.com/300x200",
          link: fields.link || "#",
        }));
        setBlogs(formattedBlogs);
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      }
    };

    fetchBlogs();
  }, []);

  const isExpandable = blogs.length > 6;
  const visibleBlogs = blogs.slice(0, visibleCount);

  return (
    <section className="section" id="blogs-post">
      <header className="section-header">
        <h2>Blogs</h2>
        <a href="/all-blogs" className="view-all-btn">View All</a>
      </header>

      <div className="list">
        {visibleBlogs.map((blog) => (
          <Card key={blog.id} {...blog} />
        ))}
      </div>

      {isExpandable && (
        <div className="toggle-buttons">
          {visibleCount < blogs.length ? (
            <button onClick={() => setVisibleCount(visibleCount + 6)} className="expand-btn">
              Show More
            </button>
          ) : (
            <button onClick={() => setVisibleCount(6)} className="expand-btn">
              Show Less
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Blogs;
