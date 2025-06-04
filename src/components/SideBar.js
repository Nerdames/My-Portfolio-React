import React, { useEffect, useRef, useState } from 'react';
import './SideBar.css';

function SideBar({ isVisible, hideSidebar }) {
  const sidebarRef = useRef();
  const [activeSection, setActiveSection] = useState('home-page');

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        hideSidebar();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, hideSidebar]);

  // Close on anchor click
  const handleLinkClick = () => {
    hideSidebar();
  };

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home-page', 'blogs-post', 'designs', 'about-page'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let current = 'home-page'; // default
      for (const section of sections) {
        const elem = document.getElementById(section);
        if (elem && elem.offsetTop <= scrollPos) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    // Run on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={sidebarRef}
      className="sidebar"
      style={{
        right: isVisible ? '0' : '-300px',
        display: isVisible ? 'flex' : 'none',
      }}
    >
      <ul className="pages">
        <li>
          <a
            href="#home-page"
            onClick={handleLinkClick}
            className={activeSection === 'home-page' ? 'active' : ''}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#blogs-post"
            onClick={handleLinkClick}
            className={activeSection === 'blogs-post' ? 'active' : ''}
          >
            Blogs
          </a>
        </li>
        <li>
          <a
            href="#designs-post"
            onClick={handleLinkClick}
            className={activeSection === 'designs-post' ? 'active' : ''}
          >
            Designs
          </a>
        </li>
        <li>
          <a
            href="#about-page"
            onClick={handleLinkClick}
            className={activeSection === 'about-page' ? 'active' : ''}
          >
            About
          </a>
        </li>
      </ul>

      <ul id="socials">
        <li>
          <a href="mailto:nerdames@gmail.com" onClick={handleLinkClick}>
            <box-icon name="envelope"></box-icon>Email
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jamesorji"
            onClick={handleLinkClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <box-icon name="linkedin" type="logo"></box-icon>LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Nerdames"
            onClick={handleLinkClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <box-icon name="github" type="logo"></box-icon>Github
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+2348164603705?"
            onClick={handleLinkClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <box-icon name="whatsapp" type="logo"></box-icon>Whatsapp
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
