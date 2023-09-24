import React from 'react';
import './styles.css'
import Button from '../../base/button';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal flex center">
      <div className="modalContainer flex center">
        <div className="modalContent">
            {content}
            <Button />
        </div>
      </div>
    </div>
  );
};

export default Modal;
