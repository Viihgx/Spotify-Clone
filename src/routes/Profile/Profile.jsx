import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './Profile.css';

function Profile() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailBlur = () => {
    if (!email.includes('@')) {
      setEmailError('Este e-mail é inválido. Certifica-te de que tem este formato: exemplo@email.com.');
    } else {
      setEmailError('');
    }
  };

  const handleProfile = () => {
    if (emailError) {
      // Lógica profile
      return;
    }
    // Lógica profile
  };

  return (

    <div className="profile-container">
      <div className="header-profile">
        <img className="img-profile" src="https://sticker-collection.com/stickers/plain/AnimeRandom_achub/512/e6673a4e-a68e-4702-bb5a-40af715c3f39file_2940597.webp" alt="Logo" />
      </div>
      <div className='subtitle-profile'>Usuário</div>
      <p></p>
      <div className='title-profile'>Marília Barbosa</div>
      <button className="btn-edit-profile" type="button" onClick={(() => {
            window.location.href = '/EditProfile'
          })}>
        Editar
        </button>
      <form><p></p>
        <div className="form-group">

          <label><strong>0</strong> Playlists </label>

          <label><strong>| 1</strong> Seguidor </label>

          <label><strong>| 6</strong> Seguindo</label>

          <p></p>

          <label><strong>Playlists </strong></label><br></br><br></br>
          <label>Ainda não há nenhuma playlist</label><br></br><br></br>

        </div>
    
      <>
        <button className="btn-face-profile" type="button" onClick={(() => {
            window.location.href = '/Home'
          })}>
        Voltar para a página inicial
        </button>
      </>
      </form>
    </div>
  );
}

export default Profile;