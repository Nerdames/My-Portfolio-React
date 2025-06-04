import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
import Navbar from './Navbar';
import Logo from './Logo';
import Socials from './Socials';
import SidebarToggleButton from './SidebarToggleButton';

function Header({ toggleSidebar, showSidebar }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowHeader(currentScrollY < lastScrollY.current || currentScrollY < 50);
      setIsScrolled(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${showHeader ? 'show' : 'hide'}`}>
      <div className="header-left">
        <Logo />
      </div>

      <div className="header-center">
        <Navbar />
      </div>

      <div className="header-right">
        <Socials />
      </div>

      <div className="header-toggle">
        {!showSidebar && (
          <SidebarToggleButton onClick={toggleSidebar} className="showsidebar" />
        )}
      </div>
    </header>
  );
}

export default Header;
