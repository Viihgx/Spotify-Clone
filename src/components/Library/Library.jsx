// import React from 'react';
// import './Library.css';

// function Library() {
//   return (
//     <div className="library">
//       <div className="options">
//         <div className="lib-option nav-option">
//         <svg className="white-search-icon" role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>

//           <p>
//             Sua Biblioteca
//           </p>
//         </div>
//         <div className="icons">
//           <i className="fa-solid fa-plus"></i>
//           <i className="fa-solid fa-arrow-right"></i>
//         </div>
//       </div>
//       <div className="lib-box">
//         <div className="box">
//           <p className="box-p1">Crie sua primeira playlist</p>
//           <p className="box-p2">É fácil, vamos te ajudar.</p>
//           <button className="badge">Criar playlist</button>
//         </div>
//         <div className="box">
//           <p className="box-p1">Que tal seguir um podcast novo?</p>
//           <p className="box-p2">Avisaremos você sobre novos episódios.</p>
//           <button className="badge">Explore podcasts</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Library;

import { Box, Button, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import AddIcon from "@mui/icons-material/Add";
// import BookmarksIcon from "@mui/icons-material/Bookmarks";
import React from "react";

const SidebarSecondItem = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "white",
        padding: "10px",
        marginTop: "8px",
        height: "100vh",
        width: "340px",
        borderRadius: "8px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          padding: "8px 16px",
          justifyContent: "space-between",
        }}
      >
        <Box display={"flex"} color={"white"}>
          <svg style={{fill: '#b3b3b3'}} className="white-search-icon" role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
          <Typography sx={{ marginLeft: "15px", padding: "4px 8px", color: '#b3b3b3', fontWeight: '700'}}>
            
            Sua Biblioteca
            
          </Typography>
        </Box>
        <Box>
          <AddIcon style={{fill: '#b3b3b3'}} />
        </Box>
      </Box>
      <Box
        sx={{
          padding: "16px 20px",
          backgroundColor: "#242424",
          borderRadius: "8px",
          width: "86%",
          cursor: 'default',
          marginLeft: "5px",
          marginTop: '10px',
        }}
      >
        <Typography sx={{ fontSize: "1rem", fontWeight: "700"}}>
          Crie sua primeira playlist
        </Typography>
        <Typography
          sx={{ fontSize: "0.8125rem", fontWeight: "600", marginTop: "10px" }}
        >
          É fácil, vamos te ajudar.
        </Typography>
        <Button
          className="loginbuttons"
          sx={{
            borderRadius: "500px",
            textTransform: "capitalize",
            color: "black",
            backgroundColor: "white",
            fontSize: "0.8125rem;",
            fontWeight: "700",
            padding: "7px",
            marginTop: "10px",
          }}
        >
          Criar playlist
        </Button>
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        padding={"10px"}
        justifyContent={"space-evenly"}
      >
      
      </Box>
      <Box
        sx={{
          padding: "16px 20px",
          backgroundColor: "#242424",
          borderRadius: "8px",
          width: "86%",
          cursor: 'default',
          marginLeft: "5px",
          marginTop: '10px',
        }}
      >
        <Typography sx={{ fontSize: "1rem", fontWeight: "700"}}>
          Que tal seguir um podcast novo?
        </Typography>
        <Typography
          sx={{ fontSize: "0.8125rem", fontWeight: "600", marginTop: "10px" }}
        >
          Avisaremos você sobre novos episódios.
        </Typography>
        <Button
          className="loginbuttons"
          sx={{
            borderRadius: "500px",
            textTransform: "capitalize",
            color: "black",
            backgroundColor: "white",
            fontSize: "0.8125rem;",
            fontWeight: "700",
            padding: "7px",
            marginTop: "10px",
          }}
        >
          Explore podcasts
        </Button>
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        padding={"10px"}
        justifyContent={"space-evenly"}
      >
      
      </Box>
     
      <Box marginTop={"150px"}>
        <Button
          sx={{
            borderRadius: "500px",
            color: "white",
            fontFamily: "Circular Std, sans-serif",
            fontWeight: "700",
            textTransform: "initial",
            fontSize: "0.8125rem",
          }}
          variant="outlined"
          startIcon={<LanguageIcon />}
        >
          Português do Brasil
        </Button>
      </Box>
    </Box>
  );
};

export default SidebarSecondItem;
