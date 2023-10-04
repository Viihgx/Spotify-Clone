import React from 'react';
import '../App.css';
import Dashboard from '../components/Layout/Dashboard';
import SongList from '../components/SongList/SongList';
import { Box } from '@mui/material';

function Home() {
  return (
    <Box className='main-home' sx={{

      backgroundColor: "#121212",
      display: "flex",
      justifyContent: "flex-start",
      color: "#fff",
      padding: "20px",
      marginTop: "60px",
      height: "100vh",
      width: { sm: `calc(100% - 310px)`, flexShrink: { sm: 0 } },
      zIndex: "0",
      marginLeft: "379px",
      flexDirection: 'row',
    }} >
      <SongList />

      <Box sx={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "15px",
          gap: "3rem",
        }}> 
         </Box>
        
        
     
  </Box>
  );
}

export default Dashboard(Home);
