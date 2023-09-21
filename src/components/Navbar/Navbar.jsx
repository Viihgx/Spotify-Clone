import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Box } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="fixed" sx={{display: 'flex', width: '74%', marginLeft: 'auto', marginTop: '14px', right: 0, borderRadius: '8px 8px 0 0' ,backgroundColor: '#121212', zIndex: '100'}}>
      <Toolbar>
        <IconButton
          size="small"
          sx={{
            borderRadius: '50px',
            backgroundColor: '#131313',
            color: 'white',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            marginRight: '1rem',
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: '1.3rem', fill: '#808080' }} />
        </IconButton>

        <Box flexGrow={1} sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            to="/principal/faq"
            style={{ textDecoration: 'none', textTransform: 'none', color: 'white' }}
            target="_blank"
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
              marginLeft: '35rem',
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
                '&:hover': {
                  backgroundColor: '#0E0E0E',
                  transform: 'scale(1.05)',
                },
              }}
            >
            <ArrowCircleDownIcon style={{marginRight: "0.3rem", fontSize: "21px"}}/> 
            Instalar aplicativo
          </Button>
            <AccountCircleOutlinedIcon sx={{ fontSize: '1.8rem', marginRight: '1rem' }} />  
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
