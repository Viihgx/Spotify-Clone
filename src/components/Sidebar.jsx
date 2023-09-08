import React from 'react';
import './Sidebar.css';
import Library from './Library';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="nav">
        <div className="nav-option" style={{ opacity: 1 }}>
          <i className="fa-solid fa-house"></i>
          <a href="w">Início</a>
        </div>
        <div className="nav-option">
          <i className="fa-solid fa-magnifying-glass"></i>
          <a href="w">Buscar</a>
        </div>
      </div> 
      <Library />
    </div>
  );

}

export default Sidebar;
