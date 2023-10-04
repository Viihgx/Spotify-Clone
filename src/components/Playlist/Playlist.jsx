import React from 'react';
import Dashboard from '../Layout/Dashboard';
import { Box, Typography, Grid} from '@mui/material';

function Playlist() {
  return (
    
    <Box sx={{
        background: "linear-gradient(transparent, rgba(0, 0, 0, 1))",
        backgroundColor: "rgb(32,87,100)",
        display: "flex",
        justifyContent: "flex-start",
        color: "#fff",
        padding: "20px",
        marginTop: "60px",
        height: "100vh",
        width: { sm: `calc(100% - 310px)`, flexShrink: { sm: 0 } },
        zIndex: "1",
        marginLeft: "379px",
        flexDirection: 'row',
      }} >

        <Box sx={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "15px",
            gap: "3rem",
          }}> 
          <Grid><Typography> pLAYLIST</Typography>
          </Grid> </Box>
          
          
       
    </Box>
  );
}

export default Dashboard(Playlist);