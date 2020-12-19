import React from 'react';
import './ChallengeCategories.scss';

const ChallengeDescription = ({children, difficulty}) => (
  <div className="categories">
    <h2 className="categories__title">{difficulty}</h2>
    {children}
  </div>
)

export default ChallengeDescription;