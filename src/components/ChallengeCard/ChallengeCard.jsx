import React from 'react'
import PropTypes from 'prop-types';
import './ChallengeCard.scss';

const ChallengeCard = (props) => {
  const {name, url_image, difficulty} = props;

  return (
    <div className="card">
      <div className="card__title">
        <h2>{name}</h2>
      </div>
      <img className="card__image" src={url_image} />
      <h4>{difficulty}</h4>
      <button className="card__btn">Go</button>
    </div>
  );
};



export default ChallengeCard;