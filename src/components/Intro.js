import React, { useEffect, useState } from "react";
import Socials from "./Socials";
import ViewResume from "./ViewResume";
import './Intro.css';

function Intro() {
  const [greeting, setGreeting] = useState("");

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  useEffect(() => {
    // Set initial greeting
    setGreeting(getGreeting());

    // Update greeting every minute
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000); // 60000 ms = 1 minute

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="intro" id="intro">
      <h4>Hello, <em id="greetings">{greeting}</em></h4>
      <h3>I'm James Orjiene</h3>
      <p>A UI/UX Designer and Web Developer</p>
      <small>Focused on crafting intuitive, user-centered digital experiences</small>

      <ViewResume />
      <Socials />
    </div>
  );
}

export default Intro;
