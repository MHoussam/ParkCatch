import React from 'react'

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