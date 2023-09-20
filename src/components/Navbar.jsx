import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function StickyNav() {
  return (
    <div className="main-content">
      <div className="sticky-nav">
        <div className="sticky-nav-icons">

        <Button size='small'
            variant="contained"
            style={{
              borderRadius: "50px",
              background: "#131313",
              color: "white",
              fontSize: "0.85rem",
              fontWeight: "bold",
            }}
          > <ArrowBackIosIcon style={{fontSize: "1.3rem", fill: "#808080", fontWeight: ""}} />
          </Button>
          

        </div>

        <div className="sticky-nav-options">
          <div className='faq-nav'>
            <ul>
              <Link
                style={{ textDecoration: "none", textTransform: "none", color: "white" }} target="_blank" rel="noopener noreferrer" to='/principal/faq'> FAQ
              </Link>
            </ul>
          </div>

          <div className="divider" />

          <Button size="small"
            variant="contained"
            style={{
              borderRadius: "50px",
              backgroundColor: "white",
              color: "black",
              fontSize: "0.85rem",
              fontWeight: "bold",
              textTransform: "none"
            }}
          >
            Ver planos premium
          </Button>

          <Button size='small'
            variant="contained"
            style={{
              borderRadius: "50px",
              background: "#0E0E0E",
              color: "white",
              fontSize: "0.85rem",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            <ArrowCircleDownIcon /> 
            Contained
          </Button>

          <AccountCircleOutlinedIcon sx={{ marginRight: "1rem", fontSize: "1.8rem" }} />

        </div>
      </div>
    </div>
  );
}

export default StickyNav;
