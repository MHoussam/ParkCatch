import React from 'react';

const Input = ({ type, placeholder }) => {
  return (
    <div className='width-50'>
      <input type={type} placeholder={placeholder} className='width-50'/>
    </div>
  );
};

export default Input;
