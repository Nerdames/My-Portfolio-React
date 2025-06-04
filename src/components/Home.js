import React from "react";
import Intro from "./Intro";
import "./Home.css"; // (Optional: for styling)
import figma2 from "../assets/figma2.svg"; // Assuming you have an image in the assets folder

function Home() {
  return (
    <section id="home-page">
      <img src={figma2} alt="Hero" />

      <Intro />
    </section>
  );
}

export default Home;
