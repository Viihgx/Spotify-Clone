import React from 'react';
import './StickyNav.css';
import { Link } from 'react-router-dom';

// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import { Grid } from '@mui/material';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


// export default function SvgMaterialIcons() {
//   return ( 
//   <Grid item xs={2}>
//     <KeyboardArrowLeftIcon/>
//   </Grid>
//   )}

function StickyNav() {
  return (
    <div className="main-content">
        <div className="sticky-nav">
          <div className="sticky-nav-icons">
      
          {/* <KeyboardArrowLeftIcon sx={{ marginRight: "10px" }} /> */}

              
          </div>

          <div className="sticky-nav-options">
            <div className='faq-nav'>
              <ul>
              <Link style={{textDecoration: "none", color:"white" }} target="_blank" rel="noopener noreferrer" to='/faq'>FAQ</Link>
              </ul>
              
            </div>
            
            <div className="divider"/>

            <button className="badge nav-item hide">Ver planos premium</button>
            <button className="badge nav-item dark-badge"><i className="fa-regular fa-circle-down" style={{marginRight: '0.5rem'}} />Instalar aplicativo</button>
            <a href="./Login/login.html" target="_blank"><i className="fa-regular fa-user nav-item" /></a>
          </div>
        </div>
      </div>
  );
}

export default StickyNav;
