import React from 'react';
import { API } from '../../utils/config';
import { useEffect, useState } from 'react';

import ChallengeCategories from '../ChallengeCategories/ChallengeCategories';
import ChallengeCarousel from '../ChallengeCarousel/ChallengeCarousel';
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import { Link } from 'react-router-dom';
import './ChallengeLayout.scss';

const ChallengeLayout = () => {
  const [challenges, setChallenge] = useState([]);

  useEffect(() => {
    const getChallenges = () => {
      fetch(`${API}challenge/id`)
        .then(res => res.json())
        .then(res => {
          const { challenges } = res;
          setChallenge(challenges);
        });
    };
    getChallenges();
  }, []);

  return (
    <>
      <h1 className='title__section'>
        <span>CHALLENGES</span>
      </h1>
      <ChallengeCategories title='Easy'>
        <ChallengeCarousel>
          {challenges.map((challenge, index) => (
            <Link to={`challengeDescription/${challenge.id}`} key={index}>
              <ChallengeCard {...challenge} />
            </Link>
          ))}
        </ChallengeCarousel>
      </ChallengeCategories>
      <ChallengeCategories title='Easy'>
        <ChallengeCarousel>
          {challenges.map((challenge, index) => (
            <Link to={`challengeDescription/${challenge.id}`} key={index}>
              <ChallengeCard {...challenge} />
            </Link>
          ))}
        </ChallengeCarousel>
      </ChallengeCategories>
      <ChallengeCategories title='Easy'>
        <ChallengeCarousel>
          {challenges.map((challenge, index) => (
            <Link to={`challengeDescription/${challenge.id}`} key={index}>
              <ChallengeCard {...challenge} />
            </Link>
          ))}
        </ChallengeCarousel>
      </ChallengeCategories>
    </>
  );
  /* 
      <div className="card">
        {
        challenges?.map(challenge =>{
          return(
            <div key={challenge.id} className="card__title">
              <h2> {challenge.name}</h2>
              <img className="card__image" src={challenge.url_img}  />
              <h4>{challenge.difficulty}</h4>
            </div>
          )
        })
      }
      </div> */
};

export default ChallengeLayout;
