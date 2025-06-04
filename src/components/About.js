import React from "react";
import Intro from "./Intro";
import './About.css';
import userImage from "../assets/User 1.jpg"; // adjust if needed

function About() {
  return (
    <section id="about-page">
      <header className="about-header">
        <h2 id="link-about">About</h2>
      </header>

      <div className="about">
        <div className="summary-intro">
          <Intro />
        </div>

        <div className="user-image">
          <img src={userImage} alt="James Orjiene" />
        </div>

        <div className="skill">
          <h2>Skills</h2>
          <ul>
            <li><box-icon name='html5' type='logo' size="lg"></box-icon>HTML</li>
            <li><box-icon name='css3' type='logo' size="lg"></box-icon>CSS</li>
            <li><box-icon name='javascript' type='logo' size="lg"></box-icon>JavaScript</li>
            <li><box-icon name='react' type='logo' size="lg"></box-icon>React</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Design, Figma</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
