import React from 'react';
import './ChallengeCategories.scss';

const ChallengeDescription = ({children, title}) => (
  <div className="categories">
    <h2 className="categories__title">{title}</h2>
    {children}
  </div>
)

export default ChallengeDescription;