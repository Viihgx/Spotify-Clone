import React from 'react';
import Dashboard from '../Layout/Dashboard';
import { Box, Typography, Grid} from '@mui/material';
import AudioPlayer from 'react-audio-player';
import Music1 from '../../assets/japaozin-carinha-de-nenem.mp3';

const songs = [
  {
    id: 1,
    title: 'Música 1',
    artist: 'Artista 1',
    duration: '3:45',
    audioUrl: Music1,
  },
  {
    id: 2,
    title: 'Música 2',
    artist: 'Artista 2',
    duration: '4:20',
    audioUrl: Music1,
  },

];
function Playlist() {
   const [currentSong, setCurrentSong] = React.useState(null);

  const handlePlay = (song) => {
    setCurrentSong(song);
  };
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
           </Box>

          <Box>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Playlist
      </Typography>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <button onClick={() => handlePlay(song)}>Play</button>
            <span>{song.title} - {song.artist}</span>
          </li>
        ))}
      </ul>
      {currentSong && (
        <AudioPlayer
          src={currentSong.audioUrl}
          autoPlay
          controls
          onEnded={() => setCurrentSong(null)}
        />
      )}
    </Box>
          
          
       
    </Box>
  );
}

export default Dashboard(Playlist);