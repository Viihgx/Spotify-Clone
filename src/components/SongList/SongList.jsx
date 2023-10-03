import React from 'react';
import Card from '../Card/Card';
import './SongList.css'

const mockPlaylists = [
  {
    id: 1,
    thumb: "https://icongresso-x.s3-sa-east-1.amazonaws.com/demo/activity-scheduling/169635083171365.jpeg",
    title:"Playlist 0",
    description: "Descrição Playlist 0",
    songs:[
      {id:'song-1',title:'song one'},
      {id:'song-2',title:'song two'}]
      },

] 
function SongList() {
  return (
    <div className="Songlist">
        <Card arrayPlaylist = {mockPlaylists} />
    </div>
  );
}   

export default SongList;
