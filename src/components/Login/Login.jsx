import React, { Component } from 'react'
import { useState } from 'react';
import { API } from '../../utils/config';


import './Login.scss';
import log_img from '../../assets/images/log_im.png';
import lozi from '../../assets/images/logo-platzimaster.png';

class Login extends Component {
  constructor()
  {
    super();
    this.state={
      username: "",
      password: ""
    }
  }

login(){
  console.log(this.state);
  fetch(`${API}api/login`)
  .then((res => res.json())
  .then(res =>)
    data.json().then((resp)=>{
      console.warn('resp', resp)
      if(resp.length>0){
        console.warn(this.props.history.push('/'))
      }else{
        alert('please check username or passord')
      }
  })
}

render(){
  return (
    <div className="login">
      <div className="login__container">
      <div className="login__image">
        <img src={log_img} alt=""/>
      </div>
      <div className="login__form">
        <form >
          <div className="login__form--header">
            <img src={lozi} alt=""/>
            <h1>Sign In</h1>
          </div>
          <div className="login__form--group">
            <label htmlFor="inputEmail">username</label>
            <input
              name="user"
              onChange={(event)=>this.setState({username:event.target.value})}
              type="text" placeholder="Enter your email" />
          </div>
          <div className="login__form--group">
            <label htmlFor="inputPassword">Password</label>
            <input
              name="password"
              onChange={(event)=>this.setState({pass:event.target.value})}
              type="password" placeholder="Enter your password" />
          </div>
          <div className="login__form--group">
          <button onClick={()=>{this.login()}} type="submit">Sign in</button>
          </div>
        </form>
      </div>
      </div>
    </div>
);
}
  
};

export default Login;