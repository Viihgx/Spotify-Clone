import React from 'react';
import Dashboard from '../Layout/Dashboard';
import { Box, Typography, Grid } from '@mui/material';
import AudioPlayer from 'react-audio-player';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ImgCapa from '../../assets/ChillHits.jpg';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import song from '../Music/SongBase';
import './Playlist.css';

function Playlist(props) {
  const [currentSong, setCurrentSong] = React.useState(null);

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  return (
    <Box className="box-container">
      <Box className="box-main">
        <img src={ImgCapa} alt={ImgCapa} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <Typography variant="h1" sx={{ marginBottom: '20px' }}>
          Playlist
        </Typography>
      </Box>
      <Box>
        <Box className="table-header">
          <Grid container>
            <Grid item xs={6}>
              <Box className="row-id">
                <Typography># Título</Typography>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Box className="row" sx={{ marginLeft: '10px' }}>
                <Typography>Álbum</Typography>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <Box className="row">
                <AccessTimeIcon />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box>
          {song.map((song) => (
            <Box className="table-music">
              <Grid container key={song.id}>
                <Grid item xs={6}>
                  <Box
                    className="row-id"
                    sx={{ display: 'flex', gap: '5px', with: '30%' }}
                  >
                    <PlayArrowIcon onClick={() => handlePlay(song)} />
                    <div className='music-img'>
                      <img src={song.thumb} alt={song.title} className='music-img'/>
                    </div>
                    <Typography>{song.title}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box className="row" sx={{ marginLeft: '10px' }}>
                    <Typography>{song.artist}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box className="row">
                    <Typography>{song.duration}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
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
