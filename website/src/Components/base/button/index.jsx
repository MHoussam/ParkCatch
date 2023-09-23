import React from 'react'
import './styles.css'
import '../../../styles/utilities.css'

const Button = ({ text }) => {
  return (
    <div className='buttonContainer'>
        <div className="button">
            {text}
        </div>
    </div>
  )
}

export default Button;