import React, { useState } from 'react';
import axios from 'axios';
import ReactAudioPlayer from 'react-audio-player';
import { Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import Dashboard from '../../components/Layout/Dashboard';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [audioUrl, setAudioUrl] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3004/search', {
        params: { query },
      });
      if (response.status === 200) {
        setResults(response.data);
      }
    } catch (error) {
      console.error('Erro na pesquisa de músicas', error);
    }
  };

  const playAudio = (url) => {
    setAudioUrl(url);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        padding: "20px",
        marginTop: "60px",
        height: "100vh",
        width: { sm: `calc(100% - 310px)`, flexShrink: { sm: 0 } },
        zIndex: "1",
        marginLeft: "379px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        label="Pesquisar Música"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ marginBottom: "20px", width: "100%"}}
      />
      <Button variant="contained" onClick={handleSearch} sx={{ width: "100%" }}>
        Pesquisar
      </Button>

      <List sx={{ marginTop: "20px" }}>
        {results.map((song) => (
          <ListItem key={song.id} button onClick={() => playAudio(song.audioUrl)}>
            <ListItemText
              primary={song.title}
              secondary={song.artist}
            />
          </ListItem>
        ))}
      </List>

      {audioUrl && (
        <ReactAudioPlayer src={audioUrl} autoPlay controls sx={{ marginTop: "20px" }} />
      )}
    </Box>
  );
};

export default Dashboard(Search);
