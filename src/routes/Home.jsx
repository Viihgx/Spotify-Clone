import React from 'react';
import '../App.css';
import Sidebar from '../components/SideBar/Sidebar';
import Navbar from '../components/NavBar/Navbar';

function Home() {
  return (
    <div className="main">
      <Sidebar />
      <Navbar/>
    </div>
  );
}

export default Home;
