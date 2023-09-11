import React from 'react';
import './StickyNav.css';

function StickyNav() {
  return (
    <div className="main-content">
        <div className="sticky-nav">
          <div className="sticky-nav-icons">
            <img src="./assets/backward_icon.png" alt="backward_icon" />
            <img src="./assets/forward_icon.png" alt="forward_icon" className="hide" />    
          </div>

          <div className="sticky-nav-options">
            <div className='faq-nav'>
              FAQ
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
