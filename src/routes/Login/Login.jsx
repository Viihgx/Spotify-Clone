import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailBlur = () => {
    if (!email.includes('@')) {
      setEmailError('Este e-mail é inválido. Certifica-te de que tem este formato: exemplo@email.com.');
    } else {
      setEmailError('');
    }
  };

  const handleLogin = () => {
    if (emailError) {
      // Lógica login
      return;
    }
    // Lógica login
  };

  return (

    <div className="login-container">
      <div className="header-login">
        <img className="img-login" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Logo" />
      </div>
      <div className='title-login'>Registre-se para começar a ouvir</div>
      <form>
        <div className="form-group">
          <label>Endereço de e-mail</label>
          <input
            type="text"
            value={email}
            placeholder='nome@dominio.com'
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
          />
          {emailError && <p className="error-text-login">{emailError}</p>}
          <p></p>
          <div className='phone-number-login'>Utiliza antes o número de telefone.</div>
        </div>
        <p></p><p></p>
        <button className="btn-next-login" type="button" onClick={handleLogin}>
          Próximo
        </button>
        <div className='divider-login'>
          <div className='divider-txt-login'>
            ――――――――
          </div>
          ou
          <div className='divider-txt-login'>
            ――――――――
          </div>
        </div>
      <>
        <button className="btn-google" type="button" onClick={handleLogin}>
          Registra-te com o Google
        </button>
      </>
      <>
        <button className="btn-face-login" type="button" onClick={handleLogin}>
          Registra-te com o Facebook
        </button>
      </>
      </form>
    </div>
  );
}

export default Login;