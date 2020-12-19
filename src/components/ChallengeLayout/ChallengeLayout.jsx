import React from 'react';

import ChallengeCategories from '../../components/ChallengeCategories';
import ChallengeCarousel from '../../components/ChallengeCarousel';
import ChallengeCard from '../../components/ChallengeCard';

const ChallengeLayout =({easy,medium,hard})=>{
  return(
    <>
      <ChallengeCategories title="Easy">
      </ChallengeCategories>

      <ChallengeCategories title="Medium">
      </ChallengeCategories>

      <ChallengeCategories title="Hard">
      </ChallengeCategories>
  </>
  )
}