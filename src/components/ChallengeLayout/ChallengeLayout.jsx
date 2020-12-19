import React from 'react';
import { API } from '../../utils/config';
import { useEffect, useState} from 'react';


import ChallengeCategories from '../ChallengeCategories/ChallengeCategories';
import ChallengeCarousel from '../ChallengeCarousel/ChallengeCarousel';
import ChallengeCard from '../ChallengeCard/ChallengeCard'

const ChallengeLayout =()=>{
  const [challenges, setChallenge] = useState([]);

  useEffect(()=>{
    const getChallenges = ()=>{
      fetch(`${API}challenge/id`)
        .then(res => res.json())
        .then(res => {
          const { challenges } = res;
          setChallenge(challenges)
        })
    }
    getChallenges()
  }, [])
  console.log(challenges)
  return(
    <>
      <ChallengeCategories title="Easy">
      <ChallengeCarousel>
       {challenges.map(challenge =>
          <ChallengeCard
          key={challenge.id}
          {...challenge}
        />
        )}
      </ChallengeCarousel>
      </ChallengeCategories>
      <ChallengeCategories title="Easy">
      <ChallengeCarousel>
       {challenges.map(challenge =>
          <ChallengeCard
          key={challenge.id}
          {...challenge}
        />
        )}
      </ChallengeCarousel>
      </ChallengeCategories>
      <ChallengeCategories title="Easy">
      <ChallengeCarousel>
       {challenges.map(challenge =>
          <ChallengeCard
          key={challenge.id}
          {...challenge}
        />
        )}
      </ChallengeCarousel>
      </ChallengeCategories>
    </>
    )

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
  
}

export default ChallengeLayout;