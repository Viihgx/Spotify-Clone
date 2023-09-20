import React from 'react';
import '../App.css';
import Sidebar from '../components/SideBar/Sidebar';
import SongList from '../components/SongList/SongList';
// import StickyNav from '../components/Navbar';

function Home() {
  return (
    <div className="main">
      
      <Sidebar />
      <SongList/>
    </div>
  );
}

export default Home;
