import React from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';
import log_img from '../../assets/images/log_im.png';
import lozi from '../../assets/images/logo-platzimaster.png';

const Login = () => {
  return (
    <div className='login'>
      <div className='login__container'>
        <div className='login__image'>
          <img src={log_img} alt='' />
        </div>
        <div className='login__form'>
          <form action=''>
            <div className='login__form--header'>
              <img src={lozi} alt='' />
              <h1>Sign In</h1>
            </div>
            <div className='login__form--group'>
              <label htmlFor='inputEmail'>Email Adress</label>
              <input type='text' placeholder='Enter your email' />
            </div>
            <div className='login__form--group'>
              <label htmlFor='inputPassword'>Password</label>
              <input type='password' placeholder='Enter your password' />
            </div>
            <div className='login__form--group'>
              <Link to='/home'>
                <button type='submit'>Sign in</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
