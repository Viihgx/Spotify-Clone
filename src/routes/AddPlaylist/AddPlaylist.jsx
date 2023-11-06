import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import Dashboard from '../../components/Layout/Dashboard';

const AddPlaylist = () => {
  const [songs, setSongs] = useState([]);
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Faça uma solicitação para obter a lista de músicas disponíveis no servidor
    axios.get('http://localhost:3004/songs')
      .then((response) => {
        setSongs(response.data);
        setFilteredSongs(response.data);
      })
      .catch((error) => {
        console.error('Erro ao obter músicas', error);
      });
  }, []);

  const handleAddSong = (song) => {
    setPlaylistSongs([...playlistSongs, song]);
  };

  const handleCreatePlaylist = () => {
    // Crie uma nova playlist no servidor com o nome e as músicas selecionadas
    axios.post('http://localhost:3004/playlists', {
      title: playlistName,
      songs: playlistSongs.map((song) => song.id),
    })
      .then((response) => {
        // A playlist foi criada com sucesso, você pode redirecionar o usuário para outra página, se necessário.
        console.log('Playlist criada:', response.data);
        setPlaylistName(''); // Limpa o nome da playlist
        setPlaylistSongs([]); // Limpa as músicas selecionadas
      })
      .catch((error) => {
        console.error('Erro ao criar playlist', error);
      });
  };

  const handleSearch = () => {
    // Filtrar músicas com base na consulta de pesquisa
    const filtered = songs.filter((song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSongs(filtered);
  };

  return (
    <Box sx={{
      backgroundColor: "#121212",
      color: "#fff",
      padding: "20px",
      marginTop: "60px",
      height: "100vh",
      width: { sm: `calc(100% - 310px)`, flexShrink: { sm: 0 } },
      zIndex: "1",
      marginLeft: "379px",
      flexDirection: 'row',
    }}>
      <TextField
        label="Nome da Playlist"
        variant="outlined"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <TextField
        label="Pesquisar Música"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Pesquisar
      </Button>
      <Typography variant="h6" sx={{ marginTop: '20px' }}>Músicas Selecionadas:</Typography>
      <List>
        {playlistSongs.map((song) => (
          <ListItem key={song.id}>
            <ListItemText primary={song.title} secondary={song.artist} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" sx={{ marginTop: '20px' }}>Resultado da Pesquisa:</Typography>
      <List>
        {filteredSongs.map((song) => (
          <ListItem key={song.id} button onClick={() => handleAddSong(song)}>
            <ListItemText primary={song.title} secondary={song.artist} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={handleCreatePlaylist}>
        Criar Playlist
      </Button>
    </Box>
  );
};

export default Dashboard(AddPlaylist);
