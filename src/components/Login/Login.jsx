import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import './Login.scss';
import log_img from '../../assets/images/log_im.png';
import lozi from '../../assets/images/logo-platzimaster.png';
import { API } from '../../utils/config';

const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  })
  const onLogin = (e) => {
    // e.preventDefault();
    fetch(`${API}api/login`, JSON.stringify({
      username: login.username,
      password: login.password
    }))
      .then(res => {
        console.log(res)
      })
  }
  const handleInputs = ({ target }) => {
    setLogin({
      ...login,
      [target.name]: target.value
    })
    console.log(login.username)
    console.log(login.password)
  }
  return (
    <div className='login'>
      <div className='login__container'>
        <div className='login__image'>
          <img src={log_img} alt='' />
        </div>
        <div className='login__form'>
          <form form={`${API}api/login`} onSubmit={onLogin}>
            <div className='login__form--header'>
              <img src={lozi} alt='' />
              <h1>Sign In</h1>
            </div>
            <div className='login__form--group'>
              <label htmlFor='inputEmail'>Email Adress</label>
              <input name="username" type='text' placeholder='Enter your email' onChange={handleInputs} />
            </div>
            <div className='login__form--group'>
              <label htmlFor='inputPassword'>Password</label>
              <input name="password" type='password' placeholder='Enter your password' onChange={handleInputs} />
            </div>
            <div className='login__form--group'>
              <button type='submit'>Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
