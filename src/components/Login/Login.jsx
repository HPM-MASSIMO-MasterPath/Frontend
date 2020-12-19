import React, { useState } from 'react';
// import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './Login.scss';
import log_img from '../../assets/images/log_im.png';
import lozi from '../../assets/images/logo-platzimaster.png';
import { API } from '../../utils/config';

const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });
  const [err, setError] = useState({ error: false });
  let history = useHistory();

  const onLogin = e => {
    e.preventDefault();

    console.log('login', login);
    fetch(`${API}api/login`, {
      method: 'POST',
      body: JSON.stringify(login),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        if (response === 'unauthorized') {
          setError({ error: true });
        } else {
          history.push('/home');
        }
      });
  };
  const handleInputs = ({ target }) => {
    setLogin({
      ...login,
      [target.name]: target.value,
    });
  };
  return (
    <div className='login'>
      <div className='login__container'>
        <div className='login__image'>
          <img src={log_img} alt='' />
        </div>
        <div className='login__form'>
          <form>
            <div className='login__form--header'>
              <img src={lozi} alt='' />
              <h1>Sign In</h1>
            </div>
            <div className='login__form--group'>
              <label htmlFor='inputEmail'>Email Adress</label>
              <input
                name='username'
                type='text'
                placeholder='Enter your email'
                onChange={handleInputs}
              />
            </div>
            <div className='login__form--group'>
              <label htmlFor='inputPassword'>Password</label>
              <input
                name='password'
                type='password'
                placeholder='Enter your password'
                onChange={handleInputs}
              />
            </div>
            <div className='login__form--group'>
              <button type='button' onClick={onLogin}>
                Sign in
              </button>
              {err.error && <p>Bad Credentials</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
