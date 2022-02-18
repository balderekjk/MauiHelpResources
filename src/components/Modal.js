import React from 'react';
import './Modal.css';

const Modal = (props) => {
  return (
    <div onClick={() => props.closeModal()} className="modal-bg">
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <div className="title-close-btn">
          <button onClick={() => props.closeModal()}> &#xd7; </button>
        </div>
        <div className="content">
          <div className="header">{props.currentCompany}</div>
          <div className="body">
            <p>{props.currentDetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
