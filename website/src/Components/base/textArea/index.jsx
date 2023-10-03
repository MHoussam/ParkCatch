import React from 'react'
import './styles.css'

const TextArea = ({ text, type, placeholder, value, state, onChange }) => {
    const handleChange = (e) => {
        const newValue = e.target.value;
        onChange(newValue);
      };

  return (
    <div className="inputContainer width-100 flex column center">
      <h4>{text}</h4>
      <textarea
        rows="4"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className='input bigInput'
      />
    </div>
  )
}

export default TextArea