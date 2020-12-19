import React from 'react';
import './ChallengeCarousel.scss';

const ChallengeCarousel = ({children}) => (
  <section className="carousel">
    <div className="carousel__container">
      {children}
    </div>
  </section>
)

export default ChallengeCarousel;