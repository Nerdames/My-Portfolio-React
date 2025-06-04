import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="scrollToTop"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}
    >
      <box-icon name="chevrons-up" type="solid" animation="tada"></box-icon>
    </button>
  );
}

export default ScrollToTop;
