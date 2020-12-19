import React from 'react';
import { Link } from 'react-router-dom';

import './MyChallenges.scss';

const myChallengeCard = props => {
  const { id, name, url_image } = props;
  return (
    <div className='myChallenges__card'>
      <div className='myChallenges__card-text'>
        <img src={url_image} alt='challenge image' />
        <p>{name}</p>
      </div>
      <div className='myChallenges__card-button'>
        <Link to={`/challengeDescription/${id}`}>
          <button>GO</button>
        </Link>
      </div>
    </div>
  );
};

export default myChallengeCard;
