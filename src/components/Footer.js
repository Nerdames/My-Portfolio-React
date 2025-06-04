import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} James Orjiene. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
