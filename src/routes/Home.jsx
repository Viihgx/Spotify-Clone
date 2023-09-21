import React from 'react';
import '../App.css';
import Dashboard from '../components/Layout/Dashboard';
import SongList from '../components/SongList/SongList';


function Home() {
  return (
    <div style={{ display: 'flex', flex: '1', flexDirection: 'row', zIndex: '1 ', width: 'calc(100% - 340px)'}} className="main">
      <SongList/>
    </div>
  );
}

export default Dashboard(Home);
