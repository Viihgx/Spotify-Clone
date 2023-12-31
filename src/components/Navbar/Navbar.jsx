import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
//
function Navbar() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navegue de volta para a página anterior
  };


  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  }

  return (
    <AppBar position="fixed" sx={{ display: 'flex', width: '71.8%', marginLeft: 'auto', marginTop: '14px', right: 0, borderRadius: '8px 8px 0 0', backgroundColor: '#121212', zIndex: '1000' }}>
      <Toolbar>
        <IconButton
          size="small"
          onClick={handleGoBack}
          sx={{
            borderRadius: '50px',
            backgroundColor: '#0A0A0A',
            color: 'white',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            marginRight: '0.5rem',
            alignItems: 'center',
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: '1.3rem', fill: '#808080' }} />
        </IconButton>

        <IconButton
          size="small"
          sx={{
            borderRadius: '50px',
            backgroundColor: '#0A0A0A',
            color: 'white',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            marginRight: '1rem',
            alignItems: 'center',
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: '1.3rem', fill: '#808080' }} />
        </IconButton>

        <Box flexGrow={1} sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            to="/faq"
            style={{ textDecoration: 'none', textTransform: 'none', color: 'white', marginLeft: '10px' }}

            rel="noopener noreferrer"
          >
            FAQ
          </Link>

          <div style={{ width: '1px', height: '1.5rem', backgroundColor: 'aliceblue' }} />

          <Button
            size="small"
            variant="contained"
            sx={{
              borderRadius: '50px',
              backgroundColor: 'white',
              color: 'black',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              textTransform: 'none',
              marginLeft: '32rem',
              lineHeight: '1',
              '&:hover': {
                backgroundColor: 'white',
                transform: 'scale(1.05)',
              },
            }}
          >
            Ver planos Premium
          </Button>

          <Button
            size="small"
            variant="contained"
            sx={{
              borderRadius: '50px',
              backgroundColor: '#0E0E0E',
              color: 'white',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              textTransform: 'none',
              lineHeight: '1',
              '&:hover': {
                backgroundColor: '#0E0E0E',
                transform: 'scale(1.05)',
              },
            }}
          >
            <ArrowCircleDownIcon style={{ marginRight: "0.3rem", fontSize: "1.7rem" }} />
            Instalar aplicativo
          </Button>

          {/* <Link
            to="/Login"
            style={{ marginLeft: '10px' }}
            rel="noopener noreferrer"
          > */}
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{
                minWidth: '0', padding: '0', display: 'flex', textDecoration: 'none', textTransform: 'none',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#0E0E0E',
                  transform: 'scale(1.05)',
                }
              }}>


              <AccountCircleOutlinedIcon />

            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <Link to="/Profile"
              style={{textDecoration: 'none', textTransform: 'none', color: 'black'}}>
              <MenuItem onClick={handleClose}>Meu perfil</MenuItem>
              </Link>
              
              <Link to="/Login"
              style={{textDecoration: 'none', textTransform: 'none', color: 'black'}}>
              <MenuItem onClick={handleClose}>Sair</MenuItem>
              </Link>
            </Menu>
          {/* </Link> */}

        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;