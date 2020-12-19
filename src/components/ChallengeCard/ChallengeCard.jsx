import React from 'react'
import PropTypes from 'prop-types';
import './ChallengeCard.scss';

import js from '../../assets/images/js.jpg';

const ChallengeCard = (props) => {
  const {title, image, subtitle} = props;

  return (
    <div className="card">
      <div className="card__title">
        <h2>Basic easy challenge title {title}</h2>
      </div>
      <img className="card__image" src={js} alt={title} />
      <h4>Escuela Javascript</h4>
      <button className="card__btn">Go</button>
    </div>
  );
};

ChallengeCard.prototype = {
  title: PropTypes.string,
  image: PropTypes.string,
  subtitle: PropTypes.string
}

export default ChallengeCard;