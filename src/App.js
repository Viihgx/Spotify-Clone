import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
// import Card from './components/Card';
// import StickyNav from './components/StickyNav';
// import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="main">
      <Sidebar />
      <Navbar/>
    </div>
  );
}

export default App;
