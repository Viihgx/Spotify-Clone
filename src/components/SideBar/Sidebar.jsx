import { Box, Grid } from '@mui/material'
import Library from '../Library/Library'
import { GoHome } from 'react-icons/go'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <Grid container>
        {/* <Box sx={{ background: '#121212', padding: '8px 12px', borderRadius: '8px', width: '340px' }}>
          <Link
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              textDecoration: 'none',
              color: 'white',
              fontSize: '1rem',
              fontWeight: 700,
            }}>
            <GoHome style={{ marginRight: '15px', fontSize: '25px', fill: '#b3b3b3' }} />
            <Link style={{ textDecoration: 'none', color: '#b3b3b3', fontSize: '1rem' }} to={'/'}>
              {' '}
              <p> Início </p>
            </Link>
          </Link>
          <Link
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              textDecoration: 'none',
              color: 'white',
              fontSize: '1rem',
              fontWeight: 700,
            }}>
            <CiSearch style={{ height: '25px', width: '24px', marginRight: '15px', fill: '#b3b3b3' }} />
            <p style={{ textDecoration: 'none', color: '#b3b3b3', fontSize: '1rem' }}>Buscar</p>
          </Link>
        </Box> */}
        {/* <Library /> */}
      </Grid>
    </>
  )
}

export default Sidebar
