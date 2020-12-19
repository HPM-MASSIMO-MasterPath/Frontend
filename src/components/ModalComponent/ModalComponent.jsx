import React from 'react';
import Modal from 'react-modal';
import './ModalComponent.scss';

const customStyles = {
  content: {
    background: "#24385B",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

Modal.setAppElement('#app');

const ModalComponent = ({ modalIsOpen, onClick }) => {
  return (
    <Modal
      style={customStyles}
      contentLabel="Example Modal"
      isOpen={modalIsOpen}
    >
      <div className="modal">
        <label>
          Sending challenge
        <input type="text" name="" id="" placeholder="Your Github repo link" />
        </label>
        <div>
          <button className="modal__button-send">SEND CHALLENGE </button>
          <button onClick={onClick} className="modal__button-cancel">CANCEL </button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalComponent;
