import React from 'react';
import { Link } from 'react-router-dom';
import LogoPlatzimaster from '../../assets/images/logo-platzimaster.png';

import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <figure>
          <Link to='/'>
            <img src={LogoPlatzimaster} alt={LogoPlatzimaster} />
          </Link>
        </figure>
      </div>
      <div className='header__right'>
        <div className='header__myChallenges'>
          <Link to='/myChallenges'>
            <h3>My Challenges</h3>
          </Link>
          <Link to='/statistics'>
            <h3>Statistics</h3>
          </Link>
        </div>
        <figure>
          <div className='header__photo'></div>
          <p>Name</p>
        </figure>
      </div>
    </header>
  );
};

export default Header;
