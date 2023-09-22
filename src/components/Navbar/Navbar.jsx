import React from 'react'
import { AppBar, Toolbar, IconButton, Button, Box, Grid, Divider } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // Navegue de volta para a página anterior
  }

  return (
    <Grid className='navbar' container>
      <Grid className='navigation-btn_container'>
        <IconButton size='small' className='nav-btn' onClick={handleGoBack}>
          <ArrowBackIosIcon sx={{ fontSize: '1.3rem', fill: '#808080' }} />
        </IconButton>

        <IconButton size='small' className='nav-btn'>
          <ArrowForwardIosIcon sx={{ fontSize: '1.3rem', Grid: '#808080' }} />
        </IconButton>
      </Grid>

      <Grid className='navbar-items'>
        <Link
          to='/faq'
          style={{ textDecoration: 'none', textTransform: 'none', color: 'white', marginLeft: '10px' }}
          rel='noopener noreferrer'>
          FAQ
        </Link>

        <Divider orientation='vertical' className='divider' flexItem />
        {/* <div style={{ width: '1px', height: '1.5rem', backgroundColor: 'aliceblue' }} /> */}

        <Button
          size='small'
          variant='contained'
          sx={{
            borderRadius: '50px',
            backgroundColor: 'white',
            color: 'black',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            textTransform: 'none',
            marginLeft: '32rem',
            '&:hover': {
              backgroundColor: 'white',
              transform: 'scale(1.05)',
            },
          }}>
          Ver planos Premium
        </Button>

        <Button
          size='small'
          variant='contained'
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
          }}>
          <ArrowCircleDownIcon style={{ marginRight: '0.3rem', fontSize: '21px' }} />
          Instalar aplicativo
        </Button>
        <AccountCircleOutlinedIcon sx={{ fontSize: '1.8rem', marginRight: '1rem' }} />
      </Grid>
    </Grid>
  )
}

export default Navbar
