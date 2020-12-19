import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import MyChallenges from '../../components/MyChallenges/MyChallenges.jsx';
import './MyChallengesPage.scss';

const ChallengesPage = () => {
  return (
    <div className='myChallenges'>
      <div className='myChallenges__sidebar'>
        <Sidebar />
      </div>
      <div className='myChallenges__challenges'>
        <MyChallenges />
      </div>
    </div>
  );
};

export default ChallengesPage;
