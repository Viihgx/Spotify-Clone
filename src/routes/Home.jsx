import React from 'react';
import '../App.css';
import Dashboard from '../components/Layout/Dashboard';
import SongList from '../components/SongList/SongList';
import { Box } from '@mui/material';

function Home() {
  return (
    <Box sx={{flex: "1", flexShrink: { sm: 0 },  width: '50%', marginLeft: "340" }}>
    <div style={{ display: 'flex', flexDirection: 'row', zIndex: '1 ', width: 'calc(100% - 340px)', marginLeft: '379px'}} className="main">
      <SongList/>
    </div>
    </Box>
  );
}

export default Dashboard(Home);
