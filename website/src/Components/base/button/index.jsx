import React from 'react'
import './styles.css'
import '../../../styles/utilities.css'

const Button = ({ text, onClick }) => {

  const handleClick = () => {
    if (onClick) {
      onClick(); 
    }
  };

  return (
    <div className='buttonContainer flex center width-60 pointer' onClick={handleClick}>
            {text}
    </div>
  )
}

export default Button;