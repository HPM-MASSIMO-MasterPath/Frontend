import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import ChallengeDescription from '../../components/ChallengeDescription/ChallengeDescription.jsx';
import './ChallengePage.scss';

const ChallengePage = () => {
  return (
    <div className='challenge'>
      <div className='challenge__sidebar'>
        <Sidebar />
      </div>
      <div className='challenge__description'>
        <ChallengeDescription />
      </div>
    </div>
  );
};

export default ChallengePage;
