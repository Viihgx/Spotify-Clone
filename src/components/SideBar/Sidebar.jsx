import React from 'react';
import './Sidebar.css';
import Library from '../Library/Library';
import { GoHome } from 'react-icons/go';
import { CiSearch } from 'react-icons/ci';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="nav">
        <div className="items-option" style={{display: 'flex', alignItems: 'center' }}>
          <GoHome style={{ marginRight: '19px', fontSize: '26px', fill: 'grey', verticalAlign: 'middle' }} />
            <p style={{ display: 'flex', fontSize: '1rem', fontWeight: '600', alignItems: 'center', color: 'white' }}>
              Início
            </p>
        </div>

        <div className="items-option" style={{display: 'flex', alignItems: 'center' }}>
          <CiSearch style={{ marginRight: '19px', fontSize: '25px', fill: 'grey', verticalAlign: 'middle' }} />
            <p style={{ fontSize: '1rem', fontWeight: '600', color: 'white' }}>
              Buscar
            </p>
        </div>
      </div>
      <Library /> 
    </div>
  );
}

export default Sidebar;
