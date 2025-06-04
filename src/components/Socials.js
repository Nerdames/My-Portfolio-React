// components/Socials.js
import React from 'react';
import './Socials.css'; // (Optional: for styling)

function Socials() {
  return (
    <ul className="socials">
      <li><a id="contact" href="mailto:nerdames@gmail.com" target="_blank" rel="noopener noreferrer"><box-icon name='envelope'></box-icon></a></li>
        <li><a href="https://www.linkedin.com/in/jamesorji" target="_blank" rel="noopener noreferrer"><box-icon name='linkedin' type='logo' ></box-icon></a></li>
        <li><a href="https://github.com/Nerdames" target="_blank"><box-icon name='github' type='logo' ></box-icon></a></li>
        <li><a href="https://wa.me/+2348164603705?" target="_blank"><box-icon name='whatsapp' type='logo' ></box-icon></a></li>
    </ul>
  );
}

export default Socials;
