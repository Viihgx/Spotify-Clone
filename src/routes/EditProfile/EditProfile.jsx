import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './EditProfile.css';

function EditProfile() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailBlur = () => {
    if (!email.includes('@')) {
      setEmailError('Este e-mail é inválido. Certifica-te de que tem este formato: exemplo@email.com.');
    } else {
      setEmailError('');
    }
  };

  const handleEditProfile = () => {
  };

  return (

    <div className="editprofile-container">
      <div className="header-editprofile">
        <img className="img-editprofile" src="https://sticker-collection.com/stickers/plain/AnimeRandom_achub/512/e6673a4e-a68e-4702-bb5a-40af715c3f39file_2940597.webp" alt="Logo" />
      </div>
      <button className="btn-edit-editprofile" type="button" onClick={(() => {
            window.location.href = ''
          })}>
        Editar foto de perfil
        </button>
      <p></p>
      <div className='title-editprofile'>Marília Barbosa </div>
          <br></br>
          <label>Editar nome</label>
          <p></p>
          <input
            type="text"
          />
          <p></p>
          <button>Confirmar</button>
          <p></p>
      <div className="form-group">
          <label>Editar endereço de e-mail</label>
          <p></p>
          <input
            type="text"
            value={email}
            placeholder='nome@dominio.com'
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
          />
          {emailError && <p className="error-text-register">{emailError}</p>}
          <p></p>
          <button>Confirmar</button>
          <p></p>
          <label>Editar senha</label>
          <p></p>
          <input
            type="password"
          />
          <p></p>
          <label>Confirmar senha</label>
          <p></p>
          <input
            type="password"
          />
          <p></p>
          <button>Confirmar</button>
        </div>

      <form><p></p>
        <div className="form-group">



        </div>
        <>
        <button className="btn-face-editprofile" type="button" onClick={(() => {
            window.location.href = '/Profile'
          })}>
        Voltar para o meu perfil
        </button>
      </>
      <>
        <button className="btn-face-editprofile" type="button" onClick={(() => {
            window.location.href = '/Home'
          })}>
        Voltar para a página inicial
        </button>
      </>
      </form>
    </div>
  );
}

export default EditProfile;