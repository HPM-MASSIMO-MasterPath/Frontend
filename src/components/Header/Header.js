import React from 'react';
import LogoPlatzimaster from '../../assets/images/logo-platzimaster.png';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <figure>
          <img src={LogoPlatzimaster} alt={LogoPlatzimaster} />
        </figure>
      </div>
      <div className="header__right">
        <figure>
          <div className="header__photo"></div>
          <p>Name</p>
        </figure>
      </div>
    </header>
  );
};

export default Header;