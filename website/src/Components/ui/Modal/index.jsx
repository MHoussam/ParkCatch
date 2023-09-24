import React from 'react';
import './styles.css'
import Button from '../../base/button';

const Modal = ({ isOpen, onClose, content, inputValues, setInputValues }) => {
  if (!isOpen) return null;

  const close= () => {
    console.log(inputValues)
    setInputValues([])
    onClose();
  }

  const terminate= () => {
    console.log(inputValues)
    setInputValues([])
    onClose();
  }

  return (
    <div className="modal flex center">
      <div className="modalContainer flex center">
        <div className="modalContent flex column center">
            {content}
            <div className="btn flex column center">
                <Button text='Terminate' onClick={terminate}/>
                <Button text='Close' onClick={close} classProp='close'/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
