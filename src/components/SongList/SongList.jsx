import React from 'react';
import Card from '../Card/Card';
//import './SongList.css';
import { Box, Grid } from '@mui/material'; 

const mockPlaylists = [
  {
    id: 1,
    thumb: "https://icongresso-x.s3-sa-east-1.amazonaws.com/demo/activity-scheduling/169635083171365.jpeg",
    title: "Playlist 0",
    description: "Descrição Playlist 0",
    songs: [
      { id: 'song-1', title: 'song one' },
      { id: 'song-2', title: 'song two' }
    ]
  },
];

function SongList() {
  return (
    <Box>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={8} md={8} lg={12}>
              <Card arrayPlaylist = {mockPlaylists} />
          </Grid>
      </Grid>
    </Box>
  );
}

export default SongList;
