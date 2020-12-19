import React from 'react'
import ChallengeLayout from '../../components/ChallengeLayout/ChallengeLayout';
import Sidebar from '../../components/Sidebar/Sidebar';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__sidebar">
        <Sidebar />
      </div>
      <div className="homepage__challenges">
        <ChallengeLayout />
      </div>
    </div>
  )
}

export default HomePage;
