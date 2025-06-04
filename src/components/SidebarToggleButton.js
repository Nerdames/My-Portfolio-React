// src/components/SidebarToggleButton.js
import React from 'react';
import './SidebarToggleButton.css';

function SidebarToggleButton({ onClick }) {
  return (
    <div
      className="showsidebar"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={e => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
    >
      <box-icon name="menu" size="md"></box-icon>
    </div>
  );
}

export default SidebarToggleButton;
