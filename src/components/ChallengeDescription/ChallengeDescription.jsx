import React from 'react';

import './ChallengeDescription.scss';

const ChallengeDescription = () => {
  return (
    <div className='description'>
      <div className='description__title'>
        <h2>
          |CHALLENGE <span>|EASY</span>
        </h2>
      </div>
      <div className='description__card'>
        <div className='description__card-text'>
          <h3>Basic easy challenge title</h3>
          <h4>About the challenge</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam
            assumenda reiciendis laudantium veniam magnam. Autem, voluptates
            dolor sapiente, consectetur nisi, ipsa nulla libero ut minima
            doloribus at dolorum incidunt. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam
            assumenda reiciendis laudantium veniam magnam. Autem, voluptates
            dolor sapiente, consectetur nisi, ipsa nulla libero ut minima
            doloribus at dolorum incidunt. dolorum incidunt. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam
            assumenda reiciendis laudantium veniam magnam. Autem, voluptates
            dolor sapiente, consectetur nisi, ipsa nulla libero ut minima
            doloribus at dolorum incidunt.
          </p>
        </div>
        <div className='description__card-button'>
          <button>SOLVE CHALLENGE</button>
        </div>
      </div>
      <div className='description__send'>
        <input type='text' placeholder='Your Github repo Link' />
      </div>
    </div>
  );
};

export default ChallengeDescription;
