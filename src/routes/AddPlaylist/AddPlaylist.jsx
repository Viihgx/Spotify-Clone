// import React, { useState, useEffect } from 'react';
// import Dashboard from '../../components/Layout/Dashboard';
// import { Box, Button, TextField, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
// import axios from 'axios';
// import { usePlaylist } from '../../PlaylistContext/PlaylistContext';

// function AddPlaylist() {
//   const { playlists, setPlaylists } = usePlaylist(); // Obtenha playlists do contexto

//   const [playlistData, setPlaylistData] = useState({
//     title: '',
//     description: '',
//     selectedSongs: [],
//   });

//   const [songs, setSongs] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/songs')
//       .then((response) => {
//         setSongs(response.data);
//       })
//       .catch((error) => {
//         console.error('Erro ao buscar músicas:', error);
//       });
//   }, []);

//   const handleCreatePlaylist = async () => {
//     try {
//       await axios.post('http://localhost:3000/playlists', playlistData);

//       // Adicione a playlist ao estado global
//       setPlaylists([...playlists, playlistData]);

//       // Lógica para lidar com o sucesso da criação da playlist
//       console.log('Playlist criada com sucesso!');
//     } catch (error) {
//       // Lógica para lidar com erros de criação de playlists
//       console.error('Erro ao criar a playlist:', error);
//     }
//   }

//   const handleSongSelection = (songId, selected) => {
//     if (selected) {
//       setPlaylistData({
//         ...playlistData,
//         selectedSongs: [...playlistData.selectedSongs, songId],
//       });
//     } else {
//       setPlaylistData({
//         ...playlistData,
//         selectedSongs: playlistData.selectedSongs.filter((id) => id !== songId),
//       });
//     }
//   };

//   return (
//     <Box className="box-container">
//       <form onSubmit={handleCreatePlaylist}>
//         <TextField
//           label="Título da playlist"
//           value={playlistData.title}
//           onChange={(e) => setPlaylistData({ ...playlistData, title: e.target.value })}
//         />
//         <TextField
//           label="Descrição da playlist"
//           value={playlistData.description}
//           onChange={(e) => setPlaylistData({ ...playlistData, description: e.target.value })}
//         />
//         <FormGroup>
//           {songs.map((song) => (
//             <FormControlLabel
//               key={song.id}
//               control={
//                 <Checkbox
//                   checked={playlistData.selectedSongs.includes(song.id)}
//                   onChange={(e) => handleSongSelection(song.id, e.target.checked)}
//                   name={`song-${song.id}`}
//                 />
//               }
//               label={song.title}
//             />
//           ))}
//         </FormGroup>
//         <Button variant="contained" color="primary" type="submit">
//           Criar playlist
//         </Button>
//       </form>
//     </Box>
//   );
// }

// export default Dashboard(AddPlaylist);
