import React, { useState, useEffect } from "react";
import "./Navbar.css";

const navItems = [
  { id: "home-page", label: "Home" },
  { id: "blogs-post", label: "Blogs" },
  { id: "designs-post", label: "Designs" },
  { id: "about-page", label: "About" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home-page");

  const handleClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let current = activeSection;
      for (const { id } of navItems) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeSection]);

  return (
    <nav>
      <ul className="pages">
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={(e) => handleClick(e, id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
