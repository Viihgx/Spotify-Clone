import { Box, Button, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import "./Library.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Library = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Faça uma solicitação para obter a lista de playlists disponíveis no servidor
    axios.get('http://localhost:3004/playlists')
      .then((response) => {
        setPlaylists(response.data);
      })
      .catch((error) => {
        console.error('Erro ao obter playlists', error);
      });
  }, []);

  return (
    <Box className="box-main">
        <Box display={"flex"} color={"white"}>
          <svg style={{ fill: '#b3b3b3' }} className="white-search-icon" role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
          <Typography sx={{ marginLeft: "15px", padding: "4px 8px", color: '#b3b3b3', fontWeight: '700' }}>

            Sua Biblioteca

          </Typography>
        {/* </Box> */}
        <Box>
          <Link to="/AddPlaylist">
          <AddIcon className="icon-add" style={{ fill: '#b3b3b3' }} />
          </Link>
        </Box>
      </Box>
      <Box className="playlists" sx={{
        padding: "16px 20px",
        backgroundColor: "#242424",
        borderRadius: "8px",
        width: "86%",
        cursor: 'default',
        marginLeft: "5px",
        marginTop: '10px',
      }}>
        {playlists.map((playlist) => (
          <div key={playlist.id}>
            <Typography>{playlist.title}</Typography>
          </div>
        ))}
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
        <Typography sx={{ fontSize: "1rem", fontWeight: "700" }}>
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

export default Library;
