import React from 'react';
import './App.css';
import Sidebar from './components/SideBar/Sidebar';
import Navbar from './components/NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Routes from "./Route/Routes";
// import Card from './components/Card';
// import StickyNav from './components/StickyNav';
// import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="main">
      <Sidebar />
      <Navbar/>
      <Outlet/>
      {/* <Routes /> */}
    </div>
  );
}

export default App;
