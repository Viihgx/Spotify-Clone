import React from 'react';
import Dashboard from '../Layout/Dashboard';
import { Box, Typography, Grid, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import AudioPlayer from 'react-audio-player';
import Music1 from '../../assets/japaozin-carinha-de-nenem.mp3';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ImgCapa from '../../assets/ChillHits.jpg';
// import { Image } from '@mui/icons-material';

const songs = [
  {
    id: 1,
    thumb: "https://icongresso-x.s3-sa-east-1.amazonaws.com/demo/activity-scheduling/169635083171365.jpeg",
    title: 'Stargir Interlude',
    artist: 'Artista 1',
    duration: '3:45',
    audioUrl: Music1,
  },
  {
    id: 2,
    thumb: "https://icongresso-x.s3-sa-east-1.amazonaws.com/demo/activity-scheduling/169635083171365.jpeg",
    title: 'Música 2',
    artist: 'Artista 2',
    duration: '4:20',
    audioUrl: Music1,
  },
];

const ImageStyles = {
  width: '50px', 
  height: '50px', 
  marginRight: '16px',
};

function Playlist(props) {
  const [currentSong, setCurrentSong] = React.useState(null);

  const handlePlay = (song) => {
    setCurrentSong(song);
  }; 

  return (
    <Box sx={{width: "100%"}}>

    <Box sx={{
      background: "linear-gradient(0deg, rgba(18,18,18,1) 7%, rgba(233,20,41,1) 100%);",
      backgroundColor: "rgb(32,87,100)",
      display: "flex",
      justifyContent: "flex-start",
      color: "#fff",
      padding: "20px",
      marginTop: "60px",
      height: "70%",
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
      <Box sx={{ width: "100%"}}>
      <Box sx={{display: "flex", width: "100%"}}>
     
                <img src={ImgCapa} alt={ImgCapa} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <Typography variant="h1" sx={{ marginBottom: '20px' }}>
          Playlist
        </Typography>
        </Box>

      <Box sx={{background: "#121212"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text
          </Typography>
          <Divider />
              {songs.map((song) => (
          <List key={song.id}>
            <ListItem>
              <ListItemAvatar>
              <PlayArrowIcon onClick={() => handlePlay(song)}/>
              </ListItemAvatar>
              <div><img src={song.thumb} alt={song.title} style={ImageStyles} /></div>
              <ListItemText 
                primary={song.title}
                secondary={
                  <React.Fragment>
                    <Typography sx={{color: "white"}}></Typography>
                    {song.artist}
                  </React.Fragment>
                }
                />
            </ListItem>
          </List>
                ))}
        </Grid>
      </Grid>
      </Box>
   



        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {songs.map((song) => (
            <li key={song.id} style={{ marginBottom: '10px' }}>
              <PlayArrowIcon onClick={() => handlePlay(song)}/>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={song.img} alt={song.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                <div>
                  <span style={{ fontWeight: 'bold' }}>{song.title}</span>
                  <br />
                  <span>{song.artist}</span>
                </div>
              </div>
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
  </Box>
  );
}

export default Dashboard(Playlist);
