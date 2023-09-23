import React from 'react';
import './styles.css'

const Input = ({ type, placeholder }) => {
  return (
    <div className='width-100 flex center'>
      <input type={type} placeholder={placeholder} className='input width-60'/>
    </div>
  );
};

export default Input;
