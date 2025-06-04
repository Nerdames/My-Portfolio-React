import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Designs from './components/Designs';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SideBar from './components/SideBar';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  return (
    <div className="App">
      <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <SideBar isVisible={showSidebar} hideSidebar={toggleSidebar} />
      <Home />
      <Blogs />
      <Designs />
      <About />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
