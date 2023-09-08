import React from 'react';
import './Library.css';

function Library() {
  return (
    <div className="library">
      <div className="options">
        <div className="lib-option nav-option">
          <img src="./assets/library_icon.png" alt="library logo" />
          <a href="www.google.com">Sua Biblioteca</a>
        </div>
        <div className="icons">
          <i className="fa-solid fa-plus"></i>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="lib-box">
        <div className="box">
          <p className="box-p1">Crie sua primeira playlist</p>
          <p className="box-p2">É fácil, vamos te ajudar.</p>
          <button className="badge">Criar playlist</button>
        </div>
        <div className="box">
          <p className="box-p1">Que tal seguir um podcast novo?</p>
          <p className="box-p2">Avisaremos você sobre novos episódios.</p>
          <button className="badge">Explore podcasts</button>
        </div>
      </div>
    </div>
  );
}

export default Library;
