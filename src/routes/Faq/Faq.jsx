import React from 'react';
// import './Faq.css'
import Dashboard from '../../components/Layout/Dashboard';
import { Box, Typography } from '@mui/material';

function Faq() {
  return (
    <Box
    sx={{
      backgroundColor: "#1a1a1a",
      padding: "10px",
      marginTop: "60px",
      height: "100vh",
      width: { sm: `calc(100% - 310px)` ,
      flexShrink: { sm: 0 }},
      // flex: "1",
      zIndex: "1",
      marginLeft: "379px",
      flexDirection: 'row',
    }}
  >
    <Box
      sx={{
        padding: "8px 16px",
        // flexGrow: 1,
      }}
      > 
      <Typography>OI</Typography>
</Box>
    </Box>
 
  );
}

export default Dashboard(Faq);
