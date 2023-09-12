import React from 'react';
import StickyNav from '../StickyNav';
import Card from '../Card/Card';
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <StickyNav />
        <Card/>
    </div>
  );
}

export default Navbar;
