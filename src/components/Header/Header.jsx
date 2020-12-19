import React from 'react';
import { Link } from 'react-router-dom';
import LogoPlatzimaster from '../../assets/images/logo-platzimaster.png';

import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <figure>
            <img src={LogoPlatzimaster} alt={LogoPlatzimaster} />
          </figure>
        </Link>
      </div>
      <div className='header__right'>
        <div className='header__myChallenges'>
          <Link to='/myChallenges'>
            <h3>My Challenges</h3>
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
