import React, { useState, useEffect } from 'react';
import MyChallengeCard from './MyChallengeCard.jsx';
import { API } from '../../utils/config.jsx';

import './MyChallenges.scss';

const MyChallenges = () => {
  const [challenges, setMyChallenges] = useState([]);

  useEffect(() => {
    const getMyChallenges = () => {
      fetch(`${API}challenge/id`)
        .then(res => res.json())
        .then(res => {
          const { challenges } = res;
          // console.log('Challenges', challenges);
          setMyChallenges(challenges);
        });
    };

    getMyChallenges();
  }, []);

  return (
    <div className='myChallengesContainer'>
      <div className='myChallenges__title'>
        <h2>CHALLENGES</h2>
      </div>

      {challenges.map((myChallenge, index) => (
        <MyChallengeCard key={index} {...myChallenge} />
      ))}
    </div>
  );
};

export default MyChallenges;
