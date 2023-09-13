import React from 'react';
import './Library.css';

function Library() {
  return (
    <div className="library">
      <div className="options">
        <div className="lib-option nav-option">
        <svg className="white-search-icon" role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>

          <p>
            Sua Biblioteca
          </p>
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
