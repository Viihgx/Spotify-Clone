import React from 'react';
import './Card.css';
import { Card, CardMedia, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const cardContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "8px",
    width: "180px",
    height: "250px",
    borderRadius: "8px",
    background: "#181818",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    justifyContent: "center",
  };

  const imageContainerStyle = {
    width: "100%",
    height: "70%",
    marginBottom: "8px",
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
  };
  
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const titlePlaylistsStyle = {
    fontWeight: "600",
    margin: "1rem 0 1rem 0",
  };

function CardComponent({ img, title, description }) {
  return (
    <Card className="cards"  style={cardContainerStyle}>
      <Link to="/playlist">
        <Box style={imageContainerStyle}>
        <CardMedia component="img" src={img} alt="Top Hits" className="card-img" style={imageStyle}/>
        </Box>
        
          <Typography variant="h6" className="card-title">
            {title}
          </Typography>
          <Typography variant="body2" className="card-info">
            {description}
          </Typography>
    
      </Link>
    </Card>

  );
}

function CardList(props) {
  return (
    <div className='card'>
      <Typography variant="h5" style={titlePlaylistsStyle} className="playlists-name">Músicas novinhas em folha</Typography>

      <div className="card-container">
        {props.arrayPlaylist.map((item) => (
          <CardComponent
            key={item.id}
            img={item.thumb}
            title={item.title}
            description={item.description}
          />
        ))}
        {props.arrayPlaylist.map((item) => (
          <CardComponent
            key={item.id}
            img={item.thumb}
            title={item.title}
            description={item.description}
          />
        ))}
        {props.arrayPlaylist.map((item) => (
          <CardComponent
            key={item.id}
            img={item.thumb}
            title={item.title}
            description={item.description}
          />
        ))}
        {props.arrayPlaylist.map((item) => (
          <CardComponent
            key={item.id}
            img={item.thumb}
            title={item.title}
            description={item.description}
          />
        ))}
        {props.arrayPlaylist.map((item) => (
          <CardComponent
            key={item.id}
            img={item.thumb}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <Typography variant="h5" style={titlePlaylistsStyle} className="playlists-name">Playlist do Spotify</Typography>
      
      <div className="card-container">
        {props.arrayPlaylist.map((item) => (
          <CardComponent
            key={item.id}
            img={item.thumb}
            title={item.title}
            description={item.description}
          />
        ))}
        {props.arrayPlaylist.map((item) => (
          <CardComponent
            key={item.id}
            img={item.thumb}
            title={item.title}
            description={item.description}
          />
        ))}
        {props.arrayPlaylist.map((item) => (
          <CardComponent
            key={item.id}
            img={item.thumb}
            title={item.title}
            description={item.description}
          />
        ))}
        {props.arrayPlaylist.map((item) => (
          <CardComponent
            key={item.id}
            img={item.thumb}
            title={item.title}
            description={item.description}
          />
        ))}
        {props.arrayPlaylist.map((item) => (
          <CardComponent
            key={item.id}
            img={item.thumb}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/* Resto do seu código */}
    </div>
  );
}

export default CardList;
