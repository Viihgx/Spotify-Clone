import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailBlur = () => {
    if (!email.includes('@')) {
      setEmailError('Este e-mail é inválido. Certifica-te de que tem este formato: exemplo@email.com.');
    } else {
      setEmailError('');
    }
  };

  const handleRegister = () => {
    if (emailError) {
      // Lógica register
      return;
    }
    // Lógica register
  };

  return (

    <div className="register-container">
      <div className="header-register">
        <img className="img-register" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Logo" />
      </div>
      <div className='title-register'>Registre-se para começar a ouvir</div>
      <form><p></p>
        <div className="form-group">
          <label>Endereço de e-mail</label>
          <input
            type="text"
            value={email}
            placeholder='nome@dominio.com'
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
          />
          {emailError && <p className="error-text-register">{emailError}</p>}
          <p></p>
          <label>Nome</label>
          <p></p>
          <input
            type="text"
          />
          <p></p>
          <label>Senha</label>
          <p></p>
          <input
            type="password"
          />
          <p></p>
          <div className='phone-number-register'>Utiliza antes o número de telefone.</div>
        </div>
        <p></p><p></p>
        <button className="btn-next-register" type="button" onClick={handleRegister}>
          Próximo
        </button>
        <div className='divider-register'>
          <div className='divider-txt-register'>
            ――――――――
          </div>
          ou
          <div className='divider-txt-register'>
            ――――――――
          </div>
        </div>
      <>
        <button className="btn-google" type="button" onClick={handleRegister}>
          Registre-se com o Google
        </button>
      </>
      <>
        <button className="btn-face-register" type="button" onClick={handleRegister}>
        Registre-se com o Facebook
        </button>
      </>
      </form>
    </div>
  );
}

export default Register;