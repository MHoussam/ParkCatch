import React from 'react'
import './styles.css'
import '../../../styles/utilities.css'

const Button = ({ text }) => {
  return (
    <div className='buttonContainer flex center width-60 pointer'>
            {text}
    </div>
  )
}

export default Button;