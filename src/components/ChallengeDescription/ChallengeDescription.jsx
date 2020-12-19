import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../utils/config.jsx';
import ModalComponent from '../ModalComponent/ModalComponent.jsx';

import './ChallengeDescription.scss';

const ChallengeDescription = () => {
  const [description, setDescription] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  let { id } = useParams();
  // const id = 6;

  const openModal = () => {
    setIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    const getDescription = () => {
      fetch(`${API}challenge/one/${id}`)
        .then(res => res.json())
        .then(res => {
          const { challenges } = res;
          setDescription(challenges);
        });
    };

    getDescription();
  }, []);

  return (
    <>
      <div className='description'>
        <div className='description__title'>
          <h2>
            |CHALLENGE <span>|EASY</span>
          </h2>
        </div>
        <div className='description__card'>
          <div className='description__card-text'>
            <h3>{description.name}</h3>
            <h4>{description.difficulty}</h4>
            <p>
              {description.description} <br /> OUTPUT: <br /> {description.output}
            </p>
          </div>
          <div className='description__card-button'>
            <button onClick={openModal}>SOLVE CHALLENGE</button>
          </div>
        </div>
        <div className='description__send'>
          <input type='text' placeholder='Your Github repo Link' />
        </div>
      </div>
      { modalIsOpen && <ModalComponent
        modalIsOpen={modalIsOpen}
        onClick={openModal}
      />}
    </>
  );
};

export default ChallengeDescription;
